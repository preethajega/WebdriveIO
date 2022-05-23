const Page = require("../../PageObjects/page");

class Filter extends Page {
    open() {
      super.new(""); //this will append `login` to the baseUrl to form complete URL
}
  wait(){
    browser.pause(8000);
}
get Filter(){
    return super.pathByXpath('//*[@aria-label="filter"]');
}
get filterResults(){
    return super.pathByXpath('(//*[contains(@class,"-deleteIconSmall")])[last()]');
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
    return  super.pathById('date-picker-inline-sd')
}
get endDate() {
    return super.pathById('date-picker-inline-ed')
}

get nextDate(){
    return super.pathByXpath('//button[contains(@class,"Mui-selected MuiPickersDay-dayWithMargin")]');
}
get startValue() {
     return super.pathById('svalue');
}
get endValue() {
    return super.pathById('evalue');
}
get cancel() {
    return super.pathByXpath('//*[@aria-label="cancel"]');
}
get clearAll() {
    return super.pathByXpath('//*[text()="Clear All"]')
}   
get save() {
    return super.pathById('filterApply');
}

}

module.exports = new Filter();