import { Component, Input } from '@angular/core';
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
  @Input() lat: number = 52.6;
  @Input() lon: number = -1.1;
  @Input() zoom: number = 12;
  @Input() minZoom: number = 4;
  @Input() maxZoom: number = 19;
  @Input() layerControl: boolean = false;

  constructor(private mapService: MapService) {
  }

  ngOnInit() {
    let map = L.map("map", {
      zoomControl: false,
      center: L.latLng(this.lat, this.lon),
      zoom: this.zoom,
      minZoom: this.minZoom,
      maxZoom: this.maxZoom,
      layers: []
    });

    //set variables for childrent components
    this.mapService.setMap(map);
    this.mapService.setLayerControl(this.layerControl);

    //at some point they need to be optional and configurable
    L.control.zoom({ position: "topright" }).addTo(map);
    L.control.scale().addTo(map);
  }

  ngAfterViewInit() {
    if (this.layerControl) {
      let map = this.mapService.getMap();
      L.control.layers(this.mapService.getBasemaps(), this.mapService.getOverlays()).addTo(map);
    }
  }
}