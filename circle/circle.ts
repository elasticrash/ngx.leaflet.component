import { Component, Input } from '@angular/core';
import { MapService } from '../services/map.service';
import { path } from '../models/path';

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
  //@Input() Options: path;
  //TODO need to overide Options without adding an @Input for every Option property

  constructor(private mapService: MapService) {
  }

  ngOnInit() {
    let inheritedOptions = new path(/*this.Options*/ null);
    let map = this.mapService.getMap();
    let circle = L.circle([this.lat, this.lon], this.radius, inheritedOptions).addTo(map);
  }
}