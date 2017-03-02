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
    var geojson = {
        "type": "FeatureCollection",
        "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [102.0, 0.5]
                },
                "properties": {
                    "prop0": "value0"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [102.0, 0.0],
                        [103.0, 1.0],
                        [104.0, 0.0],
                        [105.0, 1.0]
                    ]
                },
                "properties": {
                    "prop0": "value0",
                    "prop1": 0.0
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [100.0, 0.0],
                            [101.0, 0.0],
                            [101.0, 1.0],
                            [100.0, 1.0],
                            [100.0, 0.0]
                        ]
                    ]
                },
                "properties": {
                    "prop0": "value0",
                    "prop1": {
                        "this": "that"
                    }
                }
            }]
    };
    var mock = mock_component_1.MockComponent({ selector: "app-element", template: "<leaf-element><geojson-element [geojson]='" + JSON.stringify(geojson) + "'></geojson-element></leaf-element>" });
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
    it('geojson parsed', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(mock);
        fixture.detectChanges();
        var el = fixture.debugElement.nativeElement;
        expect(el.tagName).toEqual("DIV");
    }));
});
//# sourceMappingURL=geojson.spec.js.map