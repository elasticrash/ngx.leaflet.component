import { Component, Input, Optional } from '@angular/core';
import { LeafletElement } from '../map';
import { MapService } from '../../services/map.service';
import { attributionModel } from '../../models/attributionModel';
import * as L from 'leaflet';


@Component({
    selector: 'attribution-control',
    templateUrl: 'attribution.html',
    styleUrls: ['attribution.css']
})
export class AttributionControl {
    @Input() Options: any = new attributionModel(null);
    constructor(
        private mapService: MapService,
        @Optional() private LeafletElement?: LeafletElement) { }
        
    ngOnInit() {
        if (this.LeafletElement) {
            let map = this.mapService.getMap();
            L.control.attribution(this.Options).addTo(map);
        } else {
            console.warn("This attribution-control will not be rendered \n the expected parent node of attribution-control should be either leaf-element or layer-element");
        }
    }
}