function Attachip(){
    const path = require('path');
    this.approvUrl="/checkout/quote-summary"
    this.uploadfile = path.join(__dirname,'./../../../FileUtils/Growmax PWA Icon 500x500.png');
    this.uploadfile1 = path.join(__dirname,'./../../../FileUtils/sample-cart.1fd3e1a4 (4).xlsx');
    this.uploadfile2 = path.join(__dirname,'./../../../FileUtils/sample-inventory.xlsx');
    this.uploadfile3 = path.join(__dirname,'./../../../FileUtils/screencapture-oboindia-bcommerce-in-Quotes-QuoteDetails-QOBO21060133-1-true-2021-06-25-10_56_36.png');
    this.uploadfile4 = path.join(__dirname,'./../../../FileUtils/ProfileImage.jpg');


}
module.exports = new Attachip();