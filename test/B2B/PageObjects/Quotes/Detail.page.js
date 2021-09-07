const Page = require("../../PageObjects/page");
class Detail extends Page {
    open() {
        super.open('auth/login'); //this will append `login` to the baseUrl to form complete URL
      }
    
      
    
      get CancelQuote() {
        return  super.pathByXpath('//*[@id="simple-menu"]/div[3]/ul/li');
      }

      get CancelReason() {
        return  super.pathById('cm');
      }

      get CancelReasonOk() {
        return  super.pathById('cancelQuote');
      }
    
      get Clone() {
        return  super.pathByXpath('//*[@id="simple-menu"]/div[3]/ul/div/li[1]');
      }

      

      get Download() {
        return  super.pathByXpath('//*[@id="simple-menu"]/div[3]/ul/div/li[2]');
      }
    
      get PlaceOrderBtn() {
        return  super.pathByXpath('//header/div/button[2]');
      }

      get ConfirmPlaceOrder() {
        return  super.pathByXpath('//header/div/div[2]/button[1]');
      }
    
      get EditQuote() {
        return  super.pathByXpath('//header/div/button[1]');
      }
      
      get SaveAsDraft() {
        return  super.pathByXpath('//header/div/div[2]/button[1]');
      }
    
      get Yes() {
        return  super.pathById('yes');
      }
 
      
      get Export() {
        return  super.pathByXpath('//div/div/div[10]/div[1]/div[2]/button');
      }





    };
    module.exports = new Detail();