module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-remap-istanbul',
      'karma-webpack'
    ],
    files: [
      { pattern: 'karma-test-pattern.js', watched: false }
    ],
    preprocessors: {
      'karma-test-pattern.js':['webpack']
    },
    exclude: [
      'node_modules/**/*.*'
    ],
    remapIstanbulReporter: {
      reports: {
        html: 'coverage',
        lcovonly: './coverage/coverage.lcov'
      }
    },
    webpackMiddleware: {
      stats: 'errors-only'
    },
    reporters: ['progress', 'karma-remap-istanbul'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true
  });
};