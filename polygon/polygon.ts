import { Component, Input, Injector, Optional, ElementRef } from '@angular/core';
import { LeafletElement } from '../map/map';
import { LeafletGroup } from '../group/group';
import { MapService } from '../services/map.service';
import { GroupService } from '../services/group.service';
import { PopupService } from '../services/popup.service';
import { GuidService } from '../services/globalId.service';
import { HelperService } from '../services/helper.service';
import { path } from '../models/path';
import { Ipath } from '../interfaces/path';
import * as L from 'leaflet';


@Component({
  moduleId: module.id.toString(),
  selector: 'polygon-element',
  templateUrl: 'polygon.html',
  styleUrls: ['polygon.css']
})

export class PolygonElement {
  @Input() latlngs: any = [[[52.65, -1.2], [52.645, -1.15], [52.696, -1.155], [52.697, -1.189]],
  [[52.66, -1.19], [52.665, -1.16], [52.686, -1.161], [52.687, -1.179]]];
  @Input() Options: Ipath = new path(null);
  @Input() mouseover: string = undefined;
  @Input() onclick: string = undefined;
  polygon: any = null;
  originalObject: any = [...this.latlngs];
  globalId: string = this.guidService.newGuid();

  constructor(
    private mapService: MapService,
    private groupService: GroupService,
    private popupService: PopupService,
    private guidService: GuidService,
    private helperService: HelperService,
    private elementText: ElementRef,
    @Optional() private LeafletElement?: LeafletElement,
    @Optional() private LeafletGroup?: LeafletGroup) {
  }

  ngOnInit() {
    //check if any of the two optional injections exist
    if (this.LeafletElement || this.LeafletGroup) {
      let inheritedOptions: any = new path(this.Options);
      let map = this.mapService.getMap();
      this.polygon = L.polygon([this.latlngs], inheritedOptions);

      if (this.LeafletGroup) {
        this.groupService.addOLayersToGroup(this.polygon, map, this.mapService, this.LeafletGroup, false, this.globalId);
      } else {
        this.polygon.addTo(map);
      }
    } else {
      console.warn("This polygon-element will not be rendered \n the expected parent node of polygon-element should be either leaf-element or leaflet-group");
    }
  }

  ngAfterViewInit() {
    var textInput = undefined;
    if (this.elementText.nativeElement.childNodes.length > 0) {
      var textNode = this.elementText.nativeElement.childNodes[0];
      textInput = textNode.nodeValue;
    }

    //add popup methods on element
    this.popupService.enablePopup(this.mouseover, this.onclick, this.polygon, textInput);
  }

  ngDoCheck() {
    let map = this.mapService.getMap();

    var same: Boolean = this.helperService.arrayCompare(this.originalObject, this.latlngs);

    if (!same) {
      this.originalObject = [...this.latlngs];
      //if the layer is part of a group
      let inheritedOptions: any = new path(this.Options);

      if (this.LeafletGroup) {
        this.polygon = L.polygon([this.latlngs], inheritedOptions);
        this.groupService.addOLayersToGroup(this.polygon, map, this.mapService, this.LeafletGroup, true, this.globalId);
      } else {
        map.removeLayer(this.polygon);
        this.polygon = L.polygon([this.latlngs], inheritedOptions);
        this.polygon.addTo(map);
      }
    }
  }
}
