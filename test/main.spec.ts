import 'core-js'; // ES6 + reflect-metadata
// zone.js
import 'zone.js/dist/zone';
import 'zone.js/dist/proxy';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/async-test';
import 'zone.js/dist/jasmine-patch';

// TestBed initialization
import { TestBed } from '@angular/core/testing';
import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
);

// load all specs in ./src .
// (require as any)('../map/map.spec.js');
// (require as any)('../test/test.spec.js');

const a = (require as any).context('./', true, /\.spec\.js$/);
const b = (require as any).context('../map', true, /\.spec\.js$/);

a.keys().map(a)
b.keys().map(b)
