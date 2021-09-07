const Page = require("../../PageObjects/page");
class Buyer_filter  extends Page {
    
    open() {
        super.open('auth/login'); //this will append `login` to the baseUrl to form complete URL
      } 

      get userStatus(){
        return $('//input[@id="status" and @type="text"]')
    }
  
    

    get buyerNamefilter(){
        return $('//input[@id="companyName" and @type="text"]')
    } 

    // get clearStatus(){
    //     return $('//button[@type="button" and @title="title"]')
        
    //  }

    //  get clearBuyer(){
    //     return $('//button[@type="button" and @title="title"]')
        
    //  }
    //  get stateFilter(){
    //     return $('//input[@class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense"]')
     
    // }
    // get CityFilter(){
    //     return $('//input[@class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense"]')
     
    // }
    get cancelFilter(){

    return $('//button[@type="button" and @class="MuiButtonBase-root MuiButton-root MuiButton-outlined"]')
    }

    get submitFilter(){
        return $('//button[@id="filterApply" and @type="submit"]')

    }
    get ClearAll(){
        return $('//button[@type="button" and @class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-textSizeSmall MuiButton-sizeSmall"]')

    }

    }; 

    module.export= new Buyer_filter();
    