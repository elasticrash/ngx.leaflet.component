export declare class MapService {
    private map;
    private basemaps;
    private overlays;
    private layerControl;
    private layersInControlNumber;
    constructor();
    setMap(map: any): void;
    getMap(): any;
    setLayerControl(state: any): void;
    getLayerControl(): Boolean;
    addBasemap(basemap: any): void;
    addOverlay(overlay: any): void;
    getBasemaps(): any[];
    getOverlays(): any[];
    increaseNumber(): void;
    getLayerNumber(): number;
}
