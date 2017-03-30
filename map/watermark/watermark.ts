import { Component, Input } from '@angular/core';
import * as L from 'leaflet';

@Component({
    moduleId: module.id,
    selector: 'watermark-element',
    templateUrl: 'watermark.html',
    styleUrls: ['watermark.css']
})

export class WatermarkComponent {
    @Input() watermarkUrl: string;

    constructor() { }

    ngOnInit() {
        var self = this;
        if (this.watermarkUrl) {
            L.Control['Watermark'] = <any>{};

            L.Control['Watermark'] = L.Control.extend({
                onAdd: function (map) {
                    var img: any = L.DomUtil.create('img');

                    img.src = self.watermarkUrl;
                    img.style.width = '200px';

                    return img;
                },

                onRemove: function (map) {
                }
            });

            L.control['watermark'] = function (opts) {
                return new L.Control['Watermark'](opts);
            }
        }
    }
}