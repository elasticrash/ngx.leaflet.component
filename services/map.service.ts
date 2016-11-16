import { Injectable } from '@angular/core';


@Injectable()
export class MapService {
    private map;
    private basemaps: Object = {};
    private overlays: Array<any> = [];
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

            let nameindex = 0;
            if (name.indexOf('(') !== -1) {
                nameindex = name.split('(')[1].split(')')[0];
            } else {
                nameindex = 1;
            }
            name = name + '(' + (nameindex += 1) + ')';
            this.addBasemap(basemap, name)
        }
    }

    public addOverlay(overlay) {
        this.overlays.push(overlay);
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