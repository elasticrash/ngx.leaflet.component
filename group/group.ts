import { Component, Input } from '@angular/core';
import { MapService } from '../services/map.service';
import { GroupService } from '../services/group.service';
import { GuidService } from '../services/globalId.service';
import * as L from 'leaflet';


@Component({
    moduleId: module.id,
    selector: 'leaflet-group',
    templateUrl: 'group.html',
    styleUrls: ['group.css'],
    providers: [GroupService]
})

export class LeafletGroup {
    @Input() name: string = '';
    globalId: string = this.guidService.newGuid();
    
    constructor(
        private mapService: MapService,
        private groupService: GroupService,
        private guidService: GuidService) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
    }

   
}