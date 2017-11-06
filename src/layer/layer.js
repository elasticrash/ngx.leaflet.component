var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { MapService } from '../services/map.service';
import * as L from 'leaflet';
let LayerElement = class LayerElement {
    constructor(mapService) {
        this.mapService = mapService;
        this.slippyLayer = '';
        this.wmsLayer = '';
        this.name = '';
        this.opacity = 1;
        this.type = 'overlay';
        this.attribution = null;
    }
    ngOnInit() {
        this.mapService.increaseNumber();
        let map = this.mapService.getMap();
        let layer = null;
        if (this.slippyLayer !== "") {
            layer = L.tileLayer(this.slippyLayer, {
                attribution: this.attribution,
            });
        }
        if (this.wmsLayer !== "" && this.name !== "") {
            layer = L.tileLayer.wms(this.wmsLayer, {
                layers: this.name,
                attribution: this.attribution
            }).setOpacity(this.opacity);
        }
        if (layer !== {}) {
            if (this.type === "overlay") {
                this.mapService.addOverlay(layer, this.name);
                layer.addTo(map);
            }
            else if (this.type === "basemap") {
                this.mapService.addBasemap(layer, this.name);
                layer.addTo(map);
            }
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], LayerElement.prototype, "slippyLayer", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], LayerElement.prototype, "wmsLayer", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], LayerElement.prototype, "name", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], LayerElement.prototype, "opacity", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], LayerElement.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], LayerElement.prototype, "attribution", void 0);
LayerElement = __decorate([
    Component({
        moduleId: module.id.toString(),
        selector: 'layer-element',
        templateUrl: 'layer.html',
        styleUrls: ['layer.css']
    }),
    __metadata("design:paramtypes", [MapService])
], LayerElement);
export { LayerElement };
//# sourceMappingURL=layer.js.map