const Page = require("../../PageObjects/page");
class Checkout extends Page {
    open() {
        super.b2cPath('/'); //this will append `login` to the baseUrl to form complete URL
      }

      get searchButtonHeader() {
        return  super.pathByXpath('//div[1]/input');
     }

     get results() {
        return  super.pathByXpath('//header/div/div/div[2]/div/div[2]/div/div/div/div[1]');
     }

     get AddToCartInDetailPage() {
        return  super.pathByXpath('(//button/span[contains(text(),"Add To cart")])[1]');
     }

     get BuyNowInDetailPage() {
        return  super.pathByXpath('(//button/span[contains(text(),"Buy now")])[1]');
     }

     get qntyAfterAddToCart() {
        return  super.pathByCss('div.MuiInputBase-formControl input');
     }

     get cartIcon() {
        return  super.pathByXpath('//header/div/div/div[3]/div[2]/button');
     }

     get placeOrderCart() {
        return  super.pathByXpath('.MuiButton-containedPrimary');
     }

     get signUpInCart() {
      return  super.pathByCss(' div button.MuiButton-containedPrimary');

   }

   get mobileNumber() {
      return  super.pathByCss('[class="MuiInputBase-input MuiInput-input MuiInputBase-inputMarginDense MuiInput-inputMarginDense"]');
   }

   get requestCode() {
      return  super.pathByCss('[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedSecondary MuiButton-containedSizeLarge MuiButton-sizeLarge MuiButton-fullWidth"]');
   }

   get Save() {
      return  super.pathByXpath('//*[@id="wrapped-tabpanel-1"]/div/header/div/button[2]');
   }

   get DeleteRange() { 
      return  super.pathById('deleteRange');
   }

   get ClickUserGroupTab() {
      return  super.pathById('wrapped-tab-0');
   }

   get DeleteGroup() {
      return  super.pathById('removeUserGroup');
   }

   get moreoption() {
      return  super.pathById('//header/div/button[2]');
   }

   get DeleteApprovalGroup() {
      return  super.pathById('');
   }

   get SureDelete() {
      return  super.pathById('yes');
   }

    };

    module.exports = new Checkout();