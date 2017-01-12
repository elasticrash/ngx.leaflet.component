import { Component, Input, Injector, Optional } from '@angular/core';
import { LeafletElement } from '../map/map';
import { LeafletGroup } from '../group/group';
import { MapService } from '../services/map.service';
import { GroupService } from '../services/group.service';
import { PopupService } from '../services/popup.service';
import { path } from '../models/path';
import { Ipath } from '../interfaces/path';
import * as L from 'leaflet';


@Component({
  moduleId: module.id.toString(),
  selector: 'circle-element',
  templateUrl: 'circle.html',
  styleUrls: ['circle.css']
})

export class CircleElement {
  @Input() lat: number = 52.6;
  @Input() lon: number = -1.1;
  @Input() radius: number = 20;
  @Input() mouseover: string = "";
  @Input() onclick: string = "";
  @Input() Options: any = new path(null);

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
      let inheritedOptions:any = new path(this.Options);
      let map = this.mapService.getMap();
      let circle = L.circle([this.lat, this.lon], this.radius, inheritedOptions);

      //add popup methods on element
      this.popupService.enablePopup(this.mouseover, this.onclick, circle);

      if (this.LeafletGroup) {
        this.groupService.addOLayersToGroup(circle, map, this.mapService, this.LeafletGroup);
      } else {
        circle.addTo(map);
      }
    } else {
      console.warn("This circle-element will not be rendered \n the expected parent node of circle-element should be either leaf-element or leaflet-group");
    }
  }
}
