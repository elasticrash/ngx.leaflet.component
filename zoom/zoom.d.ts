import { LeafletElement } from '../map/map';
import { MapService } from '../services/map.service';
import { zoomModel } from '../models/zoomModel';
export declare class ZoomControl {
    private mapService;
    private LeafletElement;
    Options: zoomModel;
    constructor(mapService: MapService, LeafletElement?: LeafletElement);
    ngOnInit(): void;
}
