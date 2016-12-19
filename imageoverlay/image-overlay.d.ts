import { MapService } from '../services/map.service';
export declare class ImageOverlayElement {
    private mapService;
    bounds: Array<Array<number>>;
    imagepath: string;
    name: string;
    opacity: number;
    type: string;
    constructor(mapService: MapService);
    ngOnInit(): void;
}
