const url = require('./url')

exports.config = {
    specs: [
        // './test/B2B/Specs/salesModule/summaryPage/sample.spec.js',
        //  './test/B2B/Specs/salesModule/summary page/sample.spec.js',
        //  './test/B2B/Specs/setting/team.spec.js',
        //  './test/B2B/Specs/setting/*',
         './test/B2B/Specs/Cart/Cart.spec.js',


        
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 15,
    capabilities: [{
    
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    //
    
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'info',
    
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    baseUrl: url.dev3,
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    services: ['chromedriver'],
    
    framework: 'mocha',
    reporters: ['spec'],
  mochaOpts: {
        ui: 'bdd',
        timeout: 1200000,
        require: ['@babel/register'],
    },

}
