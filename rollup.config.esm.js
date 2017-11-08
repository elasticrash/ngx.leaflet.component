import sourcemaps from 'rollup-plugin-sourcemaps';

const path = require('path');

export default {
    output: {
        format: 'es',
        sourcemap: true
    },
    plugins: [
        sourcemaps()
    ],
    onwarn: () => { return }
}