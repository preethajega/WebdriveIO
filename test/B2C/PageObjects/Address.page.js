const Page = require("../../B2B/PageObjects/page");


class addressPage extends Page {
  open() {
    super.b2cPath(""); //this will append `login` to the baseUrl to form complete URL
  }
wait(){
  browser.pause(8000);
}

get fullName() {
    return super.pathByXpath('//*[@name="addressLine"]/preceding::input[2]');
}

get mobileNo() {
    return super.pathByXpath('//*[@name="addressLine"]/preceding::input[1]');
}

get addressLine() {
     return super.pathByName('addressLine');

}

get locality() {
    return super.pathByName('locality');
}

get city() {
    return super.pathByName('city');
}

get state() {
    return super.pathByName('state');
}

get homeAddress() {
    return super.pathByXpath('//span[text()="Home"]');

}

get workAddress() {
    return super.pathByXpath('//span[text()="Work"]');
    
}

get defaultAddress() {
    return super.pathByName('regAddress');
}

get save() {
    return super.pathByXpath('//span[text()="Save"]');
}

get cancel() {
    return super.pathByXpath('//span[text()="Cancel"]');
}

get addAddressCheckoutPage() {
    return super.pathByXpath('//span[text()="Add address"]');
}

get cartIcon() {
    return  super.pathByXpath('//header/div/div/div[3]/div[2]/button');
 }

 get placeOrderCart() {
    return  super.pathByXpath('.MuiButton-containedPrimary');
 }

}
module.exports = new addressPage();