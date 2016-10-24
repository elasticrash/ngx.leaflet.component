import { LeafletElement } from './map/map';
import { LayerElement } from './layer/layer';
import { MarkerElement } from './marker/marker';
import { MapService } from './services/map.service'

export const CandTLeafletComponent = [
    LeafletElement,
    LayerElement,
    MarkerElement
];

export const CandTLeafletService = [MapService];