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
var CoordinateHandler = (function () {
    function CoordinateHandler() {
    }
    CoordinateHandler.prototype.assignCartesianPointToLeafletsLatLngSchema = function () {
        if (this.x !== undefined) {
            this.lon = this.x;
        }
        if (this.y !== undefined) {
            this.lat = this.y;
        }
    };
    CoordinateHandler.prototype.assignCartesianArrayToLeafletsLatLngSchema = function (arr) {
        if (this.xys !== undefined) {
            if (!arr) {
                arr = this.xys;
            }
            for (var i = 0; i < arr.length; i++) {
                if (typeof (arr[0]) !== "number") {
                    this.assignCartesianArrayToLeafletsLatLngSchema(arr[i]);
                }
                else {
                    arr.reverse();
                }
            }
            this.latlngs = this.xys;
        }
    };
    CoordinateHandler.prototype.transformPointCoordinates = function (crs) {
        if (crs.code && crs.code !== "EPSG:3857") {
            var newlatlng = crs.unproject({ y: this.lat, x: this.lon });
            this.setNewLatLng(newlatlng);
        }
        else {
            var newlatlng = { lat: this.lat, lng: this.lon };
            this.setNewLatLng(newlatlng);
        }
    };
    CoordinateHandler.prototype.setNewLatLng = function (newlatlng) {
        this.lat = newlatlng.lat;
        this.lon = newlatlng.lng;
    };
    CoordinateHandler.prototype.transformArrayCoordinates = function (crs, arr) {
        if (!arr) {
            arr = this.latlngs;
        }
        for (var i = 0; i < arr.length; i++) {
            if (typeof (arr[0]) !== "number") {
                arr[i] = this.transformArrayCoordinates(crs, arr[i]);
            }
            else {
                if (crs.code && crs.code !== "EPSG:3857") {
                    var trasformed = crs.unproject({ x: arr[0], y: arr[1] });
                    arr = { lat: trasformed.lat, lng: trasformed.lng };
                }
                else {
                    arr = { lat: arr[0], lng: arr[1] };
                }
            }
        }
        return arr;
    };
    return CoordinateHandler;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CoordinateHandler.prototype, "lat", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CoordinateHandler.prototype, "lon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CoordinateHandler.prototype, "x", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CoordinateHandler.prototype, "y", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CoordinateHandler.prototype, "latlngs", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CoordinateHandler.prototype, "xys", void 0);
exports.CoordinateHandler = CoordinateHandler;
//# sourceMappingURL=coodinateHandler.js.map