import { LeafletElement } from './map/map';
import { LayerElement } from './layer/layer';
import { MarkerElement } from './marker/marker';
import { CircleElement } from './circle/circle';
import { LeafletGroup } from './group/group';

import { MapService } from './services/map.service'
import { GroupService } from './services/group.service'


export const CandTLeafletComponent = [
    LeafletElement,
    LayerElement,
    MarkerElement,
    CircleElement,
    LeafletGroup
];

export const CandTLeafletService = [MapService, GroupService];