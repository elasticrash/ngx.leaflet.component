"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Lealflet = require('leaflet');
var LeafletElement = (function () {
    function LeafletElement() {
    }
    LeafletElement.prototype.ngOnInit = function () {
        var map = L.map("map", {
            zoomControl: false,
            center: L.latLng(40.731253, -73.996139),
            zoom: 12,
            minZoom: 4,
            maxZoom: 19,
            layers: []
        });
        L.control.zoom({ position: "topright" }).addTo(map);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);
        L.control.scale().addTo(map);
    };
    LeafletElement = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'leaf-element',
            templateUrl: 'map.html',
            styleUrls: ['map.css', '../node_modules/leaflet/dist/leaflet.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], LeafletElement);
    return LeafletElement;
}());
exports.LeafletElement = LeafletElement;
//# sourceMappingURL=map.js.map