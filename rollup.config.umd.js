import resolve from 'rollup-plugin-node-resolve';
import sourcemaps from 'rollup-plugin-sourcemaps';
import commonjs from 'rollup-plugin-commonjs';

const globals = {
    '@angular/core': 'ng.core',
    '@angular/http': 'ng.http',
    'rxjs/Observable': 'Rx',
    'rxjs/add/operator/map': 'Rx.Observable.prototype',
    'rxjs/add/operator/catch': 'Rx.Observable.prototype',
    'leaflet': 'L'
};

export default {
    external: Object.keys(globals),
    plugins: [resolve(), sourcemaps(), commonjs({
        include: ['node_modules/rxjs/**']
    })],
    onwarn: () => { return },
    output: {
        format: 'umd',
        name: 'ng.ngxLeafletComponents',
        globals: globals,
        external: [
            '@angular/core',
            '@angular/http',
            'rxjs/Observable',
            'rxjs/add/operator/map',
            'rxjs/add/operator/catch',
            'leaflet'
        ],
        sourcemap: false,
        exports: 'named'
    }
}