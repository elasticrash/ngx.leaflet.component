import { MapService } from '../../services/map.service';
import { LeafletElement } from '../map';
export declare class WatermarkControl {
    private mapService;
    private LeafletElement;
    url: string;
    imagewidth: number;
    imageheight: number;
    constructor(mapService: MapService, LeafletElement?: LeafletElement);
    ngOnInit(): void;
}
