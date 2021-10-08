const Page = require("../page");


class Cart extends Page {
  open() {
    super.b2cPath(""); //super will append `login` to the baseUrl to form complete URL
  }
wait(){
  browser.pause(8000);
}
get cartIcon() {
    return super.pathByCss('[aria-label="cart"]');
}

get searchBox() {
    return super.pathByXpath('(//div[1]/input)[1]');
}

get addToCartBtnInSearchResults() {
     return super.pathByXpath('//div[1]/div[1]/div[3]/button/span[1]');

}

get searchBarInCartPage() {
    return super.pathByXpath('(//div[1]/input)[2]');
}

get resultsListInCartPage() {
    return super.pathByXpath('//ul/div/div[1]/span');
}


get displayName() {
    return super.pathByName("displayName");
  }
  get selectbuyerEmptyCart() {
    return super.pathById('//*[@id="asynchronous-demo"]');
  }
  get emptyCartSearch() {
    return super.pathByXpath("//div[2]/div[2]/div/div/div/input");
  }

  get emptyCartsearchedproduct() {
    return super.pathByXpath('//*[@id="root"]/div[2]/div[2]/div[2]/div/div[2]/div/div/ul/div[1]');
  }
  get search() {
    return super.pathById("//div[1]/div[1]/div[2]/div[1]/div/div/div/input");
  }
  get productSearched() {
    return super.pathByXpath(
      '//*[@id="root"]/div[2]/div/div[1]/div[1]/div[2]/div[1]/div/div[2]/div/div/ul/div[1]'
    );
  }

  get selectbuyer() {
    return super.pathById('//*[@id="asynchronous-demo"]');
  }
  get createQuote() {
    return super.pathByXpath("//div[2]/div/div/div[5]/button");
  }
}

module.exports = new Cart();