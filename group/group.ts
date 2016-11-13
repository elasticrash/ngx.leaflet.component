import { Component, Input } from '@angular/core';
import { MapService } from '../services/map.service';
import { GroupService } from '../services/group.service';

var Lealflet = require('leaflet');

declare var L: any;

@Component({
    moduleId: module.id,
    selector: 'leaflet-group',
    templateUrl: 'group.html',
    styleUrls: ['group.css'],
    providers: [GroupService]
})

export class LeafletGroup {

    constructor(
        private mapService: MapService,
        private groupService: GroupService) {
    }

    ngOnInit() {
        this.mapService.increaseNumber();
    }

    ngAfterViewInit() {
        let model = this;
        if (this.groupService.getLayerGroup().length !== this.groupService.getLayerNumber()) {
            setTimeout(function () {
                model.loop();
            }, 200);
        } else {
            this.addLayerGroupToScope();
        }
    }

    loop() {
        let model = this;
        if (this.groupService.getLayerGroup().length !== this.groupService.getLayerNumber()) {
            setTimeout(function () {
                model.loop();
            }, 200);
        }
        else { this.addLayerGroupToScope() };
    }

    addLayerGroupToScope() {
        let map = this.mapService.getMap();
        let layerGroup = L.layerGroup(this.groupService.getLayerGroup());
        layerGroup.addTo(map);
        if (this.mapService.getLayerControl) {
            //add layerGroup to control
            this.mapService.addOverlay(layerGroup);
        }
    }
}