import { TestBed, async } from '@angular/core/testing';
import { LeafletElement } from './map';
import { MapService } from '../services/map.service';
describe('LeafletElement', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LeafletElement],
            providers: [{ provide: MapService }]
        }).compileComponents();
    });
    it('works well', async(() => {
        const fixture = TestBed.createComponent(LeafletElement);
        fixture.componentInstance.lat = 52.6;
        fixture.detectChanges();
        const el = fixture.debugElement.nativeElement;
        expect(fixture.componentInstance.lat).toBe(52.6);
    }));
});
describe('sub map test', () => {
    it('never fails', () => {
        expect(1).toBe(1);
    });
});
//# sourceMappingURL=map.spec.js.map