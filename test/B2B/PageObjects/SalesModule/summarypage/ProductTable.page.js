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

get AddCustomProduct() {
    return super.pathByXpath('//button[text()="Add Custom Product"]');
}

get AddMoreProduct(){
    return super.pathByXpath('//button[@placeholder="Search for products"]');
}

get searchResultsImage() {
    return super.pathByXpath('//*[@placeholder="Search for products"]/following::div[4]');
}

  


}
module.exports = new ProductTable();
