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
var path_1 = require('../models/path');
var Lealflet = require('leaflet');
var PolylineElement = (function () {
    function PolylineElement(mapService, groupService, popupService, guidService, LeafletElement, LeafletGroup) {
        this.mapService = mapService;
        this.groupService = groupService;
        this.popupService = popupService;
        this.guidService = guidService;
        this.LeafletElement = LeafletElement;
        this.LeafletGroup = LeafletGroup;
        this.latlngs = [[52.6, -1.1], [52.605, -1.1], [52.606, -1.105], [52.697, -1.109]];
        this.Options = new path_1.path(null);
        this.mouseover = "";
        this.onclick = "";
        this.polyline = null;
        this.inheritedOptions = null;
        this.originalObject = this.latlngs.slice();
        this.globalId = this.guidService.newGuid();
    }
    PolylineElement.prototype.ngOnInit = function () {
        if (this.LeafletElement || this.LeafletGroup) {
            this.Options.fill = false;
            this.inheritedOptions = new path_1.path(this.Options);
            var map = this.mapService.getMap();
            this.polyline = L.polyline(this.latlngs, this.inheritedOptions);
            this.popupService.enablePopup(this.mouseover, this.onclick, this.polyline);
            if (this.LeafletGroup) {
                this.groupService.increaseNumber();
            }
            else {
                this.polyline.addTo(map);
            }
        }
        else {
            console.warn("This polyline-element will not be rendered \n the expected parent node of polyline-element should be either leaf-element or leaflet-group");
        }
    };
    PolylineElement.prototype.ngDoCheck = function (inputChanges) {
        var _this = this;
        var map = this.mapService.getMap();
        var same = true;
        this.originalObject.forEach(function (element, index) {
            if (element[0] !== _this.latlngs[index][0] || element[1] !== _this.latlngs[index][1]) {
                same = false;
            }
        });
        if (!same) {
            this.originalObject = this.latlngs.slice();
            if (this.groupService) {
                this.Options.fill = false;
                this.inheritedOptions = new path_1.path(this.Options);
                this.polyline = L.polyline(this.latlngs, this.inheritedOptions);
                this.groupService.addOLayersToGroup(this.polyline, map, this.mapService, this.LeafletGroup, true, this.globalId);
            }
            else {
                map.removeLayer(this.polyline);
                this.polyline = L.polyline(this.latlngs, this.inheritedOptions);
                this.polyline.addTo(map);
            }
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], PolylineElement.prototype, "latlngs", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PolylineElement.prototype, "Options", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PolylineElement.prototype, "mouseover", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PolylineElement.prototype, "onclick", void 0);
    PolylineElement = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'polyline-element',
            templateUrl: 'polyline.html',
            styleUrls: ['polyline.css']
        }),
        __param(4, core_1.Optional()),
        __param(5, core_1.Optional()), 
        __metadata('design:paramtypes', [map_service_1.MapService, group_service_1.GroupService, popup_service_1.PopupService, globalId_service_1.GuidService, map_1.LeafletElement, group_1.LeafletGroup])
    ], PolylineElement);
    return PolylineElement;
}());
exports.PolylineElement = PolylineElement;
//# sourceMappingURL=polyline.js.map