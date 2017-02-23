import { Component, Input, Injector, Optional, ElementRef } from '@angular/core';
import { LeafletElement } from '../map/map';
import { LeafletGroup } from '../group/group';
import { MapService } from '../services/map.service';
import { GroupService } from '../services/group.service';
import { PopupService } from '../services/popup.service';
import { CoordinateHandler } from '../helpers/coodinateHandler';
import { path } from '../models/path';
import { Ipath } from '../interfaces/path';
import * as L from 'leaflet';


@Component({
  moduleId: module.id.toString(),
  selector: 'circle-element',
  templateUrl: 'circle.html',
  styleUrls: ['circle.css']
})

export class CircleElement extends CoordinateHandler {
  @Input() lat: number = 52.6;
  @Input() lon: number = -1.1;
  @Input() radius: number = 20;
  @Input() mouseover: string = undefined;
  @Input() onclick: string = undefined;
  @Input() Options: any = new path(null);
  circle: any = null;

  constructor(
    private mapService: MapService,
    private groupService: GroupService,
    private popupService: PopupService,
    private elementText: ElementRef,
    @Optional() private LeafletElement?: LeafletElement,
    @Optional() private LeafletGroup?: LeafletGroup) {
    super();
  }

  ngOnInit() {
    super.copyCoordinates();
    
    //check if any of the two optional injections exist
    if (this.LeafletElement || this.LeafletGroup) {
      let inheritedOptions: any = new path(this.Options);
      let map = this.mapService.getMap();

      let elementPosition: any =  super.transformCoordinates(this.LeafletElement.crs);

      this.circle = L.circle(elementPosition, this.radius, inheritedOptions);

      if (this.LeafletGroup) {
        this.groupService.addOLayersToGroup(this.circle, map, this.mapService, this.LeafletGroup);
      } else {
        this.circle.addTo(map);
      }
    } else {
      console.warn("This circle-element will not be rendered \n the expected parent node of circle-element should be either leaf-element or leaflet-group");
    }
  }

  ngAfterViewInit() {
    var textInput = undefined;
    if (this.elementText.nativeElement.childNodes.length > 0) {
      var textNode = this.elementText.nativeElement.childNodes[0];
      textInput = textNode.nodeValue;
    }

    //add popup methods on element
    this.popupService.enablePopup(this.mouseover, this.onclick, this.circle, textInput);
  }
}
