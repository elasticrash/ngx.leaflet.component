import { Input } from '@angular/core';

export class CoordinateHandler {
    @Input() lat: number;
    @Input() lon: number;
    @Input() x: number;
    @Input() y: number;

    constructor() {
    }

    copyCoordinates() {
        if (this.x !== undefined) {
            this.lon = this.x;
        }

        if (this.y !== undefined) {
            this.lat = this.y;
        }
    }

    transformPointCoordinates(crs) {
        /**
         * this is because leaflet default CRS is 3857 (so it can render wms properly)
         * but uses 4326 everywhere else so if CRS is 3857 don't reproject coordinates
         * also proj4 by default unprojects (inverse) to wgs84 (4326) which is handy but
         * doesnt match leaflet's default projection. Generally I don't really agree on
         * how leaflet doesn't handle projections on a global state
         */
        if (crs.code && crs.code !== "EPSG:3857") {
            let newlatlng = crs.unproject({ y: this.lat, x: this.lon });
            this.setNewLatLng(newlatlng);
        } else {
            let newlatlng = { lat: this.lat, lng: this.lon };
            this.setNewLatLng(newlatlng);
        }
    }

    setNewLatLng(newlatlng) {
        this.lat = newlatlng.lat;
        this.lon = newlatlng.lng;
    }

    transformArrayCoordinates(crs) {

    }
}