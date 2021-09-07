const assert = require("assert");
const path = require("../../PageObjects/Quotes/createQuote.page");
const Summary = require("../Quotes/Summary");
const ActionWrapper = require("../../CommonActions/ActionsWrappers")
const ApprovalSetting = require("../../CommonFunctions/ApprovalSettings/ApprovalSetting")
var Approvals = function () {
    //CReate Approval Group Wihtout reviewer and optional MultipleUserGroupAndSave with dafult User
this.SimplyCreateApprovalGroupandRange = ( )  => {
  ApprovalSetting.ClickApprovalButton();
  ApprovalSetting.EnterApprovalGroupName("Automation Approval ")
  ActionWrapper.checkVisibleClickableAndClick(path.SaveBtn);
  ApprovalSetting.ClickFabtoAddGroup();
  ApprovalSetting.MultipleUserGroupAndSave("Multi with Default");
  ApprovalSetting.CreateRangeAndSave("50");
}


this.ConvertSubmittoApprovalBtn = ( )  => {

    if(OverallDMC>=50){
    path.ApprovalButton.waitForDisplayed(5000);
    path.ApprovalButton.waitForClickable({ timeout: 5000 });
    path.ApprovalButton.click();
   }else
   if(OverallDMC<50){
    path.DMC.waitForDisplayed(5000);
    path.DMC.waitForClickable({ timeout: 5000 });
    path.DMC.click();
    for (let i = 0; i < 100; i++) {
      var value = DMC.getValue();
      path.DMC.getValue();
      if (i === 50) {
        path.ApprovalButton.waitForDisplayed(5000);
        path.ApprovalButton.waitForClickable({ timeout: 5000 });
        path.ApprovalButton.click();
        break;
   }
   
  }
};
}


if(OverallDMC>=50){
  path.ApprovalButton.waitForDisplayed(5000);
  path.ApprovalButton.waitForClickable({ timeout: 5000 });
  path.ApprovalButton.click();
 }else
 if(OverallDMC<50){
  path.DMC.waitForDisplayed(5000);
  path.DMC.waitForClickable({ timeout: 5000 });
  path.DMC.click();
  for (let i = 0; i < 100; i++) {
    var value = DMC.getValue();
    path.DMC.getValue();
    if (i === 50) {
      path.ApprovalButton.waitForDisplayed(5000);
      path.ApprovalButton.waitForClickable({ timeout: 5000 });
      path.ApprovalButton.click();
      break;
 }
 
}
};



}





module.exports = new Approvals();