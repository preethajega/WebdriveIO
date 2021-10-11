const Page = require("../../B2B/PageObjects/page");


class profilePage extends Page {
  async open() {
    super.b2cPath(""); //this will append `login` to the baseUrl to form complete URL
  }
async wait(){
 await  browser.pause(8000);
}

get appIcon() {
    return super.pathById('appIconUpload');
}
get removeAppicon(){
    return super.pathByXpath('//*[@aria-label="remove picture"]');
}

get fullName() {
    return super.pathByName('displayName');
}
get mobNo() {
     return super.pathByName('mobileNumber');
}
get emailId() {
    return super.pathByName('email');
}

get save() {
    return super.pathById('loadingBtn');
}

get addAddress() {
    return super.pathById('addAddressBtn');
}

get removeAddress() {
    return super.pathByXpath('//*[text()="Remove"]');
}

get editAddress() {
    return super.pathByXpath('//*[text()="Edit"]');
}

get lastAddress() {
    return super.pathByXpath('(//div[contains(@class,"MuiGrid-grid-sm-12")])[last()]');

}

get firstAddress() {
    return super.pathByXpath('//div[contains(@class,"MuiGrid-grid-sm-12")]');

}

get deleteAddress(){
    return super.pathByXpath('//*[text()="Delete"]');
}

get snackbar(){
    return super.pathByXpath('//div[@class="MuiAlert-message css-acap47-MuiAlert-message"]');

}
get nameAlert(){
    return super.pathByXpath('//p[text()="Name required"]');

}
}

module.exports = new profilePage();