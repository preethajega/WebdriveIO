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
    return super.pathByXpath('//div[@class="MuiAlert-message"]');

}
get nameAlert(){
    return super.pathByXpath('//*[@id="App"]/div/div/div/div[2]/div[2]/form/div[1]/p');

}
}

module.exports = new profilePage();