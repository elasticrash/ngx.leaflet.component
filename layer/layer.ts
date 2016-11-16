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
  @Input() slippyLayer: string = '';
  @Input() wmsLayer: string = '';
  @Input() name: string = '';
  @Input() opacity: number = 1;
  @Input() type: string = 'overlay'

  constructor(private mapService: MapService) {
  }

  ngOnInit() {
    this.mapService.increaseNumber();
    let map = this.mapService.getMap();
    let layer = null;
    if (this.slippyLayer !== "") {
      layer = L.tileLayer(this.slippyLayer).addTo(map);
    }
    if (this.wmsLayer !== "" && this.name !== "") {
      layer = L.tileLayer.wms(this.wmsLayer, {
        layers: this.name
      }).setOpacity(this.opacity);
    }

    if (layer !== {}) {
      if (this.type === "overlay") {
        this.mapService.addOverlay(layer);
        layer.addTo(map);
      } else if (this.type === "basemap") {
        this.mapService.addBasemap(layer, this.name);
      } 
    }
  }
}