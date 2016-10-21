import { Component, Input } from '@angular/core';
import { MapService } from '../services/map.service';

var Lealflet = require('leaflet');

declare var L: any;

@Component({
  moduleId: module.id,
  selector: 'layer-element',
  templateUrl: 'layer.html',
  styleUrls: ['layer.css']
})

export class LayerElement {
  @Input() tileLayer:string = '';

  constructor(private mapService: MapService) {
  }

  ngOnInit() {
    let map = this.mapService.getMap();
    L.tileLayer(this.tileLayer).addTo(map);
  }
}