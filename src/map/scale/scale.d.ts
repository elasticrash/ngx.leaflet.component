import { LeafletElement } from '../map';
import { MapService } from '../../services/map.service';
export declare class ScaleControl {
    private mapService;
    private LeafletElement;
    Options: any;
    constructor(mapService: MapService, LeafletElement?: LeafletElement);
    ngOnInit(): void;
}
