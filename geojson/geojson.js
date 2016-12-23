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
var globalId_service_1 = require('../services/globalId.service');
var helper_service_1 = require('../services/helper.service');
var Lealflet = require('leaflet');
var GeoJsonElement = (function () {
    function GeoJsonElement(mapService, groupService, popupService, guidService, helperService, LeafletElement, LeafletGroup) {
        this.mapService = mapService;
        this.groupService = groupService;
        this.popupService = popupService;
        this.guidService = guidService;
        this.helperService = helperService;
        this.LeafletElement = LeafletElement;
        this.LeafletGroup = LeafletGroup;
        this.geojson = {};
        this.originalObject = Object.assign({}, this.geojson);
        this.globalId = this.guidService.newGuid();
    }
    GeoJsonElement.prototype.ngOnInit = function () {
        if (this.LeafletElement || this.LeafletGroup) {
            var map = this.mapService.getMap();
            var gjson = L.geojson(this.geojson);
            if (this.LeafletGroup) {
                this.groupService.addOLayersToGroup(gjson, map, this.mapService, this.LeafletGroup, false, this.globalId);
            }
            else {
                gjson.addTo(map);
            }
        }
        else {
            console.warn("This polyline-element will not be rendered \n the expected parent node of polyline-element should be either leaf-element or leaflet-group");
        }
    };
    GeoJsonElement.prototype.ngDoCheck = function () {
        var map = this.mapService.getMap();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], GeoJsonElement.prototype, "geojson", void 0);
    GeoJsonElement = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'geojson-element',
            templateUrl: 'geojson.html',
            styleUrls: ['geojson.css']
        }),
        __param(5, core_1.Optional()),
        __param(6, core_1.Optional()), 
        __metadata('design:paramtypes', [map_service_1.MapService, group_service_1.GroupService, popup_service_1.PopupService, globalId_service_1.GuidService, helper_service_1.HelperService, map_1.LeafletElement, group_1.LeafletGroup])
    ], GeoJsonElement);
    return GeoJsonElement;
}());
exports.GeoJsonElement = GeoJsonElement;
//# sourceMappingURL=geojson.js.map