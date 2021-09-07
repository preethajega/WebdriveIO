// import Page from "./page";
const Page = require('../page');
const CommonWrappers = require("../../CommonFunctions/ActionsWrappers");
 class Register extends Page {
  
  
  get SignUpBtn() 
  { 
    return $("//div[2]/div/button") 
  };
  
  get ContactName() { return $('//*[@name="displayName"]') };
   get emailId() { return $('//*[@name="userEmail"]') };
  get required() { return $('//form/div[1]/p') };
  get gstin() { return $('//*[@name="regAddress.gst"]') };
  get emailrequired() { return $('//form/div[2]/p') };
  get CompanyName() { return $('//*[@id="autocomplete"]') };
  get gstrequired() { return $('//form/div[3]/p') };
  get regButton() { return $('//div/div[2]/div/div[3]/button') };
  
  
  open() {
    super.open('auth/login'); //this will append `login` to the baseUrl to form complete URL
  }
  register(contactname, emailid, GST, companyname){
    this.ContactName.setValue(contactname);
    this.emailId.setValue(emailid);
    this.gstin.setValue(GST);
    this.CompanyName.setValue(companyname);
    this.regButton.click();
  }
}
// module.exports = new LoginPage()
module.exports = new Register()