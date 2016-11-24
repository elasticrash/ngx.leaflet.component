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
    _subscriptionLG;
    _subscriptionF;

    constructor(
        private mapService: MapService,
        private groupService: GroupService) {
    }

    ngOnInit() {
        this.mapService.increaseNumber();
    }

    ngAfterViewInit() {
        this._subscriptionLG = this.groupService.getObservableGroup().subscribe(data => {
           this.addLayerGroupToScope();
        });
    }

    addLayerGroupToScope() {
        if (this.mapService.getLayerControl) {
            //add layerGroup to control
            this.mapService.addOverlay(this.groupService.getGroup(), this.name);
        }
    }
}