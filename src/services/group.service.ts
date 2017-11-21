import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GuidService } from '../services/globalId.service';
import * as L from 'leaflet';


@Injectable()
export class GroupService {
    private layerGroup: Array<any> = [];
    private layerId: Array<any> = [];
    private layerGroupNumber: number = 0;
    private group: any = {};

    constructor(private guidService: GuidService) { }

    public addOLayersToGroup(overlay, map, mapService, group, replace = false, gId?: String) {
        if (!gId) {
            gId = this.guidService.newGuid();
        }
        if (this.layerId.indexOf(gId) === -1) {
            this.layerId.push(gId);
        }
        if (Object.keys(this.group).length !== 0) {
            if (replace) {
                map.removeLayer(this.group);
                if (this.layerId.indexOf(gId) !== -1) {
                    this.layerGroup[this.layerId.indexOf(gId)] = overlay;
                } else {
                    this.layerGroup.push(overlay);
                }
                this.group = L.layerGroup(this.getLayerGroup());
                this.group.addTo(map);
            } else {
                this.layerGroup.push(overlay);
                this.group.addLayer(overlay);
            }
        }
        if (!replace) {
            this.layerGroup.push(overlay);
            this.group = L.layerGroup(this.getLayerGroup());
            this.group.addTo(map);
        }

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

    public getLayerNumber() {
        return this.layerGroupNumber;
    }
}