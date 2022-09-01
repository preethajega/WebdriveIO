const Page = require("../../../PageObjects/page");


class ProductTable extends Page{

customProductId(row){
    return $(`[name="products[${row}].brandProductId"]`)
}

CustomProductDescription(row){
    return $(`[name="products[${row}].productShortDescription"]`)
}
  
productId(row){
    return $(`[name="products[${row}].buyerBrandProductId"]`)
}

buyerProductDescription(row){
    return $(`[name="products[${row}].buyerProductDescription"]`)
}

unitListPrice(row){
    return $(`[name="products[${row}].unitListPrice"]`)
}

discount(row){
    return $(`[name="products[${row}].discount"]`)
}

productCost(row){
    return $(`[name="products[${row}].productCost"]`)
}
productId(row){
    return $(`[name="products[${row}].buyerBrandProductId"]`)
}
addonCost(row){
    return $(`[name="products[${row}].addonCost"]`)
}
margin(row){
    return $(`[name="products[${row}].marginPercentage"]`)
}
dmc(row){
    return $(`[name="products[${row}].dmc"]`)
}

unitPrice(row){
    return $(`[name="products[${row}].unitPrice"]`)
}

shippingCharges(row){
    return $(`[name="products[${row}].shippingCharges"]`)
}

askedQuantity(row){
    return $(`[name="products[${row}].askedQuantity"]`)
}

deliveryLeadTime(row){
    return $(`[name="products[${row}].deliveryLeadTime"]`)
}
accountOwner(row){
    return $(`[name="products[${row}].accountOwner"]`)
}
shipToBranchName(row){
    return $(`[name="products[${row}].shipToBranchName"]`)
}
prodrequiredDate(row){
    return $(`[name="products[${row}].reqDeliveryDate"]`)
}

targetPrice(row)  {
    return $(`[name="products[${row}].buyerRequestedPrice"]`)
}

Amount(row){
    return $(`//tbody/tr[${row}]/td[11]/p`)

    // return $(`//tbody/tr[${row}]/td[12]/p`)

}
PFrate(row){
    return $(`//tbody/tr[${row}]/td[12]/p`)
    
    // return $(`//tbody/tr[${row}]/td[13]/p`)

}

get AddCustomProduct() {
    return super.pathByXpath('//button[text()="Add Custom Product"]');
}

get AddMoreProduct(){
    return super.pathByXpath('//button[@placeholder="Search for products"]');
}

get searchResultsImage() {
    return super.pathByXpath('//*[@placeholder="Search for products"]/following::div[4]');
}

get ScrolProduct(){
    return super.pathByXpath('//h5[text()="Products"]')
}
get DMCToggleBtn(){
  return super.pathByXpath('//span[text()="Show DMC?"]')
}
get SaveBtn(){
    return super.pathByXpath('//button[text()="Save"]')
}

  


}
module.exports = new ProductTable();
