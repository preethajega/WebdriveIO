function CartPageInput() {        
    this.LeadName = 'Lead';
    this.BuyerName = 'ara';
    this.CompanyName = "apptino software";
    this.ContactPerson = "fred";
    this.CustomerEmail = "fred@gmail.com";
    this.ContactNo = "9876543210";
    this.Source = "Social Networks";
    this.Message = "this is to inform one enquiry is received";
    this.suceessAlert = "Lead created successfully";
    this.uploadAlert = "Uploading attachment, please wait";
    this.Attachment = path.join(__dirname,'./../../FileUtils/profilepic.png');
}


module.exports = new CartPageInput();