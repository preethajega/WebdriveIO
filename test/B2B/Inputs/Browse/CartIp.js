function cartPageInput() {     
    const path = require('path');
    this.cartUrl="/checkout/cart";
    this.custProdDesc="custom product";
    this.custProdid="123";
    this.custProdprice="1000";
    this.ProdName="Apple";
    this.LeadName = 'sanity';
    this.BuyerName = 'Enterprise';
    this.CompanyName = "apptino software";
    this.ContactPerson = "fred";
    this.CustomerEmail = "fred@gmail.com";
    this.ContactNo = "9876543210";
    this.Source = "Social Networks";
    this.Message = "this is to inform one enquiry is received";
    this.suceessAlert = "Lead created successfully";
    this.cartAlert="Product added to cart";
    this.customAlert="You cannot create enquiry with custom product(s)";
    this.uploadAlert = "Uploading attachment, please wait";
    this.Attachment = path.join(__dirname,'./../../../FileUtils/Growmax PWA Icon 500x500.png');
    this.uploadExcel=path.join(__dirname,'./../../../FileUtils/sample-cart.1fd3e1a4.xlsx')
    this.Attachmenttext="text"
}
module.exports= new cartPageInput();