"use strict";
var polygon = (function () {
    function polygon(_outerRing, _hole) {
        if (_outerRing) {
            this.outerRing = _outerRing;
            if (_hole) {
                this.hole = _hole;
            }
        }
    }
    polygon.prototype.getPolygonWithoutHoles = function () {
        return this.outerRing;
    };
    polygon.prototype.getPolygonWithHoles = function () {
        var polygon = [];
        polygon.push(this.outerRing);
        polygon.push(this.hole);
        return polygon;
    };
    return polygon;
}());
exports.polygon = polygon;
//# sourceMappingURL=polygon.js.map