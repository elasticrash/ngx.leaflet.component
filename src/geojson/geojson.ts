import { Component, Input, Optional } from '@angular/core';
import { LeafletElement } from '../map/map';
import { LeafletGroup } from '../group/group';
import { MapService } from '../services/map.service';
import { GroupService } from '../services/group.service';
import { PopupService } from '../services/popup.service';
import { GuidService } from '../services/globalId.service';
import { HelperService } from '../services/helper.service';
import { GeoJSONCoordinateHandler } from '../helpers/geoJsonReader';

import * as L from 'leaflet';

@Component({
  selector: 'geojson-element',
  template: ``,
  styles: ['']
})

export class GeoJsonElement extends GeoJSONCoordinateHandler {
  public originalObject: any = Object.assign({}, this.geojson);
  public globalId: string = this.guidService.newGuid();

  constructor(
    private mapService: MapService,
    private popupService: PopupService,
    private guidService: GuidService,
    private helperService: HelperService,
    @Optional() private groupService?: GroupService,        
    @Optional() private LeafletElement?: LeafletElement,
    @Optional() private LeafletGroup?: LeafletGroup) {
    super();
  }

  ngOnInit() {
    //check if any of the two optional injections exist
    if (this.LeafletElement || this.LeafletGroup) {
      //polyline shouldn't have a fill
      let map = this.mapService.getMap();

      if (this.geojson) {
        super.transformJSONCoordinates(this.geojson, this.LeafletElement.crs);

        let gjson = L.geoJSON(this.geojson);

        if (this.LeafletGroup) {
          this.groupService.addOLayersToGroup(gjson, map, this.mapService, this.LeafletGroup, false, this.globalId);
        } else {
          gjson.addTo(map);
        }
      } else {
        console.warn("geojson object seems to be undefined");
      }
    } else {
      console.warn("This polyline-element will not be rendered \n the expected parent node of polyline-element should be either leaf-element or leaflet-group");
    }

  }

  ngDoCheck() {
    let map = this.mapService.getMap();
  }
}
