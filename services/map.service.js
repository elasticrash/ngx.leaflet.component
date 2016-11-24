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
var MapService = (function () {
    function MapService() {
        this.basemaps = {};
        this.overlays = {};
        this.layerControlflag = false;
        this.layersInControlNumber = 0;
        this.layerControlObject = {};
    }
    MapService.prototype.setMap = function (map) {
        this.map = map;
    };
    MapService.prototype.getMap = function () {
        return this.map;
    };
    MapService.prototype.setLayerControl = function (state) {
        this.layerControlflag = state;
    };
    MapService.prototype.getLayerControl = function () {
        return this.layerControlflag;
    };
    MapService.prototype.addBasemap = function (basemap, name) {
        if (name === '') {
            name = 'unknown layer';
        }
        if (this.basemaps[name] === undefined) {
            this.basemaps[name] = basemap;
        }
        else {
            name = this.getUniqueName(name);
            this.addBasemap(basemap, name);
        }
    };
    MapService.prototype.getUniqueName = function (name) {
        var nameindex = 0;
        if (name.indexOf('(') !== -1) {
            nameindex = name.split('(')[1].split(')')[0];
        }
        else {
            nameindex = 1;
        }
        return name = name + '(' + (nameindex += 1) + ')';
    };
    MapService.prototype.addOverlay = function (overlay, name) {
        if (name === '') {
            name = 'unknown group';
        }
        if (this.overlays[name] === undefined) {
            this.overlays[name] = overlay;
        }
        else {
            name = this.getUniqueName(name);
            this.addOverlay(overlay, name);
        }
    };
    MapService.prototype.getBasemaps = function () {
        return this.basemaps;
    };
    MapService.prototype.getOverlays = function () {
        return this.overlays;
    };
    MapService.prototype.getObservableOverlays = function () {
        var _this = this;
        return Rx_1.Observable.create(function (observer) {
            var overlays = _this.getOverlays();
            observer.next(overlays);
            observer.complete();
        });
    };
    MapService.prototype.getObservableBasemaps = function () {
        var _this = this;
        return Rx_1.Observable.create(function (observer) {
            var basemaps = _this.getBasemaps();
            observer.next(basemaps);
            observer.complete();
        });
    };
    MapService.prototype.refreshOverlays = function (remove, add) {
        var overlays = this.getOverlays();
        for (var key in overlays) {
            if (overlays[key] instanceof Array) {
                overlays[key].forEach(function (element, index, arr) {
                    if (element._leaflet_id == remove._leaflet_id) {
                        arr[index] = add;
                    }
                });
            }
        }
    };
    MapService.prototype.increaseNumber = function () {
        this.layersInControlNumber += 1;
    };
    MapService.prototype.getLayerNumber = function () {
        return this.layersInControlNumber;
    };
    MapService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MapService);
    return MapService;
}());
exports.MapService = MapService;
//# sourceMappingURL=map.service.js.map