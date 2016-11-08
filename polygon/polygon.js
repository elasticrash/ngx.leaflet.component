"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var map_1 = require('../map/map');
var group_1 = require('../group/group');
var map_service_1 = require('../services/map.service');
var group_service_1 = require('../services/group.service');
var popup_service_1 = require('../services/popup.service');
var path_1 = require('../models/path');
var Lealflet = require('leaflet');
var PolygonElement = (function () {
    function PolygonElement(mapService, groupService, popupService, LeafletElement, LeafletGroup) {
        this.mapService = mapService;
        this.groupService = groupService;
        this.popupService = popupService;
        this.LeafletElement = LeafletElement;
        this.LeafletGroup = LeafletGroup;
        this.latlngs = [[52.65, -1.2], [52.645, -1.15], [52.696, -1.155], [52.697, -1.189]];
        this.Options = new path_1.path(null);
        this.mouseover = "";
        this.onclick = "";
    }
    PolygonElement.prototype.ngOnInit = function () {
        if (this.LeafletElement || this.LeafletGroup) {
            var inheritedOptions = new path_1.path(this.Options);
            var map = this.mapService.getMap();
            var polygon = L.polygon([this.latlngs], inheritedOptions);
            this.popupService.enablePopup(this.mouseover, this.onclick, polygon);
            if (this.LeafletGroup) {
                this.groupService.addOLayersToGroup(polygon);
            }
            else {
                polygon.addTo(map);
            }
        }
        else {
            console.warn("This polygon-element will not be rendered \n the expected parent node of polygon-element should be either leaf-element or leaflet-group");
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], PolygonElement.prototype, "latlngs", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PolygonElement.prototype, "Options", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PolygonElement.prototype, "mouseover", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PolygonElement.prototype, "onclick", void 0);
    PolygonElement = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'polygon-element',
            templateUrl: 'polygon.html',
            styleUrls: ['polygon.css']
        }),
        __param(3, core_1.Optional()),
        __param(4, core_1.Optional()), 
        __metadata('design:paramtypes', [map_service_1.MapService, group_service_1.GroupService, popup_service_1.PopupService, map_1.LeafletElement, group_1.LeafletGroup])
    ], PolygonElement);
    return PolygonElement;
}());
exports.PolygonElement = PolygonElement;
//# sourceMappingURL=polygon.js.map