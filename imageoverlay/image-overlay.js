"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var map_1 = require("../map/map");
var map_service_1 = require("../services/map.service");
var coodinateHandler_1 = require("../helpers/coodinateHandler");
var L = require("leaflet");
var ImageOverlayElement = (function (_super) {
    __extends(ImageOverlayElement, _super);
    function ImageOverlayElement(mapService, LeafletElement) {
        var _this = _super.call(this) || this;
        _this.mapService = mapService;
        _this.LeafletElement = LeafletElement;
        _this.bounds = [[-26.5, -25], [1021.5, 1023]];
        _this.imagepath = '';
        _this.name = '';
        _this.opacity = 1;
        _this.type = 'overlay';
        return _this;
    }
    ImageOverlayElement.prototype.ngOnInit = function () {
        this.latlngs = this.bounds;
        if (this.LeafletElement) {
            var map = this.mapService.getMap();
            _super.prototype.transformArrayCoordinates.call(this, this.LeafletElement.crs);
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
        }
    };
    return ImageOverlayElement;
}(coodinateHandler_1.CoordinateHandler));
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
        moduleId: module.id.toString(),
        selector: 'image-overlay-element',
        templateUrl: 'image-overlay.html',
        styleUrls: ['image-overlay.css']
    }),
    __param(1, core_1.Optional()),
    __metadata("design:paramtypes", [map_service_1.MapService,
        map_1.LeafletElement])
], ImageOverlayElement);
exports.ImageOverlayElement = ImageOverlayElement;
//# sourceMappingURL=image-overlay.js.map