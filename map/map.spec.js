"use strict";
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var map_1 = require("./map");
describe('LeafletElement', function () {
    var comp;
    var fixture;
    var de;
    var el;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [map_1.LeafletElement],
        });
        fixture = testing_1.TestBed.createComponent(map_1.LeafletElement);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('map-container'));
        el = de.nativeElement;
    });
    it('always top map fails', function () {
        fixture.detectChanges();
        expect(el.textContent).toContain("");
    });
});
describe('sub map test', function () {
    it('always fails', function () {
        expect(1).toBe(1);
    });
});
//# sourceMappingURL=map.spec.js.map