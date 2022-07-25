function AddCustomProducts(){
    const path = require('path');
    this.ProductID="CUSTOM0023"
    this.ProductVariantname="BlackBoard"
    this.Productname="White shirt"
    this.Primarycategory="Sub category"
    this.HSDcode="0"
    this.UnitListprice="650"
    this.Productcost="550"
    this.Unitquantity="2"
    this.Packquantity="1"
    this.Division="south"
    this.Businessunit="spares"
    this.Unitofmearsure="pcs"
    this.SaveAlert="Product created"
    this.ProductReq="Product ID required"
    this.ProductVariantReq="Product Name required"
    this.ProductNameReq="Product Group required"
    this.PrimaryCategoryReq="Primary category required"
    this.HSNCodeReq="HSN/SAC required"
    this.SelectBuyIP="Sakthi enterprise, Toronto"

}
module.exports = new AddCustomProducts();