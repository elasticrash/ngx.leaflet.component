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
var core_1 = require("@angular/core");
var map_1 = require("../map");
var map_service_1 = require("../../services/map.service");
var zoomModel_1 = require("../../models/zoomModel");
var L = require("leaflet");
var ZoomControl = (function () {
    function ZoomControl(mapService, LeafletElement) {
        this.mapService = mapService;
        this.LeafletElement = LeafletElement;
        this.Options = new zoomModel_1.zoomModel(null);
    }
    ZoomControl.prototype.ngOnInit = function () {
        if (this.LeafletElement) {
            var map = this.mapService.getMap();
            L.control.zoom(this.Options).addTo(map);
        }
        else {
            console.warn("This zoom-control will not be rendered \n the expected parent node of zoom-control should be leaf-element");
        }
    };
    return ZoomControl;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ZoomControl.prototype, "Options", void 0);
ZoomControl = __decorate([
    core_1.Component({
        moduleId: module.id.toString(),
        selector: 'zoom-control',
        templateUrl: 'zoom.html',
        styleUrls: ['zoom.css']
    }),
    __param(1, core_1.Optional()),
    __metadata("design:paramtypes", [map_service_1.MapService,
        map_1.LeafletElement])
], ZoomControl);
exports.ZoomControl = ZoomControl;
//# sourceMappingURL=zoom.js.map