var actionWrapper = require("./../../CommonActions/ActionsWrappers");
var addressPageObjects = require("./../PageObjects/Address.page");
var addressInput = require("./../Input/Address");
const assert = require("assert");

class addAddress {
  addAddressValid = async (ele) => {
    await  actionWrapper.isNotEmpty_clearAndsetValue(
      addressPageObjects.addressLine,
      addressInput.addressLine1
    );
    await actionWrapper.isNotEmpty_clearAndsetValue(
      addressPageObjects.locality,
      addressInput.locality
    );
    await actionWrapper.isNotEmpty_clearAndsetValue(
      addressPageObjects.city,
      addressInput.city
    );
    await actionWrapper.isNotEmpty_clearAndsetValue(
      addressPageObjects.state,
      addressInput.state
    );
    await actionWrapper.checkVisibleClickableMoveAndClick(
      addressPageObjects.workAddress
    );

    await actionWrapper.scroll(addressPageObjects.save);
    await actionWrapper.checkVisibleClickableMoveAndClick(addressPageObjects.save);
  };
  



};

module.exports = new addAddress();


