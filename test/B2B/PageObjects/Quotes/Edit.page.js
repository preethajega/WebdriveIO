const Page = require("../../PageObjects/page");
class Edit extends Page {
    open() {
        super.open('auth/login'); //this will append `login` to the baseUrl to form complete URL
      }

         get BBAddress() {
        return  super.pathByXpath('//div[1]/div/div[1]/div[2]/div/button');
      }

      get BillingAddress() {
        return  super.pathByXpath('//*[@id="address-select"]/label[2]/span[1]/span[1]/input');
      }

      get ok() {
        return  super.pathById('apply');
      }

      get BSAddress() {
        return  super.pathByXpath('//div/div[4]/div[2]/div/div[1]/div[2]/div/button');
      }

      get ShippingAddress() {
        return  super.pathByXpath('//*[@id="address-select"]/label[2]/span[1]/span[1]/input');
      }
      
      get ReferenceNo() {
        return  super.pathByName('buyerReferenceNumber');
      }

      get CustomerName() {
        return  super.pathByName('sprDetails.companyName');
      }

      get ProjectName() {
        return  super.pathByName('sprDetails.projectName');
      }

      get Competitor() {
        return  super.pathById('free-solo-demo');
      }

      get Quantity() {
        return  super.pathByName('dbProductDetails[0].askedQuantity');
     }

     get ProductSearch() {
         return  super.pathByXpath('//div[9]/div/div[2]/div/div/div/div/input');
     }

     get Selectproduct() {
      return  super.pathByXpath('//ul/div[2]');
  }

  get Selectproduct1() {
    return  super.pathByXpath('//div[2]/div/div/ul/div[1]');
}

get Selectproduct2() {
  return  super.pathByXpath('//div[2]/div/div/ul/div[3]');
}


get Selectproduct3() {
  return  super.pathByXpath('//div[2]/div/div/ul/div[4]');
}


get Selectproduct4() {
  return  super.pathByXpath('//div[2]/div/div/ul/div[5]');
}


get Selectproduct5() {
  return  super.pathByXpath('//div[2]/div/div/ul/div[6]');
}

get Selectproduct6() {
  return  super.pathByXpath('//div[2]/div/div/ul/div[7]');
}

get Selectproduct7() {
  return  super.pathByXpath('//div[2]/div/div/ul/div[8]');
}

get Selectproduct8() {
  return  super.pathByXpath('//div[2]/div/div/ul/div[9]');
}

get Selectproduct9() {
  return  super.pathByXpath('//div[2]/div/div/ul/div[10]');
}

get Selectproduct10() {
  return  super.pathByXpath('//div[2]/div/div/ul/div[11]');
}



get RemoveAllproductinSummary() {
        return  super.pathByXpath('//thead/tr/th[1]/span/span[1]/input');
    }

    get RemoveProduct() {
      return  super.pathByXpath('//div[10]/div/table/tbody/tr[1]/td[1]');
  }
     
    get RemoveButton() {
        return  super.pathByXpath('//div/div/div/div/div[9]/div/div/div[2]/button[1]');
    }

    
    get SellerSubmit() {
        return  super.pathByXpath('//header/div/div[2]/button[2]');
    }

    get BuyerSubmit() {
      return  super.pathById('loadingButton');
  }

      get Yes() {
      return  super.pathById('yes');
  }

  get TargetDiscount() {
    return  super.pathByName('sprDetails.sprRequestedDiscount');
}

get Targetprice() {
  return  super.pathByName('sprDetails.targetPrice');
}


    };

    module.exports = new Edit();