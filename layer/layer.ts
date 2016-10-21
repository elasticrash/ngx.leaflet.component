import { Component } from '@angular/core';
var Lealflet = require('leaflet');

declare var L: any;

@Component({
  moduleId: module.id,
  selector: 'layer-element',
  templateUrl: 'layer.html',
  styleUrls: ['layer.css'],
})

export class LayerElement {
  ngOnInit() {
    //L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);
  }
}