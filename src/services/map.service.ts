import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as L from 'leaflet';


@Injectable()
export class MapService {
    private map;
    private basemaps: any = {};
    private overlays: any = {};
    private layerControlflag: Boolean = false;
    private layersInControlNumber: number = 0;
    private layerControlObject: any = {};
    private groupIdentifiers: Array<string> = [];
    private groupNames: Array<string> = [];

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
        let nameindex: number = 0;
        let newName: string = name;
        if (name.indexOf('(') !== -1) {
            nameindex = parseInt(name.split('(')[1].split(')')[0]);
            nameindex += 1;
            newName = name.split('(')[0];
        } else {
            nameindex = 1;
        }
        return name = newName + '(' + nameindex + ')';
    }

    public addOverlay(overlay, name: string, gId?: string) {
        if (this.groupIdentifiers.indexOf(gId) !== -1) {
            let index = this.groupIdentifiers.indexOf(gId);
            let existing_name: string = this.groupNames[index];
            this.overlays[existing_name] = overlay;
        } else {
            if (name === '') {
                name = 'unknown group';
            }
            if (this.overlays[name] === undefined) {
                this.groupNames.push(name);
                this.groupIdentifiers.push(gId);
                this.overlays[name] = overlay;
            } else {
                name = this.getUniqueName(name);
                if (this.groupNames.indexOf(name) === -1) {
                    this.groupNames.push(name);
                    this.groupIdentifiers.push(gId);
                } else {
                    this.addOverlay(overlay, name);
                }
            }
        }

        this.addControl();
    }

    public getBasemaps() {
        return this.basemaps;
    }

    public getOverlays() {
        return this.overlays;
    }

    public getObservableOverlays() {
        return Observable.create(observer => {
            observer.next(this.overlays);
            observer.complete();
        });
    }

    public getObservableBasemaps() {
        return Observable.create(observer => {
            observer.next(this.basemaps);
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

    public addControl() {
        if (this.layerControlflag) {
            let map = this.getMap();
            if (Object.keys(this.layerControlObject).length !== 0) {
                this.layerControlObject.getContainer().innerHTML = '';
                map.removeControl(this.layerControlObject);
            }
            this.layerControlObject = L.control.layers(this.getBasemaps(), this.getOverlays()).addTo(map);
        }
    }
}