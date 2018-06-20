import { Component, Input, Optional, OnInit } from '@angular/core';
import { LeafletElement } from '../map/map';
import { MapService } from '../services/map.service';
import { CoordinateHandler } from '../helpers/coordinateHandler';
import * as L from 'leaflet';

@Component({
  selector: 'image-overlay-element',
  template: ``,
  styles: ['']
})

export class ImageOverlayElement extends CoordinateHandler implements OnInit {
  @Input() public bounds: any = [[-26.5, -25], [1021.5, 1023]];
  @Input() public imagepath: string = '';
  @Input() public name: string = '';
  @Input() public opacity: number = 1;
  @Input() public type: string = 'overlay';
  public latlngs: any;

  constructor(
    private mapService: MapService,
    @Optional() private leafletElement?: LeafletElement) {
    super();
  }

  public ngOnInit() {
    this.latlngs = this.bounds;

    if (this.leafletElement) {
      const map = this.mapService.getMap();
      super.transformArrayCoordinates(this.leafletElement.crs);

      let layer = null;

      layer = L.imageOverlay(this.imagepath, this.bounds).setOpacity(this.opacity);

      if (layer !== {}) {
        if (this.type === "overlay") {
          this.mapService.addOverlay(layer, this.name);
          layer.addTo(map);
        } else if (this.type === "basemap") {
          this.mapService.addBasemap(layer, this.name);
        }
      }
    }
  }
}
