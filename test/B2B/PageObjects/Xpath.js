const Page = require("./page");
const CommonWrappers = require("../../CommonActions/ActionsWrappers");
class Category extends Page {
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
  };

//   example usage in same class
  PtdandPL(Products) {
    return this.pathById("Products ");
  }
}

module.exports = new Category();
