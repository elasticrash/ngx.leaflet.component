"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("core-js");
require("zone.js/dist/zone");
require("zone.js/dist/long-stack-trace-zone");
require("zone.js/dist/proxy.js");
require("zone.js/dist/sync-test");
require("zone.js/dist/jasmine-patch");
require("zone.js/dist/async-test");
require("zone.js/dist/fake-async-test");
require("leaflet/dist/leaflet");
__karma__.loaded = function () { };
Promise.all([
    System.import('@angular/core/testing'),
    System.import('@angular/platform-browser-dynamic/testing')
])
    .then(function (_a) {
    var testing = _a[0], testingBrowser = _a[1];
    testing.getTestBed().initTestEnvironment(testingBrowser.BrowserDynamicTestingModule, testingBrowser.platformBrowserDynamicTesting());
})
    .then(function () { return require.context('../map', true, /\.spec\.ts/); })
    .then(function (context) { return context.keys().map(context); })
    .then(function () { return require.context('../geojson', true, /\.spec\.ts/); })
    .then(function (context) { return context.keys().map(context); })
    .then(function () { return require.context('../circle', true, /\.spec\.ts/); })
    .then(function (context) { return context.keys().map(context); })
    .then(__karma__.start, __karma__.error);
//# sourceMappingURL=main.test.js.map