import { MapService } from '../services/map.service';
export declare class LayerElement {
    private mapService;
    tileLayer: string;
    constructor(mapService: MapService);
    ngOnInit(): void;
}
