const Page = require('../../page');
const CommonWrappers = require("../../../CommonFunctions/ActionsWrappers");
 class Category extends Page {
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
  
  get PtdandPL() {
    return $('//*[@id="Products "]');
  }
  get categories() {
    return $('//*[@id="Categories"]');
   }

   get AddButton () {
    return $("//header/div/button");
   }
   get Name () {
    return $("//div[3]/div/div[2]/div/div/input"); 
   }
   get saveButton () {
    return $('//*[@id="Add new Category?"]');
   }
   get namerequired () {
    return $("//div/p"); 
   }
   get nameexsits () {
    return $("//div/p");
   }
   
   get Description () {
    return $("//div/div[2]/div/div[1]/div[2]/div[2]/div[1]");
   }
   get save () {
    return $("//div[2]/div[2]/header/div/button[2]");
   }

   get Image1() {
    return $("//input[1][starts-with(@id,'prefix')]");
   }

   get Image2() {
    return $("//input[2][starts-with(@id,'prefix')]");
   }

   get AddButton1 () {
    return $("//header/div/button[2]");
   }
   get PG() {
    return $('//*[@id="Products"]');
   }
   get createPG() {
    return $('//*[@id="MPG_PPGL_CFBCPG"]');
   }

   get PGName() {
    return $('//*[@name="name"]');
   }
   get brandname() {
    return $('//*[@id="brandsId"]');
   }
   get savePG() {
    return $('//*[@id="Create Product Group"]');
   }
   get createPtd() {
    return $("//header/div[1]/button[2]");
   }
   get PtdID() {
    return $('//*[@name="brandProductId"]');
   }

   get PtdName() {
    return $('//*[@name="productShortDescription"]');
   }
   get HSN() {
    return $('//*[@name="hsnCode"]');
   }
   get primarycategory() {
    return $('//*[@id="productSubCategories.primarySubcategoryName"]');
   }
   get UnitPrice() {
    return $('//*[@name="unitListPrice"]');
   }
   get UnitQty() {
    return $('//*[@name="unitQuantity"]');
   }
   get PackQty() {
    return $('//*[@name="packagingQty"]');
   }
   get UnitOfMeasure() {
    return $('//*[@name="unitOfMeasure"]');
   }
   
   get saveBtn() {
    return $('//*[@id="Create Product"]');
   } 
   get Ptdcost() {
    return $('//*[@name="productCost"]');
   } 
   
   get publish() {
    return $('//header/div/button[2]');
   } 
   get yes() {
    return $('//*[@id="yes"]');
   } 
   get close() {
    return $('//header/div/button[5]');
   } 
   get publishPG() {
    return $('//*[@id="MPG_PPGOD_CPUB"]');
   } 
   get leadTime () {
    return $('//*[@name="standardLeadTime"]');
  }
  
  get effFrom () {
    return $('//*[@id="date-picker-inline-helper-text]');
  }  
  get SBtn () {
    return $('//header[1]/div/button[2]');
  } 
  get OnlypublishPGn () {
    return $('//ul/div[1]/div/p');
  } 
  get Ok () {
    return $('//div[5]/div[3]/div/div[3]/button[2]');
  } 

  get searchID () {
    return $('//input');
  } 








  open() {
    super.open('auth/login'); //this will append `login` to the baseUrl to form complete URL
  }
  login(username, password) {
    //   this.waitForloginPageToLoad();
    this.usernameInput.setValue(username); 
    this.passwordInput.setValue(password);
    this.signinButton.click();
     }

     
  }

module.exports = new Category()