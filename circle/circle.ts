import { Component, Input } from '@angular/core';
import { MapService } from '../services/map.service';

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

  constructor(private mapService: MapService) {
  }

  ngOnInit() {
    let map = this.mapService.getMap();
    let circle = L.circle([this.lat, this.lon], this.radius).addTo(map);
  }
}