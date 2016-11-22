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
var map_service_1 = require('../services/map.service');
var attributionModel_1 = require('../models/attributionModel');
var Lealflet = require('leaflet');
var AttributionControl = (function () {
    function AttributionControl(mapService, LeafletElement) {
        this.mapService = mapService;
        this.LeafletElement = LeafletElement;
        this.Options = new attributionModel_1.attributionModel(null);
    }
    AttributionControl.prototype.ngOnInit = function () {
        if (this.LeafletElement) {
            var map = this.mapService.getMap();
            L.control.attribution(this.Options).addTo(map);
        }
        else {
            console.warn("This zoom-control will not be rendered \n the expected parent node of zoom-control should be leaf-element");
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', attributionModel_1.attributionModel)
    ], AttributionControl.prototype, "Options", void 0);
    AttributionControl = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'attribution-control',
            templateUrl: 'attribution.html',
            styleUrls: ['attribution.css']
        }),
        __param(1, core_1.Optional()), 
        __metadata('design:paramtypes', [map_service_1.MapService, map_1.LeafletElement])
    ], AttributionControl);
    return AttributionControl;
}());
exports.AttributionControl = AttributionControl;
//# sourceMappingURL=attribution.js.map