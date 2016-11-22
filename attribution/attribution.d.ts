import { LeafletElement } from '../map/map';
import { MapService } from '../services/map.service';
import { attributionModel } from '../models/attributionModel';
export declare class AttributionControl {
    private mapService;
    private LeafletElement;
    Options: attributionModel;
    constructor(mapService: MapService, LeafletElement?: LeafletElement);
    ngOnInit(): void;
}
