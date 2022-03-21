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
    return super.pathById('yes');
}
get CancelBtn(){
    return super.pathByXpath('//button[@aria-label="cancel"]')
}
get SaveBtn(){
    return super.pathByXpath('//button[@aria-label="Save"]')
}
get cancelDailog(){
    return super.pathById('editDialogCancel');
}
get acceptDailog(){
    return super.pathById('editDialogButton');
}
get nextDate(){
    return super.pathByXpath('//button[contains(@class,"Mui-selected MuiPickersDay-dayWithMargin ")]/following::button[1])]');
}

 selectCustomDate(date){
     return super.pathByXpath(`//button[contains(@class,"MuiPickersDay-dayWithMargin") and text()="${date}"]`)
 }



get selectedYear(){
    return super.pathByXpath('//button[contains(@class,"yearButton Mui-selected")]');

}

get selectedMonth(){
    return super.pathByXpath('//button[contains(@class,"PrivatePickersMonth-root Mui-selected ")]');

}

get openYearview(){
    return super.pathByXpath('//button[contains(@aria-label,"switch to year view")]');
}

get nextMonth(){
    return super.pathByXpath('//*[@title="Next month"]');
}

get prevMonth(){
    return super.pathByXpath('//*[@title="Previous month"]');
}
get snackbar(){
    return super.pathById('notistack-snackbar');
}

get rowPerPage(){
    return super.pathByCss('[class="MuiInputBase-root MuiTablePagination-input MuiTablePagination-selectRoot"]');
}

}


module.exports = new commonObjects();