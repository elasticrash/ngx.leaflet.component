import { Input } from '@angular/core';

export class CoordinateHandler {
    @Input() public lat: number;
    @Input() public lon: number;
    @Input() public x: number;
    @Input() public y: number;
    @Input() public latlngs: any;
    @Input() public xys: number;

    public assignCartesianPointToLeafletsLatLngSchema() {
        if (this.x !== undefined) {
            this.lon = this.x;
        }

        if (this.y !== undefined) {
            this.lat = this.y;
        }
    }

    public assignCartesianArrayToLeafletsLatLngSchema(arr?) {
        if (this.xys !== undefined) {
            if (!arr) {
                arr = this.xys;
            }

            for (var i = 0; i < arr.length; i++) {
                if (typeof (arr[0]) !== "number") {
                    this.assignCartesianArrayToLeafletsLatLngSchema(arr[i]);
                } else {
                    arr.reverse();
                }
            }
            this.latlngs = this.xys;
        }
    }

    public transformPointCoordinates(crs) {
        /**
         * this is because leaflet default CRS is 3857 (so it can render wms properly)
         * but uses 4326 everywhere else so if CRS is 3857 don't reproject coordinates
         * also proj4 by default unprojects (inverse) to wgs84 (4326) which is handy but
         * doesnt match leaflet's default projection. Generally I don't really agree on
         * how leaflet doesn't handle projections on a global state
         */
        if (crs.code && crs.code !== "EPSG:3857") {
            const newlatlng = crs.unproject({ y: this.lat, x: this.lon });
            this.setNewLatLng(newlatlng);
        } else {
            const newlatlng = { lat: this.lat, lng: this.lon };
            this.setNewLatLng(newlatlng);
        }
    }

    public setNewLatLng(newlatlng) {
        this.lat = newlatlng.lat;
        this.lon = newlatlng.lng;
    }

    public transformArrayCoordinates(crs, arr?) {
        if (!arr) {
            arr = this.latlngs;
        }
        for (let i = 0; i < arr.length; i++) {
            if (typeof (arr[0]) !== "number") {
                arr[i] = this.transformArrayCoordinates(crs, arr[i]);
            } else {
                if (crs.code && crs.code !== "EPSG:3857") {
                    const trasformed = crs.unproject({ x: arr[0], y: arr[1] });
                    arr = { lat: trasformed.lat, lng: trasformed.lng }
                } else {
                    arr = { lat: arr[0], lng: arr[1] };
                }
            }
        }
        return arr;
    }
}
