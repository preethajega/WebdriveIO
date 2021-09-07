const Page = require("../../B2B/PageObjects/page");


class orderDetailpage extends Page {
  open() {
    super.b2cPath(""); //this will append `login` to the baseUrl to form complete URL
  }
wait(){
  browser.pause(8000);
}
 viewOrder(index){
    return super.pathByXpath(`(//div[contains(@class,"MuiPaper-rounded")])[${index}]`)
}

 get orders(){
     return super.pathByXpath('//a[@href="/orders/1"]');
 }

 get home(){
    return super.pathByXpath('//a[@href="/orders/1"]/preceding::a[1]');
 }

 get nextPage(){
     return super.pathByXpath('//a[@aria-label="Go to next page" and @role="button"]');
 }
  
get prevPage(){
    return super.pathByXpath('//a[@aria-label="Go to previous page" and @role="button"]');
} 

}
module.exports = new orderDetailpage();