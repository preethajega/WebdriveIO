const Page = require("../../PageObjects/page");
class Landingpage  extends Page {
    open() {
        super.open('auth/login'); //this will append `login` to the baseUrl to form complete URL
      }
      get quoteFilter() {
        return  super.pathById('quotefilter')
      }
      get exportQuote() {
        return  super.pathById('exportQuote');
        }
  

     get QuoteName() {
      return  super.pathByXpath('(//*[contains(@class,"MuiTableCell-sizeSmall")])[11]');
   }

   get QuoteID() {
    return  super.pathByXpath('(//*[contains(@class,"MuiTableCell-sizeSmall")])[12]');
 }

 

    };

    module.exports = new Landingpage ();