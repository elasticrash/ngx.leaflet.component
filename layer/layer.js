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
var Lealflet = require('leaflet');
var LayerElement = (function () {
    function LayerElement(mapService) {
        this.mapService = mapService;
        this.slippyLayer = '';
        this.wmsLayer = '';
        this.name = '';
        this.opacity = 1;
    }
    LayerElement.prototype.ngOnInit = function () {
        var map = this.mapService.getMap();
        if (this.slippyLayer !== "") {
            L.tileLayer(this.slippyLayer).addTo(map);
        }
        if (this.wmsLayer !== "" && this.name !== "") {
            L.tileLayer.wms(this.wmsLayer, {
                layers: this.name
            }).setOpacity(this.opacity).addTo(map);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], LayerElement.prototype, "slippyLayer", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], LayerElement.prototype, "wmsLayer", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], LayerElement.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], LayerElement.prototype, "opacity", void 0);
    LayerElement = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'layer-element',
            templateUrl: 'layer.html',
            styleUrls: ['layer.css']
        }), 
        __metadata('design:paramtypes', [map_service_1.MapService])
    ], LayerElement);
    return LayerElement;
}());
exports.LayerElement = LayerElement;
//# sourceMappingURL=layer.js.map