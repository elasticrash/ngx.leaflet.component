/**
 * Imports
 */
import { LeafletElement } from './src/map/map';
import { AttributionControl } from './src/map/attribution/attribution';
import { ScaleControl } from './src/map/scale/scale';
import { ZoomControl } from './src/map/zoom/zoom';
import { WatermarkControl } from './src/map/watermark/watermark';
import { LayerElement } from './src/layer/layer';
import { ImageOverlayElement } from './src/imageoverlay/image-overlay';
import { MarkerElement } from './src/marker/marker';
import { CircleElement } from './src/circle/circle';
import { CircleMarkerElement } from './src/circlemarker/circlemarker';
import { PolygonElement } from './src/polygon/polygon';
import { PolylineElement } from './src/polyline/polyline';
import { GeoJsonElement } from './src/geojson/geojson';
import { PopupElement } from './src/popup/popup';
import { LeafletGroup } from './src/group/group';
import { MapService } from './src/services/map.service'
import { GroupService } from './src/services/group.service'
import { PopupService } from './src/services/popup.service';
import { GuidService } from './src/services/globalId.service';
import { HelperService } from './src/services/helper.service';

/**
 * Exports
 */
// export { LeafletElement } from './src/map/map';
// export { AttributionControl } from './src/map/attribution/attribution';
// export { ScaleControl } from './src/map/scale/scale';
// export { ZoomControl } from './src/map/zoom/zoom';
// export { WatermarkControl } from './src/map/watermark/watermark';
// export { LayerElement } from './src/layer/layer';
// export { ImageOverlayElement } from './src/imageoverlay/image-overlay';
// export { MarkerElement } from './src/marker/marker';
// export { CircleElement } from './src/circle/circle';
// export { CircleMarkerElement } from './src/circlemarker/circlemarker';
// export { PolygonElement } from './src/polygon/polygon';
// export { PolylineElement } from './src/polyline/polyline';
// export { GeoJsonElement } from './src/geojson/geojson';
// export { PopupElement } from './src/popup/popup';
// export { LeafletGroup } from './src/group/group';
// export { MapService } from './src/services/map.service'
// export { GroupService } from './src/services/group.service'
// export { PopupService } from './src/services/popup.service';
// export { GuidService } from './src/services/globalId.service';
// export { HelperService } from './src/services/helper.service';


/**
 * Module
 */
const CandTLeafletComponent = [
    LeafletElement,
    AttributionControl,
    ScaleControl,
    ZoomControl,
    WatermarkControl,
    LayerElement,
    ImageOverlayElement,
    MarkerElement,
    CircleElement,
    CircleMarkerElement,
    PolygonElement,
    PolylineElement,
    GeoJsonElement,
    PopupElement,
    LeafletGroup
];

const CandTLeafletService = [MapService,
    GroupService,
    PopupService,
    GuidService,
    HelperService];


import { NgModule } from "@angular/core";

@NgModule({
    declarations: [...CandTLeafletComponent],
    providers: [...CandTLeafletService],
    exports: [...CandTLeafletComponent]
})

export class ngxLeafletModule { }