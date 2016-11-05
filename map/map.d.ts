import { ElementRef } from '@angular/core';
import { MapService } from '../services/map.service';
export declare class LeafletElement {
    private mapService;
    lat: number;
    lon: number;
    zoom: number;
    minZoom: number;
    maxZoom: number;
    layerControl: boolean;
    mapElement: ElementRef;
    constructor(mapService: MapService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
