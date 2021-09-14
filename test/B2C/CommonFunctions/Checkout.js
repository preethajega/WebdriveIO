var actionwrappers = require("./../../CommonActions/ActionsWrappers").default;
var CheckoutPageObjects = require("./../PageObjects/Address.page");
var addressInput = require("./../Input/Address");
const assert = require("assert");

class Checkout {
  // to click cart icon and place order button
  clickCartIconAndPlaceOrderBtn = async () => {
    await actionwrappers.checkVisibleClickableMoveAndClick(
      await CheckoutPageObjects.cartIcon
    );
    await actionwrappers.checkVisibleClickableMoveAndClick(
      await CheckoutPageObjects.placeOrderCart
    );
  };

  // If there is more than single delivery address, 2nd index will be selected
  changeDeliveryAddress = async () => {
    let deliveryAddressCardExists =
      await CheckoutPageObjects.deliveryAddressSecondIndex.isExisting();
    if (deliveryAddressCardExists) {
      await CheckoutPageObjects.deliveryAddressSecondIndex.click();
    }
   
  };
  // To change the logged in user from checkout page
  logoutAndLoginAsAnotherUser = async () => {
    
    await actionwrappers.checkVisibleClickableMoveAndClick(
      await CheckoutPageObjects.loginStepInStepper
    );
    await actionwrappers.checkVisibleClickableMoveAndClick(
      await CheckoutPageObjects.changeLoginBtnInCart
    );
    await actionwrappers.checkVisibleClickableMoveAndClick(
      await CheckoutPageObjects.logoutAndLoginAnotherAccount
    );
        
  };

  
  //   Change seller addresses
  changePickUpAddress = async () => {
    await actionwrappers.checkVisibleClickableMoveAndClick(
      await CheckoutPageObjects.continueBtn
    );

    await actionwrappers.checkVisibleClickableMoveAndClick(
      await CheckoutPageObjects.changePickupAddress
    );

    await actionwrappers.checkVisibleClickableMoveAndClick(
      await CheckoutPageObjects.otherSellerAddress
    );

    await actionwrappers.checkVisibleClickableMoveAndClick(
      await CheckoutPageObjects.continueBtn
    );
  };
  // To choose the first option in the drop down with an click action.
  ClickElementAndkeyboardVal = async (ele, keyValue) => {
    await ele.waitForDisplayed(2000);
    await ele.waitForClickable({ timeout: 2000 });
    await ele.click();
    await browser.pause(2000);
    await ele.keys(keyValue);
    await ele.keys("\uE015");
    await browser.pause(1000);
    await ele.keys("\uE007");
  };
  // To choose the first option in the drop down with an setvalue action.
  SetValueElementMoveAndkeyboardVal = async (ele, inputValue, keyValue) => {
    await ele.moveTo();
    await ele.waitForDisplayed(2000);
    await ele.waitForClickable({ timeout: 2000 });
    await ele.click();
    await ele.setValue(inputValue);
    await browser.pause(1000);
    await ele.keys(keyValue);
    await ele.keys("\uE015");
    await browser.pause(1000);
    await ele.keys("\uE007");
  };
  //Wait for an element,and check clickable before clicking
  checkClickableAndClick = async (ele) => {
    await ele.waitForClickable({ timeout: 2000 });
    await ele.click();
  };

  //Clear the setvalue using doubleclick and delete, and enter the new value
  //double click does not work when there is more than 1 word.
  checkEnableddoubleClickDeleteAndSetValue = async (elem, inputvalue) => {
    await elem.waitForEnabled(2000);
    await elem.waitForClickable({ timeout: 2000 });
    await elem.doubleClick();
    await elem.keys("\uE017");
    await browser.pause(1000);
    await elem.setValue(inputvalue);
  };

  //double click and delete
  checkVisibleClickableAndDoubleClickDelete = async (ele) => {
    await ele.waitForDisplayed(2000);
    await ele.waitForClickable({ timeout: 2000 });
    await ele.doubleClick();
    await ele.keys("\uE0017");
  };

  //Clear value and select value from dropdown using keyboard
  clearValue_selectDropdownvalue = async (ele, inputvalue) => {
    await ele.waitForDisplayed(2000);
    await ele.click();
    await browser.keys(["\uE009", "a"]);
    await ele.keys("\uE003");
    await browser.pause(1000);
    await ele.setValue(inputvalue);
    await ele.keys("\uE015");
    await browser.pause(1000);
    await ele.keys("\uE007");
  };

  urlValidation = async (ExceptedURL) => {
    await browser.pause(5000);
    await browser.getUrl();
    await expect(browser).toHaveUrlContaining(ExceptedURL);
  };

  //if value is empty set the value
  isEmpty_setValue = async (ele, inputValue) => {
    if ((await ele.getValue()) === "") {
      await ele.waitForDisplayed(2000);
      await ele.setValue(inputValue);
    }
  };

  //if value is not equal to empty clear the value & set the new value else enter the new value
  isNotEmpty_clearAndsetValue = async (ele, inputValue) => {
    if (!(await ele.getValue()) === "") {
      await ele.waitForDisplayed(4000);
      await ele.click();
      await browser.keys(["\uE009", "a"]);
      await ele.keys("\uE003");
      await browser.pause(2000);
      await ele.setValue(inputValue);
    } else {
      await ele.waitForDisplayed(2000);
      await ele.setValue(inputValue);
    }
  };

  //clear the value & set the new value else enter the new value
  clearAndsetValue = async (ele, inputValue) => {
    await ele.waitForDisplayed(4000);
    await ele.click();
    await browser.keys(["\uE009", "a"]);
    await browser.pause(2000);
    await ele.keys("\uE003");
    await browser.pause(2000);
    await ele.setValue(inputValue);
  };

  //to scroll the page
  scroll = async (ele) => {
    await ele.scrollIntoView();
  };
}
module.exports = new Checkout();
