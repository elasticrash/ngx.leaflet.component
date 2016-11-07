"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var PopupService = (function () {
    function PopupService() {
    }
    PopupService.prototype.enablePopup = function (mouseover, onclick, element) {
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
            });
        }
    };
    PopupService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PopupService);
    return PopupService;
}());
exports.PopupService = PopupService;
//# sourceMappingURL=popup.service.js.map