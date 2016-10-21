import { Injectable } from '@angular/core';


@Injectable()
export class MapService {
    private map;
 constructor() {}

    public setMap(map) {
        this.map = map;
    }
    public getMap() {
        return this.map;
    }
}