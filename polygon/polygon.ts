import { Component, Input, Injector, Optional } from '@angular/core';
import { LeafletElement } from '../map/map';
import { LeafletGroup } from '../group/group';
import { MapService } from '../services/map.service';
import { GroupService } from '../services/group.service';
import { PopupService } from '../services/popup.service';
import { path } from '../models/path';
import { Ipath } from '../interfaces/path';

var Lealflet = require('leaflet');

declare var L: any;

@Component({
  moduleId: module.id,
  selector: 'polygon-element',
  templateUrl: 'polygon.html',
  styleUrls: ['polygon.css']
})

export class PolygonElement {
  @Input() latlngs: Array<Array<number>> = [[52.65, -1.2], [52.645, -1.15], [52.696, -1.155], [52.697, -1.189]];
  @Input() Options: Ipath = new path(null);
  @Input() mouseover: string = "";
  @Input() onclick: string = "";

  constructor(
    private mapService: MapService,
    private groupService: GroupService,
    private popupService: PopupService,
    @Optional() private LeafletElement?: LeafletElement,
    @Optional() private LeafletGroup?: LeafletGroup) {
  }

  ngOnInit() {
    //check if any of the two optional injections exist
    if (this.LeafletElement || this.LeafletGroup) {
      let inheritedOptions = new path(this.Options);
      let map = this.mapService.getMap();
      let polygon = L.polygon([this.latlngs], inheritedOptions);

      //add popup methods on element
      this.popupService.enablePopup(this.mouseover, this.onclick, polygon);

      if (this.LeafletGroup) {
        this.groupService.addOLayersToGroup(polygon, map, this.mapService, this.LeafletGroup);
      } else {
        polygon.addTo(map);
      }
    } else {
      console.warn("This polygon-element will not be rendered \n the expected parent node of polygon-element should be either leaf-element or leaflet-group");
    }
  }
}