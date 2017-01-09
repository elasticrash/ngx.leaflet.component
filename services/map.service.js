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
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var MapService = (function () {
    function MapService() {
        this.basemaps = {};
        this.overlays = {};
        this.layerControlflag = false;
        this.layersInControlNumber = 0;
        this.layerControlObject = {};
        this.groupIdentifiers = [];
        this.groupNames = [];
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
        var newName = name;
        if (name.indexOf('(') !== -1) {
            nameindex = parseInt(name.split('(')[1].split(')')[0]);
            nameindex += 1;
            newName = name.split('(')[0];
        }
        else {
            nameindex = 1;
        }
        return name = newName + '(' + nameindex + ')';
    };
    MapService.prototype.addOverlay = function (overlay, name, gId) {
        if (this.groupIdentifiers.indexOf(gId) !== -1) {
            var index = this.groupIdentifiers.indexOf(gId);
            var existing_name = this.groupNames[index];
            this.overlays[existing_name] = overlay;
        }
        else {
            if (name === '') {
                name = 'unknown group';
            }
            if (this.overlays[name] === undefined) {
                this.groupNames.push(name);
                this.groupIdentifiers.push(gId);
                this.overlays[name] = overlay;
            }
            else {
                name = this.getUniqueName(name);
                if (this.groupNames.indexOf(name) === -1) {
                    this.groupNames.push(name);
                    this.groupIdentifiers.push(gId);
                }
                else {
                    this.addOverlay(overlay, name);
                }
            }
        }
        this.addControl();
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
            observer.next(_this.overlays);
            observer.complete();
        });
    };
    MapService.prototype.getObservableBasemaps = function () {
        var _this = this;
        return Rx_1.Observable.create(function (observer) {
            observer.next(_this.basemaps);
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
    MapService.prototype.addControl = function () {
        if (this.layerControlflag) {
            var map = this.getMap();
            if (Object.keys(this.layerControlObject).length !== 0) {
                this.layerControlObject.getContainer().innerHTML = '';
                map.removeControl(this.layerControlObject);
            }
            this.layerControlObject = L.control.layers(this.getBasemaps(), this.getOverlays()).addTo(map);
        }
    };
    return MapService;
}());
MapService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], MapService);
exports.MapService = MapService;
//# sourceMappingURL=map.service.js.map