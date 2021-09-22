const Page = require("../../../B2B/PageObjects/page");

class payment extends Page {
    open() {
      super.new(""); //this will append `login` to the baseUrl to form complete URL
}
  wait(){
    browser.pause(8000);
}
get orderAdvanceRadio(){
    return super.pathByName('orderAdvanceRadio');
}
get invoiceRadio(){
    return super.pathByName('invoiceRadio');
}
get bankTransferRadio(){
    return super.pathByName('Bank transferRadio');
}
get cardRadio() {
    return super.pathByName('CardRadio');

}
get cashRadio() {
    return super.pathByName('CashRadio');

}
get MobileMoneyRadio() {
    return super.pathByName('Mobile MoneyRadio');

}get NetBankingRadio() {
    return super.pathByName('Net BankingRadio');

}get UPIRadio() {
    return super.pathByName('UPIRadio');

}get WalletRadio() {
    return super.pathByName('WalletRadio');
}
get paymentNotes(){
    return super.pathByName('paymentData.notes');
}
get withoutpaymentRadio() {
    return super.pathByName('Place order without paymentRadio');

}

get payeeName() {
    return super.pathByName('paymentData.payeeName');
}

get receivedAmount() {
    return super.pathByName('paymentData.amountReceived');
}

get receiptNo() {
    return super.pathByName('paymentData.refernceNumber');

}

get paymnetDate() {
    return super.pathByName('paymentData.paymentDate');

}
get credit() {
    return super.pathByName('credit');

}
get debit() {
    return super.pathByName('debit');

}
get holderName() {
    return super.pathByName('paymentData.holderName');

}
get phoneNumber() {
    return super.pathByName('paymentData.phoneNumber');

}
get bankName() {
    return super.pathByName('paymentData.bankName');

}
get bankBranch() {
    return super.pathByName('paymentData.bankBranch');

}
get ifscCode() {
    return super.pathByName('paymentData.ifscCode');

}
get chequeNo() {
    return super.pathByName('paymentData.refernceNumber');
}
get alertRecAmount(){
    return super.pathByXpath('//p[text()="Min. amount should be atleast ₹0.1"]');
}
get alertReferenceNo(){
    return super.pathByXpath('//p[text()="Reference number is required"]');
}
get alertPaymnetDate(){
    return super.pathByXpath('//p[text()="Payment date is required"]');
}

}
