const assert = require("assert");
const path = require("../../B2C/PageObjects/Menu.page");
var homePage = require("../PageObjects/Home.page");
const TestActionWrapper = require("../../CommonActions/ActionsWrappers");

var menuNavigation = function () {
this.Navigation= async (ele1,ele2)=>{
    await  TestActionWrapper.checkVisibleClickableAndClick(ele1);
    await  TestActionWrapper.checkVisibleClickableAndClick(ele2);

}

this.selectMajorCategoery = async(ele1)=>{
    await  TestActionWrapper.checkVisibleClickableMove(homePage.categoeryButton);
    await  TestActionWrapper.checkVisibleClickableMoveAndClick(ele1);
    await  browser.pause(2000);
}
 
this.selectsubCategoeries = async(ele1,ele2,)=>{
  await  TestActionWrapper.checkVisibleClickableMove(homePage.categoeryButton);
  await  TestActionWrapper.checkVisibleClickableMove(ele1);
  await  TestActionWrapper.checkVisibleClickableMoveAndClick(ele2);
  await  browser.pause(2000);
}
}
module.exports = new menuNavigation();