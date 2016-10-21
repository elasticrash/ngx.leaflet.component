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

  constructor(private mapService: MapService) {
  }

  ngOnInit() {
     let map = L.map("map", {
      zoomControl: false,
      center: L.latLng(40.731253, -73.996139),
      zoom: 12,
      minZoom: 4,
      maxZoom: 19,
      layers: []
    });

    this.mapService.setMap(map);

    L.control.zoom({ position: "topright" }).addTo(map);
    L.control.scale().addTo(map);
  }
}