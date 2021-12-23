const Page = require("../../../B2B/PageObjects/page");


class BusinessUnit extends Page {
  open() {
    super.open(""); //this will append `login` to the baseUrl to form complete URL
  }
wait(){
  browser.pause(8000);
}

}