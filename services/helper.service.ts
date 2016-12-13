import { Injectable } from '@angular/core';


@Injectable()
export class HelperService {

    constructor() { }

    arrayCompare(a, b) {
        if (a.length != b.length) {
            return false;
        }
        for (var i in a) {
            // Don't forget to check for arrays in our arrays.
            if (a[i] instanceof Array && b[i] instanceof Array) {
                if (!this.arrayCompare(a[i], b[i])) {
                    return false;
                }
            }
            else if (a[i] != b[i]) {
                return false;
            }
        }
        return true;
    }
}