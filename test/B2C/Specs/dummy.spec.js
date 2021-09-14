var dbConnectionB2C = require("../../CommonActions/DatabaseConnection");
var LoginPage = require("../PageObjects/Login.page");

const loginInput = require("../Input/Login.io");
var CheckoutPageObject = require("./../PageObjects/Checkout.page");
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
    var enterMobileValidation = $("//div[2]/div[1]/div/div/p");
    // Validation for empty mobile number
    await LoginPage.signInIconClick();
  });
  it("Valid Login Scenario", async () => {
    await actionwrappers.checkEnableddoubleClickDeleteAndSetValue(
      LoginPage.mobileNumber,
      ""
    );
    await LoginPage.login(loginInput.validMobile);
  });

  it("DB Connection", async () => {
    browser.pause(3000);
    var sql = "SELECT otp FROM Users where ID=90;";
    dbConnectionB2C.connect();
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

  it("click cart icon", async () => {
    await actionwrappers.checkVisibleClickableMoveAndClick(
      await CheckoutPageObject.cartIcon
    );
    await actionwrappers.checkVisibleClickableMoveAndClick(
      await CheckoutPageObject.placeOrderCart
    );
    let deliveryAddressCard = await $(
      '(//*[@role="radiogroup"]//*[@name="address-select"])[2]'
    );

    let deliveryAddressCardExists = await deliveryAddressCard.isExisting();

    if (deliveryAddressCardExists) {
      await deliveryAddressCard.click();
    }

    // change seller address
    await actionwrappers.checkVisibleClickableMoveAndClick(
        await CheckoutPageObject.continueBtn
      );

      await actionwrappers.checkVisibleClickableMoveAndClick(
        await CheckoutPageObject.changePickupAddress
      );

      await actionwrappers.checkVisibleClickableMoveAndClick(
        await CheckoutPageObject.otherSellerAddress
      );

      await actionwrappers.checkVisibleClickableMoveAndClick(
        await CheckoutPageObject.continueBtn
      );
    // change login starts here

    // await actionwrappers.checkVisibleClickableMoveAndClick(
    //   await CheckoutPageObject.loginStepInStepper
    // );
    // await actionwrappers.checkVisibleClickableMoveAndClick(
    //   await CheckoutPageObject.changeLoginBtnInCart
    // );
    // await actionwrappers.checkVisibleClickableMoveAndClick(
    //   await CheckoutPageObject.logoutAndLoginAnotherAccount
    // );
    // await LoginPage.signInIconClick();
    // // await actionwrappers.checkVisibleClickableMoveAndClick(await CheckoutPageObject.changePickupAddress);
  });
});
