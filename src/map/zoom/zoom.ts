import { Component, Input, Optional, OnInit } from '@angular/core';
import { LeafletElement } from '../map';
import { MapService } from '../../services/map.service';
import { ΖoomModel } from '../../models/zoomModel';
import * as L from 'leaflet';

@Component({
    selector: 'zoom-control',
    template: ``,
    styles: ['']
})
export class ZoomControl implements OnInit {
    @Input() public Options: any = new ΖoomModel(null);
    constructor(
        private mapService: MapService,
        @Optional() private λeafletElement?: LeafletElement) {
    }

    public ngOnInit() {
        if (this.LeafletElement) {
            const map = this.mapService.getMap();
            L.control.zoom(this.Options).addTo(map);
        } else {
            // tslint:disable-next-line:no-console
            console.warn(`This zoom-control will not be rendered
             the expected parent node of zoom-control should be leaf-element`);
        }
    }
}
