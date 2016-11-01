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
  selector: 'circle-element',
  templateUrl: 'circle.html',
  styleUrls: ['circle.css']
})

export class CircleElement {
  @Input() lat: number = 52.6;
  @Input() lon: number = -1.1;
  @Input() radius: number = 20;
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
      let map = this.mapService.getMap();
      let circle = L.circle([this.lat, this.lon], this.radius, inheritedOptions).addTo(map);
      this.groupService.addOLayersToGroup(circle);
    } else {
      console.warn("This circle-element will not be rendered \n the expected parent node of circle-element should be either leaf-element or leaflet-group");
    }
  }
}