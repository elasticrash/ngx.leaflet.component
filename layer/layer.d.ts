import { MapService } from '../services/map.service';
export declare class LayerElement {
    private mapService;
    slippyLayer: string;
    wmsLayer: string;
    name: string;
    opacity: number;
    constructor(mapService: MapService);
    ngOnInit(): void;
}
