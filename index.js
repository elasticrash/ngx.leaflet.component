"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var map_1 = require("./map/map");
var attribution_1 = require("./map/attribution/attribution");
var scale_1 = require("./map/scale/scale");
var zoom_1 = require("./map/zoom/zoom");
var watermark_1 = require("./map/watermark/watermark");
var layer_1 = require("./layer/layer");
var image_overlay_1 = require("./imageoverlay/image-overlay");
var marker_1 = require("./marker/marker");
var circle_1 = require("./circle/circle");
var circlemarker_1 = require("./circlemarker/circlemarker");
var polygon_1 = require("./polygon/polygon");
var polyline_1 = require("./polyline/polyline");
var geojson_1 = require("./geojson/geojson");
var popup_1 = require("./popup/popup");
var group_1 = require("./group/group");
var map_service_1 = require("./services/map.service");
var group_service_1 = require("./services/group.service");
var popup_service_1 = require("./services/popup.service");
var globalId_service_1 = require("./services/globalId.service");
var helper_service_1 = require("./services/helper.service");
exports.CandTLeafletComponent = [
    map_1.LeafletElement,
    attribution_1.AttributionControl,
    scale_1.ScaleControl,
    zoom_1.ZoomControl,
    watermark_1.WatermarkControl,
    layer_1.LayerElement,
    image_overlay_1.ImageOverlayElement,
    marker_1.MarkerElement,
    circle_1.CircleElement,
    circlemarker_1.CircleMarkerElement,
    polygon_1.PolygonElement,
    polyline_1.PolylineElement,
    geojson_1.GeoJsonElement,
    popup_1.PopupElement,
    group_1.LeafletGroup
];
exports.CandTLeafletService = [map_service_1.MapService,
    group_service_1.GroupService,
    popup_service_1.PopupService,
    globalId_service_1.GuidService,
    helper_service_1.HelperService];
//# sourceMappingURL=index.js.map