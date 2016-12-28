import { Component, Input, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { MapService } from '../services/map.service';
import { } from 'leaflet';

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
  @Input() x: number;
  @Input() y: number;
  @Input() zoom: number = 12;
  @Input() minZoom: number = 4;
  @Input() maxZoom: number = 19;
  @Input() layerControl: boolean = false;
  @Input() crs: any = L.CRS.EPSG3857;
  @ViewChild('map') mapElement: ElementRef;

  layerControlObject = null;

  constructor(private mapService: MapService) {
  }

  ngOnInit() {

    if (this.x !== undefined) {
      this.lon = this.x;
    }

    if (this.y !== undefined) {
      this.lat = this.y;
    }

    if (typeof (this.crs) === "string") {
      var splitCrs = this.crs.split(".");
      if (splitCrs[0] === "L") {
        this.crs = L[splitCrs[1]][splitCrs[2]];
      } else {
        console.warn("something is not right, reverting to default EPSG3857");
        this.crs = L.CRS.EPSG3857;
      }
    }

    let map = L.map(this.mapElement.nativeElement, {
      crs: this.crs,
      zoomControl: false,
      center: L.latLng(this.lat, this.lon),
      zoom: this.zoom,
      minZoom: this.minZoom,
      maxZoom: this.maxZoom,
      layers: [],
      closePopupOnClick: false,
      continuousWorld: false,
    });
    this.mapElement.nativeElement.myMapProperty = map;

    //set variables for childrent components
    this.mapService.setMap(map);
    this.mapService.setLayerControl(this.layerControl);

    //at some point they need to be optional and configurable
    L.control.zoom({ position: "topright" }).addTo(map);
    L.control.scale().addTo(map);
  }

  ngAfterViewInit() {
  }

  setLayerControl() {
    if (this.layerControl) {
      let map = this.mapService.getMap();
      if (this.layerControlObject !== null) {
        this.layerControlObject.getContainer().innerHTML = '';
      }
      this.layerControlObject = L.control.layers(this.mapService.getBasemaps(), this.mapService.getOverlays()).addTo(map);
    }
  }
}