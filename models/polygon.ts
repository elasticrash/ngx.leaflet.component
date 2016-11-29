export class polygon {
    public outerRing: Array<Array<number>>;
    public hole: Array<Array<number>>;

    constructor(_outerRing, _hole) {
        if (_outerRing) {
            this.outerRing = _outerRing;
            if (_hole) {
                this.hole = _hole;
            }
        }
    }

    getPolygonWithoutHoles() {
        return this.outerRing;
    }

    getPolygonWithHoles() {
        let polygon = [];
        polygon.push(this.outerRing);
        polygon.push(this.hole);
        return polygon;
    }

}
