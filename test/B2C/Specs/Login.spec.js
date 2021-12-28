var dbConnectionB2C = require("../../CommonActions/DatabaseConnection");
var LoginPage = require("../PageObjects/Login.page");
const loginInput = require("../Input/Login.io");
var addressPageObject = require("./../PageObjects/Address.page");
var actionwrappers = require("./../../CommonActions/ActionsWrappers");
var addAddress = require("./../CommonFunctions/AddAddress");
const assert = require("assert");


describe("Login page", () => {
  let otp;
  let test;

  it("Opening and clicking login button", async () => {
    await LoginPage.open();
    await LoginPage.wait();
  });
  it("Mobile number Validation", async () => {
   
    // Validation for empty mobile number
    await LoginPage.signInIconClick();
    await actionwrappers.checkVisibleClickableMoveAndClick(
      LoginPage.requestCode
    );
    await actionwrappers.eleDisplayed(LoginPage.mobileNoAlert);
    // Validation for incomplete mobile number
    await actionwrappers.checkEnableddoubleClickDeleteAndSetValue(
      LoginPage.mobileNumber,
      "84893"
    );
    await actionwrappers.checkVisibleClickableMoveAndClick(
      LoginPage.requestCode
    );
    assert.strictEqual(
      await LoginPage.enterMobileValidation.getText(),
      "Not a valid number"
    );

    // Validation for more than 10 characters mobile number
    await actionwrappers.checkEnableddoubleClickDeleteAndSetValue(
      LoginPage.mobileNumber,
      "89787879346767678989"
    );
    await actionwrappers.checkVisibleClickableMoveAndClick(
      LoginPage.requestCode
    );
    assert.strictEqual(
      await LoginPage.enterMobileValidation.getText(),
      "Not a valid number"
    );

    // Validation for string as input to mobile number
    await actionwrappers.checkEnableddoubleClickDeleteAndSetValue(
      LoginPage.mobileNumber,
      "e"
    );
    await actionwrappers.checkVisibleClickableMoveAndClick(
      LoginPage.requestCode
    );
    assert.strictEqual(
      await LoginPage.enterMobileValidation.getText(),
       "This is required."
    );
  });
  it("Valid Login Scenario", async () => {
    await actionwrappers.checkEnableddoubleClickDeleteAndSetValue(
      LoginPage.mobileNumber,
      ""
    );
    await LoginPage.login(loginInput.validMobile);
  });

  it("OTP Validation", async () => {
        await LoginPage.otpValidation("",  "One time password is required");
    assert.strictEqual(
      await LoginPage.emptyOTPValidationMesge.getText(),
      "One time password is required"
    );
    await LoginPage.otpValidation("0000", "Invalid one time password");
    await LoginPage.loginBtn.click();
    await browser.pause(2000);
    assert.strictEqual(await LoginPage.emptyOTPValidationMesge.getText(),"Invalid one time password");
    await LoginPage.otpValidation("88888888", "Invalid one time password");
    assert.strictEqual(await LoginPage.emptyOTPValidationMesge.getText(),"Invalid one time password");
    await LoginPage.otpValidation("asgagsh", "Invalid one time password");
    assert.strictEqual(await LoginPage.emptyOTPValidationMesge.getText(),"Invalid one time password");
  });

  it("DB Connection", async () => {
    browser.pause(3000);
    var sql = "SELECT otp FROM Users where ID=90;";
    dbConnectionB2C.connect();
    test = await LoginPage.dbConnection(sql).then((res) => {
      otp = res ? res[0].otp : null;
      return otp;
    });
    // dbConnectionB2C.end();
  });

  it("Resend otp", async () => {
    await actionwrappers.checkVisibleClickableMoveAndClick(LoginPage.resendOTP);
  });
  it("Validation of otp with previously generated otp", async () => {
    await actionwrappers.checkVisibleClickableMoveAndClick(
      LoginPage.requestCode
    );
    await browser.pause(3000);
    await LoginPage.inputOTP(otp);
    assert.strictEqual(
      await LoginPage.emptyOTPValidationMesge.getText(),
      "Invalid one time password"
    );
  });

  it("DB Connection", async () => {
    await browser.pause(3000);
    var sql = "SELECT otp FROM Users where ID=90;";
        test = await LoginPage.dbConnection(sql).then((res) => {
      otp = res ? res[0].otp : null;
      return otp;
    });
    dbConnectionB2C.end();
  });

  it("one time passcode", async () => {
    await browser.pause(1000);
        await LoginPage.inputOTP(otp);
    await browser.pause(1000);
    
  });

  // it("Add Address from checkout", async () => {
  //   await actionwrappers.checkVisibleClickableMoveAndClick(
  //     addressPageObject.cartIcon
  //   );
  //   await actionwrappers.checkVisibleClickableMoveAndClick(
  //     addressPageObject.placeOrderCart
  //   );
    // addAddress.addAddressValid();
  // });
});
