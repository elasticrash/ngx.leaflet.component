import { Input } from '@angular/core';

export class GeoJSONCoordinateHandler {
    @Input() public geojson: any = {};

    public transformJSONCoordinates(geoJSON: any, crs: any) {
        /**
         * 7.  GeoJSON Types Are Not Extensible
         * Implementations MUST NOT extend the fixed set of GeoJSON types:
         * FeatureCollection, Feature, Point, LineString, MultiPoint, Polygon,
         * MultiLineString, MultiPolygon, and GeometryCollection.
         */
        if (geoJSON.type === "FeatureCollection") {
            const featureCollection = geoJSON;
            featureCollection.features.forEach((feature) => {
                this.transformJSONCoordinates(feature, crs);
            });
        }
        if (geoJSON.type === "Feature") {
            const feature = geoJSON;
            this.transformJSONCoordinates(feature.geometry, crs);
        }
        if (geoJSON.type === "Point") {
            const point = geoJSON;
            this.transformPointCoordinates(point.coordinates, crs);
        }
        if (geoJSON.type === "LineString") {
            const lineString = geoJSON;
            lineString.coordinates.forEach((point) => {
                this.transformPointCoordinates(point, crs);
            });
        }
        if (geoJSON.type === "MultiPoint") {
            const multiPoint = geoJSON;
            multiPoint.coordinates.forEach((point) => {
                this.transformPointCoordinates(point, crs);
            });
        }
        if (geoJSON.type === "Polygon") {
            const polygon = geoJSON;
            polygon.coordinates.forEach((polygonElement) => {
                polygonElement.forEach((point) => {
                    this.transformPointCoordinates(point, crs);
                });
            });
        }
        if (geoJSON.type === "MultiLineString") {
            const multiLineString = geoJSON;
            multiLineString.coordinates.forEach((lineString) => {
                lineString.forEach((point) => {
                    this.transformPointCoordinates(point, crs);
                });
            });
        }
        if (geoJSON.type === "MultiPolygon") {
            const multiPolygon = geoJSON;
            multiPolygon.coordinates.forEach((polygon) => {
                polygon.forEach((polygonElement) => {
                    polygonElement.forEach((point) => {
                        this.transformPointCoordinates(point, crs);
                    });
                });
            });
        }
        if (geoJSON.type === "GeometryCollection") {
            const geometryCollection = geoJSON;
            geometryCollection.geometries.forEach((geometry) => {
                this.transformJSONCoordinates(geometry, crs);
            });
        }
    }

    public transformPointCoordinates(point, crs) {
        /**
         * this is because leaflet default CRS is 3857 (so it can render wms properly)
         * but uses 4326 everywhere else so if CRS is 3857 don't reproject coordinates
         * also proj4 by default unprojects (inverse) to wgs84 (4326) which is handy but
         * doesnt match leaflet's default projection. Generally I don't really agree on
         * how leaflet doesn't handle projections on a global state
         */
        if (crs.code && crs.code !== "EPSG:3857") {
            const newlatlng = crs.unproject({ x: point[0], y: point[1] });
            point[1] = newlatlng.lat;
            point[0] = newlatlng.lng;
            return point;
        } else {
            return point;
        }
    }
}
