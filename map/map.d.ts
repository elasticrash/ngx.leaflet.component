/// <reference types="leaflet" />
import { ElementRef } from '@angular/core';
import { MapService } from '../services/map.service';
import * as L from 'leaflet';
export declare class LeafletElement {
    private mapService;
    lat: number;
    lon: number;
    x: number;
    y: number;
    zoom: number;
    minZoom: number;
    maxZoom: number;
    layerControl: boolean;
    crs: any;
    zoomControl: boolean;
    maxBounds: L.LatLngBounds;
    mapElement: ElementRef;
    layerControlObject: any;
    constructor(mapService: MapService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    setLayerControl(): void;
}
