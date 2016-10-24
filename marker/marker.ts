import { Component, Input } from '@angular/core';
import { MapService } from '../services/map.service';

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

  constructor(private mapService: MapService) {
  }

  ngOnInit() {
    let map = this.mapService.getMap();
    let marker = L.marker([this.lat, this.lon]).addTo(map);
  }
}