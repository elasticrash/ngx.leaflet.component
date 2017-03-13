"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var GeoJSONCoordinateHandler = (function () {
    function GeoJSONCoordinateHandler() {
        this.geojson = {};
    }
    GeoJSONCoordinateHandler.prototype.transformJSONCoordinates = function (geoJSON, crs) {
        var _this = this;
        if (geoJSON.type === "FeatureCollection") {
            var featureCollection = geoJSON;
            featureCollection.features.forEach(function (feature) {
                _this.transformJSONCoordinates(feature, crs);
            });
        }
        if (geoJSON.type === "Feature") {
            var feature = geoJSON;
            this.transformJSONCoordinates(feature.geometry, crs);
        }
        if (geoJSON.type === "Point") {
            var point = geoJSON;
            point = this.transformPointCoordinates(point.coordinates, crs);
        }
        if (geoJSON.type === "LineString") {
            var lineString = geoJSON;
            lineString.coordinates.forEach(function (point) {
                _this.transformPointCoordinates(point, crs);
            });
        }
        if (geoJSON.type === "MultiPoint") {
            var multiPoint = geoJSON;
            multiPoint.coordinates.forEach(function (point) {
                _this.transformPointCoordinates(point, crs);
            });
        }
        if (geoJSON.type === "Polygon") {
            var polygon = geoJSON;
            polygon.coordinates.forEach(function (polygonElement) {
                polygonElement.forEach(function (point) {
                    _this.transformPointCoordinates(point, crs);
                });
            });
        }
        if (geoJSON.type === "MultiLineString") {
            var multiLineString = geoJSON;
            multiLineString.coordinates.forEach(function (lineString) {
                lineString.forEach(function (point) {
                    _this.transformPointCoordinates(point, crs);
                });
            });
        }
        if (geoJSON.type === "MultiPolygon") {
            var multiPolygon = geoJSON;
            multiPolygon.coordinates.forEach(function (polygon) {
                polygon.forEach(function (polygonElement) {
                    polygonElement.forEach(function (point) {
                        _this.transformPointCoordinates(point, crs);
                    });
                });
            });
        }
        if (geoJSON.type === "GeometryCollection") {
            var geometryCollection = geoJSON;
            geometryCollection.geometries.forEach(function (geometry) {
                _this.transformJSONCoordinates(geometry, crs);
            });
        }
    };
    GeoJSONCoordinateHandler.prototype.transformPointCoordinates = function (point, crs) {
        if (crs.code && crs.code !== "EPSG:3857") {
            var newlatlng = crs.unproject({ x: point[0], y: point[1] });
            return newlatlng;
        }
        else {
            return point;
        }
    };
    return GeoJSONCoordinateHandler;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], GeoJSONCoordinateHandler.prototype, "geojson", void 0);
exports.GeoJSONCoordinateHandler = GeoJSONCoordinateHandler;
//# sourceMappingURL=geoJsonReader.js.map