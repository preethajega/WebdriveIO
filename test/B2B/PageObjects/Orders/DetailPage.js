const Page = require('../page');
const CommonWrappers = require("../CommonFunctions/ActionsWrappers");
 class Orders extends Page {
     
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
  
  get Sales() {
    return Page.xpathById("Sales"); 
  }
     
  get Orders() {
      return Page.xpathById("Orders");
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

module.exports = new Orders()