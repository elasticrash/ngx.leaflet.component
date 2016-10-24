import { LeafletElement } from './map/map';
import { LayerElement } from './layer/layer';
import { MarkerElement } from './marker/marker';
import { CircleElement } from './circle/circle';
import { MapService } from './services/map.service';
export declare const CandTLeafletComponent: (typeof CircleElement | typeof LeafletElement | typeof LayerElement | typeof MarkerElement)[];
export declare const CandTLeafletService: typeof MapService[];
