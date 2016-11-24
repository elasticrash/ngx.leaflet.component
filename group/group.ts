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
    @Input() name: string = '';
    _subscription;

    constructor(
        private mapService: MapService,
        private groupService: GroupService) {
    }

    ngOnInit() {
        this.mapService.increaseNumber();
    }

    ngAfterViewInit() {
        this._subscription = this.groupService.getObservableLayerGroup().subscribe(data => {
            this.addLayerGroupToScope();
        });
    }

    addLayerGroupToScope() {
        let map = this.mapService.getMap();
        let layerGroup = L.layerGroup(this.groupService.getLayerGroup());
        layerGroup.addTo(map);
        if (this.mapService.getLayerControl) {
            //add layerGroup to control
            this.mapService.addOverlay(layerGroup, this.name);
        }
    }
}