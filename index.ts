import { LeafletElement } from './map/map';
import { LayerElement } from './layer/layer';
import { MarkerElement } from './marker/marker';
import { CircleElement } from './circle/circle';
import { PolygonElement } from './polygon/polygon';
import { PolylineElement } from './polyline/polyline';
import { LeafletGroup } from './group/group';

import { MapService } from './services/map.service'
import { GroupService } from './services/group.service'
import { PopupService } from './services/popup.service';

export const CandTLeafletComponent = [
    LeafletElement,
    LayerElement,
    MarkerElement,
    CircleElement,
    PolygonElement,
    PolylineElement,
    LeafletGroup
];

export const CandTLeafletService = [MapService, GroupService, PopupService];