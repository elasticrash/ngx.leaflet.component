import { Injectable } from '@angular/core';


@Injectable()
export class GroupService {
    private layerGroup:Array<any> = [];

 constructor() {}

    public addOLayersToGroup(overlay){
        this.layerGroup.push(overlay);
    }

    public getLayerGroup(){
        return this.layerGroup;
    }
}