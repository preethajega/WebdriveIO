const Page = require("../../PageObjects/page");
class Landingpage  extends Page {
    open() {
        super.open('auth/login'); //this will append `login` to the baseUrl to form complete URL
      }
      get Filterbutton() {
        return  super.pathByXpath('//div[2]/div/div/div/div[1]/button');
     }

     get QuoteName() {
      return  super.pathById('qname');
   }

   get QuoteID() {
    return  super.pathById('qid');
 }

 get ApplyButton() {
  return  super.pathById('/html/body/div[5]/div[3]/header/div/button[2]');
}

    };

    module.exports = new Landingpage ();