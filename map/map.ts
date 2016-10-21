import { Component } from '@angular/core';
import { MapService } from '../services/map.service';

var Lealflet = require('leaflet');

declare var L: any;

@Component({
  moduleId: module.id,
  selector: 'leaf-element',
  templateUrl: 'map.html',
  styleUrls: ['map.css'],
  providers: [MapService]
})

export class LeafletElement {
  map: any;

  constructor(private mapService: MapService) {
    this.map = L.map("map", {
      zoomControl: false,
      center: L.latLng(40.731253, -73.996139),
      zoom: 12,
      minZoom: 4,
      maxZoom: 19,
      layers: []
    });

    mapService.setMap(this.map);
  }

  ngOnInit() {
    L.control.zoom({ position: "topright" }).addTo(this.map);
    L.control.scale().addTo(this.map);
  }
}