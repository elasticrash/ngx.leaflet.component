var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { MapService } from '../services/map.service';
import { GroupService } from '../services/group.service';
import { GuidService } from '../services/globalId.service';
let LeafletGroup = class LeafletGroup {
    constructor(mapService, groupService, guidService) {
        this.mapService = mapService;
        this.groupService = groupService;
        this.guidService = guidService;
        this.name = '';
        this.globalId = this.guidService.newGuid();
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], LeafletGroup.prototype, "name", void 0);
LeafletGroup = __decorate([
    Component({
        moduleId: module.id.toString(),
        selector: 'leaflet-group',
        templateUrl: 'group.html',
        styleUrls: ['group.css'],
        providers: [GroupService]
    }),
    __metadata("design:paramtypes", [MapService,
        GroupService,
        GuidService])
], LeafletGroup);
export { LeafletGroup };
//# sourceMappingURL=group.js.map