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
var coodinateHandler_1 = require("../helpers/coodinateHandler");
var L = require("leaflet");
var PopupElement = (function (_super) {
    __extends(PopupElement, _super);
    function PopupElement(mapService, groupService, LeafletElement, LeafletGroup) {
        var _this = _super.call(this) || this;
        _this.mapService = mapService;
        _this.groupService = groupService;
        _this.LeafletElement = LeafletElement;
        _this.LeafletGroup = LeafletGroup;
        _this.lat = 52.6;
        _this.lon = -1.9;
        _this.content = "nice popup";
        return _this;
    }
    PopupElement.prototype.ngOnInit = function () {
        _super.prototype.assignCartesianPointToLeafletsLatLngSchema.call(this);
        if (this.LeafletElement || this.LeafletGroup) {
            var map = this.mapService.getMap();
            _super.prototype.transformPointCoordinates.call(this, this.LeafletElement.crs);
            var popup = L.popup({ autoClose: false, keepInView: true }).setLatLng([this.lat, this.lon]).setContent(this.content);
            if (this.LeafletGroup) {
                this.groupService.addOLayersToGroup(popup, map, this.mapService, this.LeafletGroup);
            }
            else {
                popup.addTo(map);
            }
        }
        else {
            console.warn("This popup-element will not be rendered \n the expected parent node of popup-element should be either leaf-element or leaflet-group");
        }
    };
    return PopupElement;
}(coodinateHandler_1.CoordinateHandler));
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PopupElement.prototype, "lat", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PopupElement.prototype, "lon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PopupElement.prototype, "content", void 0);
PopupElement = __decorate([
    core_1.Component({
        moduleId: module.id.toString(),
        selector: 'popup-element',
        templateUrl: 'popup.html',
        styleUrls: ['popup.css']
    }),
    __param(2, core_1.Optional()),
    __param(3, core_1.Optional()),
    __metadata("design:paramtypes", [map_service_1.MapService,
        group_service_1.GroupService,
        map_1.LeafletElement,
        group_1.LeafletGroup])
], PopupElement);
exports.PopupElement = PopupElement;
//# sourceMappingURL=popup.js.map