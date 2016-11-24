import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

declare var L: any;

@Injectable()
export class MapService {
    private map;
    private basemaps: Object = {};
    private overlays: Object = {};
    private layerControlflag: Boolean = false;
    private layersInControlNumber: number = 0;
    private layerControlObject: any = {};

    constructor() { }

    public setMap(map) {
        this.map = map;
    }
    public getMap() {
        return this.map;
    }

    public setLayerControl(state) {
        this.layerControlflag = state;
    }
    public getLayerControl() {
        return this.layerControlflag;
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

    public getObservableOverlays() {
        return Observable.create(observer => {
            var overlays = this.getOverlays();
            observer.next(overlays);
            observer.complete();
        });
    }

    public getObservableBasemaps() {
        return Observable.create(observer => {
            var basemaps = this.getBasemaps();
            observer.next(basemaps);
            observer.complete();
        });
    }

    public refreshOverlays(remove, add) {
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

    public increaseNumber() {
        this.layersInControlNumber += 1;
    }

    public getLayerNumber() {
        return this.layersInControlNumber;
    }
}