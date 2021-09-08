const assert = require("assert");
const path = require("../../B2C/PageObjects/Menu.page");
const TestActionWrapper = require("../../CommonActions/ActionsWrappers");

var menuNavigation = function () {
this.Navigation= async (ele1,ele2)=>{
    await  TestActionWrapper.checkVisibleClickableAndClick(ele1);
    await  TestActionWrapper.checkVisibleClickableAndClick(ele2);

}
}
module.exports = new menuNavigation();