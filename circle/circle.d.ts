import { MapService } from '../services/map.service';
import { Ipath } from '../interfaces/path';
export declare class CircleElement {
    private mapService;
    lat: number;
    lon: number;
    radius: number;
    Options: Ipath;
    constructor(mapService: MapService);
    ngOnInit(): void;
}
