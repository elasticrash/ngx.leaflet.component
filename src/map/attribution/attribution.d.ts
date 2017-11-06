import { LeafletElement } from '../map';
import { MapService } from '../../services/map.service';
export declare class AttributionControl {
    private mapService;
    private LeafletElement;
    Options: any;
    constructor(mapService: MapService, LeafletElement?: LeafletElement);
    ngOnInit(): void;
}
