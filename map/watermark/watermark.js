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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var L = require("leaflet");
var WatermarkComponent = (function () {
    function WatermarkComponent() {
    }
    WatermarkComponent.prototype.ngOnInit = function () {
        var self = this;
        if (this.watermarkUrl) {
            L.Control['Watermark'] = {};
            L.Control['Watermark'] = L.Control.extend({
                onAdd: function (map) {
                    var img = L.DomUtil.create('img');
                    img.src = self.watermarkUrl;
                    img.style.width = '200px';
                    return img;
                },
                onRemove: function (map) {
                }
            });
            L.control['watermark'] = function (opts) {
                return new L.Control['Watermark'](opts);
            };
        }
    };
    return WatermarkComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WatermarkComponent.prototype, "watermarkUrl", void 0);
WatermarkComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'watermark-element',
        templateUrl: 'watermark.html',
        styleUrls: ['watermark.css']
    }),
    __metadata("design:paramtypes", [])
], WatermarkComponent);
exports.WatermarkComponent = WatermarkComponent;
//# sourceMappingURL=watermark.js.map