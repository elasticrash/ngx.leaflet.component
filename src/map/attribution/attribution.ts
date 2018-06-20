import { Component, Input, Optional, OnInit } from '@angular/core';
import { LeafletElement } from '../map';
import { MapService } from '../../services/map.service';
import { AttributionModel } from '../../models/AttributionModel';
import * as L from 'leaflet';

@Component({
    selector: 'attribution-control',
    template: ``,
    styles: ['']
})
export class AttributionControl implements OnInit {
    @Input() public Options: any = new AttributionModel(null);
    constructor(
        private mapService: MapService,
        @Optional() private leafletElement?: LeafletElement) { }

    public ngOnInit() {
        if (this.LeafletElement) {
            const map = this.mapService.getMap();
            L.control.attribution(this.Options).addTo(map);
        } else {
            // tslint:disable-next-line:no-console
            console.warn(`This attribution-control will not be rendered
             the expected parent node of attribution-control should be either leaf-element or layer-element`);
        }
    }
}
