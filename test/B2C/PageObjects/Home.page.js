const Page = require("../../B2B/PageObjects/page");
var actionwrappers = require("./../../CommonActions/ActionsWrappers");



class homePage extends Page {
  open() {
    super.b2cPath(""); //this will append `login` to the baseUrl to form complete URL
  }
wait(){
  browser.pause(8000);
}

get categoeryButton() {
    return super.pathByXpath('//*[text()="categories"]');
}

get majorCategoery() {
    return super.pathByCss("[class='MuiListItemButton-root MuiListItemButton-gutters MuiButtonBase-root css-1xd45uq-MuiButtonBase-root-MuiListItemButton-root']");
}

get sucategoery1() {
    return super.pathByCss("[class='MuiTypography-root MuiTypography-subtitle1 MuiTypography-noWrap css-1tg7ohf-MuiTypography-root']");

}

get sucategoery2() {
    return super.pathByCss("[class='MuiTypography-root MuiTypography-inherit MuiTypography-noWrap MuiLink-root MuiLink-underlineNone css-2e4plv-MuiTypography-root-MuiLink-root']");

}

get branchicon() {
    return super.pathByCss("[class='MuiButton-root MuiButton-outlined MuiButton-outlinedInherit MuiButton-sizeSmall MuiButton-outlinedSizeSmall MuiButton-colorInherit MuiButton-fullWidth MuiButtonBase-root css-1y3ie26-MuiButtonBase-root-MuiButton-root']");
}
  
get branchNameInput() {

    return super.pathByCss("[class='MuiOutlinedInput-input MuiInputBase-input MuiInputBase-inputSizeSmall css-rqfyya-MuiInputBase-input-MuiOutlinedInput-input']");
}

get firstBranch() {
    return super.pathByXpath('(//*[@role="radiogroup"]//*[@name="address-select"])');
}


async branchSelection(InputValue) {
    await actionwrappers.checkClickableAndClick(await this.branchicon);
    await actionwrappers.checkEnabledAndSetValue(await this.branchNameInput,InputValue);
    await this.firstBranch.click();
    await browser.pause(5000);

}

}

module.exports = new homePage();