var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
import { MapService } from './src/services/map.service';
import { GroupService } from './src/services/group.service';
import { PopupService } from './src/services/popup.service';
import { GuidService } from './src/services/globalId.service';
import { HelperService } from './src/services/helper.service';
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
let ngxLeafletModule = class ngxLeafletModule {
};
ngxLeafletModule = __decorate([
    NgModule({
        declarations: [...CandTLeafletComponent],
        providers: [...CandTLeafletService],
        exports: [...CandTLeafletComponent]
    })
], ngxLeafletModule);
export { ngxLeafletModule };
//# sourceMappingURL=ngx.leaflet.module.js.map