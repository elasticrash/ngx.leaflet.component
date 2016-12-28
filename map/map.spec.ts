import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { LeafletElement } from './map';


describe('BannerComponent (inline template)', () => {

  let comp:    LeafletElement;
  let fixture: ComponentFixture<LeafletElement>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ LeafletElement ], // declare the test component
    });

    fixture = TestBed.createComponent(LeafletElement);

    comp = fixture.componentInstance; // BannerComponent test instance

    de = fixture.debugElement.query(By.css('map-container'));
    el = de.nativeElement;
  });
});