export declare class MapService {
    private map;
    private basemaps;
    private overlays;
    private layerControlflag;
    private layersInControlNumber;
    constructor();
    setMap(map: any): void;
    getMap(): any;
    setLayerControl(state: any): void;
    getLayerControl(): Boolean;
    addBasemap(basemap: any, name: any): void;
    getUniqueName(name: any): string;
    addOverlay(overlay: any, name: any): void;
    getBasemaps(): Object;
    getOverlays(): Object;
    getObservableOverlays(): any;
    getObservableBasemaps(): any;
    refreshOverlays(remove: any, add: any): void;
    increaseNumber(): void;
    getLayerNumber(): number;
}
