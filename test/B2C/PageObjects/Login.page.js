const Page = require("../../B2B/PageObjects/page");
var dbConnectionB2C = require("../../CommonActions/DatabaseConnection");
var actionwrappers = require("./../../CommonActions/ActionsWrappers");

const assert = require("assert");
class LoginPage extends Page {
  async open() {
    super.b2cPath(""); //this will append `login` to the baseUrl to form complete URL
  }
  async wait() {
    await browser.pause(8000);
  }

  get image() {
    return $("(//div/div/div/div[1]/span)[2]");
  }
  get signInIcon() {
    return $(
      "[class='MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-edgeEnd']"
    );
  }
  get loginBtnHeader() {
    return $("ul[role='menu'] li");
  }
  // get () {
  //   return $("ul[role='menu'] li");
  // }
  get cartIcon() {
    return $("//header/div/div/div[3]/div[2]/button");
  }

  get placeOrderCart() {
    return $(".MuiButton-containedPrimary");
  }

  get signUpInCart() {
    return $(" div button.MuiButton-containedPrimary");
  }

  get mobileNumber() {
    return $(
      '[class="MuiInputBase-input MuiInput-input MuiInputBase-inputMarginDense MuiInput-inputMarginDense"]'
    );
  }

  get requestCode() {
    return $(
      '[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedSecondary MuiButton-containedSizeLarge MuiButton-sizeLarge MuiButton-fullWidth"]'
    );
  }

  get loginBtn() {
    return $(
      // '//span[contains(text(), "Login")]/ancestor::button'
      "//div/div[2]/div[2]/button[1]"
    );
  }
  get oneTimePassCode() {
    return $(
      "/html/body/div[2]/div[3]/div/div/div/div[2]/div[1]/div[2]/div/input"
    );
  }

  get userIcon() {
    return $('[aria-label="menu"]');
  }
  get ordersMenu() {
    return $("//nav/a[1]");
  }
  get emptyOTPValidationMesge() {
    return super.pathByXpath("//div[2]/div[1]/div[2]/p");
  }
  get resendOTP() {
    return super.pathByXpath("//div/div[2]/div[2]/button[2]/span[1]");
  }

  async signInIconClick() {
    await this.signInIcon.waitForClickable();
    await this.signInIcon.click();
    await this.loginBtnHeader.click();
  }
  async login(mobNumber) {
    await this.mobileNumber.setValue(mobNumber);
    await this.requestCode.click();
  }

  async otpValidation(otp) {
    await actionwrappers.checkEnableddoubleClickDeleteAndSetValue(
      await this.oneTimePassCode,
      otp
    );
    await this.loginBtn.waitForClickable();
    await actionwrappers.checkVisibleClickableMoveAndClick(await this.loginBtn);
  }

  async inputOTP(otp) {
    await actionwrappers.checkEnableddoubleClickDeleteAndSetValue(
      this.oneTimePassCode,
      otp
    );
    await this.loginBtn.waitForClickable();
    this.loginBtn.click();
  }

  async dbConnection(sqlQuery) {
    let test;
    await browser.pause(5000);

    return new Promise((resolve, reject) => {
      dbConnectionB2C.query(sqlQuery, (err, res) =>
        err ? reject(err) : resolve(res)
      );
    });
  }
}

module.exports = new LoginPage();
