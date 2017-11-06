var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Input } from '@angular/core';
export class GeoJSONCoordinateHandler {
    constructor() {
        this.geojson = {};
    }
    transformJSONCoordinates(geoJSON, crs) {
        if (geoJSON.type === "FeatureCollection") {
            var featureCollection = geoJSON;
            featureCollection.features.forEach(feature => {
                this.transformJSONCoordinates(feature, crs);
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
            lineString.coordinates.forEach(point => {
                this.transformPointCoordinates(point, crs);
            });
        }
        if (geoJSON.type === "MultiPoint") {
            var multiPoint = geoJSON;
            multiPoint.coordinates.forEach(point => {
                this.transformPointCoordinates(point, crs);
            });
        }
        if (geoJSON.type === "Polygon") {
            var polygon = geoJSON;
            polygon.coordinates.forEach(polygonElement => {
                polygonElement.forEach(point => {
                    this.transformPointCoordinates(point, crs);
                });
            });
        }
        if (geoJSON.type === "MultiLineString") {
            var multiLineString = geoJSON;
            multiLineString.coordinates.forEach(lineString => {
                lineString.forEach(point => {
                    this.transformPointCoordinates(point, crs);
                });
            });
        }
        if (geoJSON.type === "MultiPolygon") {
            var multiPolygon = geoJSON;
            multiPolygon.coordinates.forEach(polygon => {
                polygon.forEach(polygonElement => {
                    polygonElement.forEach(point => {
                        this.transformPointCoordinates(point, crs);
                    });
                });
            });
        }
        if (geoJSON.type === "GeometryCollection") {
            var geometryCollection = geoJSON;
            geometryCollection.geometries.forEach(geometry => {
                this.transformJSONCoordinates(geometry, crs);
            });
        }
    }
    transformPointCoordinates(point, crs) {
        if (crs.code && crs.code !== "EPSG:3857") {
            let newlatlng = crs.unproject({ x: point[0], y: point[1] });
            point[1] = newlatlng.lat;
            point[0] = newlatlng.lng;
            return point;
        }
        else {
            return point;
        }
    }
}
__decorate([
    Input(),
    __metadata("design:type", Object)
], GeoJSONCoordinateHandler.prototype, "geojson", void 0);
//# sourceMappingURL=geoJsonReader.js.map