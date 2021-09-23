const Page = require("../page");

class commonObjects extends Page {
    open() {
      super.new(""); //this will append `login` to the baseUrl to form complete URL
}
  wait(){
    browser.pause(8000);
}
get moreOptions() {
    return super.pathByXpath('//button[@title="More options"]');
}
get refresh(){
    return super.pathByXpath('//button[@title="Click to Refresh"]');
}
get close(){
    return super.pathByXpath('//button[@title="Close"]');
}
get submit(){
    return super.pathById('loadingButton');
}
get yes(){
    return super.pathByXpath('yes');
}
get cancelDailog(){
    return super.pathById('editDialogCancel');
}
get acceptDailog(){
    return super.pathById('editDialogButton');
}
get CurrentDate(){
    return super.pathByCss('[class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day MuiPickersDay-current MuiPickersDay-daySelected"]');
}

}


module.exports = new commonObjects();