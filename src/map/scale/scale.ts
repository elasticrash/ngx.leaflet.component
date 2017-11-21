import { Component, Input, Optional } from '@angular/core';
import { LeafletElement } from '../map';
import { MapService } from '../../services/map.service';
import { scaleModel } from '../../models/scaleModel';
import * as L from 'leaflet';


@Component({
    selector: 'scale-control',
    template: ``,
    styles: ['']
})
export class ScaleControl {
    @Input() public Options: any = new scaleModel(null);
    constructor(
        private mapService: MapService,
        @Optional() private leafletElement?: LeafletElement) {        
    }

    ngOnInit() { 
        if (this.leafletElement) {
            let map = this.mapService.getMap();          
            L.control.scale(this.Options).addTo(map);
        } else {
            console.warn("This scale-control will not be rendered \n the expected parent node of scale-control should be leaf-element");
        }
    }
}