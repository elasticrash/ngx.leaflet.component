import { MapService } from '../services/map.service';
export declare class LeafletElement {
    private mapService;
    lat: number;
    lon: number;
    zoom: number;
    minZoom: number;
    maxZoom: number;
    constructor(mapService: MapService);
    ngOnInit(): void;
}
