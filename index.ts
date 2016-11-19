import { LeafletElement } from './map/map';
import { LayerElement } from './layer/layer';
import { MarkerElement } from './marker/marker';
import { CircleElement } from './circle/circle';
import { PolygonElement } from './polygon/polygon';
import { PolylineElement } from './polyline/polyline';
import { PopupElement } from './popup/popup';
import { ZoomControl } from './zoom/zoom';
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
    PopupElement,
    LeafletGroup,
    ZoomControl
];

export const CandTLeafletService = [MapService, GroupService, PopupService];