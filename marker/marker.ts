import { Component, Input, Injector, Optional } from '@angular/core';
import { MapService } from '../services/map.service';
import { GroupService } from '../services/group.service';
import { LeafletElement } from '../map/map';
import { LeafletGroup } from '../group/group';

var Lealflet = require('leaflet');

declare var L: any;

@Component({
  moduleId: module.id,
  selector: 'marker-element',
  templateUrl: 'marker.html',
  styleUrls: ['marker.css']
})

export class MarkerElement {
  @Input() lat: number = 52.6;
  @Input() lon: number = -1.1;
  @Input() mouseover: string = "";

  constructor(
    private mapService: MapService,
    private groupService: GroupService,
    @Optional() private LeafletElement?: LeafletElement,
    @Optional() private LeafletGroup?: LeafletGroup) {
  }

  ngOnInit() {
    if (this.LeafletElement || this.LeafletGroup) {

      let map = this.mapService.getMap();
      
      let marker = L.marker([this.lat, this.lon]);
      if (this.mouseover !== "") {
        marker.bindPopup(this.mouseover);
        marker.on('mouseover', function () {
          this.openPopup();
        }).on('mouseout', function () {
          this.closePopup();
        });
      }

      //only if the parent is map should the marker-element should be directly added to the map
      if (this.LeafletGroup) {
        this.groupService.addOLayersToGroup(marker);
      } else {
        marker.addTo(map);
      }
    } else {
      console.warn("This marker-element will not be rendered \n the expected parent node of marker-element should be either leaf-element or leaflet-group");
    }
  }
}