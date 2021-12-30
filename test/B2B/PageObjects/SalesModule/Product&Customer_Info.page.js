const Page = require("../page");

class Summary extends Page {
  // common methods for path
 async open() {
    super.open(); //this will append `login` to the baseUrl to form complete URL
  }

  
 /*Product details */ 
  get customProduct() {
    return super.pathByXpath('//*[text()="Add Custom Product"]');
  }

  get searchProducts() {
    return super.pathByXpath('//*[@placeholder="Search for products"]');
  }

  get productId(){
     return super.pathByName('products[0].brandProductId');
  }

  get productDesc() {
    return super.pathByName('products[0].productShortDescription');
  }

  get prodAddonCost(){
    return super.pathByName('products[0].addonCost');
  }

  get prodUnitPrice(){
    return super.pathByName('products[0].unitPrice');
  }

  get prodRemoveBtn(){
    return super.pathById('remove');
  }

  /*need to check */
  get prodCheckbox(){
    return super.pathByXpath('(//input[@type="checkbox"][last()])');
  }
  
  get prodQty(){
    return super.pathByName('products[0].askedQuantity');
  }
 
  get prodTax(){
     return super.pathByName('products[0].tax')
  }

  get deliveryLeadTime(){
    return super.pathByName('products[0].deliveryLeadTime');
  }

  get custProdLead(){
    return super.productId('combo-box-demo');
  }


//finacial summary cart
  get baseCurrencyFactor(){
    return super.pathById('bcfactor');
  }

  get totalAddonCost(){
    return super.pathByXpath('//*[starts-with(@name,"addonCost")]');
  }


//Apply discount card

  get targetDiscount(){
    return super.pathByName('sprRequestedDiscount');
  }

  get targetPrice(){
    return super.pathByName('sprDetails.targetPrice');
  }

  get byAmount(){
    return super.pathByXpath('//span[text()="By Amount"]');
  }
  get byDiscount(){
    return super.pathByXpath('//span[text()="By Discount %"]');
  }
  get newSubTotal(){
    return super.pathByXpath('//*[contains (text(),"new subtotal")]/following::input[1]');

  }

  get roundoff_2(){
    return super.pathById(Btn-2);

  }

  get roundoff_1(){
    return super.pathById(Btn-1);

  }
  get roundoff0(){
    return super.pathById(Btn0);

  }
  get roundoff1(){
    return super.pathById(Btn1);

  }
  get roundoff_1(){
    return super.pathById(Btn2);

  }





}