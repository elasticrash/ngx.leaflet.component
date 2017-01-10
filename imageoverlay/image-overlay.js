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
var map_service_1 = require("../services/map.service");
var L = require("leaflet");
var ImageOverlayElement = (function () {
    function ImageOverlayElement(mapService) {
        this.mapService = mapService;
        this.bounds = [[-26.5, -25], [1021.5, 1023]];
        this.imagepath = '';
        this.name = '';
        this.opacity = 1;
        this.type = 'overlay';
    }
    ImageOverlayElement.prototype.ngOnInit = function () {
        this.mapService.increaseNumber();
        var map = this.mapService.getMap();
        var layer = null;
        layer = L.imageOverlay(this.imagepath, this.bounds).setOpacity(this.opacity);
        if (layer !== {}) {
            if (this.type === "overlay") {
                this.mapService.addOverlay(layer, this.name);
                layer.addTo(map);
            }
            else if (this.type === "basemap") {
                this.mapService.addBasemap(layer, this.name);
            }
        }
    };
    return ImageOverlayElement;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ImageOverlayElement.prototype, "bounds", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ImageOverlayElement.prototype, "imagepath", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ImageOverlayElement.prototype, "name", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ImageOverlayElement.prototype, "opacity", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ImageOverlayElement.prototype, "type", void 0);
ImageOverlayElement = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'image-overlay-element',
        templateUrl: 'image-overlay.html',
        styleUrls: ['image-overlay.css']
    }),
    __metadata("design:paramtypes", [map_service_1.MapService])
], ImageOverlayElement);
exports.ImageOverlayElement = ImageOverlayElement;
//# sourceMappingURL=image-overlay.js.map