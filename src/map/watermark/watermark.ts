import { Component, Input, Optional, OnInit } from '@angular/core';
import { MapService } from '../../services/map.service';
import { LeafletElement } from '../map';
import * as L from 'leaflet';

@Component({
    selector: 'watermark-element',
    template: ``,
    styles: ['']
})

export class WatermarkControl implements OnInit {
    @Input() public url: string;
    @Input() public imagewidth: number;
    @Input() public imageheight: number;

    constructor(
        private mapService: MapService,
        @Optional() private leafletElement?: LeafletElement) { }

    public ngOnInit() {
        const self = this;
        if (this.LeafletElement) {
            const map = this.mapService.getMap();
            if (this.url) {
                L.Control['Watermark'] = {} as any;

                L.Control['Watermark'] = L.Control.extend({
                    onAdd: (fmap) => {
                        const basediv: any = L.DomUtil.create('div', 'watermark');

                        const howManyInX = Math.ceil(fmap.getSize().x / self.imagewidth);
                        const howManyInY = Math.ceil(fmap.getSize().y / self.imageheight);

                        const numberOfLogo = howManyInX * howManyInY;

                        let i = 0;
                        for (i; i < numberOfLogo; i++) {
                            const img: any = L.DomUtil.create('img', 'watermark-elements', basediv);
                            img.src = self.url;
                            img.style.width = self.imagewidth + 'px';
                        }
                        return basediv;
                    },

                    onRemove: (fmap) => {
                        // TODO
                    }
                });

                L.control['watermark'] = (opts) => {
                    return new L.Control['Watermark'](opts);
                };
            }

            L.control['watermark']({ position: "bottomleft" }).addTo(map);
        }
    }
}
