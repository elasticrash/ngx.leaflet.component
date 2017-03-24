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
var map_service_1 = require("../services/map.service");
var group_service_1 = require("../services/group.service");
var globalId_service_1 = require("../services/globalId.service");
var LeafletGroup = (function () {
    function LeafletGroup(mapService, groupService, guidService) {
        this.mapService = mapService;
        this.groupService = groupService;
        this.guidService = guidService;
        this.name = '';
        this.globalId = this.guidService.newGuid();
    }
    LeafletGroup.prototype.ngOnInit = function () {
    };
    LeafletGroup.prototype.ngAfterViewInit = function () {
    };
    return LeafletGroup;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], LeafletGroup.prototype, "name", void 0);
LeafletGroup = __decorate([
    core_1.Component({
        moduleId: module.id.toString(),
        selector: 'leaflet-group',
        templateUrl: 'group.html',
        styleUrls: ['group.css'],
        providers: [group_service_1.GroupService]
    }),
    __metadata("design:paramtypes", [map_service_1.MapService,
        group_service_1.GroupService,
        globalId_service_1.GuidService])
], LeafletGroup);
exports.LeafletGroup = LeafletGroup;
//# sourceMappingURL=group.js.map