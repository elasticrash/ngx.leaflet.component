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
import * as L from 'leaflet';
let MapService = class MapService {
    constructor() {
        this.basemaps = {};
        this.overlays = {};
        this.layerControlflag = false;
        this.layersInControlNumber = 0;
        this.layerControlObject = {};
        this.groupIdentifiers = [];
        this.groupNames = [];
    }
    setMap(map) {
        this.map = map;
    }
    getMap() {
        return this.map;
    }
    setLayerControl(state) {
        this.layerControlflag = state;
    }
    getLayerControl() {
        return this.layerControlflag;
    }
    addBasemap(basemap, name) {
        if (name === '') {
            name = 'unknown layer';
        }
        if (this.basemaps[name] === undefined) {
            this.basemaps[name] = basemap;
        }
        else {
            name = this.getUniqueName(name);
            this.addBasemap(basemap, name);
        }
    }
    getUniqueName(name) {
        let nameindex = 0;
        let newName = name;
        if (name.indexOf('(') !== -1) {
            nameindex = parseInt(name.split('(')[1].split(')')[0]);
            nameindex += 1;
            newName = name.split('(')[0];
        }
        else {
            nameindex = 1;
        }
        return name = newName + '(' + nameindex + ')';
    }
    addOverlay(overlay, name, gId) {
        if (this.groupIdentifiers.indexOf(gId) !== -1) {
            let index = this.groupIdentifiers.indexOf(gId);
            let existing_name = this.groupNames[index];
            this.overlays[existing_name] = overlay;
        }
        else {
            if (name === '') {
                name = 'unknown group';
            }
            if (this.overlays[name] === undefined) {
                this.groupNames.push(name);
                this.groupIdentifiers.push(gId);
                this.overlays[name] = overlay;
            }
            else {
                name = this.getUniqueName(name);
                if (this.groupNames.indexOf(name) === -1) {
                    this.groupNames.push(name);
                    this.groupIdentifiers.push(gId);
                }
                else {
                    this.addOverlay(overlay, name);
                }
            }
        }
        this.addControl();
    }
    getBasemaps() {
        return this.basemaps;
    }
    getOverlays() {
        return this.overlays;
    }
    getObservableOverlays() {
        return Observable.create(observer => {
            observer.next(this.overlays);
            observer.complete();
        });
    }
    getObservableBasemaps() {
        return Observable.create(observer => {
            observer.next(this.basemaps);
            observer.complete();
        });
    }
    refreshOverlays(remove, add) {
        let overlays = this.getOverlays();
        for (var key in overlays) {
            if (overlays[key] instanceof Array) {
                overlays[key].forEach((element, index, arr) => {
                    if (element._leaflet_id == remove._leaflet_id) {
                        arr[index] = add;
                    }
                });
            }
        }
    }
    increaseNumber() {
        this.layersInControlNumber += 1;
    }
    getLayerNumber() {
        return this.layersInControlNumber;
    }
    addControl() {
        if (this.layerControlflag) {
            let map = this.getMap();
            if (Object.keys(this.layerControlObject).length !== 0) {
                this.layerControlObject.getContainer().innerHTML = '';
                map.removeControl(this.layerControlObject);
            }
            this.layerControlObject = L.control.layers(this.getBasemaps(), this.getOverlays()).addTo(map);
        }
    }
};
MapService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], MapService);
export { MapService };
//# sourceMappingURL=map.service.js.map