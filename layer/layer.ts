import { Component, Input } from '@angular/core';
import { MapService } from '../services/map.service';
import * as L from 'leaflet';


@Component({
  moduleId: module.id.toString(),
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
        this.mapService.addOverlay(layer, this.name);
        layer.addTo(map);
      } else if (this.type === "basemap") {
        this.mapService.addBasemap(layer, this.name);
        layer.addTo(map);
      } 
    }
  }
}