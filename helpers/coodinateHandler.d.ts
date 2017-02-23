export declare class CoordinateHandler {
    lat: number;
    lon: number;
    x: number;
    y: number;
    constructor();
    copyCoordinates(): void;
    transformCoordinates(crs: any): any;
}
