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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var map_1 = require("../map");
var map_service_1 = require("../../services/map.service");
var scaleModel_1 = require("../../models/scaleModel");
var L = require("leaflet");
var ScaleControl = (function () {
    function ScaleControl(mapService, LeafletElement) {
        this.mapService = mapService;
        this.LeafletElement = LeafletElement;
        this.Options = new scaleModel_1.scaleModel(null);
    }
    ScaleControl.prototype.ngOnInit = function () {
        if (this.LeafletElement) {
            var map = this.mapService.getMap();
            L.control.scale(this.Options).addTo(map);
        }
        else {
            console.warn("This scale-control will not be rendered \n the expected parent node of scale-control should be leaf-element");
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ScaleControl.prototype, "Options", void 0);
    ScaleControl = __decorate([
        core_1.Component({
            moduleId: module.id.toString(),
            selector: 'scale-control',
            templateUrl: 'scale.html',
            styleUrls: ['scale.css']
        }),
        __param(1, core_1.Optional()),
        __metadata("design:paramtypes", [map_service_1.MapService,
            map_1.LeafletElement])
    ], ScaleControl);
    return ScaleControl;
}());
exports.ScaleControl = ScaleControl;
//# sourceMappingURL=scale.js.map