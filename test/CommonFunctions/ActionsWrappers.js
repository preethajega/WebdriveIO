var TestActionWrapper = function() {
  // Wait for an element, move and then check clickable before clicking
  this.checkVisibleClickableMoveAndClick = ele => {
    ele.moveTo();
    ele.waitForDisplayed(5000);
    ele.waitForClickable({ timeout: 8000 });
    ele.click();
  };
  //   Clear the input and enter the value
  this.checkEnabledMoveClearAndSetValue = (elem, value) => {
    elem.moveTo();
    elem.waitForEnabled(5000);
    elem.clearValue();
    elem.setValue(value);
  };
  //   Without clearing the existing value
  this.checkEnabledMoveAndSetValue = (elem, value) => {
    elem.moveTo();
    elem.waitForEnabled(5000);
    elem.setValue(value);
  };
  // To choose the first option in the drop down with an click action.
  this.ClickElementAndkeyboardVal = (ele, keyValue) => {
    ele.moveTo();
    ele.waitForDisplayed(5000);
    ele.waitForClickable({ timeout: 5000 });
    ele.click();
    browser.pause(1000);
    ele.keys(keyValue);
    browser.pause(500);
    ele.keys("\uE007");
  };
  // To choose the first option in the drop down with an setvalue action.
  this.SetValueElementAndkeyboardVal = (ele, inputValue, keyValue) => {
    ele.moveTo();
    ele.waitForDisplayed(5000);
    ele.waitForClickable({ timeout: 5000 });
    ele.click();
     ele.setValue(inputValue);
    browser.pause(1000);
    ele.keys(keyValue);
    browser.pause(500);
    ele.keys("\uE007");
  };
  this.checkVisibleClickableAndClick = ele => {
     ele.waitForDisplayed(8000);
    ele.waitForClickable({ timeout: 8000 });
    ele.click();
  };
  
};
module.exports = new TestActionWrapper();
