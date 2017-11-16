import sourcemaps from 'rollup-plugin-sourcemaps';
import commonjs from 'rollup-plugin-commonjs';

const path = require('path');

export default {
    output: {
        format: 'es',
        sourcemap: false
    },
    plugins: [
        sourcemaps()
        , commonjs({
            include: ['node_modules/rxjs/**']
        })],
    onwarn: () => { return }
}