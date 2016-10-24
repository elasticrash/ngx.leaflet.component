import { LeafletElement } from './map/map';
import { LayerElement } from './layer/layer';
import { MarkerElement } from './marker/marker';
import { CircleElement } from './circle/circle';
import { MapService } from './services/map.service'

export const CandTLeafletComponent = [
    LeafletElement,
    LayerElement,
    MarkerElement,
    CircleElement
];

export const CandTLeafletService = [MapService];