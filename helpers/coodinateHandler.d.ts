export declare class CoordinateHandler {
    lat: number;
    lon: number;
    x: number;
    y: number;
    constructor();
    copyCoordinates(): void;
    transformPointCoordinates(crs: any): void;
    setNewLatLng(newlatlng: any): void;
    transformArrayCoordinates(crs: any): void;
}
