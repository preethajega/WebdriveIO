const Page = require("../../PageObjects/page");
class Buyer_landing  extends Page {
    
    open() {
        super.open('auth/login'); //this will append `login` to the baseUrl to form complete URL
      }

get filterButton(){
      return $('//button[@type="button" and @class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedSecondary"]')
}
get createCompany(){
    return $('//button[@type="button" and @class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"]')
}

get reSet(){
    return $('//button[@type="button" and @title="Click to Refresh"]')
}

get rowsPerPage(){
    return $('//*[@class="MuiSvgIcon-root MuiSelect-icon MuiTablePagination-selectIcon"]')
}

get previousPage(){
    return $('//button[@type="button" and @aria-label="Previous page" ]')
}
get nextPage(){
    return $('//button[@type="button" and @aria-label="Next page" ]')
}


}; 

module.export= new Buyer_landing();
