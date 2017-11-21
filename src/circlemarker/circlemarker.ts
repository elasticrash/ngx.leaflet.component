import { Component, Input, OnInit, Optional, ElementRef, ViewChild } from '@angular/core';
import { LeafletElement } from '../map/map';
import { LeafletGroup } from '../group/group';
import { MapService } from '../services/map.service';
import { GroupService } from '../services/group.service';
import { PopupService } from '../services/popup.service';
import { CoordinateHandler } from '../helpers/coordinateHandler';
import { path } from '../models/path';
import { Ipath } from '../interfaces/path';
import * as L from 'leaflet';


@Component({
  selector: 'circle-marker-element',
  template: `<div #ngel><ng-content></ng-content></div>`,
  styles: ['']
})

export class CircleMarkerElement extends CoordinateHandler implements OnInit {
  @Input() public lat: number = 52.6;
  @Input() public lon: number = -1.1;
  @Input() public mouseover: string | undefined = undefined;
  @Input() public onclick: string | undefined = undefined;
  @Input() public Options: any = new path(null);
  @ViewChild('ngel') public ngEl: ElementRef;  
  public circle: any = null;

  constructor(
    private mapService: MapService,
    private popupService: PopupService,
    @Optional() private groupService?: GroupService,        
    @Optional() private leafletElement?: LeafletElement,
    @Optional() private leafletGroup?: LeafletGroup) {
    super();
  }

  ngOnInit() {
    super.assignCartesianPointToLeafletsLatLngSchema();
    // check if any of the two optional injections exist
    if (this.leafletElement || this.leafletGroup) {
      let inheritedOptions: any = new path(this.Options);
      let map = this.mapService.getMap();

      let elementPosition: any = super.transformPointCoordinates(this.leafletElement.crs);

      this.circle = L.circleMarker([this.lat, this.lon], inheritedOptions);

      if (this.leafletGroup) {
        this.groupService.addOLayersToGroup(this.circle, map, this.mapService, this.leafletGroup);
      } else {
        this.circle.addTo(map);
      }
    } else {
      console.warn("This circle-element will not be rendered \n the expected parent node of circle-element should be either leaf-element or leaflet-group");
    }
  }

  ngAfterViewInit() {
    var textInput = undefined;
    if (this.ngEl.nativeElement.childNodes.length > 0) {
      var textNode = this.ngEl.nativeElement.childNodes[0];
      textInput = textNode.nodeValue;
    }

    // add popup methods on element only if any of the tests are not undefined
    if (this.mouseover !== undefined || this.onclick !== undefined || textInput !== undefined) {
      this.popupService.enablePopup(this.mouseover, this.onclick, this.circle, textInput);
    }
  }
}
