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
import { Component, Input, Optional, ElementRef } from '@angular/core';
import { LeafletElement } from '../map/map';
import { LeafletGroup } from '../group/group';
import { MapService } from '../services/map.service';
import { GroupService } from '../services/group.service';
import { PopupService } from '../services/popup.service';
import { CoordinateHandler } from '../helpers/coodinateHandler';
import { path } from '../models/path';
import * as L from 'leaflet';
let CircleElement = class CircleElement extends CoordinateHandler {
    constructor(mapService, groupService, popupService, elementText, LeafletElement, LeafletGroup) {
        super();
        this.mapService = mapService;
        this.groupService = groupService;
        this.popupService = popupService;
        this.elementText = elementText;
        this.LeafletElement = LeafletElement;
        this.LeafletGroup = LeafletGroup;
        this.lat = 52.6;
        this.lon = -1.1;
        this.radius = 20;
        this.mouseover = undefined;
        this.onclick = undefined;
        this.Options = new path(null);
        this.circle = null;
    }
    ngOnInit() {
        super.assignCartesianPointToLeafletsLatLngSchema();
        if (this.LeafletElement || this.LeafletGroup) {
            let inheritedOptions = new path(this.Options);
            let map = this.mapService.getMap();
            super.transformPointCoordinates(this.LeafletElement.crs);
            this.circle = L.circle([this.lat, this.lon], this.radius, inheritedOptions);
            if (this.LeafletGroup) {
                this.groupService.addOLayersToGroup(this.circle, map, this.mapService, this.LeafletGroup);
            }
            else {
                this.circle.addTo(map);
            }
        }
        else {
            console.warn("This circle-element will not be rendered \n the expected parent node of circle-element should be either leaf-element or leaflet-group");
        }
    }
    ngAfterViewInit() {
        if (this.LeafletElement || this.LeafletGroup) {
            var textInput = undefined;
            if (this.elementText.nativeElement.childNodes.length > 0) {
                var textNode = this.elementText.nativeElement.childNodes[0];
                textInput = textNode.nodeValue;
            }
            if (this.mouseover !== undefined || this.onclick !== undefined || textInput !== undefined) {
                this.popupService.enablePopup(this.mouseover, this.onclick, this.circle, textInput);
            }
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Number)
], CircleElement.prototype, "lat", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CircleElement.prototype, "lon", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CircleElement.prototype, "radius", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CircleElement.prototype, "mouseover", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CircleElement.prototype, "onclick", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CircleElement.prototype, "Options", void 0);
CircleElement = __decorate([
    Component({
        moduleId: module.id.toString(),
        selector: 'circle-element',
        templateUrl: 'circle.html',
        styleUrls: ['circle.css']
    }),
    __param(4, Optional()),
    __param(5, Optional()),
    __metadata("design:paramtypes", [MapService,
        GroupService,
        PopupService,
        ElementRef,
        LeafletElement,
        LeafletGroup])
], CircleElement);
export { CircleElement };
//# sourceMappingURL=circle.js.map