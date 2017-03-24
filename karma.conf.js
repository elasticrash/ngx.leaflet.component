module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            { pattern: 'test/tsloader.js', watched: false },
        ],
        exclude: [
        ],
        preprocessors: {
            'test/tsloader.js': ['webpack', 'sourcemap','coverage'],
        },
        webpack: require('./webpack.config')({ env: 'test' }),
        reporters: ['spec', 'coverage', 'remap-coverage'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_DEBUG,
        autoWatch: true,
        browsers: ['PhantomJS'],
        coverageReporter: {
            reporters: [
                { type: 'json', subdir: '.', file: 'coverage.json' },
                { type : 'text-summary'},
            ]
        },
        singleRun: true,
        concurrency: Infinity
    });
};