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
var core_1 = require('@angular/core');
var map_service_1 = require('../services/map.service');
var group_service_1 = require('../services/group.service');
var Lealflet = require('leaflet');
var LeafletGroup = (function () {
    function LeafletGroup(mapService, groupService) {
        this.mapService = mapService;
        this.groupService = groupService;
        this.name = '';
    }
    LeafletGroup.prototype.ngOnInit = function () {
        this.mapService.increaseNumber();
    };
    LeafletGroup.prototype.ngAfterViewInit = function () {
        var model = this;
        if (this.groupService.getLayerGroup().length !== this.groupService.getLayerNumber()) {
            setTimeout(function () {
                model.loop();
            }, 200);
        }
        else {
            this.addLayerGroupToScope();
        }
    };
    LeafletGroup.prototype.loop = function () {
        var model = this;
        if (this.groupService.getLayerGroup().length !== this.groupService.getLayerNumber()) {
            setTimeout(function () {
                model.loop();
            }, 200);
        }
        else {
            this.addLayerGroupToScope();
        }
        ;
    };
    LeafletGroup.prototype.addLayerGroupToScope = function () {
        var map = this.mapService.getMap();
        var layerGroup = L.layerGroup(this.groupService.getLayerGroup());
        layerGroup.addTo(map);
        if (this.mapService.getLayerControl) {
            this.mapService.addOverlay(layerGroup, this.name);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], LeafletGroup.prototype, "name", void 0);
    LeafletGroup = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'leaflet-group',
            templateUrl: 'group.html',
            styleUrls: ['group.css'],
            providers: [group_service_1.GroupService]
        }), 
        __metadata('design:paramtypes', [map_service_1.MapService, group_service_1.GroupService])
    ], LeafletGroup);
    return LeafletGroup;
}());
exports.LeafletGroup = LeafletGroup;
//# sourceMappingURL=group.js.map