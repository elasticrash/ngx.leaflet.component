import { Input } from '@angular/core';

export class GeoJSONCoordinateHandler {
    @Input() geojson: any = {};

    constructor() {
    }

    transformJSONCoordinates(geoJSON: any, crs: any) {
        /**
         * 7.  GeoJSON Types Are Not Extensible
         * Implementations MUST NOT extend the fixed set of GeoJSON types:
         * FeatureCollection, Feature, Point, LineString, MultiPoint, Polygon,
         * MultiLineString, MultiPolygon, and GeometryCollection.
         */
        if (geoJSON.type === "FeatureCollection") {
            var featureCollection = geoJSON as GeoJSONFeatureCollection<any>;
            featureCollection.features.forEach(feature => {
                this.transformJSONCoordinates(feature, crs);
            });
        }
        if (geoJSON.type === "Feature") {
            var feature = geoJSON as GeoJSONFeature<any>;
            this.transformJSONCoordinates(feature.geometry, crs);
        }
        if (geoJSON.type === "Point") {
            var point = geoJSON as GeoJSONPoint;
            point = this.transformPointCoordinates(point.coordinates, crs);
        }
        if (geoJSON.type === "LineString") {
            var lineString = geoJSON as GeoJSONLineString;
            lineString.coordinates.forEach(point => {
                this.transformPointCoordinates(point, crs);
            });
        }
        if (geoJSON.type === "MultiPoint") {
            var multiPoint = geoJSON as GeoJSONMultiPoint;
            multiPoint.coordinates.forEach(point => {
                this.transformPointCoordinates(point, crs);
            });
        }
        if (geoJSON.type === "Polygon") {
            var polygon = geoJSON as GeoJSONPolygon;
            polygon.coordinates.forEach(polygonElement => {
                polygonElement.forEach(point => {
                    this.transformPointCoordinates(point, crs);
                });
            });
        }
        if (geoJSON.type === "MultiLineString") {
            var multiLineString = geoJSON as GeoJSONMultiLineString;
            multiLineString.coordinates.forEach(lineString => {
                lineString.forEach(point => {
                    this.transformPointCoordinates(point, crs);
                });
            });
        }
        if (geoJSON.type === "MultiPolygon") {
            var multiPolygon = geoJSON as GeoJSONMultiPolygon;
            multiPolygon.coordinates.forEach(polygon => {
                polygon.forEach(polygonElement => {
                    polygonElement.forEach(point => {
                        this.transformPointCoordinates(point, crs);
                    });
                });
            });
        }
        if (geoJSON.type === "GeometryCollection") {
            var geometryCollection = geoJSON as GeoJSONGeometryCollection;
            geometryCollection.geometries.forEach(geometry => {
                this.transformJSONCoordinates(geometry, crs);
            });
        }
    }

    transformPointCoordinates(point, crs) {
        /**
         * this is because leaflet default CRS is 3857 (so it can render wms properly)
         * but uses 4326 everywhere else so if CRS is 3857 don't reproject coordinates
         * also proj4 by default unprojects (inverse) to wgs84 (4326) which is handy but
         * doesnt match leaflet's default projection. Generally I don't really agree on
         * how leaflet doesn't handle projections on a global state
         */
        if (crs.code && crs.code !== "EPSG:3857") {
            let newlatlng = crs.unproject({ x: point[0], y: point[1] });
            return newlatlng;
        } else {
            return point;
        }
    }
}