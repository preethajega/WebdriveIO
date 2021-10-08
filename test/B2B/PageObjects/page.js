class Page {
  

  open(path){
    browser.url("https://new.bcommerce.in/" + path); 
    browser.maximizeWindow();
  }
  
  b2cPath(path) {
    browser.url("https://b2cnext.myapptino.com/" + path);
    browser.maximizeWindow();
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
