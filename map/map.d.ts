import { MapService } from '../services/map.service';
export declare class LeafletElement {
    private mapService;
    map: any;
    constructor(mapService: MapService);
    ngOnInit(): void;
}
