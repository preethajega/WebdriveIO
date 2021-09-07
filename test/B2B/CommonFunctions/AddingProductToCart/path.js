const Page = require("../../PageObjects/page");
const CommonWrappers = require("../../CommonActions/ActionsWrappers");
class Category extends Page {
  // common methods for path
  pathById(Id) {
    return $(`#${Id}`);
  }
  pathByName(Name) {
    return $(`[name="${Name}"]`);
  }
  pathByClasee(Class) {
    return $(`.${Class}`);
  }
  pathByXpath(xpath) {
    return $(`${xpath}`);
  }
  pathByCss(Css) {
    return $(`${Css}`);
  }

  //   Actual path
  // cartIcon() {
  //   return this.pathById("MHEAD_CQC");
  // }
  cartIcon() {
    return this.pathByXpath('//header/div/div/div[3]/button[1]');
  }
  displayName() {
    return this.pathByName("displayName");
  }
  selectbuyerEmptyCart() {
    return this.pathById('//*[@id="asynchronous-demo"]');
  }
  emptyCartSearch() {
    return this.pathByXpath("//div[2]/div[2]/div/div/div/input");
  }

  emptyCartsearchedproduct() {
    return this.pathByXpath('//*[@id="root"]/div[2]/div[2]/div[2]/div/div[2]/div/div/ul/div[1]');
  }
  search() {
    return this.pathById("//div[1]/div[1]/div[2]/div[1]/div/div/div/input");
  }
  productSearched() {
    return this.pathByXpath(
      '//*[@id="root"]/div[2]/div/div[1]/div[1]/div[2]/div[1]/div/div[2]/div/div/ul/div[1]'
    );
  }

  selectbuyer() {
    return this.pathById('//*[@id="asynchronous-demo"]');
  }
  createQuote() {
    return this.pathByXpath("//div[2]/div/div/div[5]/button");
  }
}

module.exports = new Category();
