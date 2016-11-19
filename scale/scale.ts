
import { Component, Input, Injector, Optional } from '@angular/core';
import { LeafletElement } from '../map/map';
import { MapService } from '../services/map.service';
import { scaleModel } from '../models/scaleModel';

var Lealflet = require('leaflet');

declare var L: any;

@Component({
    moduleId: module.id,
    selector: 'scale-control',
    templateUrl: 'scale.html',
    styleUrls: ['scale.css']
})
export class ScaleControl {
    @Input() Options: scaleModel = new scaleModel(null);
    constructor(
        private mapService: MapService,
        @Optional() private LeafletElement?: LeafletElement) {        
    }

    ngOnInit() { 
        if (this.LeafletElement) {
            let map = this.mapService.getMap();          
            L.control.scale(this.Options).addTo(map);
        } else {
            console.warn("This scale-control will not be rendered \n the expected parent node of scale-control should be either leaf-element");
        }
    }
}