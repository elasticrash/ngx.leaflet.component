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
import { Component, Input, Optional } from '@angular/core';
import { MapService } from '../../services/map.service';
import { LeafletElement } from '../map';
import * as L from 'leaflet';
let WatermarkControl = class WatermarkControl {
    constructor(mapService, LeafletElement) {
        this.mapService = mapService;
        this.LeafletElement = LeafletElement;
    }
    ngOnInit() {
        var self = this;
        if (this.LeafletElement) {
            let map = this.mapService.getMap();
            if (this.url) {
                L.Control['Watermark'] = {};
                L.Control['Watermark'] = L.Control.extend({
                    onAdd: function (map) {
                        var basediv = L.DomUtil.create('div', 'watermark');
                        var howManyInX = Math.ceil(map.getSize().x / self.imagewidth);
                        var howManyInY = Math.ceil(map.getSize().y / self.imageheight);
                        var numberOfLogo = howManyInX * howManyInY;
                        console.log(numberOfLogo);
                        let i = 0;
                        for (i; i < numberOfLogo; i++) {
                            var img = L.DomUtil.create('img', 'watermark-elements', basediv);
                            img.src = self.url;
                            img.style.width = self.imagewidth + 'px';
                        }
                        return basediv;
                    },
                    onRemove: function (map) {
                    }
                });
                L.control['watermark'] = function (opts) {
                    return new L.Control['Watermark'](opts);
                };
            }
            L.control['watermark']({ position: "bottomleft" }).addTo(map);
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], WatermarkControl.prototype, "url", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], WatermarkControl.prototype, "imagewidth", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], WatermarkControl.prototype, "imageheight", void 0);
WatermarkControl = __decorate([
    Component({
        moduleId: module.id.toString(),
        selector: 'watermark-element',
        templateUrl: 'watermark.html',
        styleUrls: ['watermark.css']
    }),
    __param(1, Optional()),
    __metadata("design:paramtypes", [MapService,
        LeafletElement])
], WatermarkControl);
export { WatermarkControl };
//# sourceMappingURL=watermark.js.map