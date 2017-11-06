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
import { Component, Optional } from '@angular/core';
import { LeafletElement } from '../map/map';
import { LeafletGroup } from '../group/group';
import { MapService } from '../services/map.service';
import { GroupService } from '../services/group.service';
import { PopupService } from '../services/popup.service';
import { GuidService } from '../services/globalId.service';
import { HelperService } from '../services/helper.service';
import { GeoJSONCoordinateHandler } from '../helpers/geoJsonReader';
import * as L from 'leaflet';
let GeoJsonElement = class GeoJsonElement extends GeoJSONCoordinateHandler {
    constructor(mapService, groupService, popupService, guidService, helperService, LeafletElement, LeafletGroup) {
        super();
        this.mapService = mapService;
        this.groupService = groupService;
        this.popupService = popupService;
        this.guidService = guidService;
        this.helperService = helperService;
        this.LeafletElement = LeafletElement;
        this.LeafletGroup = LeafletGroup;
        this.originalObject = Object.assign({}, this.geojson);
        this.globalId = this.guidService.newGuid();
    }
    ngOnInit() {
        if (this.LeafletElement || this.LeafletGroup) {
            let map = this.mapService.getMap();
            if (this.geojson) {
                super.transformJSONCoordinates(this.geojson, this.LeafletElement.crs);
                let gjson = L.geoJSON(this.geojson);
                if (this.LeafletGroup) {
                    this.groupService.addOLayersToGroup(gjson, map, this.mapService, this.LeafletGroup, false, this.globalId);
                }
                else {
                    gjson.addTo(map);
                }
            }
            else {
                console.warn("geojson object seems to be undefined");
            }
        }
        else {
            console.warn("This polyline-element will not be rendered \n the expected parent node of polyline-element should be either leaf-element or leaflet-group");
        }
    }
    ngDoCheck() {
        let map = this.mapService.getMap();
    }
};
GeoJsonElement = __decorate([
    Component({
        moduleId: module.id.toString(),
        selector: 'geojson-element',
        templateUrl: 'geojson.html',
        styleUrls: ['geojson.css']
    }),
    __param(5, Optional()),
    __param(6, Optional()),
    __metadata("design:paramtypes", [MapService,
        GroupService,
        PopupService,
        GuidService,
        HelperService,
        LeafletElement,
        LeafletGroup])
], GeoJsonElement);
export { GeoJsonElement };
//# sourceMappingURL=geojson.js.map