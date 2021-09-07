const assert = require("assert");
const path = require("../../PageObjects/Quotes/createQuote.page");
const ActionWrapper = require("../../CommonActions/ActionsWrappers")
var ApprovalSetting = function () {
    //click Create Approval Group Button
  this.ClickApprovalButton = () => {
    path.CreateApprovalButton.waitForDisplayed(5000);
    path.CreateApprovalButton.waitForClickable({ timeout: 5000 });
    path.CreateApprovalButton.click();
  }

  //Create Approval Group Name and save
  this.EnterApprovalGroupName = (Name) => {
    path.ApprovalName.waitForDisplayed(5000);
    path.ApprovalName.waitForClickable({ timeout: 5000 });
    path.ApprovalName.setValue(Name);
  }

//Add New User Group
this.ClickFabtoAddGroup = () => {
    path.AddFabGroup.waitForDisplayed(5000);
    path.AddFabGroup.waitForClickable({ timeout: 5000 });
    path.AddFabGroup.click();
  }

// Create Single User Group  and save
this.SingleUserGroupAndSave = (groupname) => {
    path.GroupName.waitForDisplayed(5000);
    path.GroupName.waitForClickable({ timeout: 5000 });
    path.GroupName.setValue(groupname);
    browser.pause(2000);
    path.GroupPrecedence.keys("\uE015");
    path.GroupPrecedence.keys("\uE007");
    path.Users.waitForDisplayed(5000);
    path.Users.waitForClickable({ timeout: 5000 });
    path.Users.keys("\uE015");
    path.Users.keys("\uE007");
    path.DefultUsers.waitForDisplayed(5000);
    path.DefultUsers.waitForClickable({ timeout: 5000 });
    path.DefultUsers.keys("\uE015");
    path.DefultUsers.keys("\uE007");
    ActionWrapper.checkVisibleClickableAndClick(path.GroupSave);
  }


// Create Multiple User Group  and save
this.MultipleUserGroupAndSave = (groupname) => {
  path.GroupName.waitForDisplayed(5000);
  path.GroupName.waitForClickable({ timeout: 5000 });
  path.GroupName.setValue(groupname);
  browser.pause(2000);
  path.GroupPrecedence.keys("\uE015");
  path.GroupPrecedence.keys("\uE007");
  path.Users.waitForDisplayed(5000);
  path.Users.waitForClickable({ timeout: 5000 });
  path.Users.keys("\uE015");
  path.Users.keys("\uE007");
  ActionWrapper.SetValueElementMoveAndkeyboardVal(path.Users, "admin", "\uE015");
  path.Users.keys("\uE007");
  ActionWrapper.SetValueElementMoveAndkeyboardVal(path.Users, "admin", "\uE015");
  path.Users.keys("\uE007");
  path.DefultUsers.waitForDisplayed(5000);
  path.DefultUsers.waitForClickable({ timeout: 5000 });
  path.DefultUsers.keys("\uE015");
  path.DefultUsers.keys("\uE007");
  ActionWrapper.checkVisibleClickableAndClick(path.GroupSave);
}


 // Click Range and Create Range and save
  this.CreateRangeAndSave = (endrange) => {
      path.ClickRange.waitForDisplayed(5000);
      path.ClickRange.waitForClickable({ timeout: 5000 });
      path.ClickRange.click();
      browser.pause(2000);
      path.EndRange.clearValue();
      path.EndRange.setValue(endrange);
      browser.pause(1000);
      path.UserGroupName.keys("\uE015");
      path.UserGroupName.keys("\uE007");
      browser.pause(1000);
      ActionWrapper.checkVisibleClickableAndClick(path.Save);
    }
  
// Delete the Range
this.DeleteRange = () => {
  path.DeleteRange.waitForDisplayed(5000);
  path.DeleteRange.waitForClickable({ timeout: 5000 });
  path.DeleteRange.click();
  path.Save.waitForDisplayed(5000);
  path.Save.waitForClickable({ timeout: 5000 });
  path.Save.click();
  }


// Click the UserGroup Tab
this.ClickUserGroupTab = () => {
  path.ClickUserGroupTab.waitForDisplayed(5000);
  path.ClickUserGroupTab.waitForClickable({ timeout: 5000 });
  path.ClickUserGroupTab.click();
   }


// Delete the User Group Precedence
this.DeleteUserGroup = () => {
  path.DeleteGroup.waitForDisplayed(5000);
  path.DeleteGroup.waitForClickable({ timeout: 5000 });
  path.DeleteGroup.click();
  path.GroupSave.waitForDisplayed(5000);
  path.GroupSave.waitForClickable({ timeout: 5000 });
  path.GroupSave.click();
   }


// Click more option and Delete the ApprovalGroup
this.DeleteApprovalgroup = () => {
  path.moreoption.waitForDisplayed(5000);
  path.moreoption.waitForClickable({ timeout: 5000 });
  path.moreoption.click();
  path.DeleteApprovalGroup.waitForDisplayed(5000);
  path.DeleteApprovalGroup.waitForClickable({ timeout: 5000 });
  path.DeleteApprovalGroup.click();
  path.SureDelete.waitForDisplayed(5000);
  path.SureDelete.waitForClickable({ timeout: 5000 });
  path.SureDelete.click();
   }


};




module.exports = new ApprovalSetting();