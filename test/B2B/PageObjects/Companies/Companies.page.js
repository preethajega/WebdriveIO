const Page = require('./page');
const CommonWrappers = require("../CommonFunctions/ActionsWrappers");
 class  Company extends Page {
  get usernameInput() {
    return $('//*[@name="Username"]');
  }
  get passwordInput() {
    return $('//*[@name="Password"]');
  }
  get signinButton() {
    return $("//form/button");
  }
  get Icon() {
    return $("//header/div/div/div[3]/button[2]");
  }
  get Companyicon() {
    return $('//*[@id="Companies"]');
  }
  get create() {
    return $("//div[2]/header/div/button[1]");
  }

  get accountDt() {
    return $('//*[@name="companyName"]');
  }
 

  get BranchName() {
    return $('//*[@name="regAddress.branchName"]');
  }
  get AddressName() {
    return $('//*[@name="regAddress.addressLine"]');
  }

  get Businesstype() {
    return $('//*[@name="businesstype"]');
  }
  get currency() {
    return $('//*[@name="currencyId"]');
  }
  get ContactName() {
    return $('//*[@name="displayName"]');
  }
  get BusinessEmail() {
    return $('//*[@name="userEmail"]');
  }

  get ContactNo() {
    return $('//*[@id="margin-none"]');
  }

  get Save() {
    return $('//*[@id="CREATE COMPANY"]');
  }

  get search() {
    return $('[name="Search"]');
  }









  open() {
    super.open('auth/login'); //this will append `login` to the baseUrl to form complete URL
  }
  login(username, password) {
    //   this.waitForloginPageToLoad();
    this.usernameInput.setValue(username); 
    this.passwordInput.setValue(password);
    this.signinButton.click();
     }

     
  }

module.exports = new Company()