import { Component, Input, Optional, OnInit } from '@angular/core';
import { LeafletElement } from '../map';
import { MapService } from '../../services/map.service';
import { ScaleModel } from '../../models/scaleModel';
import * as L from 'leaflet';


@Component({
    selector: 'scale-control',
    template: ``,
    styles: ['']
})
export class ScaleControl implements OnInit {
    @Input() public Options: any = new ScaleModel(null);
    constructor(
        private mapService: MapService,
        @Optional() private leafletElement?: LeafletElement) {
    }

    public ngOnInit() {
        if (this.LeafletElement) {
            const map = this.mapService.getMap();
            L.control.scale(this.Options).addTo(map);
        } else {
            // tslint:disable-next-line:no-console
            console.warn(`This scale-control will not be rendered
             the expected parent node of scale-control should be leaf-element`);
        }
    }
}
