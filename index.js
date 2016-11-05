"use strict";
var map_1 = require('./map/map');
var layer_1 = require('./layer/layer');
var marker_1 = require('./marker/marker');
var circle_1 = require('./circle/circle');
var polygon_1 = require('./polygon/polygon');
var polyline_1 = require('./polyline/polyline');
var group_1 = require('./group/group');
var map_service_1 = require('./services/map.service');
var group_service_1 = require('./services/group.service');
exports.CandTLeafletComponent = [
    map_1.LeafletElement,
    layer_1.LayerElement,
    marker_1.MarkerElement,
    circle_1.CircleElement,
    polygon_1.PolygonElement,
    polyline_1.PolylineElement,
    group_1.LeafletGroup
];
exports.CandTLeafletService = [map_service_1.MapService, group_service_1.GroupService];
//# sourceMappingURL=index.js.map