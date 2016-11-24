import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

declare var L: any;

@Injectable()
export class GroupService {
    private layerGroup: Array<any> = [];
    private layerGroupNumber: number = 0;
    private flag = true;
    constructor() { }

    public addOLayersToGroup(overlay) {
        this.layerGroup.push(overlay);
        this.flag = !this.flag;
        return this.flag;
    }

    public getObservableLayerGroup() {
        return Observable.create(observer => {
            var layerGroup = this.getLayerGroup();
            observer.next(layerGroup);
            observer.complete();
        });
    }

    public getObservableFlag() {
        return Observable.create(observer => {
            var flag = this.flag;
            observer.next(flag);
            observer.complete();
        });
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

    public refreshGroup(remove, add, map) {
        map.removeLayer(this.getLayerGroup());

        var rindex = -1;
        this.layerGroup.forEach((element, index) => {
            if (element._leaflet_id == remove._leaflet_id) {
                rindex = index;
            }
        });

        this.layerGroup.splice(rindex, 1);
        this.flag = !this.flag;

        this.addOLayersToGroup(add);
        this.flag = !this.flag;
    }
}