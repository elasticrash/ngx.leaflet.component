import { Injectable } from '@angular/core';


@Injectable()
export class PopupService {

    constructor() { }

    public enablePopup(mouseover, onclick, element) {
        if (mouseover !== "" && onclick !== "") {
            mouseover = "";
            console.warn('you can not use mouseover and onclick at the same time, mouseover is going to be depressed');
        }
        if (mouseover !== "") {
            element.bindPopup(mouseover);
            element.on('mouseover', function () {
                this.openPopup();
            }).on('mouseout', function () {
                this.closePopup();
            });
        }
        if (onclick !== "") {
            element.bindPopup(onclick);
            element.on('click', function () {
                this.openPopup();
            })
        }
    }
}