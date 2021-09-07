class Page {
  

  open(path){
    browser.url("https://new.bcommerce.in/" + path); 
  }
  b2cPath(path) {
    browser.url("https://b2cdev.myapptino.com/" + path);
  }
  new(path) {
    browser.url("https://new.bcommerce.in/" + path);
  }

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
}
module.exports = Page;
