import { LeafletElement } from './map/map';
import { AttributionControl } from './map/attribution/attribution';
import { ScaleControl } from './map/scale/scale';
import { ZoomControl } from './map/zoom/zoom';
import { WatermarkControl } from './map/watermark/watermark';

import { LayerElement } from './layer/layer';
import { ImageOverlayElement } from './imageoverlay/image-overlay';
import { MarkerElement } from './marker/marker';
import { CircleElement } from './circle/circle';
import { CircleMarkerElement } from './circlemarker/circlemarker';
import { PolygonElement } from './polygon/polygon';
import { PolylineElement } from './polyline/polyline';
import { GeoJsonElement } from './geojson/geojson';

import { PopupElement } from './popup/popup';
import { LeafletGroup } from './group/group';

import { MapService } from './services/map.service';
import { GroupService } from './services/group.service';
import { PopupService } from './services/popup.service';
import { GuidService } from './services/globalId.service';
import { HelperService } from './services/helper.service';

export const CandTLeafletComponent = [
    // map and controls
    LeafletElement,
    AttributionControl,
    ScaleControl,
    ZoomControl,
    WatermarkControl,
    // layers and vectors
    LayerElement,
    ImageOverlayElement,
    MarkerElement,
    CircleElement,
    CircleMarkerElement,
    PolygonElement,
    PolylineElement,
    GeoJsonElement,
    PopupElement,
    // rest
    LeafletGroup
];

export const CandTLeafletService = [MapService,
    GroupService,
    PopupService,
    GuidService,
    HelperService];