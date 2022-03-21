const Page = require("../../../B2B/PageObjects/page");


class Cart extends Page {
  open(path) {
    super.open(path); 
  }
wait(){
  browser.pause(8000);
}
get getQuote() {
  return super.pathById('getQuote');
}

  get cartIcon() {
    return super.pathByXpath('(//div[@class="MuiBox-root css-q04doh"]//button)[2]')
    // return super.pathByCss('#cartIcon');
  }

  get searchBox() {
    return super.pathByXpath('//*[starts-with(@placeholder,"Search by")]');
  }
  get cartSearch() {
    return super.pathByXpath('//*[@placeholder="Search for products"]');
  }


  get searchResultsImage() {
    return super.pathByXpath('//div[@class="MuiPaper-root MuiPaper-elevation1"]/div/ul/div[1]');
  }

  get addToCartBtnInSearchResults() {
    return super.pathByXpath('//*[@operator="add"]');
  }

  get searchBarInCartPage() {
    return super.pathByXpath('//*[@placeholder="Search for products"]');
  }

  get resultImage() {
    return super.pathByXpath('//*[@id="root"]/header/div/div[2]/div/div/div[3]/div/div/div/div[1]/div[1]');
  }

  get displayName() {
    return super.pathByName("displayName");
  }
  
  get searchProd() {
    return super.pathByXpath('//input[@placeholder="Search for products"]');
  }

  get prodResults() {
    return super.pathByXpath('//*[contains(@class,"root MuiListItem-gutters MuiListItem-button")]' 
    );
  }
    

  get selectbuyer() {
    return super.pathById('asynchronous-demo');
  }
  
  get uploadBtn() {
    return super.pathByXpath('//*[@id="acp"]/following::button[1]');
  
  }

  get addtoCartBtn() {
    return super.pathByXpath('//*[text()="Add to Cart"]');
  
  }


  get uploadFile() {
    return super.pathById("upload-excel-file");
  }


  get addCustomProduct() {
    return super.pathById("acp");
  }

  get customProductDescription() {
    return super.pathById("cpdesc");
  }

  get customProductID() {
    return super.pathById("cpid");
  }

  get customUnitPrice() {
    return super.pathById("cpup");
  }

  get qty() {
    return super.pathById("quantity");
  }

  get createOrder() {
    return super.pathById("co");
  }
  get createQuote() {
    return super.pathById("cq_rfq");
  }

  // enquiry
  get enqBtn(){
    return super.pathById("panel1bh-header");
  }

  get leadName(){
    return super.pathByName("leadName");
  }

  get LeadbuyerName(){
    return super.pathByXpath('//input[@id="companyName"]/preceding::input[1]')
  } 
  get companyName(){
    return super.pathById("companyName");
  }

  get contactPerson(){
    return super.pathByName("name")
  }

  get custEmail(){
    return super.pathById("email")
  }

 

get custContactNo(){
  return super.pathById("phone")
}
get source(){
  return super.pathById("leadSource")
}

get message(){
  return super.pathById("message")
}



get mycart (){
  return super.pathByXpath('//div[contains(@class,"Paper-root jss")]');
  }

get moreOptions (){
  return super.pathByXpath('//*[text()="Upload Products"]/following::button[1]');
  }

get clearCart (){
  return super.pathByXpath('//*[text()="Clear Cart"]');
  }

  get attachmentEnquiry(){
    return super.pathById("button-file-leads");
  }

  get quantity(){
    return super.pathById("quantity")
  }

  get createEnquiry(){
    return super.pathById("loadingButton");
  }



}

module.exports = new Cart();
