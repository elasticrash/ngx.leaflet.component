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
    crs: any;
    mapElement: ElementRef;
    layerControlObject: any;
    constructor(mapService: MapService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    setLayerControl(): void;
}
