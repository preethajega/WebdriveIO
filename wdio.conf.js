const url = require('./url')
const allure = require('allure-commandline')

exports.config = {
    specs: [
        //  './test/B2B/Specs/setting/company/AddBranch.spec.js',
        // './test/B2B/Specs/setting/company/AddWarehouse.spec.js',
        // './test/B2B/Specs/setting/company/company.spec.js',
        // './test/B2B/Specs/setting/API.spec.js',
        // './test/B2B/Specs/setting/approvals.spec.js',
        // './test/B2B/Specs/setting/appSetup.spec.js',
        // './test/B2B/Specs/setting/businessunit.spec.js',
        // './test/B2B/Specs/setting/competitors.spec.js',
        // './test/B2B/Specs/setting/customization.spec.js',
        // './test/B2B/Specs/setting/General.spec.js',
        // './test/B2B/Specs/setting/integrations.spec.js',
        // './test/B2B/Specs/setting/moduleAuthorization.spec.js',
        // './test/B2B/Specs/setting/profile.spec.js',
        // './test/B2B/Specs/setting/tag.spec.js',
        // './test/B2B/Specs/setting/tax.spec.js',
        // './test/B2B/Specs/setting/team.spec.js',
        // './test/B2B/Specs/setting/terms.spec.js',
        // './test/B2B/Specs/setting/zone.spec.js',
        //  './test/B2B/Specs/Customers/customer.spec.js',
        //  './test/B2B/Specs/salesModule/Quotes/Buyer/RFQBuyerQuote.spec.js',
         //'./test/B2B/Specs/salesModule/Quotes/seller/CustomProductDialog.js'
        //  './test/B2B/Specs/salesModule/Quotes/seller/CustomProductDialog.js',
        //'./test/B2B/Specs/salesModule/Quotes/Seller/RFQSellerQuote.spec.js'
        //  './test/B2B/Specs/Cart/Cart.spec.js',
        // './test/B2B/Specs/salesModule/Quotes/seller/Quotefilter.spec.js'
        // './test/B2B/Specs/salesModule/Quotes/seller/Orderfilter.spec.js'
        // './test/B2B/Specs/Orders/Reorder.spec.js'
        // './test/B2B/Specs/Orders/Order.spec.js'        
        // './test/B2B/Specs/salesModule/Calculation/summary.spec.js'
    ],
     //Patterns to exclude
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 15,
    capabilities: [{
      maxInstances: 1,
      browserName: 'chrome',
      'goog:chromeOptions': {
          prefs: {
              'profile.managed_default_content_settings.popups' : 1,
              'profile.managed_default_content_settings.notifications' : 1,
          }
      }

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
    baseUrl: url.dev,
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
     reporters: [['allure', {
       outputDir: 'allure-results',
       disableWebdriverStepsReporting: true,
       disableWebdriverScreenshotsReporting: false,
     }]],
// }
  mochaOpts: {
        ui: 'bdd',
        timeout: 1200000,
        require: ['@babel/register'],
    },
    afterStep: async function (step, scenario, { error, duration, passed }, context) {
        if (error) {
          await browser.takeScreenshot();
        }
      },

      onComplete: function() {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    }

}








