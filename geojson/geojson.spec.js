"use strict";
var testing_1 = require("@angular/core/testing");
var geojson_1 = require("./geojson");
var map_service_1 = require("../services/map.service");
var group_service_1 = require("../services/group.service");
var popup_service_1 = require("../services/popup.service");
var globalId_service_1 = require("../services/globalId.service");
var helper_service_1 = require("../services/helper.service");
var map_1 = require("../map/map");
var mock_component_1 = require("../test/mock.component");
describe('GeoJsonElement', function () {
    var g = {
        "type": "FeatureCollection",
        "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [375000, 4202000]
                },
                "properties": {
                    "prop0": "value0"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "LineString",
                    "coordinates": [[376000, 4202500], [377000, 4203500]]
                },
                "properties": {
                    "prop0": "value1"
                }
            }]
    };
    var mock = mock_component_1.MockComponent({ selector: "app-element", template: "<leaf-element [crs]=\"'L.CRS.EPSG3395'\" ><geojson-element [geojson]='" + JSON.stringify(g) + "'></geojson-element></leaf-element>" });
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [mock, map_1.LeafletElement, geojson_1.GeoJsonElement],
            providers: [
                map_service_1.MapService,
                group_service_1.GroupService,
                popup_service_1.PopupService,
                globalId_service_1.GuidService,
                helper_service_1.HelperService
            ]
        }).compileComponents();
    });
    it('geojson component test', testing_1.async(function () {
        var appMock = testing_1.TestBed.createComponent(mock);
        appMock.detectChanges();
        var el = appMock.debugElement.nativeElement;
        expect(el.tagName).toEqual("DIV");
    }));
});
//# sourceMappingURL=geojson.spec.js.map