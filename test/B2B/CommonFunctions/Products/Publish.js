const assert = require("assert");
const path = require("../AddingProductToCart/path");
var TestActionWrapper = function () {

    his.selectPG = (Test) => {
        // To select PG in PG landing page
    
        path.selectPG.waitForDisplayed(5000);
        path.selectPG.waitForClickable({ timeout: 5000 });
        path.search.setValue(Test);
        browser.pause(500);
        path.selectPGPG.click();
    };


this.selectProduct = () => {
    // To select Product in PG page

    path.selectProduct.waitForDisplayed(5000);
    path.selectProduct.waitForClickable({ timeout: 5000 });
    path.selectProduct.click();
    

};

this.publishProduct = () => {
    //  To publish the product
    path.publishProduct.waitForDisplayed(5000);
    path.publishProduct.waitForClickable({ timeout: 5000 });
    path.publishProduct.click();
    browser.pause(1000);
    path.yes.click();
     };

 this.publishPG = () => {
  //  To publish the product Group
   path.publishPG.waitForDisplayed(5000);
     path.publishPG.waitForClickable({ timeout: 5000 });
     path.publishPG.click();
       
      };


        
    


};
module.exports = new TestActionWrapper();