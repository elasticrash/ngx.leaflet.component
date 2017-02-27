"use strict";
var testing_1 = require("@angular/core/testing");
var geojson_1 = require("./geojson");
var map_service_1 = require("../services/map.service");
var group_service_1 = require("../services/group.service");
var popup_service_1 = require("../services/popup.service");
var globalId_service_1 = require("../services/globalId.service");
var helper_service_1 = require("../services/helper.service");
describe('GeoJsonElement', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [geojson_1.GeoJsonElement],
            providers: [
                { provide: map_service_1.MapService },
                { provide: group_service_1.GroupService },
                { provide: popup_service_1.PopupService },
                { provide: globalId_service_1.GuidService },
                { provide: helper_service_1.HelperService }
            ]
        });
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.compileComponents();
        }));
    });
    it('geojson parsed', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(geojson_1.GeoJsonElement);
        fixture.componentInstance.geojson = {
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
        fixture.detectChanges();
        var el = fixture.debugElement.nativeElement;
        expect(fixture.componentInstance.geojson.features[0].geometry.type).toBe("Point");
    }));
});
//# sourceMappingURL=geojson.spec.js.map