function cartPageInput() {     
    const path = require('path');
    this.cartUrl="/checkout/cart";
    this.custProdDesc="custom product";
    this.custProdid="123";
    this.custProdprice="1000";
    this.ProdName="Apple";
    this.itemName="801 chair";
    this.itemName1="FG100129"
    this.itemName2="FG100308"
    this.itemName3="FG100612"
    this.itemName4="FG1005684"
    this.ProdQty="10";
    this.ProdQty1="21";
    this.ProdQty2="5";
    this.LeadName = 'sanity';
    this.BuyerName = 'Personiv Coimbatore ';
    this.BuyerName1="preetha pvt ltd";
    this.BuyerName2="NIET";
    this.BuyerName3="Zoho";
    this.CompanyName = "apptino software";
    this.ContactPerson = "fred";
    this.CustomerEmail = "fred@gmail.com";
    this.ContactNo = "9876543210";
    this.Source = "Social Networks";
    this.Message = "this is to inform one enquiry is received";
    this.suceessAlert = "Lead created successfully";
    this.cartAlert="Product added to cart";
    this.buyerAlert="Select a buyer to proceed";
    this.customAlert="You cannot create enquiry with custom product(s)";
    this.uploadAlert = "Uploading attachment, please wait";
    this.Attachment = path.join(__dirname,'./../../../FileUtils/Growmax PWA Icon 500x500.png');
    this.uploadExcel=path.join(__dirname,'./../../../FileUtils/sample-cart.xlsx');
    this.Attachmenttext="text";
    this.qtyAlert="Invalid quantity";
}
module.exports= new cartPageInput();