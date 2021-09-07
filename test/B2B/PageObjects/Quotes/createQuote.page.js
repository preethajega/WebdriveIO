const Page = require("../../PageObjects/page");
class CreateQuote extends Page {
    open() {
        super.open('auth/login'); //this will append `login` to the baseUrl to form complete URL
      }

      get CartButton() {
         return  super.pathByXpath('//header/div/div/div/div[3]/button[1]');
      }

      get Cartempty() {
         return  super.pathByXpath('//*[@id="root"]/div[2]/div/div[1]/div/div[1]/div/h4');
      }

      get customproductBtn () {
        return  super.pathById('acp');
     }
  
  



     get emptyCartSearch() {
        return  super.pathByXpath('//*[@id="root"]/div[2]/div/div[1]/div/div[2]/div/div/div/input');
     }

     get emptyCartsearchedproduct() {
        return  super.pathByXpath('//div[1]/div/div[2]/div/div[2]/div/div/ul/div[1]');
     }

     get Cartsearch() {
        return  super.pathByXpath('//div[1]/div/div[1]/div[1]/div[2]/div[1]/div/div/div/input');
     }

     get productSearched() {
        return  super.pathByXpath('//div/div/ul/div[2]/div');
     }

     get RequireDate() {
      return  super.pathByName('customerRequiredDate');
    }
    
    get nextmonth() {
    return  super.pathByXpath('/html/body/div[6]/div[3]/div/div[2]/div[1]/div[1]/button[2]');
    }
    
    get Date() {
    return  super.pathByXpath('/html/body/div[6]/div[3]/div/div[2]/div[2]/div/div[4]/div[4]/button');
    }

    
     get QuoteName() {
      return  super.pathById('name');
   }

   get SaveDraftok() {
      return  super.pathById('editDialogButton');
   }

   
    get selectbuyer() {
        return  super.pathById('asynchronous-demo');
     }

     
    };

    module.exports = new CreateQuote();