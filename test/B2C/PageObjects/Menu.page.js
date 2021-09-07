const Page = require("../../B2B/PageObjects/page");



class menuPage extends Page {
  open() {
    super.b2cPath(""); //this will append `login` to the baseUrl to form complete URL
  }
wait(){
  browser.pause(8000);
}


get profileIcon() {
    return  super.pathByCss(
        "[class='MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-edgeEnd']"
      );
}

get profile() {
    return super.pathByXpath('//a[@href="/profile"]');
}

get orders() {
    return super.pathByXpath('//a[@href="/orders/1"]');

}

get logoutBtn() {
  return super.pathByXpath('//*[text()="Logout"]');

}

get snackbar(){
  return super.pathById('client-snackbar');
}




  }
  
 


module.exports = new menuPage();