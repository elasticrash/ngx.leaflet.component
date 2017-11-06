var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { GuidService } from '../services/globalId.service';
import * as L from 'leaflet';
let GroupService = class GroupService {
    constructor(guidService) {
        this.guidService = guidService;
        this.layerGroup = [];
        this.layerId = [];
        this.layerGroupNumber = 0;
        this.group = {};
    }
    addOLayersToGroup(overlay, map, mapService, group, replace = false, gId) {
        if (!gId) {
            gId = this.guidService.newGuid();
        }
        if (this.layerId.indexOf(gId) === -1) {
            this.layerId.push(gId);
        }
        if (Object.keys(this.group).length !== 0) {
            if (replace) {
                map.removeLayer(this.group);
                if (this.layerId.indexOf(gId) !== -1) {
                    this.layerGroup[this.layerId.indexOf(gId)] = overlay;
                }
                else {
                    this.layerGroup.push(overlay);
                }
                this.group = L.layerGroup(this.getLayerGroup());
                this.group.addTo(map);
            }
            else {
                this.layerGroup.push(overlay);
                this.group.addLayer(overlay);
            }
        }
        if (!replace) {
            this.layerGroup.push(overlay);
            this.group = L.layerGroup(this.getLayerGroup());
            this.group.addTo(map);
        }
        mapService.addOverlay(this.getGroup(), group.name, group.globalId);
    }
    getObservableGroup() {
        return Observable.create(observer => {
            var group = this.getGroup();
            observer.next(group);
            observer.complete();
        });
    }
    getGroup() {
        return this.group;
    }
    getLayerGroup() {
        return this.layerGroup;
    }
    getLayerNumber() {
        return this.layerGroupNumber;
    }
};
GroupService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [GuidService])
], GroupService);
export { GroupService };
//# sourceMappingURL=group.service.js.map