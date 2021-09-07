const Page = require("../page");
class Respond extends Page {
    open() {
        super.open('auth/login'); //this will append `login` to the baseUrl to form complete URL
      }

      get moreoption() {
        return  super.pathByXpath('//*[@id="root"]/div[2]/div/div[3]/form/div/div/div/header/div/div[2]/button[3]');
      }

      get DiscardBtn() {
        return  super.pathByXpath('//div[3]/ul/li');
      }

      get Yes() {
        return  super.pathById('yes');
      }
      get Saveasdraft() {
        return  super.pathByXpath('//header/div/div[2]/button[1]');
      }

      get AdditionalTerm() {
        return  super.pathByName('additionalTerms');
      }

      get CustomProduct() {
        return  super.pathByXpath('//div[7]/div/div/div[2]/button');
      }

      get ProductId() {
        return  super.pathById('dbProductDetails[0].brandProductId');
      }

      get Description() {
        return  super.pathById('dbProductDetails[0].productShortDescription');
      }

      get Cost() {
        return  super.pathById('dbProductDetails[0].productCost');
      }

      get UnitPrice() {
        return  super.pathById('dbProductDetails[0].unitPrice');
      }

      get Tax() {
        return  super.pathById('MQUOTE_PQD_TSN_ET');
      }

      get LeadDays() {
        return  super.pathById('dbProductDetails[0].deliveryLeadTime');
      }

      get SaveQuote() {
        return  super.pathByXpath('//header/div/div[2]/button[1]');
      }

      get DispatchTerm() {
        return  super.pathById('dispatchInstructions');
      }

      get ChangeApprovalGroup() {
        return  super.pathById('ApprovalGroup');
      }

      get Selectgroup() {
        return  super.pathById('ApprovalGroup-option-1');
      }


      get RespondBtn() {
        return  super.pathByXpath('//header/div/button[1]');
      }

      get ApprovalinProcess() {
        return  super.pathByXpath('//header/div/div/div[1]/p');
      }

      get InProgress() {
        return  super.pathByXpath('//header/div/div/div[1]/p');
      }
      
      get RFQ() {
        return  super.pathByXpath('//*[@id="scrollable-force-tab-0"]/span[1]/div/div[1]/p');
      }
   
      get Submit() {
        return  super.pathByXpath('//header/div/div[2]/button[2]');
    }
   
    get Placeorder() {
      return  super.pathByXpath('//header/div/button[2]');
  }
   
  get ResetSubTotal() {
    return  super.pathByXpath('//div[3]/div[2]/div/div[2]/button[1]');
}
  
get Quantity() {
  return  super.pathByName('dbProductDetails[0].askedQuantity');
}

get Packofvalue() {
  return  super.pathByXpath('//*[@id="root"]/div[2]/div/div[3]/form/div/div/div/div/div[10]/div/table/tbody/tr[1]/td[2]/div/div[2]/span[3]');
} 
  
get search() {
  return  super.pathByXpath('//div[8]/div/div[2]/div/div/div/div/input');
} 

get Quantityrequire() {
  return  super.pathByXpath('//table/tbody/tr[1]/td[6]/div/div/p"');
} 

  
get MOQ() {
  return  super.pathByXpath('//table/tbody/tr[1]/td[6]/div/div/p');
} 





      };

    module.exports = new Respond();