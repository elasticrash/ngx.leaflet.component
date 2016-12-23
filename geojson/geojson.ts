import { Component, Input, Injector, Optional } from '@angular/core';
import { LeafletElement } from '../map/map';
import { LeafletGroup } from '../group/group';
import { MapService } from '../services/map.service';
import { GroupService } from '../services/group.service';
import { PopupService } from '../services/popup.service';
import { GuidService } from '../services/globalId.service';
import { HelperService } from '../services/helper.service';

var Lealflet = require('leaflet');

declare var L: any;

@Component({
  moduleId: module.id,
  selector: 'geojson-element',
  templateUrl: 'geojson.html',
  styleUrls: ['geojson.css']
})

export class PolylineElement {
  @Input() geojson: Object = {};
  originalObject: any = Object.assign({}, this.geojson);
  globalId: string = this.guidService.newGuid();

  constructor(
    private mapService: MapService,
    private groupService: GroupService,
    private popupService: PopupService,
    private guidService: GuidService,
    private helperService: HelperService,
    @Optional() private LeafletElement?: LeafletElement,
    @Optional() private LeafletGroup?: LeafletGroup) {
  }

  ngOnInit() {
    //check if any of the two optional injections exist
    if (this.LeafletElement || this.LeafletGroup) {
      //polyline shouldn't have a fill
      let map = this.mapService.getMap();
      let gjson = L.geojson(this.geojson);


      if (this.LeafletGroup) {
        this.groupService.addOLayersToGroup(gjson, map, this.mapService, this.LeafletGroup, false, this.globalId);
      } else {
        gjson.addTo(map);
      }
    } else {
      console.warn("This polyline-element will not be rendered \n the expected parent node of polyline-element should be either leaf-element or leaflet-group");
    }
  }

  ngDoCheck() {
    let map = this.mapService.getMap();
  }
}