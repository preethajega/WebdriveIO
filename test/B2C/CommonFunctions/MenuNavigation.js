const assert = require("assert");
const path = require("../../B2C/PageObjects/Menu.page");
const TestActionWrapper = require("../../CommonActions/ActionsWrappers");

var menuNavigation = function () {
this.Navigation=(ele1,ele2)=>{
    TestActionWrapper.checkVisibleClickableAndClick(ele1);
    TestActionWrapper.checkVisibleClickableAndClick(ele2);

}
}
module.exports = new menuNavigation();