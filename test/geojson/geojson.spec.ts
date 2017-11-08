import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { GeoJsonElement } from '../../src/geojson';
import { MapService } from '../../src//services/map.service';
import { GroupService } from '../../src//services/group.service';
import { PopupService } from '../../src//services/popup.service';
import { GuidService } from '../../src//services/globalId.service';
import { HelperService } from '../../src//services/helper.service';
import { LeafletElement } from '../../src/map/map';
import { LeafletGroup } from '../../src/group/group';
import { MockComponent } from '../../test/mock.component';

describe('GeoJsonElement', () => {

    const g = {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [375000, 4202000]
            },
            "properties": {
                "prop0": "value0"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [[376000, 4202500], [377000, 4203500]]
            },
            "properties": {
                "prop0": "value1"
            }
        }]
    };
    const mock: any = MockComponent({ selector: "app-element", outputs: [], template: "<leaf-element [crs]=\"'L.CRS.EPSG3395'\" ><geojson-element [geojson]='" + JSON.stringify(g) + "'></geojson-element></leaf-element>" });

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

    it('geojson component test', async(() => {
        const appMock = TestBed.createComponent(mock);
        appMock.detectChanges();
        const el = appMock.debugElement.nativeElement as HTMLElement;
        expect(el.tagName).toEqual("DIV");
    }));
});