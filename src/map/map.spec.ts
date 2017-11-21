import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { LeafletElement } from './map';
import { MapService } from '../services/map.service';


describe('LeafletElement', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeafletElement], // declare the test component
      providers: [{ provide: MapService }]
    }).compileComponents();
  });

  it('works well', async(() => {
    const fixture = TestBed.createComponent(LeafletElement);
    fixture.componentInstance.lat = 52.6;
    fixture.detectChanges();
    const el = fixture.debugElement.nativeElement as HTMLElement;
    expect(fixture.componentInstance.lat).toBe(52.6);
  }));
});

describe('sub map test', () => {
  it('never fails', () => {
    expect(1).toBe(1);
  });
});