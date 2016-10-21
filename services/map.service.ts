import { Injectable } from '@angular/core';


@Injectable()
export class MapService {
    map: any;

    public setMap(map: any) {
        this.map = map;
    }
    public getMap() {
        return this.map;
    }
}