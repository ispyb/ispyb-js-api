// Karma configuration
// Generated on Thu Jan 28 2016 10:34:36 GMT+0100 (Romance Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: 'C:/Users/bsa/Documents/ISDD/apache-tomcat-8.0.32/webapps/ispyb-js-api',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['browserify','qunit'],
    //frameworks: ['qunit'],


    // list of files / patterns to load in the browser
    files: [
        'bower_components/jquery/dist/jquery.js'
        ,'min/ispyb-js-api.min.js'
        ,'min/*.js'
        ,'js/*.js'
        ,'js/exi/*.js'
        ,'js/exi/**/*.js'
        ,'js/mx/*.js'
        ,'js/mx/**/*.js'
        ,'js/proposal/*.js'
        ,'js/proposal/**/*.js'
        ,'js/saxs/*.js'
        ,'js/saxs/**/*.js'
        ,'qutest/config.js'
        ,'qutest/proposaldataadapter.tests.js'
        ,'qutest/macromoleculesaxsdataadapter.tests.js'
        ,'qutest/sessiondataadapter.tests.js'
        ,'qutest/shippingdataadapter.tests.js'
        ,'qutest/dewardataadapter.tests.js'

    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'qutest/*.js': [ 'browserify' ]
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


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
