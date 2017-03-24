export declare class CoordinateHandler {
    lat: number;
    lon: number;
    x: number;
    y: number;
    latlngs: any;
    xys: number;
    constructor();
    assignCartesianPointToLeafletsLatLngSchema(): void;
    assignCartesianArrayToLeafletsLatLngSchema(arr?: any): void;
    transformPointCoordinates(crs: any): void;
    setNewLatLng(newlatlng: any): void;
    transformArrayCoordinates(crs: any, arr?: any): any;
}
