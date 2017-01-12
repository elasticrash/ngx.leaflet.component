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
var popup_service_1 = require("../services/popup.service");
var path_1 = require("../models/path");
var L = require("leaflet");
var CircleElement = (function () {
    function CircleElement(mapService, groupService, popupService, LeafletElement, LeafletGroup) {
        this.mapService = mapService;
        this.groupService = groupService;
        this.popupService = popupService;
        this.LeafletElement = LeafletElement;
        this.LeafletGroup = LeafletGroup;
        this.lat = 52.6;
        this.lon = -1.1;
        this.radius = 20;
        this.mouseover = "";
        this.onclick = "";
        this.Options = new path_1.path(null);
    }
    CircleElement.prototype.ngOnInit = function () {
        if (this.LeafletElement || this.LeafletGroup) {
            var inheritedOptions = new path_1.path(this.Options);
            var map = this.mapService.getMap();
            var circle = L.circle([this.lat, this.lon], this.radius, inheritedOptions);
            this.popupService.enablePopup(this.mouseover, this.onclick, circle);
            if (this.LeafletGroup) {
                this.groupService.addOLayersToGroup(circle, map, this.mapService, this.LeafletGroup);
            }
            else {
                circle.addTo(map);
            }
        }
        else {
            console.warn("This circle-element will not be rendered \n the expected parent node of circle-element should be either leaf-element or leaflet-group");
        }
    };
    return CircleElement;
}());
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
    __param(3, core_1.Optional()),
    __param(4, core_1.Optional()),
    __metadata("design:paramtypes", [map_service_1.MapService,
        group_service_1.GroupService,
        popup_service_1.PopupService,
        map_1.LeafletElement,
        group_1.LeafletGroup])
], CircleElement);
exports.CircleElement = CircleElement;
//# sourceMappingURL=circle.js.map