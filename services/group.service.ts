import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

declare var L: any;

@Injectable()
export class GroupService {
    private layerGroup: Array<any> = [];
    private layerGroupNumber: number = 0;
    private group: any = {};

    constructor() { }

    public addOLayersToGroup(overlay, map, mapService, group) {
        if (Object.keys(this.group).length !== 0) {
            map.removeLayer(this.group);
        }
        this.layerGroup.push(overlay);
        this.group = L.layerGroup(this.getLayerGroup());
        this.group.addTo(map);
        mapService.addOverlay(this.getGroup(), group.name, group.globalId);
    }

    public getObservableGroup() {
        return Observable.create(observer => {
            var group = this.getGroup();
            observer.next(group);
            observer.complete();
        });
    }

    public getGroup() {
        return this.group;
    }

    public getLayerGroup() {
        return this.layerGroup;
    }

    public increaseNumber() {
        this.layerGroupNumber += 1;
    }

    public getLayerNumber() {
        return this.layerGroupNumber;
    }
}