const Page = require("../../../B2B/PageObjects/page");
const commonObjects =require('../Common/commonObjects');
var paymentIp = require("../../Inputs/paymentIp");
var actionwrappers = require("../../../CommonActions/ActionsWrappers");
const assert = require("assert");

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
get companyAdvanceRadio(){
    return super.pathByName('againstWalletRadio');
}

get invoiceRadio(){
    return super.pathByName('invoiceRadio');
}
get adjustmentRadio(){
    return super.pathByName('AdjustmentRadio');
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
get chequeRadio() {
    return super.pathByName('ChequeRadio');

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
get payableAmount(){
    return super.pathByXpath('//*[text()="Notes"]/preceding::p[2]');
}

get withoutpaymentRadio() {
    return super.pathByXpath('//*[contains(text(),"without payment")]');

}

get companyAdvancePayment(){
    return super.pathByName('companyAccount');
}

get orderAdvancePayment(){
    return super.pathByName('orderAdvance');
}

get paymentReference(){
    return super.pathByName('paymentData.orderPaymentReferences');
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

get paymentDate() {
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

get adjustAmount() {
    return super.pathByName('paymentData.paymentAdjustments[0].adjustmentAmount');
}
get alertpayment() {
    return super.pathByXpath('//p[contains(text(),"(cast from the value `NaN`)")]');
 }
get alertRecvAmount(){
    return super.pathByXpath('//p[text()="Min. amount should be atleast ₹0.1"]');
}
get alertReferenceNo(){
    return super.pathByXpath('//p[text()="Reference number is required"]');
}
get alertPaymentDate(){
    return super.pathByXpath('//p[text()="Payment date is required"]');
}
get alertPaymentEmpty(){
    return super.pathByXpath('//p[text()="Enter amount received"]');
}
get alertPaymentmode(){
    return super.pathByXpath('//p[text()="Select a payment mode"]');
}


 async bankDetails(){   
        await actionwrappers.checkEnabledAndSetValue(
            await this.bankName,paymentIp.bankName
        );
        await actionwrappers.checkEnabledAndSetValue(
            await this.bankBranch,paymentIp.bankBranch
        );
        await actionwrappers.checkEnabledAndSetValue(
            await this.ifscCode,paymentIp.bankCode
        );
     
 }

 async basicDetails(){   
    await actionwrappers.checkEnabledAndSetValue(
        await this.payeeName,paymentIp.payeeName
    )
    await actionwrappers.checkEnabledAndSetValue(
        await this.receiptNo,paymentIp.receiptNo
    )
    await actionwrappers.checkClickableAndClick(
        await this.paymentDate
    )
    await actionwrappers.checkClickableAndClick(
        await commonObjects.nextDate
    )
    

}

 async cardDetails(){
     if(paymentIp.cardType==='debit'){
        await actionwrappers.checkClickableAndClick(
            await this.debit
        )}
     else {
        await actionwrappers.checkClickableAndClick(
            await this.credit
        )
     }
     await actionwrappers.checkEnabledAndSetValue(
        await this.holderName,paymentIp.holderName
    )
    await actionwrappers.checkEnabledAndSetValue(
        await this.phoneNumber,paymentIp.phoneNumber
    )
 }

async advanceAdjust() {
    if(this.companyAdvancePayment.isDispalyed()){
        await actionwrappers.checkClickableAndClick(
            await this.companyAdvancePayment
        )
    }else if (this.orderAdvancePayment.isDispalyed()){
        await actionwrappers.checkClickableAndClick(
            await this.orderAdvancePayment
        )
    }
        await actionwrappers.selectDrpdownusingKeyboard(
            await this.paymentReference
        )

}
 
async amountToPay(due){
    let totalAmount = await this.payableAmount.getText();
    let paidAmount = await (this.totalAmount/2);
    if(due ==='single'){
    await actionwrappers.checkEnabledAndSetValue(
        await this.receivedAmount,this.totalAmount
    );
    }else if(due ==='partial'){
        await actionwrappers.checkEnabledAndSetValue(
            await this.receivedAmount,this.paidAmount
        );
    }

}

async amountToAdjust(){
    let adjustAmnt = await this.receivedAmount.getText();
    await actionwrappers.checkEnabledAndSetValue(
        await this.adjustAmount,this.adjustAmnt
    );
}



async paymentTo(paymentType){
    if(paymentType === 'CompanyAdvance'){
        await actionwrappers.checkVisibleClickableMoveAndClick(
          await this.companyAdvanceRadio
        );
      } else if(paymentType === 'orderAdvance'){
        await actionwrappers.checkVisibleClickableMoveAndClick(
          await this.orderAdvanceRadio
        );
      } else if (paymentType === 'invoice'){
        await actionwrappers.checkVisibleClickableMoveAndClick(
          await this.invoiceRadio
        );
      }   
     }

 async paymentMode(payMode) {
     if (payMode ='BankTransfer'){
        await actionwrappers.checkVisibleClickableMoveAndClick(
            await this.bankTransferRadio ); }  
    else if (payMode ='card') {
        await actionwrappers.checkVisibleClickableMoveAndClick(
            await this.cardRadio ); }  
    else if (payMode ='cash') {
        await actionwrappers.checkVisibleClickableMoveAndClick(
            await this.cashRadio ); }  
    else if (payMode ='cheque') {
        await actionwrappers.checkVisibleClickableMoveAndClick(
            await this.chequeRadio ); } 
     else if (payMode ='mobileMoney') {
        await actionwrappers.checkVisibleClickableMoveAndClick(
            await this.MobileMoneyRadio ); } 
     else if (payMode ='netBanking') {
        await actionwrappers.checkVisibleClickableMoveAndClick(
            await this.NetBankingRadio ); }  
     else if (payMode ='upi') {
        await actionwrappers.checkVisibleClickableMoveAndClick(
            await this.UPIRadio ); } 
     else if (payMode ='wallet') {
        await actionwrappers.checkVisibleClickableMoveAndClick(
            await this.WalletRadio ); }                  
  
 }   

 async payment(paymentType,payMode,due,){
        await  this.paymentTo(paymentType);
        await  this.paymentMode(payMode);
            if(paymentMode==='BankTransfer'){
            await this.basicDetails();
            await this.bankDetails();
            await this.amountToPay(due);
        }
         else if (this.paymentMode==='card'){
             await this.cardDetails();
             await this.basicDetails();
             await this.bankDetails();
             await this.amountToPay(due);

         }
         else if (this.paymentMode==='cheque'){
            await actionwrappers.checkEnabledAndSetValue(
                await this.chequeNo,paymentIp.chequeNo);
             await this.basicDetails();
             await this.bankDetails();
             await this.amountToPay(due);
         }
           else if (this.paymentMode==='cash' || this.paymentMode==='mobileMoney' || 
           this.paymentMode==='netBanking'|| this.paymentMode==='upi'
           || this.paymentMode==='wallet') {
            await this.basicDetails();
            await this.amountToPay(due);
         }
         else  if(payMode ==='Adjustment')   {
         await this.advanceAdjust();
      }

      if(paymentType === 'invoice' && payMode !=='Adjustment'){
          await this.amountToAdjust();
      }

      await actionwrappers.checkEnabledAndSetValue(
        await this.paymentNotes,paymentIp.paymentNotes
    )
   
    await actionwrappers.checkVisibleClickableMoveAndClick(
        await commonObjects.acceptDailog );

       
 
}

}





module.exports = new payment();