import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { GeoJsonElement } from './geojson';
import { MapService } from '../services/map.service';
import { GroupService } from '../services/group.service';
import { PopupService } from '../services/popup.service';
import { GuidService } from '../services/globalId.service';
import { HelperService } from '../services/helper.service';
import { LeafletElement } from '../map/map';
import { LeafletGroup } from '../group/group';
import { MockComponent } from '../test/mock.component';

describe('GeoJsonElement', () => {

let mock = MockComponent({selector:"app-element", template: "<leaf-element><geojson-element></geojson-element></leaf-element>" });

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [mock, LeafletElement, GeoJsonElement],
             providers: [
             MapService,
             GroupService,
             PopupService,
             GuidService,
             HelperService 
            ]
        }).compileComponents();
    });

    it('geojson parsed', async(() => {
        const fixture = TestBed.createComponent(mock);
        fixture.componentInstance.geojson = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [102.0, 0.5]
                },
                "properties": {
                    "prop0": "value0"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [102.0, 0.0],
                        [103.0, 1.0],
                        [104.0, 0.0],
                        [105.0, 1.0]
                    ]
                },
                "properties": {
                    "prop0": "value0",
                    "prop1": 0.0
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [100.0, 0.0],
                            [101.0, 0.0],
                            [101.0, 1.0],
                            [100.0, 1.0],
                            [100.0, 0.0]
                        ]
                    ]
                },
                "properties": {
                    "prop0": "value0",
                    "prop1": {
                        "this": "that"
                    }
                }
            }]
        };
        fixture.detectChanges();
        const el = fixture.debugElement.nativeElement as HTMLElement;
        expect(fixture.componentInstance.geojson.features[0].geometry.type).toBe("Point");
    }))
});