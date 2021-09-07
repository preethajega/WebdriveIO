const Page = require('../page');
class SellerQuote extends Page {
    open() {
        super.open('auth/login'); //this will append `login` to the baseUrl to form complete URL
      }

      get SelectQuote() {
        return  super.pathByXpath('//table/tbody/tr[1]');
      }

      get RequestApproval() {
        return  super.pathByXpath('//header/div/button[2]/span[1]');
      }

      get RequestApprovalBtn() {
        return  super.pathByXpath('//header/div/button[2]');
      }

      get ApprovalQuoteName() {
        return  super.pathByName('quoteName');
      }

      get comment() {
        return  super.pathByName('initiatedComments');
      }

      get Ok() {
        return  super.pathById('editDialogButton');
      }
     
      get SubmitQuoteName() {
        return  super.pathById('name');
      }
}
  

module.exports = new SellerQuote()  