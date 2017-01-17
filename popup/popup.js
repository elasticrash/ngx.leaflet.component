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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var map_1 = require("../map/map");
var group_1 = require("../group/group");
var map_service_1 = require("../services/map.service");
var group_service_1 = require("../services/group.service");
var L = require("leaflet");
var PopupElement = (function () {
    function PopupElement(mapService, groupService, LeafletElement, LeafletGroup) {
        this.mapService = mapService;
        this.groupService = groupService;
        this.LeafletElement = LeafletElement;
        this.LeafletGroup = LeafletGroup;
        this.lat = 52.6;
        this.lon = -1.9;
        this.content = "nice popup";
    }
    PopupElement.prototype.ngOnInit = function () {
        if (this.LeafletElement || this.LeafletGroup) {
            var map = this.mapService.getMap();
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
}());
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