import { MapService } from '../services/map.service';
export declare class LayerElement {
    private mapService;
    slippyLayer: string;
    wmsLayer: string;
    name: string;
    opacity: number;
    type: string;
    attribution: string;
    constructor(mapService: MapService);
    ngOnInit(): void;
}
