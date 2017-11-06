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
import { Http, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { MapService } from '../services/map.service';
import { GroupService } from '../services/group.service';
import { PopupService } from '../services/popup.service';
import { LeafletElement } from '../map/map';
import { LeafletGroup } from '../group/group';
import { CoordinateHandler } from '../helpers/coodinateHandler';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as L from 'leaflet';
let MarkerElement = class MarkerElement extends CoordinateHandler {
    constructor(mapService, groupService, popupService, http, elementText, LeafletElement, LeafletGroup) {
        super();
        this.mapService = mapService;
        this.groupService = groupService;
        this.popupService = popupService;
        this.http = http;
        this.elementText = elementText;
        this.LeafletElement = LeafletElement;
        this.LeafletGroup = LeafletGroup;
        this.lat = 52.6;
        this.lon = -1.1;
        this.mouseover = undefined;
        this.onclick = undefined;
        this.iconUrl = "";
        this.marker = null;
    }
    ngOnInit() {
        super.assignCartesianPointToLeafletsLatLngSchema();
        var model = this;
        if (this.LeafletElement || this.LeafletGroup) {
            let map = this.mapService.getMap();
            super.transformPointCoordinates(this.LeafletElement.crs);
            if (this.iconUrl === "") {
                this.marker = L.marker([this.lat, this.lon]);
                this.createMarkerlayer(this.marker, map);
            }
            else {
                this.imageExists(this.iconUrl, function (exists) {
                    model.getImage().subscribe(image => {
                        var img = document.createElement("img");
                        window.URL.createObjectURL(image.blob());
                        var reader = new FileReader();
                        reader.onload = function () {
                            img.src = reader.result;
                            var myIcon = L.icon({
                                iconUrl: model.iconUrl,
                                iconSize: [img.width, img.height],
                                iconAnchor: [img.width / 2, img.height - 1],
                                popupAnchor: [0, -img.height]
                            });
                            var obj = { icon: myIcon, options: null };
                            model.marker = L.marker([model.lat, model.lon], obj);
                            model.createMarkerlayer(model.marker, map);
                        };
                        reader.readAsDataURL(image.blob());
                    }, err => {
                        console.log(err);
                    });
                });
            }
        }
        else {
            console.warn("This marker-element will not be rendered \n the expected parent node of marker-element should be either leaf-element or leaflet-group");
        }
    }
    createMarkerlayer(marker, map) {
        var textInput = undefined;
        if (this.elementText.nativeElement.childNodes.length > 0) {
            var textNode = this.elementText.nativeElement.childNodes[0];
            textInput = textNode.nodeValue;
        }
        if (this.mouseover !== undefined || this.onclick !== undefined || textInput !== undefined) {
            this.popupService.enablePopup(this.mouseover, this.onclick, this.marker, textInput);
        }
        if (this.LeafletGroup) {
            this.groupService.addOLayersToGroup(marker, map, this.mapService, this.LeafletGroup);
        }
        else {
            marker.addTo(map);
        }
    }
    imageExists(url, callback) {
        var img = new Image();
        img.onload = function () { callback(true); };
        img.onerror = function () { callback(false); };
        img.src = url;
    }
    getImage() {
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({
            responseType: ResponseContentType.Blob,
            headers: headers
        });
        return this.http.get(this.iconUrl, options)
            .map((res) => res)
            .catch((error) => Observable.throw('Server error'));
    }
};
__decorate([
    Input(),
    __metadata("design:type", Number)
], MarkerElement.prototype, "lat", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], MarkerElement.prototype, "lon", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MarkerElement.prototype, "mouseover", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MarkerElement.prototype, "onclick", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MarkerElement.prototype, "iconUrl", void 0);
MarkerElement = __decorate([
    Component({
        moduleId: module.id.toString(),
        selector: 'marker-element',
        templateUrl: 'marker.html',
        styleUrls: ['marker.css'],
        providers: [PopupService]
    }),
    __param(5, Optional()),
    __param(6, Optional()),
    __metadata("design:paramtypes", [MapService,
        GroupService,
        PopupService,
        Http,
        ElementRef,
        LeafletElement,
        LeafletGroup])
], MarkerElement);
export { MarkerElement };
//# sourceMappingURL=marker.js.map