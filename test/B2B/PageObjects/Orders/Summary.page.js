const Page = require('../page');
// const CommonWrappers = require("../CommonFunctions/ActionsWrappers");
class OrderSummary extends Page {
  get usernameInput() {
    return $('//*[@name="Username"]');
  }

  get passwordInput() {
    return $('//*[@name="Password"]');
  }
  get signinButton() {
    return $("//form/button");
  }
  get Icon() {
    return $("//header/div/div/div[3]/button[2]");
  }

  get cartIcon() {
    return super.pathByXpath('//*[@id="root"]/header/div/div/div/div[3]/button[1]');
  }
  get Sales() {
    
    return super.xpathById("Sales");
  }

  get Orders() {
    return super.xpathById("Orders");
  }
  get moreOptions() {
    return super.pathByXpath(
      '//*[@id="root"]/div[2]/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/button[3]'
    );
  }

  get clearCart() {
    return super.pathByXpath("//ul/li");
  }

  get yesBtn() {
    return super.pathByXpath("#yes");
  }
get selectBuyer() {
  return super.pathById("asynchronous-demo")
}

  get cartCreateOrderBtn() {
    return super.xpathById("co");
  }
  get datePicker() {
    return super.xpathById("date-picker-inline");
  }
  get placeOrder() {
    return super.xpathById("loadingButton");
  }

  get cancelSummary() {
    return super.xpathById("cancelSummary");
  }

  // Custom products' path
  get addCustomProduct() {
    return super.xpathById("acp");
  }
  get productDescriptionCP() {
    return super.pathByName("products[0].productShortDescription");
  }

  get productIdCP() {
    return super.pathByName("products[0].brandProductId");
  }

  get unitPriceCP() {
    return super.pathByName("products[0].unitPrice");
  }

  get addOnCost() {
    return super.pathByName("addonCost");
  }

  // cost in summary
  get costEdit() {
    return super.pathByName("products[0].productCost");
  }
  get DMCEdit() {
    return super.pathByName("products[0].dmc");
  }

  get Qnty() {
    return super.pathByName("products[1].askedQuantity");
  }

  get leadTime() {
    return super.pathByName("products[0].deliveryLeadTime");
  }
  get tax() {
    return super.pathByName("products[0].tax");
  }
  ///
  get changeSellerAddress() {
    return super.xpathById("sellerchange");
  }

  get okBtnAddressChange() {
    return super.xpathById("apply");
  }

  get billingAddressChange() {
    return super.xpathById("openAddress");
  }

  get shippingAddressChange() {
    return super.xpathById("shippingChange");
  }
  get endCustNo() {
    return super.pathById("standard-number");
  }

  get searchBox() {
    return super.pathByCss(
      '[placeholder="Search for products"]'
    );
  }

  get attachFile() {
    return super.pathById("button-file");
  }

  get deliveryTerms() {
    return super.pathById("deliveryTermsId");
  }
  get paymentTerms() {
    return super.pathById("paymentTermsId");
  }
  get warrantyTerms() {
    return super.pathById("warrantyId");
  }
  get packageTerms() {
    return super.pathById("pkgFwdId");
  }
  get dispatchTerms() {
    return super.pathById("dispatchInstructionsId");
  }
  get freightTerms() {
    return super.pathById("freightId");
  }
  get insuranceTerms() {
    return super.pathById("insuranceId");
  }
  get additionalterms() {
    return super.pathById("additional");
  }

  open() {
    super.open("auth/login"); //this will append `login` to the baseUrl to form complete URL
  }
  login(username, password) {
    //   this.waitForloginPageToLoad();
    this.usernameInput.setValue(username);
    this.passwordInput.setValue(password);
    this.signinButton.click();
  }
}


module.exports = new OrderSummary();
