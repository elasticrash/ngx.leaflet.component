import { Injectable } from '@angular/core';


@Injectable()
export class MapService {
    private map;
    private basemaps;
    private overlays;

 constructor() {}

    public setMap(map) {
        this.map = map;
    }
    public getMap() {
        return this.map;
    }

    public addBasemap(basemap){
        this.basemaps = this.basemaps.push(basemap);
    }

    public addOverlay(overlay){
        this.overlays = this.overlays.push(overlay);
    }

    public getBasemaps(){
        return this.basemaps;
    }

    public getOverlays(){
        return this.overlays;
    }
}