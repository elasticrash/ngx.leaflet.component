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
var globalId_service_1 = require("../services/globalId.service");
var helper_service_1 = require("../services/helper.service");
var coodinateHandler_1 = require("../helpers/coodinateHandler");
var path_1 = require("../models/path");
var L = require("leaflet");
var PolylineElement = (function (_super) {
    __extends(PolylineElement, _super);
    function PolylineElement(mapService, groupService, popupService, guidService, helperService, elementText, LeafletElement, LeafletGroup) {
        var _this = _super.call(this) || this;
        _this.mapService = mapService;
        _this.groupService = groupService;
        _this.popupService = popupService;
        _this.guidService = guidService;
        _this.helperService = helperService;
        _this.elementText = elementText;
        _this.LeafletElement = LeafletElement;
        _this.LeafletGroup = LeafletGroup;
        _this.latlngs = [[52.6, -1.1], [52.605, -1.1], [52.606, -1.105], [52.697, -1.109]];
        _this.Options = new path_1.path(null);
        _this.mouseover = undefined;
        _this.onclick = undefined;
        _this.polyline = null;
        _this.originalObject = _this.latlngs.slice();
        _this.globalId = _this.guidService.newGuid();
        return _this;
    }
    PolylineElement.prototype.ngOnInit = function () {
        _super.prototype.assignCartesianArrayToLeafletsLatLngSchema.call(this);
        if (this.LeafletElement || this.LeafletGroup) {
            this.Options.fill = false;
            var inheritedOptions = new path_1.path(this.Options);
            var map = this.mapService.getMap();
            _super.prototype.transformArrayCoordinates.call(this, this.LeafletElement.crs);
            this.polyline = L.polyline(this.latlngs, inheritedOptions);
            if (this.LeafletGroup) {
                this.groupService.addOLayersToGroup(this.polyline, map, this.mapService, this.LeafletGroup, false, this.globalId);
            }
            else {
                this.polyline.addTo(map);
            }
        }
        else {
            console.warn("This polyline-element will not be rendered \n the expected parent node of polyline-element should be either leaf-element or leaflet-group");
        }
    };
    PolylineElement.prototype.ngAfterViewInit = function () {
        var textInput = undefined;
        if (this.elementText.nativeElement.childNodes.length > 0) {
            var textNode = this.elementText.nativeElement.childNodes[0];
            textInput = textNode.nodeValue;
        }
        this.popupService.enablePopup(this.mouseover, this.onclick, this.polyline, textInput);
    };
    PolylineElement.prototype.ngDoCheck = function () {
        var map = this.mapService.getMap();
        var same = this.helperService.arrayCompare(this.originalObject, this.latlngs);
        if (!same) {
            this.originalObject = this.latlngs.slice();
            this.Options.fill = false;
            var inheritedOptions = new path_1.path(this.Options);
            if (this.LeafletGroup) {
                this.polyline = L.polyline(this.latlngs, inheritedOptions);
                this.groupService.addOLayersToGroup(this.polyline, map, this.mapService, this.LeafletGroup, true, this.globalId);
            }
            else {
                map.removeLayer(this.polyline);
                this.polyline = L.polyline(this.latlngs, inheritedOptions);
                this.polyline.addTo(map);
            }
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PolylineElement.prototype, "latlngs", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PolylineElement.prototype, "Options", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PolylineElement.prototype, "mouseover", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PolylineElement.prototype, "onclick", void 0);
    PolylineElement = __decorate([
        core_1.Component({
            moduleId: module.id.toString(),
            selector: 'polyline-element',
            templateUrl: 'polyline.html',
            styleUrls: ['polyline.css']
        }),
        __param(6, core_1.Optional()),
        __param(7, core_1.Optional()),
        __metadata("design:paramtypes", [map_service_1.MapService,
            group_service_1.GroupService,
            popup_service_1.PopupService,
            globalId_service_1.GuidService,
            helper_service_1.HelperService, typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object, map_1.LeafletElement,
            group_1.LeafletGroup])
    ], PolylineElement);
    return PolylineElement;
    var _a;
}(coodinateHandler_1.CoordinateHandler));
exports.PolylineElement = PolylineElement;
//# sourceMappingURL=polyline.js.map