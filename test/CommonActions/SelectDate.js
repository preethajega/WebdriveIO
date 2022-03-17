const TestActionWrapper = require("../CommonFunctions/ActionsWrappers");
var ProductsActionWrapper = function() {
    // Wait for an element, move and then check clickable before clicking
  
    this.createPrductGroup = (brandName) => {
      
      console.log("Test888888888888888888888" );
      var createbtn = $("//*[@id='MPG_PPGL_CFBCPG']");
      var brandPath = $("[name='name']");
      TestActionWrapper.checkVisibleClickableAndClick(createbtn);
      brandPath.setValue(brandName);
    //   createbtn.click();
      //  ele.waitForDisplayed(8000);
      // ele.waitForClickable({ timeout: 8000 });
      // ele.click();
    };
   
  };
  module.exports = new ProductsActionWrapper();
  
  