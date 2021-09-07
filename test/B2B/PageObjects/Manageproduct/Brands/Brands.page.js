const Page = require('../../page');
const CommonWrappers = require("../../../CommonActions/ActionsWrappers");
 class Brands extends Page {
  open() {
    super.open('auth/login'); //this will append `login` to the baseUrl to form complete URL
  }

  get Icon() {
    return  super.pathByXpath('//div[3]/button[3]');
  }
  
  get PtdandPL() {
    return  super.pathByXpath('//*[@id="Products "]');
  }
  
  get brand() {
    return  super.pathById('Brands');
  }
  
  get AddButton() {
    return  super.pathByXpath('//header/div/button[2]');
  }

  get Name() {
    return  super.pathByXpath('//div[3]/div/div[2]/div/div/input');
  }
   
  get saveButton() {
    return  super.pathById('Add new Brand?');
  }
   
  get Namerequired() {
    return  super.pathByXpath('//div/p');
  }

     
  get Image() {
    return  super.pathById('prefix-1');
  }
   
  get save() {
    return  super.pathByXpath('//div[2]/div[2]/header/div/button[2]');
  }
   
  get save() {
    return  super.pathByXpath('//div[2]/div[2]/header/div/button[2]');
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
   get close() {
    return $("//header/div/button[5]");
   }
   get search () {
    return $("//div[5]/div/input");
   }
   get box () {
    return $("//tr[1]/td[1]/span/span[1]/input");
   }
   get DeleteIcon() {
    return $("//header/div/button[3]");
   }
   get DeleteBtn() {
    return $('//div[3]/ul/li[3]');
   }

   get yesButton() {
    return $('//*[@id="yes"]');
   }
  //  get select() {
  //   return $("//span[ends-with('Classmate')]");
  //  }




   get select () {
    return $('= Classmate');
   }

  //  moveToElement(element){
  //    element.waitForDisplay();
  //    element.moveTo();
  //  }
   get Delete () {
    return $('//header/div/button[1]');
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

module.exports = new Brands()