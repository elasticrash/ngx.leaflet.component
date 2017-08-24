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
var map_1 = require("../map/map");
var group_1 = require("../group/group");
var map_service_1 = require("../services/map.service");
var group_service_1 = require("../services/group.service");
var popup_service_1 = require("../services/popup.service");
var coodinateHandler_1 = require("../helpers/coodinateHandler");
var path_1 = require("../models/path");
var L = require("leaflet");
var CircleElement = (function (_super) {
    __extends(CircleElement, _super);
    function CircleElement(mapService, groupService, popupService, elementText, LeafletElement, LeafletGroup) {
        var _this = _super.call(this) || this;
        _this.mapService = mapService;
        _this.groupService = groupService;
        _this.popupService = popupService;
        _this.elementText = elementText;
        _this.LeafletElement = LeafletElement;
        _this.LeafletGroup = LeafletGroup;
        _this.lat = 52.6;
        _this.lon = -1.1;
        _this.radius = 20;
        _this.mouseover = undefined;
        _this.onclick = undefined;
        _this.Options = new path_1.path(null);
        _this.circle = null;
        return _this;
    }
    CircleElement.prototype.ngOnInit = function () {
        _super.prototype.assignCartesianPointToLeafletsLatLngSchema.call(this);
        if (this.LeafletElement || this.LeafletGroup) {
            var inheritedOptions = new path_1.path(this.Options);
            var map = this.mapService.getMap();
            _super.prototype.transformPointCoordinates.call(this, this.LeafletElement.crs);
            this.circle = L.circle([this.lat, this.lon], this.radius, inheritedOptions);
            if (this.LeafletGroup) {
                this.groupService.addOLayersToGroup(this.circle, map, this.mapService, this.LeafletGroup);
            }
            else {
                this.circle.addTo(map);
            }
        }
        else {
            console.warn("This circle-element will not be rendered \n the expected parent node of circle-element should be either leaf-element or leaflet-group");
        }
    };
    CircleElement.prototype.ngAfterViewInit = function () {
        if (this.LeafletElement || this.LeafletGroup) {
            var textInput = undefined;
            if (this.elementText.nativeElement.childNodes.length > 0) {
                var textNode = this.elementText.nativeElement.childNodes[0];
                textInput = textNode.nodeValue;
            }
            this.popupService.enablePopup(this.mouseover, this.onclick, this.circle, textInput);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], CircleElement.prototype, "lat", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], CircleElement.prototype, "lon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], CircleElement.prototype, "radius", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CircleElement.prototype, "mouseover", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CircleElement.prototype, "onclick", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CircleElement.prototype, "Options", void 0);
    CircleElement = __decorate([
        core_1.Component({
            moduleId: module.id.toString(),
            selector: 'circle-element',
            templateUrl: 'circle.html',
            styleUrls: ['circle.css']
        }),
        __param(4, core_1.Optional()),
        __param(5, core_1.Optional()),
        __metadata("design:paramtypes", [map_service_1.MapService,
            group_service_1.GroupService,
            popup_service_1.PopupService, typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object, map_1.LeafletElement,
            group_1.LeafletGroup])
    ], CircleElement);
    return CircleElement;
    var _a;
}(coodinateHandler_1.CoordinateHandler));
exports.CircleElement = CircleElement;
//# sourceMappingURL=circle.js.map