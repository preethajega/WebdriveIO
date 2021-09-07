const Page = require("../../B2B/PageObjects/page");


class profilePage extends Page {
  open() {
    super.b2cPath(""); //this will append `login` to the baseUrl to form complete URL
  }
wait(){
  browser.pause(8000);
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
    return super.pathByXpath('//span[text()="Save"]');
}

get addAddress() {
    return super.pathByXpath('//span[text()="Add Address"]');
}

get removeAddress() {
    return super.pathByXpath('//span[text()="Remove"]');
}

get editAddress() {
    return super.pathByXpath('//span[text()="Edit"]');
}

get lastAddress() {
    return super.pathByXpath('(//div[contains(@class,"MuiGrid-grid-sm-12")])[last()]');

}

get firstAddress() {
    return super.pathByXpath('//div[contains(@class,"MuiGrid-grid-sm-12")]');

}

get deleteAddress(){
    return super.pathByXpath('//span[text()="Delete"]');
}

get snackbar(){
    return super.pathById('client-snackbar');

}
}

module.exports = new profilePage();