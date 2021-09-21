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
    return super.pathByCss("[class='MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textSizeLarge MuiButton-sizeLarge']"
    );
}

get majorCategoery() {
    return super.pathByCss("[class='MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-button MuiListItem-secondaryAction Mui-selected']");
}

get sucategoery1() {
    return super.pathByCss("[class='MuiTypography-root MuiTypography-subtitle2 MuiTypography-gutterBottom']");

}

get sucategoery2() {
    return super.pathByCss("[class='MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-button']");

}

get branchicon() {
    return super.pathByCss("[class='MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedSizeSmall MuiButton-sizeSmall']");
}
  
get branchNameInput() {

    return super.pathByCss("[class='MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense']");
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