import { Component, Input } from '@angular/core';
import { MapService } from '../services/map.service';
import * as L from 'leaflet';


@Component({
  moduleId: module.id.toString(),
  selector: 'image-overlay-element',
  templateUrl: 'image-overlay.html',
  styleUrls: ['image-overlay.css']
})

export class ImageOverlayElement {
  @Input() bounds: any = [[-26.5, -25], [1021.5, 1023]];
  @Input() imagepath: string = '';
  @Input() name: string = '';
  @Input() opacity: number = 1;
  @Input() type: string = 'overlay'

  constructor(private mapService: MapService) {
  }

  ngOnInit() {
    this.mapService.increaseNumber();
    let map = this.mapService.getMap();
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
