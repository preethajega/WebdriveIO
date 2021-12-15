class Page {
  

  open(path){
    browser.url(path); 
    browser.maximizeWindow();
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
