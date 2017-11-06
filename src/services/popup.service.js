var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
let PopupService = class PopupService {
    constructor() { }
    enablePopup(mouseover, onclick, element, text) {
        if (mouseover && onclick) {
            mouseover = undefined;
            console.warn('you can not use mouseover and onclick at the same time, mouseover is going to be depressed');
        }
        if (mouseover) {
            if (mouseover === 'true' && text) {
                mouseover = text;
            }
            else if (mouseover === true && !text) {
                mouseover = "true";
            }
            element.bindPopup(mouseover);
            element.on('mouseover', function () {
                this.openPopup();
            }).on('mouseout', function () {
                this.closePopup();
            });
        }
        if (onclick) {
            if (onclick === 'true' && text) {
                onclick = text;
            }
            else if (onclick === true && !text) {
                onclick = "true";
            }
            element.bindPopup(onclick);
            element.on('click', function () {
                this.openPopup();
            });
        }
        if (!mouseover && !onclick && text) {
            element.bindPopup(text);
            element.on('mouseover', function () {
                this.openPopup();
            }).on('mouseout', function () {
                this.closePopup();
            });
        }
    }
};
PopupService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], PopupService);
export { PopupService };
//# sourceMappingURL=popup.service.js.map