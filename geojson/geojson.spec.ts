import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { GeoJsonElement } from './geojson';
import { MapService } from '../services/map.service';
import { GroupService } from '../services/group.service';
import { PopupService } from '../services/popup.service';
import { GuidService } from '../services/globalId.service';
import { HelperService } from '../services/helper.service';


describe('GeoJsonElement', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [GeoJsonElement],
            providers: [
                { provide: MapService },
                { provide: GroupService },
                { provide: PopupService },
                { provide: GuidService },
                { provide: HelperService }]
        });

        beforeEach(async(() => {
            TestBed.compileComponents();
        }));
    });

    it('geojson parsed', async(() => {
        const fixture = TestBed.createComponent(GeoJsonElement);
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