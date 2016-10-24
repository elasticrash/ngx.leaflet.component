import { MapService } from '../services/map.service';
export declare class CircleElement {
    private mapService;
    lat: number;
    lon: number;
    radius: number;
    constructor(mapService: MapService);
    ngOnInit(): void;
}
