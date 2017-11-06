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
import { GuidService } from '../services/globalId.service';
import { HelperService } from '../services/helper.service';
import { CoordinateHandler } from '../helpers/coodinateHandler';
import { path } from '../models/path';
import * as L from 'leaflet';
let PolygonElement = class PolygonElement extends CoordinateHandler {
    constructor(mapService, groupService, popupService, guidService, helperService, elementText, LeafletElement, LeafletGroup) {
        super();
        this.mapService = mapService;
        this.groupService = groupService;
        this.popupService = popupService;
        this.guidService = guidService;
        this.helperService = helperService;
        this.elementText = elementText;
        this.LeafletElement = LeafletElement;
        this.LeafletGroup = LeafletGroup;
        this.latlngs = [[[52.65, -1.2], [52.645, -1.15], [52.696, -1.155], [52.697, -1.189]],
            [[52.66, -1.19], [52.665, -1.16], [52.686, -1.161], [52.687, -1.179]]];
        this.Options = new path(null);
        this.mouseover = undefined;
        this.onclick = undefined;
        this.polygon = null;
        this.originalObject = [...this.latlngs];
        this.globalId = this.guidService.newGuid();
    }
    ngOnInit() {
        super.assignCartesianArrayToLeafletsLatLngSchema();
        if (this.LeafletElement || this.LeafletGroup) {
            let inheritedOptions = new path(this.Options);
            let map = this.mapService.getMap();
            super.transformArrayCoordinates(this.LeafletElement.crs);
            this.polygon = L.polygon([this.latlngs], inheritedOptions);
            if (this.LeafletGroup) {
                this.groupService.addOLayersToGroup(this.polygon, map, this.mapService, this.LeafletGroup, false, this.globalId);
            }
            else {
                this.polygon.addTo(map);
            }
        }
        else {
            console.warn("This polygon-element will not be rendered \n the expected parent node of polygon-element should be either leaf-element or leaflet-group");
        }
    }
    ngAfterViewInit() {
        var textInput = undefined;
        if (this.elementText.nativeElement.childNodes.length > 0) {
            var textNode = this.elementText.nativeElement.childNodes[0];
            textInput = textNode.nodeValue;
        }
        if (this.mouseover !== undefined || this.onclick !== undefined || textInput !== undefined) {
            this.popupService.enablePopup(this.mouseover, this.onclick, this.polygon, textInput);
        }
    }
    ngDoCheck() {
        let map = this.mapService.getMap();
        var same = this.helperService.arrayCompare(this.originalObject, this.latlngs);
        if (!same) {
            this.originalObject = [...this.latlngs];
            let inheritedOptions = new path(this.Options);
            if (this.LeafletGroup) {
                this.polygon = L.polygon([this.latlngs], inheritedOptions);
                this.groupService.addOLayersToGroup(this.polygon, map, this.mapService, this.LeafletGroup, true, this.globalId);
            }
            else {
                map.removeLayer(this.polygon);
                this.polygon = L.polygon([this.latlngs], inheritedOptions);
                this.polygon.addTo(map);
            }
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], PolygonElement.prototype, "latlngs", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PolygonElement.prototype, "Options", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PolygonElement.prototype, "mouseover", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PolygonElement.prototype, "onclick", void 0);
PolygonElement = __decorate([
    Component({
        moduleId: module.id.toString(),
        selector: 'polygon-element',
        templateUrl: 'polygon.html',
        styleUrls: ['polygon.css']
    }),
    __param(6, Optional()),
    __param(7, Optional()),
    __metadata("design:paramtypes", [MapService,
        GroupService,
        PopupService,
        GuidService,
        HelperService,
        ElementRef,
        LeafletElement,
        LeafletGroup])
], PolygonElement);
export { PolygonElement };
//# sourceMappingURL=polygon.js.map