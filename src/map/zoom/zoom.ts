import { Component, Input, Injector, Optional } from '@angular/core';
import { LeafletElement } from '../map';
import { MapService } from '../../services/map.service';
import { zoomModel } from '../../models/zoomModel';
import * as L from 'leaflet';


@Component({
    moduleId: module.id.toString(),
    selector: 'zoom-control',
    templateUrl: 'zoom.html',
    styleUrls: ['zoom.css']
})
export class ZoomControl {
    @Input() Options: any = new zoomModel(null);
    constructor(
        private mapService: MapService,
        @Optional() private LeafletElement?: LeafletElement) {
    }

    ngOnInit() {
        if (this.LeafletElement) {
            let map = this.mapService.getMap();
            L.control.zoom(this.Options).addTo(map);
        } else {
            console.warn("This zoom-control will not be rendered \n the expected parent node of zoom-control should be leaf-element");
        }
    }
}