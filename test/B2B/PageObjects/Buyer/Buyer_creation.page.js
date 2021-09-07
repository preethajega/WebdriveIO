const Page = require("../../PageObjects/page");
class Buyer_creation  extends Page {
    Buyer_creation
    open() {
        super.open('auth/login'); //this will append `login` to the baseUrl to form complete URL
      } 

      get buyer_Name(){
        return $('//input[@id="companyName"]')
    } 

    get branch_Name(){
        return $('//input[@name="regAddress.branchName"]')
    } 

    
    get buyer_Address(){
        return $('//textarea[@name="regAddress.addressLine"]')
    } 

    get locality_Name(){
        return $('//input[@name="regAddress.locality"]')
    } 

    get buyer_City(){
        return $('//input[@name="regAddress.city"]')
    } 

    get buyer_pinCode(){
        return $('//input[@name="regAddress.pinCodeId"]')
    } 

    get buyer_District(){
        return $('//input[@name="regAddress.district"]')
    } 

    get buyer_State(){
        return $('//input[@name="regAddress.state"]')
    } 
    get buyer_Country(){
        return $('//input[@name="regAddress.country"]')
    }
    get adrress_Billing(){
        return $('//input[@name="regAddress.isBilling"]')
    }
    get adrress_Shipping(){
        return $('//input[@name="regAddress.isShipping"]')
    }

    get buyer_Tax(){
        return $('//input[@id="taxId" and @name="regAddress.gst"]')
    }


    get buyer_Currecny(){
        return $('//input[@name="currencyId"]')
    }
    get buyer_UserName(){
        return $('//input[@name="displayName"]')
    }
    get buyer_Mobile(){
        return $('//input[@id="mobileNo" and @name="mobileNo"]')
    }
    get buyer_EmailId(){
        return $('//input[@name="userEmail"]')
    }
    
    get buyer_Role(){
        return $('//input[@name="roleName"]')
    }

    get buyer_jobTiltle(){
        return $('//input[@id="jobTitle" and @name="jobTitle"]')
    }
    get buyer_Department(){
        return $('//input[@id="department" and @name="department"]')
    }   
   
    get buyer_crtnCancel(){
        return $('//button[@id="editDialogCancel" and @type="button"]')
    }
     
    get buyer_crtnSave(){
        return $('//button[@id="editDialogButton" and @type="button"]')
    }
     



    };

    module.export = new Buyer_creation();
    