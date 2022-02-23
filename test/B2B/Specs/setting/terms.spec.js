const assert = require("assert");
const path = require("path");
const LoginPage = require("../../PageObjects/Login.page");
const B2B_loginIp = require("../../Inputs/B2B_login");
const actionsWrappers = require("../../../CommonActions/ActionsWrappers");
const term_path = require("../../PageObjects/Settings/terms.page");
const term_fn= require("../../CommonFunctions/settings/terms")
var termip= require("../../Inputs/settings/TermsIP");
const common = require("../../PageObjects/Common/commonObjects");

describe('Terms Page', () => {
     it("Should allow to access login into Terms page ",async () => {
        await  LoginPage.open();
        await  LoginPage.login(B2B_loginIp.OwnerEmail,B2B_loginIp.OwnerPassword);  
        await  actionsWrappers.urlValidation("/dashboard");
        await  term_fn.open();
        await  actionsWrappers.urlValidation("/terms");
       });
//  ******************  DELIVERY TERM CARD  **************************
      it('should create a new Delivery Term with save',async () => {
         await browser.pause(1000)
         await term_fn.AddTerm(term_path.Delivery,term_path.TermName,termip.delivery)
         await term_fn.termSnakBarValid(term_path.Savebtn)
      });
      it('should create a new Delivery Term with cancel',async () => {
         await browser.pause(1000)
         await term_fn.AddTerm(term_path.Delivery,term_path.TermName,termip.delivery1)
         await term_fn.termSnakBarValid(term_path.CancelBtn)
      }); 
      it('should validate a Delivery Terms field',async () => {
         await browser.pause(1000)
         await term_fn.FieldVallid(term_path.AddBtn,term_path.ErrOptionsField,termip.errmsg)
      });
      it('should not allow a user to save a field without entering any values inDeliveryTerms Card',async () => {
         await term_fn.emptyTermVaid()
      });
      it('should delete a Creted Delivery Term with cancel',async () => {
         await browser.pause(1000)
         await term_fn.DeletTerm(term_path.CancelBtn,common.snackbar,termip.saveAlert)
      });
      it('should delete a Creted Delivery Term with save',async () => {
         await term_fn.DeletTerm(term_path.Savebtn,common.snackbar,termip.saveAlert)
      });
      // it('should not allow a user to enter the same option name in Delivery Term',async () => {
      //    await term_fn.AllreadyExistOption(term_path.TermName,termip.delivery,term_path.Savebtn,common.snackbar,termip.termAlreExistAlert)
      // });
      it('should not allow a user to delete a maped Delivery Term with save',async () => {
         await term_fn.MapedDeletTerm(term_path.Savebtn,common.snackbar,termip.termErrAlert)
      });
      
//  ******************  MODE OF DISPATCH TERM CARD **************************
     it('should create a new Mode Of Dispatch Term with save',async () => {
         await browser.pause(1000)
         await term_fn.AddTerm(term_path.Mode,term_path.TermName,termip.mode,term_path.Savebtn)
      });
      it('should create a new  Mode Of Dispatch Term with cancel',async () => {
         await browser.pause(1000)
         await term_fn.AddTerm(term_path.Mode,term_path.TermName,termip.mode1,term_path.CancelBtn)
      }); 
      it('should validate a  Mode Of Dispatch Terms field',async () => {
         await browser.pause(1000)
         await term_fn.FieldVallid(term_path.AddBtn,term_path.ErrOptionsField,termip.errmsg)
      });
      it('should not allow a user to save a field without entering any values in  Mode Of Dispatch term Card',async () => {
         await term_fn.emptyTermVaid()
      });
      it('should delete a Creted  Mode Of Dispatch Term with cancel',async () => {
         await browser.pause(1000)
         await term_fn.DeletTerm(term_path.CancelBtn,common.snackbar,termip.saveAlert)
      });
      it('should delete a Creted  Mode Of Dispatch Term with save',async () => {
         await term_fn.DeletTerm(term_path.Savebtn,common.snackbar,termip.saveAlert)
      });
      // it('should not allow a user to enter the same option name in Delivery Term',async () => {
      //    await term_fn.AllreadyExistOption(term_path.TermName,termip.delivery,term_path.Savebtn,common.snackbar,termip.termAlreExistAlert)
      // });
      it('should not allow a user to delete a maped  Mode Of Dispatch Term with save',async () => {
         await term_fn.MapedDeletTerm(term_path.Savebtn,common.snackbar,termip.termErrAlert)
      });
//  ******************  FREIGHT CHARGES TERM CARD **************************
      it('should create a new freight charges Term with save',async () => {
         await browser.pause(1000)
         await term_fn.AddTerm(term_path.Freight,term_path.TermName,termip.freight,term_path.Savebtn)
      });
      it('should create a new freight charges Term with cancel',async () => {
         await browser.pause(1000)
         await term_fn.AddTerm(term_path.Freight,term_path.TermName,termip.freight1,term_path.CancelBtn)
      }); 
      it('should validate a freight charges Terms field',async () => {
         await browser.pause(1000)
         await term_fn.FieldVallid(term_path.AddBtn,term_path.ErrOptionsField,termip.errmsg)
      });
      it('should not allow a user to save a field without entering any values in freight charges Terms Card',async () => {
         await term_fn.emptyTermVaid()
      });
      it('should delete a Creted freight charges Term with cancel',async () => {
         await browser.pause(1000)
         await term_fn.DeletTerm(term_path.CancelBtn,common.snackbar,termip.saveAlert)
      });
      it('should delete a Creted freight charges Term with save',async () => {
         await term_fn.DeletTerm(term_path.Savebtn,common.snackbar,termip.saveAlert)
      });
      // it('should not allow a user to enter the same option name in freight charges Term',async () => {
      //    await term_fn.AllreadyExistOption(term_path.TermName,termip.delivery,term_path.Savebtn,common.snackbar,termip.termAlreExistAlert)
      // });
      it('should not allow a user to delete a maped freight charges Term with save',async () => {
         await term_fn.MapedDeletTerm(term_path.Savebtn,common.snackbar,termip.termErrAlert)
      });
//  ******************  INSURANCE TERM CARD  **************************
      it('should create a new Insurance Term with save',async () => {
         await browser.pause(1000)
         await term_fn.AddTerm(term_path.Insurance,term_path.TermName,termip.insurance,term_path.Savebtn)
      });
      it('should create a new Insurance Term with cancel',async () => {
         await browser.pause(1000)
         await term_fn.AddTerm(term_path.Insurance,term_path.TermName,termip.insurance1,term_path.CancelBtn)
      }); 
      it('should validate a Insurance Terms field',async () => {
         await browser.pause(1000)
         await term_fn.FieldVallid(term_path.AddBtn,term_path.ErrOptionsField,termip.errmsg)
      });
      it('should not allow a user to save a field without entering any values in Insurance erms Card',async () => {
         await term_fn.emptyTermVaid()
      });
      it('should delete a Creted Insurance Term with cancel',async () => {
         await browser.pause(1000)
         await term_fn.DeletTerm(term_path.CancelBtn,common.snackbar,termip.saveAlert)
      });
      it('should delete a Creted Insurance Term with save',async () => {
         await term_fn.DeletTerm(term_path.Savebtn,common.snackbar,termip.saveAlert)
      });
      // it('should not allow a user to enter the same option name in Insurance Term',async () => {
      //    await term_fn.AllreadyExistOption(term_path.TermName,termip.delivery,term_path.Savebtn,common.snackbar,termip.termAlreExistAlert)
      // });
      it('should not allow a user to delete a maped Insurance Term with save',async () => {
         await term_fn.MapedDeletTerm(term_path.Savebtn,common.snackbar,termip.termErrAlert)
      });
//  ******************  PACKANGING & FORWARDING TERM CARD  **************************
      it('should create a new Packanging & Forwarding Term with save',async () => {
         await browser.pause(1000)
         await term_fn.AddTerm(term_path.Packing,term_path.TermName,termip.packing,term_path.Savebtn)
      });
      it('should create a new Packanging & Forwarding  Term with cancel',async () => {
         await browser.pause(1000)
         await term_fn.AddTerm(term_path.Packing,term_path.TermName,termip.packing1,term_path.CancelBtn)
      }); 
      it('should validate a Packanging & Forwarding  Terms field',async () => {
         await browser.pause(1000)
         await term_fn.FieldVallid(term_path.AddBtn,term_path.ErrOptionsField,termip.errmsg)
      });
      it('should not allow a user to save a field without entering any values in Packanging & Forwarding Terms Card',async () => {
         await term_fn.emptyTermVaid()
      });
      it('should delete a Creted Packanging & Forwarding  Term with cancel',async () => {
         await browser.pause(1000)
         await term_fn.DeletTerm(term_path.CancelBtn,common.snackbar,termip.saveAlert)
      });
      it('should delete a Creted Packanging & Forwarding  Term with save',async () => {
         await term_fn.DeletTerm(term_path.Savebtn,common.snackbar,termip.saveAlert)
      });
      // it('should not allow a user to enter the same option name in Packanging & Forwarding  Term',async () => {
      //    await term_fn.AllreadyExistOption(term_path.TermName,termip.delivery,term_path.Savebtn,common.snackbar,termip.termAlreExistAlert)
      // });
      it('should not allow a user to delete a maped Packanging & Forwarding  Term with save',async () => {
         await term_fn.MapedDeletTerm(term_path.Savebtn,common.snackbar,termip.termErrAlert)
      });

//  ******************  WARRENTY TERM CARD  **************************
      it('should create a new Warrenty Term with save',async () => {
         await browser.pause(1000)
         await term_fn.AddTerm(term_path.Warranty,term_path.TermName,termip.warrenty,term_path.Savebtn)
      });
      it('should create a new Warrenty Term with cancel',async () => {
         await browser.pause(1000)
         await term_fn.AddTerm(term_path.Warranty,term_path.TermName,termip.warrenty1,term_path.CancelBtn)
      }); 
      it('should validate a Warrenty Terms field',async () => {
         await browser.pause(1000)
         await term_fn.FieldVallid(term_path.AddBtn,term_path.ErrOptionsField,termip.errmsg)
      });
      it('should not allow a user to save a field without entering any values in Warrenty Terms Card',async () => {
         await term_fn.emptyTermVaid()
      });
      it('should delete a Creted Warrenty Term with cancel',async () => {
         await browser.pause(1000)
         await term_fn.DeletTerm(term_path.CancelBtn,common.snackbar,termip.saveAlert)
      });
      it('should delete a Creted Warrenty Term with save',async () => {
         await term_fn.DeletTerm(term_path.Savebtn,common.snackbar,termip.saveAlert)
      });
      // it('should not allow a user to enter the same option name in Warrenty Term',async () => {
      //    await term_fn.AllreadyExistOption(term_path.TermName,termip.delivery,term_path.Savebtn,common.snackbar,termip.termAlreExistAlert)
      // });
      it('should not allow a user to delete a maped Warrenty Term with save',async () => {
         await term_fn.MapedDeletTerm(term_path.Savebtn,common.snackbar,termip.termErrAlert)
      });
// ******************  PAYMENT TERM CARD  **************************
      it('should create a new Payment term with save',async () => {
         await term_fn.AddpayTerm(term_path.PaymentTerm,termip.paymentterm,term_path.Savebtn)
      });
      it('should create a new Payment term with save',async () => {
         await term_fn.AddpayTerm(term_path.PaymentTerm,termip.paymentterm1,term_path.CancelBtn)
      });
      it('should validate a payment Terms field in PaymentTerm Card',async () => {
         // await browser.refresh()
         // await actionsWrappers.Click(term_path.Payment)
         await browser.pause(1000)
         await term_fn.FieldVallid(term_path.AddPayTermBtn,term_path.ErrNameField,termip.errmsg)
      });
      it('should validate a payment code field in PaymentTerm Card',async () => {
         await term_fn.FieldVallid(term_path.AddPayTermBtn,term_path.Errpaycode,termip.paycodeErrmsg)
      });
      it('should validate a Order Status field in PaymentTerm Card',async () => {
         await term_fn.FieldVallid(term_path.AddPayTermBtn,term_path.Errpayorderstatus,termip.payorderErrmsg)
      });
      it('should validate a Due Days field in PaymentTerm Card',async () => {
         await term_fn.FieldVallid(term_path.AddPayTermBtn,term_path.ErrpayDays,termip.dueDayErrmsg)
      });
      it('should validate a Percentage field in PaymentTerm Card',async () => {
         await term_fn.FieldVallid(term_path.AddPayTermBtn,term_path.ErrpayPercentage,termip.percentageErrmsg)
      });
      it('should not allow a user to add the another payment term  without entring values',async () => {
         await term_fn.emptyPayTermVaid()
      });
      it('should not allow a user to delete a maped Payment Term ',async () => {
         await term_fn.MapedDeletPayTerm(term_path.Savebtn,common.snackbar,termip.saveAlert)
      });
      it('should not allow a user to enter same payment term value in pymentTerm Card',async () => {
        // await browser.refresh()
         // await actionsWrappers.Click(term_path.Payment)
         await browser.pause(1000)
         await term_fn.AllreadyExistPayOption(term_path.PaymentTerm,termip.paymentterm,common.snackbar,termip.alreExixt)
      });  
      it('should delete a created Payment Term with cancel',async () => {
         await browser.pause(1000)
         await term_fn.DeletPayTerm(term_path.CancelBtn,common.snackbar,termip.saveAlert)
      });
      it('should delete a created Payment Term with cancel',async () => {
         await browser.pause(1000)
         await term_fn.DeletPayTerm(term_path.Savebtn,common.snackbar,termip.saveAlert)
      });
     



});