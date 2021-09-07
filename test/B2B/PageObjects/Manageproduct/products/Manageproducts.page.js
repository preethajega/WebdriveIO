const Page = require('../../page');
const CommonWrappers = require("../../../CommonFunctions/ActionsWrappers");
 class Products extends Page {
  
  get Icon() {
    return $("//header/div/div/div[3]/button[2]");
  }
  
  get PtdandPL() {
    return $('//*[@id="Products "]');
  }
  get managePtd() {
    return $('//*[@id="Products"]');
   }
   

  
  get cancel () {
    return $('//div[3]/div/div[2]/div[2]/div/div/div/button[1]');
  }
  
  

    
  
  
    get leadTimereq () {
      return $('//div[2]/div[3]/div/p');
    }
    
    get effFromreq () {
      return $('//*[@id="date-picker-inline-helper-text]');
    }  
        get HighlightIcon () {
      return $('//*[@id="Highlights"]');
    }
    get Highlight () {
    return $('//*[@id="panel1bh-content"]/div/div/div[2]/div[1]');
  }
  get AssertIcon () {
    return $('//*[@id="Assets"]');
  }
  get Assert () {
    return $('//*[@id="button-file"]');
      }
      get AssertassImg() {
        return $('//li/div[1]');
          }
  
      get relatedPtdIcon () {
    return $('//*[@id="Related Products"]');
  }
  get relatedPtd () {
    return $('//*[@id="panel1bh-content"]/div/div/div/div');
  }
    get startrelated (){
    return $("//ul[starts-with(li, 'mui-autocompelete') and substring(li, 'option-1')]");
  }
//p[starts-with(strong,'GENERAL ') and substring(strong, string-length(strong)-7)=' COURSES']/following-sibling::ul/li
  get variantIcon() {
    return $('//*[@id="Variants"]');
  }
  get setvariantName () {
    return $('//*[@name="VariantNames"]//input');
  }
  get setvariantAttribute () {
    return $('//*[@name="VariantAttributes"]//input');
  }
  get variantAdd() {
    return $('//*[@id="panel1bh-content"]/div/div/div[2]/button');
  }
  get variantName () {
    return $('//*[@id="panel1bh-content"]/div/div[2]/div[1]/div[1]/div/div');
  }
  get variantAttribute() {
    return $('//*[@id="panel1bh-content"]/div/div[2]/div[1]/div[2]/div/div');
  }
      get variantDelete () {
    return $('//*[@id="panel1bh-content"]/div/div[1]/div[2]/button');
  }

  get specificationIcon() {
    return $('//*[@id="Specifications"]');
  }
  get specificationKeys () {
    return $('//*[@id="panel1bh-content"]/div/div/div[3]/div/div/input');
  }
  get specificationValues () {
    return $('//*[@id="panel1bh-content"]/div/div/div[4]/div/div/input');
  }
  get specificationAdd () {
    return $('//*[@id="panel1bh-content"]/div/div/div[5]/button');
  }
  get specificationKeys1 () {
    return $('//div[6]/div/div/input');
  }
  get specificationValues2() {
    return $('//div/div/div[7]/div/div');
  }
  get specificationDelete () {
    return $('//*[@id="panel1bh-content"]/div/div/div[5]/button');
  }

  get CPGsave () {
    return $('//header[1]/div/button[2]');
  }

  
  
  get PtdIDreq () {
    return $("//div[3]/div/div[2]/div[1]/p");
  }
  

  get PtdNamereq () {
    return $("//div[3]/div/div[2]/div[1]/p");
  }

  get HSN () {
    return $('//*[@name="hsnCode"]');
  }

  get primarycategory () {
    return $('//*[@id="productSubCategories.primarySubcategoryName"]');
  }
  

  get UnitPricereq() {
    return $("//div[5]/div[1]/div/p");
  }

  

  get UnitQtyreq () {
    return $("//div[5]/div[2]/div/p");
  }

  

  get PackQtyreq () {
    return $("//div[5]/div[3]/div/p");
  }
  
  get saveBtn () {
    return $('//*[@id="Create Product"]');
  }
 
 
    get LongDescriptionIcon () {
    return $('//*[@id="Long Description"]');
  }
  get LongDescription () {
    return $('//*[@id="panel1bh-content"]/div/div/div[2]/div[1]');
  }
    get asserticon() {
      return $('//*[@id="Assets"]');
 }
 get assert () {
  return $("//*[@id='button-file']");
}
get assertassimg () {
  return $('//li/div[1]');
}

get specificationicon () {
  return $('//*[@id="Specifications"]');
}

get Specificationkeys () {
  return $('//*[@id="panel1bh-content"]/div/div/div[3]/div/div/input');
}
get Specificationvalues () {
  return $('//*[@id="panel1bh-content"]/div/div/div[4]/div/div/input');
}
get specificationadd () {
  return $('//*[@id="panel1bh-content"]/div/div/div[5]/button');
}
get Specificationkeys1 () {
  return $("//div[6]/div/div/input");
}
get Specificationvalues1 () {
  return $("//div[7]/div/div/input");
}
get specificationdelete () {
  return $('//*[@id="panel1bh-content"]/div/div/div[5]/button');
}
  get AdditionalInfo () {
    return $('//*[@id="Additional Information"]');
  }
  get PackagingDimension () {
    return $('//*[@name="packagingDimension"]');
  }
  get Netweight () {
    return $('//*[@name="netWeight"]');
  }
  get EAN () {
    return $('//*[@name="ean"]');
  }
  get UPC () {
    return $('//*[@name="upc"]');
  }
 
   get  closeButton() {
    return $("//header/div/button[5]");
  }
  get  PublishPG() {
    return $('//*[@id="MPG_PPGOD_CPUB"]');
  }

  get  OnlyPG() {
    return $('//div[2]/ul/div[1]');
  }

  get  PGOk() {
    return $('//div[5]/div[3]/div/div[3]/button[2]');
  }

get  searchID () {
      return $("//div[2]/div[1]/input");
    }

    get kurtis () {
      return $("//ul/div");
    }




  get  PGCross() {
    return $('//button[5]');
  }


  get search () {
    return $("//div[5]/div/input");
   }
   get box () {
    return $("//span[1]/input");
   }

   get  EditButton () {
    return $("//header[1]/div/button[2]");
   }
   get  Ptd () {
    return $('//div[2]/button[@class="MuiButtonBase-root MuiIconButton-root"]');
   }
   get moreoption() {
    return $("//header/div/button[3]");
   }
   get PtdUnpublish() {
    return $("//div[3]/ul/li[2]");
   }
   get UnpublishYes () {
    return $('//*[@id="yes"]');
   }

   get moreoption1() {
    return $("//header/div/button[3]");
   }

   get PtdDelete () {
    return $("//div[3]/ul/li");
   }

   get yesButton () {
    return $('//*[@id="yes"]');
   }

   get menu () {
    return $("//header/div/button[3]");
   }

    get PtdgroupDelete () {
    return $('//div[3]/ul/li[3]');
   }
   get Ptdgroupyes () {
    return $('//*[@id="yes"]');
   }


  get select() {
    return $("//tbody/tr[1]/td[2]");
  }
  get box1 () {
    return $("//span[1]/input");
   }
   get option () {
    return $("//header[1]/div/button[3]");
   }
   get clonePG () {
    return $("//div[3]/ul/li[1]");
   }
   get clonePGname () {
    return $('//*[@name="name"]');
   }

   get clonePGbrand () {
    return $('//*[@id="brandsId"]');
   }
   get clonesave () {
    return $('//*[@id="Create Product Group"]');
   }

   get uploadButton () {
    return $("//div[3]/ul/li[2]");
   }
   get uploadPtd () {
    return $('//*[@id="upload-excel-file"]');
   }
   get checkbox() {
    return $("//th[1]/span/span[1]/input");
   }
   get clonePrimary () {
    return $('//*[@id="productSubCategories.primarySubcategoryName"]');
   }
   get Assign () {
    return $('//div[3]/div/header/div/button');
   }
   get Uploadsave () {
    return $("//div[5]/div[3]/div/div[2]/button[2]");
   }

  }
  

module.exports = new Products()