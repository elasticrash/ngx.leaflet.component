export declare class MapService {
    private map;
    private basemaps;
    private overlays;
    constructor();
    setMap(map: any): void;
    getMap(): any;
    addBasemap(basemap: any): void;
    addOverlay(overlay: any): void;
    getBasemaps(): any;
    getOverlays(): any;
}
