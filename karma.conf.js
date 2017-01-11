module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', 'source-map-support'],
        files: [
            { pattern: 'test/tsloader.js', watched: false },
        ],
        exclude: [
        ],
        preprocessors: {
            'test/tsloader.js': ['webpack', 'coverage'],
        },
        webpack: require('./webpack.config')({ env: 'test' }),
        reporters: ['spec', 'coverage', 'remap-coverage'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        coverageReporter: {
            reporters: [
                { type: 'json', subdir: '.', file: 'coverage.json' }
            ]
        },
        singleRun: true,
        concurrency: Infinity
    });
};