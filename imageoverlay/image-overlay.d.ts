import { LeafletElement } from '../map/map';
import { MapService } from '../services/map.service';
import { CoordinateHandler } from '../helpers/coodinateHandler';
export declare class ImageOverlayElement extends CoordinateHandler {
    private mapService;
    private LeafletElement;
    bounds: any;
    imagepath: string;
    name: string;
    opacity: number;
    type: string;
    latlngs: any;
    constructor(mapService: MapService, LeafletElement?: LeafletElement);
    ngOnInit(): void;
}
