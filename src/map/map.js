var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { MapService } from '../services/map.service';
import { CoordinateHandler } from '../helpers/coodinateHandler';
import * as L from 'leaflet';
let LeafletElement = class LeafletElement extends CoordinateHandler {
    constructor(mapService) {
        super();
        this.mapService = mapService;
        this.lat = 52.6;
        this.lon = -1.1;
        this.zoom = 12;
        this.minZoom = 4;
        this.maxZoom = 19;
        this.layerControl = false;
        this.crs = L.CRS.EPSG3857;
        this.maxBounds = null;
        this.layerControlObject = null;
    }
    ngOnInit() {
        super.assignCartesianPointToLeafletsLatLngSchema();
        if (typeof (this.crs) === "string") {
            var splitCrs = this.crs.split(".");
            if (splitCrs[0] === "L") {
                this.crs = L[splitCrs[1]][splitCrs[2]];
            }
            else {
                console.warn("something is not right, reverting to default EPSG3857");
                this.crs = L.CRS.EPSG3857;
            }
        }
        super.transformPointCoordinates(this.crs);
        let map = L.map(this.mapElement.nativeElement, {
            crs: this.crs,
            zoomControl: this.zoomControl,
            center: L.latLng(this.lat, this.lon),
            zoom: this.zoom,
            minZoom: this.minZoom,
            maxZoom: this.maxZoom,
            maxBounds: this.maxBounds,
            layers: [],
            closePopupOnClick: false,
            attributionControl: false
        });
        this.mapElement.nativeElement.myMapProperty = map;
        this.mapService.setMap(map);
        this.mapService.setLayerControl(this.layerControl);
    }
    ngAfterViewInit() {
    }
    setLayerControl() {
        if (this.layerControl) {
            let map = this.mapService.getMap();
            if (this.layerControlObject !== null) {
                this.layerControlObject.getContainer().innerHTML = '';
            }
            this.layerControlObject = L.control.layers(this.mapService.getBasemaps(), this.mapService.getOverlays()).addTo(map);
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Number)
], LeafletElement.prototype, "lat", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], LeafletElement.prototype, "lon", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], LeafletElement.prototype, "zoom", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], LeafletElement.prototype, "minZoom", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], LeafletElement.prototype, "maxZoom", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], LeafletElement.prototype, "layerControl", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], LeafletElement.prototype, "crs", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], LeafletElement.prototype, "zoomControl", void 0);
__decorate([
    Input(),
    __metadata("design:type", L.LatLngBounds)
], LeafletElement.prototype, "maxBounds", void 0);
__decorate([
    ViewChild('map'),
    __metadata("design:type", ElementRef)
], LeafletElement.prototype, "mapElement", void 0);
LeafletElement = __decorate([
    Component({
        moduleId: module.id.toString(),
        selector: 'leaf-element',
        templateUrl: 'map.html',
        styleUrls: ['map.css'],
        providers: [MapService]
    }),
    __metadata("design:paramtypes", [MapService])
], LeafletElement);
export { LeafletElement };
//# sourceMappingURL=map.js.map