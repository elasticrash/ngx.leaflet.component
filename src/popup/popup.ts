import { Component, Input, Optional, OnInit } from '@angular/core';
import { LeafletElement } from '../map/map';
import { LeafletGroup } from '../group/group';
import { MapService } from '../services/map.service';
import { GroupService } from '../services/group.service';
import { CoordinateHandler } from '../helpers/coordinateHandler';
import * as L from 'leaflet';

@Component({
  selector: 'popup-element',
  template: ``,
  styles: ['']
})

export class PopupElement extends CoordinateHandler implements OnInit {
  @Input() public lat: number = 52.6;
  @Input() public lon: number = -1.9;
  @Input() public content: string = "nice popup";

  constructor(
    private mapService: MapService,
    @Optional() private groupService?: GroupService,
    @Optional() private leafletElement?: LeafletElement,
    @Optional() private leafletGroup?: LeafletGroup) {
    super();
  }

  public ngOnInit() {
    super.assignCartesianPointToLeafletsLatLngSchema();
    // check if any of the two optional injections exist
    if (this.leafletElement || this.leafletGroup) {

      const map = this.mapService.getMap();

      this.transformPointCoordinates(this.leafletElement.crs);

      const popup = L.popup({ autoClose: false, keepInView: true })
        .setLatLng([this.lat, this.lon]).setContent(this.content);

      if (this.leafletGroup) {
        this.groupService.addOLayersToGroup(popup, map, this.mapService, this.leafletGroup);
      } else {
        popup.addTo(map);
      }
    } else {
      // tslint:disable-next-line:no-console
      console.warn(`This popup-element will not be rendered
       the expected parent node of popup-element should be either leaf-element or leaflet-group`);
    }
  }
}
