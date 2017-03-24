export declare class GeoJSONCoordinateHandler {
    geojson: any;
    constructor();
    transformJSONCoordinates(geoJSON: any, crs: any): void;
    transformPointCoordinates(point: any, crs: any): any;
}
