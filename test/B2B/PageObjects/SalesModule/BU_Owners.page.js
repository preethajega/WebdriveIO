const Page = require("../page");

class BU_Owners extends Page {
  // common methods for path
 async open() {
    super.open(); 
  }

  /* BusinessUnit & approval details */
  get businessUnit() {
    return  super.pathById('BusinessUnits-outlined');
  }

  get quoteOwners() {
    return  super.pathById('quote-owners-select');
  }

  get selectedOwners() {
    return super.pathByXpath('(//div[@role="button"][last()])');
  }

  get dropdown(){
    return super.pathByXpath('//*[@title="Open"]');
  }

  get clear() {
    return super.pathByXpath('//*[@title="Clear]');
  }

  get saveBU(){
    return super.pathByXpath('//*[@id="BusinessUnits-outlined"]/following::button[3]');
  }

  get cancelBU(){
    return super.pathByXpath('//*[@id="BusinessUnits-outlined"]/following::button[4]');
  }

  get saveOwners(){
    return super.pathByXpath('//*[@id="quote-owners-select"]/following::button[3]');
  }

  get cancelOwners(){
    return super.pathByXpath('//*[@id="quote-owners-select"]/following::button[4]');
  }

}