class Page {
    constructor() {
        this.title = 'My Page'
    }
  
    open(path) {
        browser.url("https://new.bcommerce.in/" + path)
    }
  }
  module.exports = Page