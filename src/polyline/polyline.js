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
let PolylineElement = class PolylineElement extends CoordinateHandler {
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
        this.latlngs = [[52.6, -1.1], [52.605, -1.1], [52.606, -1.105], [52.697, -1.109]];
        this.Options = new path(null);
        this.mouseover = undefined;
        this.onclick = undefined;
        this.polyline = null;
        this.originalObject = [...this.latlngs];
        this.globalId = this.guidService.newGuid();
    }
    ngOnInit() {
        super.assignCartesianArrayToLeafletsLatLngSchema();
        if (this.LeafletElement || this.LeafletGroup) {
            this.Options.fill = false;
            let inheritedOptions = new path(this.Options);
            let map = this.mapService.getMap();
            super.transformArrayCoordinates(this.LeafletElement.crs);
            this.polyline = L.polyline(this.latlngs, inheritedOptions);
            if (this.LeafletGroup) {
                this.groupService.addOLayersToGroup(this.polyline, map, this.mapService, this.LeafletGroup, false, this.globalId);
            }
            else {
                this.polyline.addTo(map);
            }
        }
        else {
            console.warn("This polyline-element will not be rendered \n the expected parent node of polyline-element should be either leaf-element or leaflet-group");
        }
    }
    ngAfterViewInit() {
        var textInput = undefined;
        if (this.elementText.nativeElement.childNodes.length > 0) {
            var textNode = this.elementText.nativeElement.childNodes[0];
            textInput = textNode.nodeValue;
        }
        if (this.mouseover !== undefined || this.onclick !== undefined || textInput !== undefined) {
            this.popupService.enablePopup(this.mouseover, this.onclick, this.polyline, textInput);
        }
    }
    ngDoCheck() {
        let map = this.mapService.getMap();
        var same = this.helperService.arrayCompare(this.originalObject, this.latlngs);
        if (!same) {
            this.originalObject = [...this.latlngs];
            this.Options.fill = false;
            let inheritedOptions = new path(this.Options);
            if (this.LeafletGroup) {
                this.polyline = L.polyline(this.latlngs, inheritedOptions);
                this.groupService.addOLayersToGroup(this.polyline, map, this.mapService, this.LeafletGroup, true, this.globalId);
            }
            else {
                map.removeLayer(this.polyline);
                this.polyline = L.polyline(this.latlngs, inheritedOptions);
                this.polyline.addTo(map);
            }
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], PolylineElement.prototype, "latlngs", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PolylineElement.prototype, "Options", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PolylineElement.prototype, "mouseover", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PolylineElement.prototype, "onclick", void 0);
PolylineElement = __decorate([
    Component({
        moduleId: module.id.toString(),
        selector: 'polyline-element',
        templateUrl: 'polyline.html',
        styleUrls: ['polyline.css']
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
], PolylineElement);
export { PolylineElement };
//# sourceMappingURL=polyline.js.map