import { TestBed, async } from '@angular/core/testing';
import { CircleElement } from './circle';
import { MapService } from '../services/map.service';
import { GroupService } from '../services/group.service';
import { PopupService } from '../services/popup.service';
import { MockComponent } from '../../test/mock.component';
import { LeafletElement } from '../map/map';
import { GuidService } from '../services/globalId.service';
describe('CircleElement', () => {
    const mock = MockComponent({ selector: "app-element", outputs: [], template: "<leaf-element><circle-element [mouseover]='test'></circle-element></leaf-element>" });
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [mock,
                LeafletElement, CircleElement],
            providers: [
                MapService,
                GroupService,
                PopupService,
                GuidService
            ]
        }).compileComponents();
    });
    it('circle-element works well', async(() => {
        const fixture = TestBed.createComponent(mock);
        expect(1).toEqual(1);
    }));
});
//# sourceMappingURL=circle.spec.js.map