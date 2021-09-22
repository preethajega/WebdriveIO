const Page = require("../../PageObjects/page");

class Filter extends Page {
    open() {
      super.new(""); //this will append `login` to the baseUrl to form complete URL
}
  wait(){
    browser.pause(8000);
}
get status(){
    return super.pathById('checkboxes-tags-demo');
}
get quoteId() {
    return super.pathById('qid');
}
get quoteName() {
    return super.pathById('qname');
}
get orderName() {
    return super.pathById('oname');
}
get accountName() {
    return super.pathById('checkboxes-Accounts');
}
get approverName() {
    return super.pathById('checkboxes-Approvers');
}
get ownerName() {
    return super.pathById('checkboxes-Assignees');
}
get quoteTags() {
    return super.pathById('checkboxes-tags');
}
get orderTags() {
    return super.pathById('checkboxes-taglist');
}
get orderId() {
    return super.pathById('oid');
}

get startDatepicker() {
    return super.pathByXpath('//*[@id="date-picker-inline-sd"]/following::button[1]');
}
get endDatepicker(){
    return super.pathByXpath('//*[@id="date-picker-inline-ed"]/following::button[1]');
}
get startDate() {
    return  super.pathById('#date-picker-inline-sd')
}
get endDate() {
    return super.pathById('date-picker-inline-ed')
}

get currentDate(){
    return super.pathByCss('[class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day MuiPickersDay-current MuiPickersDay-daySelected"]');
}
get startValue() {
     return super.pathById('svalue');
}
get endValue() {
    return super.pathById('evalue');
}
get cancel() {
    return super.pathByCss('[class="MuiButtonBase-root MuiButton-root MuiButton-outlined"]');
}
get clearAll() {
    return super.pathByCss('[class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-textSizeSmall MuiButton-sizeSmall"]');
}
get save() {
    return super.pathById('filterApply');
}
}