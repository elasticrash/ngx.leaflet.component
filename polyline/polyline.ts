import { Component, Input, Injector, Optional } from '@angular/core';
import { LeafletElement } from '../map/map';
import { LeafletGroup } from '../group/group';
import { MapService } from '../services/map.service';
import { GroupService } from '../services/group.service';
import { path } from '../models/path';
import { Ipath } from '../interfaces/path';

var Lealflet = require('leaflet');

declare var L: any;

@Component({
  moduleId: module.id,
  selector: 'polyline-element',
  templateUrl: 'polyline.html',
  styleUrls: ['polyline.css']
})

export class PolylineElement {
  @Input() latlngs: Array<Array<number>> = [[52.6, -1.1],[52.605, -1.1], [52.606, -1.105], [52.697, -1.109]];
  @Input() Options: Ipath = new path(null);

  constructor(
    private mapService: MapService,
    private groupService: GroupService,
    @Optional() private LeafletElement?: LeafletElement,
    @Optional() private LeafletGroup?: LeafletGroup) {
  }

  ngOnInit() {
    //check if any of the two optional injections exist
    if (this.LeafletElement || this.LeafletGroup) {
      let inheritedOptions = new path(this.Options);
      //polyline shouldn't have a fill
      inheritedOptions.fill = false;
      let map = this.mapService.getMap();
      let polyline = L.polyline(this.latlngs, inheritedOptions);

      if (this.LeafletGroup) {
        this.groupService.addOLayersToGroup(polyline);
      } else {
        polyline.addTo(map);
      }
    } else {
      console.warn("This polyline-element will not be rendered \n the expected parent node of polyline-element should be either leaf-element or leaflet-group");
    }
  }
}