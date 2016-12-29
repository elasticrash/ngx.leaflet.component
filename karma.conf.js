// Karma configuration
// Generated on Thu Jun 16 2016 11:08:35 GMT+0100 (GMT Summer Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    
    // plugins needed for karma to work
    plugins: ['karma-systemjs', 'karma-jasmine', 'karma-chrome-launcher', 'karma-spec-reporter'],

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['systemjs', 'jasmine'],
    proxies: {
      '/': '/base',
    },
    // need to set up SystemJS config for Karma
    systemjs : {
      configFile: 'systemjs.config.js',
      
      includeFiles: [
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/zone.js/dist/zone.js'
      ],
      
      serveFiles: [
        'node_modules/@angular/**/*.js',
        'node_modules/rxjs/**/*.js',
        'map/**/*.js'
      ],
      
      config: {
        paths: {
          'systemjs': '/node_modules/systemjs/dist/system.src.js',
          'system-polyfills': '/node_modules/systemjs/dist/system-polyfills.src.js',
          'typescript': '/node_modules/typescript/lib/typescript.js',
          'rxjs' : '/node_modules/rxjs/index.js',
          'traceur': '/node_modules/traceur/dist/commonjs/traceur.js',
          'reflect-metadata' : '/node_modules/reflect-metadata/Reflect.js',
          '@angular': '/node_modules/@angular/**/*.js',
        }
      },
      
    },


    // list of files / patterns to load in the browser
    files: [
      'node_modules/reflect-metadata/Reflect.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/@angular/**/*.js',
      'node_modules/rxjs/**/*.js',
      'map/**/*.spec.js'
    ],


    // list of files to exclude
    exclude: [
      'node_modules/rxjs/tools/*.js',
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}