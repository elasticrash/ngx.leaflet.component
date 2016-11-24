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
        this.flag = true;
    }
    GroupService.prototype.addOLayersToGroup = function (overlay) {
        this.layerGroup.push(overlay);
        this.flag = !this.flag;
        return this.flag;
    };
    GroupService.prototype.getObservableLayerGroup = function () {
        var _this = this;
        return Rx_1.Observable.create(function (observer) {
            var layerGroup = _this.getLayerGroup();
            observer.next(layerGroup);
            observer.complete();
        });
    };
    GroupService.prototype.getObservableFlag = function () {
        var _this = this;
        return Rx_1.Observable.create(function (observer) {
            var flag = _this.flag;
            observer.next(flag);
            observer.complete();
        });
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
    GroupService.prototype.refreshGroup = function (remove, add, map) {
        map.removeLayer(this.getLayerGroup());
        var rindex = -1;
        this.layerGroup.forEach(function (element, index) {
            if (element._leaflet_id == remove._leaflet_id) {
                rindex = index;
            }
        });
        this.layerGroup.splice(rindex, 1);
        this.flag = !this.flag;
        this.addOLayersToGroup(add);
        this.flag = !this.flag;
    };
    GroupService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], GroupService);
    return GroupService;
}());
exports.GroupService = GroupService;
//# sourceMappingURL=group.service.js.map