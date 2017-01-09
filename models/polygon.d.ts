export declare class polygon {
    outerRing: Array<Array<number>>;
    hole: Array<Array<number>>;
    constructor(_outerRing: any, _hole: any);
    getPolygonWithoutHoles(): number[][];
    getPolygonWithHoles(): any[];
}
