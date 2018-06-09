process.env.CHROME_BIN = require('puppeteer').executablePath()

module.exports = function (config) {
    config.set({
        basePath: '../',
        files: [
            './src/scripts/**/*.js',
            './test/**/*.js'
        ],
        exclude: [
            './test/**/*_sass.js'
        ],

        frameworks: ['browserify', 'mocha', 'chai'],
        plugins: [
            'karma-chrome-launcher',
            'karma-coverage',
            'karma-coveralls',
            'karma-chai',
            'karma-mocha',
            'karma-mocha-reporter',
            'karma-browserify',
        ],

        preprocessors: {
            './src/scripts/**/*.js': ['browserify'],
            './test/**/*.js': ['browserify']
        },
        browserify: {
            debug: true,
            transform: [
                [
                  "babelify",
                  {
                    "presets": [
                      "env"
                    ]
                  }
                ]
            ]
        },
        reporters: ['coverage', 'coveralls', 'mocha'],
        coverageReporter: {
            reporters: [{type: 'text'}, {
                type: 'html',
                dir: 'coverage',
                subdir: 'html'
            }, {
                type: 'lcovonly',
                dir: 'coverage',
                subdir: 'lcov'
            }]
        },
        browsers: ['Chrome', 'ChromeHeadless', 'ChromeHeadlessNoSandbox'],
        customLaunchers: {
            ChromeHeadlessNoSandbox: {
              base: 'ChromeHeadless',
              flags: ['--no-sandbox']
            }
        },
        autoWatch: false,
        concurrency: Infinity
    })
}
