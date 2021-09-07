const Page = require("../../PageObjects/page");
class ApprovalSetting extends Page {
    open() {
        super.open('auth/login'); //this will append `login` to the baseUrl to form complete URL
      }

      get CreateApprovalButton() {
        return  super.pathByXpath('//header/div/button[1]');
     }

     get ApprovalName() {
        return  super.pathByName('approvalName');
     }

     get AddFabGroup() {
        return  super.pathById('addNewUserGroup');
     }

     get GroupName() {
        return  super.pathByXpath('//*[@id="panel1a-content"]/div/div/div[1]/div/div/input');
     }

     get Precedence() {
        return  super.pathById('precedence-');
     }

     get Users() {
        return  super.pathById('user-');
     }

     get GroupSave() {
        return  super.pathByXpath('//*[@id="wrapped-tabpanel-0"]/div/header/div/button[2]');
     }

     get ClickRange() {
      return  super.pathById('wrapped-tabpanel-1');
   }

   get EndRange() {
      return  super.pathByXpath('//div[2]/div/div/input');
   }

   get UserGroupName() {
      return  super.pathById('0');
   }

   get Save() {
      return  super.pathByXpath('//*[@id="wrapped-tabpanel-1"]/div/header/div/button[2]');
   }

   get DeleteRange() {
      return  super.pathById('deleteRange');
   }

   get ClickUserGroupTab() {
      return  super.pathById('wrapped-tab-0');
   }

   get DeleteGroup() {
      return  super.pathById('removeUserGroup');
   }

   get moreoption() {
      return  super.pathById('//header/div/button[2]');
   }

   get DeleteApprovalGroup() {
      return  super.pathById('');
   }

   get SureDelete() {
      return  super.pathById('yes');
   }

    };

    module.exports = new ApprovalSetting();