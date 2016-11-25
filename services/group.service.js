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
var Rx_1 = require('rxjs/Rx');
var GroupService = (function () {
    function GroupService() {
        this.layerGroup = [];
        this.layerGroupNumber = 0;
        this.group = {};
    }
    GroupService.prototype.addOLayersToGroup = function (overlay, map, mapService, group) {
        if (Object.keys(this.group).length !== 0) {
            map.removeLayer(this.group);
        }
        this.layerGroup.push(overlay);
        this.group = L.layerGroup(this.getLayerGroup());
        this.group.addTo(map);
        mapService.addOverlay(this.getGroup(), group.name, group.globalId);
    };
    GroupService.prototype.getObservableGroup = function () {
        var _this = this;
        return Rx_1.Observable.create(function (observer) {
            var group = _this.getGroup();
            observer.next(group);
            observer.complete();
        });
    };
    GroupService.prototype.getGroup = function () {
        return this.group;
    };
    GroupService.prototype.getLayerGroup = function () {
        return this.layerGroup;
    };
    GroupService.prototype.increaseNumber = function () {
        this.layerGroupNumber += 1;
    };
    GroupService.prototype.getLayerNumber = function () {
        return this.layerGroupNumber;
    };
    GroupService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], GroupService);
    return GroupService;
}());
exports.GroupService = GroupService;
//# sourceMappingURL=group.service.js.map