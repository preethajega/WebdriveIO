const Page = require("../../PageObjects/page");
class Approvals extends Page {
    open() {
        super.open('auth/login'); //this will append `login` to the baseUrl to form complete URL
      }
      get SaveBtn() {
        return  super.pathByXpath('//*[@id="wrapped-tabpanel-0"]/div/header/div/button[2]');
      }







      
      get OverallDMC() {
        return  super.pathByXpath('//div[5]/div[2]/div[1]/div/div[2]/div/div[3]/div[2]/div');
      }

      get DMC() {
        return  super.pathById('dbProductDetails[0].dmc');
      }

      get ApprovalButton() {
        return  super.pathByXpath('//header/div/div[2]/button[2]');
      }

      

    };

    module.exports = new Approvals();