import { Injectable } from '@angular/core';


@Injectable()
export class GroupService {
    private layerGroup: Array<any> = [];
    private layerGroupNumber: number = 0;

    constructor() { }

    public addOLayersToGroup(overlay) {
        this.layerGroup.push(overlay);
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