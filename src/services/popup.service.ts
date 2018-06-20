import { Injectable } from '@angular/core';

@Injectable()
export class PopupService {

    public enablePopup(mouseover, onclick, element, text) {
        if (mouseover && onclick) {
            mouseover = undefined;
            // tslint:disable-next-line:no-console
            console.warn('you can not use mouseover and onclick at the same time, mouseover is going to be depressed');
        }
        if (mouseover) {
            if (mouseover === 'true' && text) {
                mouseover = text;
            } else if (mouseover === true && !text) {
                mouseover = "true";
            }
            element.bindPopup(mouseover);
            element.on('mouseover', function(this: { openPopup: any, closePopup: any }) {
                this.openPopup();
            }).on('mouseout', function(this: { openPopup: any, closePopup: any }) {
                this.closePopup();
            });
        }
        if (onclick) {
            if (onclick === 'true' && text) {
                onclick = text;
            } else if (onclick === true && !text) {
                onclick = "true";
            }
            element.bindPopup(onclick);
            element.on('click', function(this: { openPopup: any, closePopup: any }) {
                this.openPopup();
            });
        }
        if (!mouseover && !onclick && text) {
            element.bindPopup(text);
            element.on('mouseover', function(this: { openPopup: any, closePopup: any }) {
                this.openPopup();
            }).on('mouseout', function(this: { openPopup: any, closePopup: any }) {
                this.closePopup();
            });
        }
    }
}
