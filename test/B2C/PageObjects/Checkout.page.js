
// const Page = require("../../PageObjects/page");
const Page = require("../../B2B/PageObjects/page");
var dbConnectionB2C = require("../../CommonActions/DatabaseConnection");
var actionwrappers = require("./../../CommonActions/ActionsWrappers");

const assert = require("assert");
class Checkout extends Page {
  
  async wait() {
    await browser.pause(8000);
  }

  async open() {
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

get deliveryAddressSecondIndex(){
   return super.pathByXpath('(//*[@role="radiogroup"]//*[@name="address-select"])[2]');
}

get deliveryAddresses(){
   return super.pathByCss('[name="address-select"]')
}


get loginStepInStepper(){
return super.pathByXpath('(//div/div[1]/button)[1]')
}
get changeLoginBtnInCart(){
   return super.pathByCss('.MuiButton-textPrimary')
}

get logoutAndLoginAnotherAccount(){
   return super.pathByXpath("//div/div[2]/button");
}


get continueBtn(){
   return super.pathByCss('//span[text()="Continue"]')
}

get changePickupAddress() {
   return super.pathByCss(".MuiButton-textPrimary")
}

get otherSellerAddress(){
   return super.pathByXpath('//div[3]//label[2]');
}

//   async signInIconClick() {
//     await this.signInIcon.waitForClickable();
//     await this.signInIcon.click();
//     await this.loginBtnHeader.click();
//   }
//   async login(mobNumber) {
//     await this.mobileNumber.setValue(mobNumber);
//     await this.requestCode.click();
//   }

//   async otpValidation(otp) {
//     await actionwrappers.checkEnableddoubleClickDeleteAndSetValue(
//       await this.oneTimePassCode,
//       otp
//     );
//     await this.loginBtn.waitForClickable();
//     await actionwrappers.checkVisibleClickableMoveAndClick(await this.loginBtn);
//   }

//   async inputOTP(otp) {
//     await actionwrappers.checkEnableddoubleClickDeleteAndSetValue(
//       this.oneTimePassCode,
//       otp
//     );
//     await this.loginBtn.waitForClickable();
//     this.loginBtn.click();
//   }

//   async dbConnection(sqlQuery) {
//     let test;
//     await browser.pause(5000);

//     return new Promise((resolve, reject) => {
//       dbConnectionB2C.query(sqlQuery, (err, res) =>
//         err ? reject(err) : resolve(res)
//       );
//     });
//   }
}

module.exports = new Checkout();



