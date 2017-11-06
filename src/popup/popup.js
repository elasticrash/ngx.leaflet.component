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
import { LeafletElement } from '../map/map';
import { LeafletGroup } from '../group/group';
import { MapService } from '../services/map.service';
import { GroupService } from '../services/group.service';
import { CoordinateHandler } from '../helpers/coodinateHandler';
import * as L from 'leaflet';
let PopupElement = class PopupElement extends CoordinateHandler {
    constructor(mapService, groupService, LeafletElement, LeafletGroup) {
        super();
        this.mapService = mapService;
        this.groupService = groupService;
        this.LeafletElement = LeafletElement;
        this.LeafletGroup = LeafletGroup;
        this.lat = 52.6;
        this.lon = -1.9;
        this.content = "nice popup";
    }
    ngOnInit() {
        super.assignCartesianPointToLeafletsLatLngSchema();
        if (this.LeafletElement || this.LeafletGroup) {
            let map = this.mapService.getMap();
            super.transformPointCoordinates(this.LeafletElement.crs);
            let popup = L.popup({ autoClose: false, keepInView: true }).setLatLng([this.lat, this.lon]).setContent(this.content);
            if (this.LeafletGroup) {
                this.groupService.addOLayersToGroup(popup, map, this.mapService, this.LeafletGroup);
            }
            else {
                popup.addTo(map);
            }
        }
        else {
            console.warn("This popup-element will not be rendered \n the expected parent node of popup-element should be either leaf-element or leaflet-group");
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Number)
], PopupElement.prototype, "lat", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], PopupElement.prototype, "lon", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PopupElement.prototype, "content", void 0);
PopupElement = __decorate([
    Component({
        moduleId: module.id.toString(),
        selector: 'popup-element',
        templateUrl: 'popup.html',
        styleUrls: ['popup.css']
    }),
    __param(2, Optional()),
    __param(3, Optional()),
    __metadata("design:paramtypes", [MapService,
        GroupService,
        LeafletElement,
        LeafletGroup])
], PopupElement);
export { PopupElement };
//# sourceMappingURL=popup.js.map