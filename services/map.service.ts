import { Injectable } from '@angular/core';


@Injectable()
export class MapService {
    private map;
    private basemaps: Object = {};
    private overlays: Object = {};
    private layerControl: Boolean = false;
    private layersInControlNumber: number = 0;

    constructor() { }

    public setMap(map) {
        this.map = map;
    }
    public getMap() {
        return this.map;
    }

    public setLayerControl(state) {
        this.layerControl = state;
    }
    public getLayerControl() {
        return this.layerControl;
    }

    public addBasemap(basemap, name) {
        if (name === '') {
            name = 'unknown layer';
        }
        if (this.basemaps[name] === undefined) {
            this.basemaps[name] = basemap;
        } else {
            name = this.getUniqueName(name);
            this.addBasemap(basemap, name)
        }
    }

    public getUniqueName(name) {
        let nameindex = 0;
        if (name.indexOf('(') !== -1) {
            nameindex = name.split('(')[1].split(')')[0];
        } else {
            nameindex = 1;
        }
        return name = name + '(' + (nameindex += 1) + ')';
    }

    public addOverlay(overlay, name) {
        if (name === '') {
            name = 'unknown group';
        }
        if (this.overlays[name] === undefined) {
            this.overlays[name] = overlay;
        } else {
            name = this.getUniqueName(name);
            this.addOverlay(overlay, name)
        }
    }

    public getBasemaps() {
        return this.basemaps;
    }

    public getOverlays() {
        return this.overlays;
    }

    public increaseNumber() {
        this.layersInControlNumber += 1;
    }

    public getLayerNumber() {
        return this.layersInControlNumber;
    }
}