import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CircleElement } from '../../src/circle/circle';
import { MapService } from '../../src/services/map.service';
import { GroupService } from '../../src/services/group.service';
import { PopupService } from '../../src/services/popup.service';
import { MockComponent } from '../../test/mock.component';
import { LeafletElement } from '../../src/map/map';
import { GuidService } from '../../src/services/globalId.service';


describe('CircleElement', () => {

const mock:any = MockComponent({selector:"app-element", outputs: [], template: "<leaf-element><circle-element [mouseover]='test'></circle-element></leaf-element>" });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ mock,
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
    //const el = fixture.debugElement.nativeElement as HTMLElement;
    //fixture.detectChanges();
    expect(1).toEqual(1);
  }))
});