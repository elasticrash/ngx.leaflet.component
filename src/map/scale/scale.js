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
import { LeafletElement } from '../map';
import { MapService } from '../../services/map.service';
import { scaleModel } from '../../models/scaleModel';
import * as L from 'leaflet';
let ScaleControl = class ScaleControl {
    constructor(mapService, LeafletElement) {
        this.mapService = mapService;
        this.LeafletElement = LeafletElement;
        this.Options = new scaleModel(null);
    }
    ngOnInit() {
        if (this.LeafletElement) {
            let map = this.mapService.getMap();
            L.control.scale(this.Options).addTo(map);
        }
        else {
            console.warn("This scale-control will not be rendered \n the expected parent node of scale-control should be leaf-element");
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], ScaleControl.prototype, "Options", void 0);
ScaleControl = __decorate([
    Component({
        moduleId: module.id.toString(),
        selector: 'scale-control',
        templateUrl: 'scale.html',
        styleUrls: ['scale.css']
    }),
    __param(1, Optional()),
    __metadata("design:paramtypes", [MapService,
        LeafletElement])
], ScaleControl);
export { ScaleControl };
//# sourceMappingURL=scale.js.map