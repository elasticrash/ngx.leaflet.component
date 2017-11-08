import { Injectable } from '@angular/core';
import { Popup } from 'leaflet';


@Injectable()
export class PopupService {

    constructor() { }

    public enablePopup(mouseover, onclick, element, text) {
        if (mouseover && onclick) {
            mouseover = undefined;
            console.warn('you can not use mouseover and onclick at the same time, mouseover is going to be depressed');
        }
        if (mouseover) {
            if (mouseover === 'true' && text) {
                mouseover = text;
            } else if (mouseover === true && !text) {
                mouseover = "true";
            }
            element.bindPopup(mouseover);
            element.on('mouseover', function (popup: Popup) {
                popup.openPopup();
            }).on('mouseout', function (popup: Popup) {
                popup.closePopup();
            });
        }
        if (onclick) {
            if (onclick === 'true' && text) {
                onclick = text;
            } else if (onclick === true && !text) {
                onclick = "true";
            }
            element.bindPopup(onclick);
            element.on('click', function (popup: Popup) {
                popup.openPopup();
            })
        }
        if (!mouseover && !onclick && text) {
            element.bindPopup(text);
            element.on('mouseover', function (popup: Popup) {
                popup.openPopup();
            }).on('mouseout', function (popup: Popup) {
                popup.closePopup();
            });
        }
    }
}