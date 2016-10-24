import { MapService } from '../services/map.service';
export declare class MarkerElement {
    private mapService;
    lat: number;
    lon: number;
    constructor(mapService: MapService);
    ngOnInit(): void;
}
