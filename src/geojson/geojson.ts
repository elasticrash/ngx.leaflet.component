import { Component, OnInit, DoCheck, Optional } from '@angular/core';
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

export class GeoJsonElement extends GeoJSONCoordinateHandler implements OnInit, DoCheck {
  public originalObject: any = Object.assign({}, this.geojson);
  public globalId: string = this.guidService.newGuid();

  constructor(
    private mapService: MapService,
    private popupService: PopupService,
    private guidService: GuidService,
    private helperService: HelperService,
    @Optional() private groupService?: GroupService,
    @Optional() private leafletElement?: LeafletElement,
    @Optional() private leafletGroup?: LeafletGroup) {
    super();
  }

  public ngOnInit() {
    // check if any of the two optional injections exist
    if (this.leafletElement || this.leafletGroup) {
      // polyline shouldn't have a fill
      const map = this.mapService.getMap();

      if (this.geojson) {
        super.transformJSONCoordinates(this.geojson, this.leafletElement.crs);

        const gjson = L.geoJSON(this.geojson);

        if (this.leafletGroup) {
          this.groupService.addOLayersToGroup(gjson, map, this.mapService, this.leafletGroup, false, this.globalId);
        } else {
          gjson.addTo(map);
        }
      } else {
        // tslint:disable-next-line:no-console
        console.warn("geojson object seems to be undefined");
      }
    } else {
      // tslint:disable-next-line:no-console
      console.warn(`This polyline-element will not be rendered
       the expected parent node of polyline-element should be either leaf-element or leaflet-group`);
    }

  }

  public ngDoCheck() {
    const map = this.mapService.getMap();
  }
}
