"use strict";
var testing_1 = require("@angular/core/testing");
var circle_1 = require("./circle");
var map_service_1 = require("../services/map.service");
var group_service_1 = require("../services/group.service");
var popup_service_1 = require("../services/popup.service");
var mock_component_1 = require("../test/mock.component");
var map_1 = require("../map/map");
var globalId_service_1 = require("../services/globalId.service");
describe('CircleElement', function () {
    var mock = mock_component_1.MockComponent({ selector: "app-element", template: "<leaf-element><circle-element [mouseover]='test'></circle-element></leaf-element>" });
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [mock,
                map_1.LeafletElement, circle_1.CircleElement],
            providers: [
                map_service_1.MapService,
                group_service_1.GroupService,
                popup_service_1.PopupService,
                globalId_service_1.GuidService
            ]
        }).compileComponents();
    });
    it('circle-element works well', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(mock);
        expect(1).toEqual(1);
    }));
});
//# sourceMappingURL=circle.spec.js.map