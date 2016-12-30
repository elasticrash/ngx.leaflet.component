"use strict";
var testing_1 = require("@angular/core/testing");
var map_1 = require("./map");
var map_service_1 = require("../services/map.service");
describe('LeafletElement', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [map_1.LeafletElement],
            providers: [{ provide: map_service_1.MapService }]
        });
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.compileComponents();
        }));
    });
    it('works well', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(map_1.LeafletElement);
        fixture.componentInstance.lat = 52.6;
        fixture.detectChanges();
        var el = fixture.debugElement.nativeElement;
        expect(fixture.componentInstance.lat).toBe(52.6);
    }));
});
describe('sub map test', function () {
    it('always fails', function () {
        expect(1).toBe(1);
    });
});
//# sourceMappingURL=map.spec.js.map