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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var map_service_1 = require('../services/map.service');
var group_service_1 = require('../services/group.service');
var popup_service_1 = require('../services/popup.service');
var map_1 = require('../map/map');
var group_1 = require('../group/group');
var Lealflet = require('leaflet');
var MarkerElement = (function () {
    function MarkerElement(mapService, groupService, popupService, LeafletElement, LeafletGroup) {
        this.mapService = mapService;
        this.groupService = groupService;
        this.popupService = popupService;
        this.LeafletElement = LeafletElement;
        this.LeafletGroup = LeafletGroup;
        this.lat = 52.6;
        this.lon = -1.1;
        this.mouseover = "";
        this.onclick = "";
        this.iconUrl = "";
    }
    MarkerElement.prototype.ngOnInit = function () {
        var model = this;
        if (this.LeafletElement || this.LeafletGroup) {
            var map_2 = this.mapService.getMap();
            var marker = null;
            if (this.iconUrl === "") {
                marker = L.marker([this.lat, this.lon]);
                this.createMarkerlayer(marker, map_2);
            }
            else {
                this.imageExists(this.iconUrl, function (exists) {
                    var xhr = new XMLHttpRequest();
                    xhr.open('GET', model.iconUrl, true);
                    xhr.responseType = 'blob';
                    xhr.onload = function (e) {
                        if (this.status == 200) {
                            var myBlob = this.response;
                            var img = document.createElement("img");
                            img.src = window.URL.createObjectURL(myBlob);
                            var reader = new FileReader();
                            reader.onload = function () {
                                img.src = reader.result;
                                img.onload = function () {
                                    var myIcon = L.icon({
                                        iconUrl: model.iconUrl,
                                        iconSize: [img.height, img.height],
                                        iconAnchor: [img.height / 2, img.height - 1],
                                        popupAnchor: [0, -img.height]
                                    });
                                    marker = L.marker([model.lat, model.lon], { icon: myIcon });
                                    model.createMarkerlayer(marker, map_2);
                                };
                            };
                            reader.readAsDataURL(myBlob);
                        }
                    };
                    xhr.send();
                });
            }
        }
        else {
            console.warn("This marker-element will not be rendered \n the expected parent node of marker-element should be either leaf-element or leaflet-group");
        }
    };
    MarkerElement.prototype.createMarkerlayer = function (marker, map) {
        this.popupService.enablePopup(this.mouseover, this.onclick, marker);
        if (this.LeafletGroup) {
            this.groupService.addOLayersToGroup(marker);
        }
        else {
            marker.addTo(map);
        }
    };
    MarkerElement.prototype.imageExists = function (url, callback) {
        var img = new Image();
        img.onload = function () { callback(true); };
        img.onerror = function () { callback(false); };
        img.src = url;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MarkerElement.prototype, "lat", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MarkerElement.prototype, "lon", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MarkerElement.prototype, "mouseover", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MarkerElement.prototype, "onclick", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MarkerElement.prototype, "iconUrl", void 0);
    MarkerElement = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'marker-element',
            templateUrl: 'marker.html',
            styleUrls: ['marker.css'],
            providers: [popup_service_1.PopupService]
        }),
        __param(3, core_1.Optional()),
        __param(4, core_1.Optional()), 
        __metadata('design:paramtypes', [map_service_1.MapService, group_service_1.GroupService, popup_service_1.PopupService, map_1.LeafletElement, group_1.LeafletGroup])
    ], MarkerElement);
    return MarkerElement;
}());
exports.MarkerElement = MarkerElement;
//# sourceMappingURL=marker.js.map