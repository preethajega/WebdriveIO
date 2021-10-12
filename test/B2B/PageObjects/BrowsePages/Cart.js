const Page = require("../page");

class Cart extends Page {
  open() {
    super.b2cPath(""); //super will append `login` to the baseUrl to form complete URL
  }
  wait() {
    browser.pause(8000);
  }
  get cartIcon() {
    return super.pathByCss('[aria-label="cart"]');
  }

  get searchBox() {
    return super.pathByXpath("(//div[1]/input)[1]");
  }

  get searchResultsImage() {
    return super.pathByXpath('(//*[@alt="product"])[1]');
  }

  get addToCartBtnInSearchResults() {
    return super.pathByXpath("//div[1]/div[1]/div[3]/button/span[1]");
  }

  get searchBarInCartPage() {
    return super.pathByXpath("(//div[1]/input)[2]");
  }

  get resultsListInCartPage() {
    return super.pathByXpath("//ul/div/div[1]/span");
  }

  get displayName() {
    return super.pathByName("displayName");
  }
  get selectbuyerEmptyCart() {
    return super.pathById("asynchronous-demo");
  }
  get emptyCartSearch() {
    return super.pathByXpath("//div[2]/div[2]/div/div/div/input");
  }

  get emptyCartsearchedproduct() {
    return super.pathByXpath(
      '//*[@id="root"]/div[2]/div[2]/div[2]/div/div[2]/div/div/ul/div[1]'
    );
  }
  get search() {
    return super.pathByXpath("//div[1]/div[1]/div[2]/div[1]/div/div/div/input");
  }
  get productSearched() {
    return super.pathByXpath(
      '//*[@id="root"]/div[4]/div/div[1]/div/div[1]/div[1]/div[2]/div[1]/div/div[2]/div/div/ul/div[1]'
    );
  }

  get selectbuyer() {
    return super.pathById("asynchronous-demo");
  }
  get createQuote() {
    return super.pathById("cq_rfq");
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

  get createOrder() {
    return super.pathById("co");
  }


  // enquiry

  get leadName(){
    return super.pathByName("leadName");
  }

  get companyName(){
    return super.pathById("companyName");
  }

  get contactPerson(){
    return super.pathById("fullName")
  }

  get CustEmail(){
    return super.pathById("email")
  }

  get BuyerName(){
    return super.pathByXpath('//form//input[@id="asynchronous-demo"]')
  } 

get CustContactNo(){
  return super.pathById("phone")
}
get Source(){
  return super.pathById("leadSource")
}

get message(){
  return super.pathById("message")
}

get createLead (){
return super.pathByXpath('//button[@id="loadingButton"]');
}

get snackbar (){
  return super.pathById('client-snackbar');
  }

get remove (){
  return super.pathByXpath('//div[contains(@class,"Paper-root jss")]');
  }

get MoreOptions (){
  return super.pathByXpath('//*[text()="Upload Products"]/following::button[1]');
  }

get clearCart (){
  return super.pathByXpath('//*[text()="Clear Cart"]');
  }

get yes (){
  return super.pathById('yes');
  }

  get attachmentEnquiry(){
    return super.pathById("button-file-leads");
  }

}

module.exports = new Cart();
