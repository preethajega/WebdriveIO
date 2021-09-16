var actionWrapper = require("./../../CommonActions/ActionsWrappers");
var addressPageObjects = require("./../PageObjects/Address.page");
var addressInput = require("./../Input/Address");
const assert = require("assert");

class addAddress {
  addAddressValid = async (ele) => {
    await  actionWrapper.clearAndsetValue(
      addressPageObjects.addressLine,
      addressInput.addressLine1
    );
    await actionWrapper.clearAndsetValue(
      addressPageObjects.locality,
      addressInput.locality
    );
    await actionWrapper.clearAndsetValue(
      addressPageObjects.city,
      addressInput.city
    );
    await actionWrapper.clearAndsetValue(
      addressPageObjects.state,
      addressInput.state
    );
    await actionWrapper.checkVisibleClickableMoveAndClick(
      addressPageObjects.workAddress
    );

    //await actionWrapper.scroll();
    await actionWrapper.checkVisibleClickableMoveAndClick(addressPageObjects.save);
  };
  



};

module.exports = new addAddress();


