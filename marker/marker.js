"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var map_service_1 = require("../services/map.service");
var group_service_1 = require("../services/group.service");
var popup_service_1 = require("../services/popup.service");
var map_1 = require("../map/map");
var group_1 = require("../group/group");
var coodinateHandler_1 = require("../helpers/coodinateHandler");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var L = require("leaflet");
var MarkerElement = (function (_super) {
    __extends(MarkerElement, _super);
    function MarkerElement(mapService, groupService, popupService, http, elementText, LeafletElement, LeafletGroup) {
        var _this = _super.call(this) || this;
        _this.mapService = mapService;
        _this.groupService = groupService;
        _this.popupService = popupService;
        _this.http = http;
        _this.elementText = elementText;
        _this.LeafletElement = LeafletElement;
        _this.LeafletGroup = LeafletGroup;
        _this.lat = 52.6;
        _this.lon = -1.1;
        _this.mouseover = undefined;
        _this.onclick = undefined;
        _this.iconUrl = "";
        _this.marker = null;
        return _this;
    }
    MarkerElement.prototype.ngOnInit = function () {
        _super.prototype.assignCartesianPointToLeafletsLatLngSchema.call(this);
        var model = this;
        if (this.LeafletElement || this.LeafletGroup) {
            var map_2 = this.mapService.getMap();
            _super.prototype.transformPointCoordinates.call(this, this.LeafletElement.crs);
            if (this.iconUrl === "") {
                this.marker = L.marker([this.lat, this.lon]);
                this.createMarkerlayer(this.marker, map_2);
            }
            else {
                this.imageExists(this.iconUrl, function (exists) {
                    model.getImage().subscribe(function (image) {
                        var img = document.createElement("img");
                        window.URL.createObjectURL(image.blob());
                        var reader = new FileReader();
                        reader.onload = function () {
                            img.src = reader.result;
                            var myIcon = L.icon({
                                iconUrl: model.iconUrl,
                                iconSize: [img.width, img.height],
                                iconAnchor: [img.width / 2, img.height - 1],
                                popupAnchor: [0, -img.height]
                            });
                            var obj = { icon: myIcon, options: null };
                            model.marker = L.marker([model.lat, model.lon], obj);
                            model.createMarkerlayer(model.marker, map_2);
                        };
                        reader.readAsDataURL(image.blob());
                    }, function (err) {
                        console.log(err);
                    });
                });
            }
        }
        else {
            console.warn("This marker-element will not be rendered \n the expected parent node of marker-element should be either leaf-element or leaflet-group");
        }
    };
    MarkerElement.prototype.createMarkerlayer = function (marker, map) {
        var textInput = undefined;
        if (this.elementText.nativeElement.childNodes.length > 0) {
            var textNode = this.elementText.nativeElement.childNodes[0];
            textInput = textNode.nodeValue;
        }
        this.popupService.enablePopup(this.mouseover, this.onclick, this.marker, textInput);
        if (this.LeafletGroup) {
            this.groupService.addOLayersToGroup(marker, map, this.mapService, this.LeafletGroup);
        }
        else {
            marker.addTo(map);
        }
    };
    MarkerElement.prototype.imageExists = function (url, callback) {
        var img = new Image();
        img.onload = function () { callback(true); };
        img.onerror = function () { callback(false); };
        img.src = url;
    };
    MarkerElement.prototype.getImage = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({
            responseType: http_1.ResponseContentType.Blob,
            headers: headers
        });
        return this.http.get(this.iconUrl, options)
            .map(function (res) { return res; })
            .catch(function (error) { return Rx_1.Observable.throw('Server error'); });
    };
    return MarkerElement;
}(coodinateHandler_1.CoordinateHandler));
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], MarkerElement.prototype, "lat", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], MarkerElement.prototype, "lon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MarkerElement.prototype, "mouseover", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MarkerElement.prototype, "onclick", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MarkerElement.prototype, "iconUrl", void 0);
MarkerElement = __decorate([
    core_1.Component({
        moduleId: module.id.toString(),
        selector: 'marker-element',
        templateUrl: 'marker.html',
        styleUrls: ['marker.css'],
        providers: [popup_service_1.PopupService]
    }),
    __param(5, core_1.Optional()),
    __param(6, core_1.Optional()),
    __metadata("design:paramtypes", [map_service_1.MapService,
        group_service_1.GroupService,
        popup_service_1.PopupService,
        http_1.Http,
        core_1.ElementRef,
        map_1.LeafletElement,
        group_1.LeafletGroup])
], MarkerElement);
exports.MarkerElement = MarkerElement;
//# sourceMappingURL=marker.js.map