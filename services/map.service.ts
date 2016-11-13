import { Injectable } from '@angular/core';


@Injectable()
export class MapService {
    private map;
    private basemaps:Array<any> = [];
    private overlays:Array<any> = [];
    private layerControl: Boolean = false;
    private layersInControlNumber: number = 0;
    
     constructor() {}

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

    public addBasemap(basemap){
        this.basemaps.push(basemap);
    }

    public addOverlay(overlay){
        this.overlays.push(overlay);
    }

    public getBasemaps(){
        return this.basemaps;
    }

    public getOverlays(){
        return this.overlays;
    }

     public increaseNumber() {
        this.layersInControlNumber += 1;
    }

    public getLayerNumber() {
        return this.layersInControlNumber;
    }
}