import { LeafletElement } from '../map/map';
import { MapService } from '../services/map.service';
import { scaleModel } from '../models/scaleModel';
export declare class ScaleControl {
    private mapService;
    private LeafletElement;
    Options: scaleModel;
    constructor(mapService: MapService, LeafletElement?: LeafletElement);
    ngOnInit(): void;
}
