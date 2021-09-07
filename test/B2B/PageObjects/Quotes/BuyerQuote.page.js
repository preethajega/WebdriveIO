const Page = require('../page');
class BuyerQuote extends Page {
    open() {
        super.open('auth/login'); //this will append `login` to the baseUrl to form complete URL
      }
    
      get RequireDate() {
        return  super.pathByName('customerRequiredDate');
      }
      
      get nextmonth() {
      return  super.pathByXpath('/html/body/div[6]/div[3]/div/div[2]/div[1]/div[1]/button[2]');
      }
      
      get Date() {
      return  super.pathByXpath('/html/body/div[6]/div[3]/div/div[2]/div[2]/div/div[4]/div[4]/button');
      }

      get QuoteName() {
        return  super.pathById('name');
     }

     get QuoteNameCancel() {
      return  super.pathById('editDialogCancel');
   }

   get Ok() {
    return  super.pathById('editDialogButton');
  }


  get QuoteNameRequired() {
    return  super.pathById('name-helper-text');
  }

  
      get SelectQuote() {
        return  super.pathByXpath('//table/tbody/tr[1]');
     }

     get StatusOpen() {
      return  super.pathByXpath('//header/div/div/div[1]/p');
   }

   get SelectQuoteName() {
    return  super.pathByXpath('//a/div/p');
}


get Icon() {
  return  super.pathByXpath('//div[3]/button[2]');
}

get signout() {
  return  super.pathByXpath("//div[starts-with(@id,'Sign Out')]");
}

get CheckStatus() {
  return  super.pathByXpath('//header/div/div/div[1]/p');
}


get Toaster() {
  return  super.pathByXpath('//*[@id="client-snackbar"]/svg');
}

get OrderToaster() {
  return  super.pathById('MuiSnackbarContent-message');
}

get SaveQuote() {
  return  super.pathByXpath('//header/div/div[2]/button[1]');
}

get Saveok() {
  return  super.pathById('yes');
}

get moreoption() {
  return  super.pathByXpath('//div[2]/div[1]/div/header/div/button[3]');
}

get nextmonth1() {
  return  super.pathByXpath('/html/body/div[3]/div[3]/div/div[2]/div[1]/div[1]/button[2]');
  }
  
  get Date1() {
  return  super.pathByXpath('/html/body/div[3]/div[3]/div/div[2]/div[2]/div/div[4]/div[4]/button');
  }







get SummarySearch() {
  return  super.pathByXpath('//div/div[1]/div[1]/div/div[2]/div/div/div/div/input');
}

get SummarySelectProduct() {
  return  super.pathByXpath('//div/div/ul/div[3]');
}

get SelectQuoteName() {
  return  super.pathByXpath('//*[@id="root"]/div[2]/div/div[1]/div[2]/div[1]/div/header/div/div/div[2]/div/a');
}



 get NewName() {
  return  super.pathByXpath('//div[3]/div/div[1]/div/input');
}

get Tick() {
  return  super.pathByXpath('//*[@id="simple-popover"]/div[3]/div/button[1]');
}

get SaveButton() {
  return  super.pathByXpath('//header/div/div[2]/button[1]');
}

get SaveButtonYes() {
  return  super.pathById('yes');
}


get RFQ() {
  return  super.pathByXpath('//header/div/div[2]/button[1]');
}

get TargetDiscount() {
  return  super.pathByXpath('//*[@id="sprDetails.sprRequestedDiscount"]');
}

get CustomerName() {
  return  super.pathByXpath('//*[@id="sprDetails.companyName"]');
}

get ProjetName() {
  return  super.pathByName('sprDetails.projectName');
}

get Competitors() {
  return  super.pathByXpath('//*[@id="sprDetails.competitorNames"]');
}

get PriceJustification() {
  return  super.pathById('priceJustification');
}








     }







  

module.exports = new BuyerQuote()  