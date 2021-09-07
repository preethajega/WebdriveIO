const assert = require("assert");
const Quote = require("../../PageObjects/Quotes/BuyerQuote.page");
const LoginPage = require("../../PageObjects/Login.page")
const createQuote = require("../../CommonFunctions/Quotes/createQuote");
const Summary = require("../../CommonFunctions/Quotes/Summary")
const Edit = require("../../CommonFunctions/Quotes/Edit");
const Detail = require("../../CommonFunctions/Quotes/Detail");
const ActionWrapper = require("../../CommonActions/ActionsWrappers");
const Respond = require("../../CommonFunctions/Quotes/Respond");
const Approvals = require("../../CommonFunctions/Quotes/Approval");
describe("Create Draft quote ", () => {
    
  it("Should allow to access login ", () => {
     LoginPage.open();
     LoginPage.login("admin@apptino.com", "Admin@123");  
     LoginPage.signinButton;
     browser.pause(5000);  
   })

   it("Should allow to Create draft Quote with product and Discard", () => {
       createQuote.Clickcartbutton();
       createQuote.SellerCreatingQuoteAndSaveDraftwithProduct("Dcf");
       browser.url("https://demo.myapptino.com/Quotes/Quote-landing");
       browser.pause(5000);     
       ActionWrapper.checkVisibleClickableAndClick(Quote.SelectQuote);
       browser.pause(3000);
       Detail.editQuoteOrRespond();
       browser.pause(5000); 
       Respond.DiscardQuote();
       })
  

      // it("Should allow to Create draft without product respond add new product and save", () => {
          // createQuote.Clickcartbutton();
          // createQuote.SellerCreatingQuoteAndSaveDraftwithoutProduct("Dcf");
          // browser.url("https://demo.myapptino.com/Quotes/Quote-landing");
          //    browser.pause(5000);     
          //   ActionWrapper.checkVisibleClickableAndClick(Quote.SelectQuote);
          //   browser.pause(3000);
            // Detail.editQuoteOrRespond();
            // Edit.Addproduct("DCF");
            // browser.pause(2000);
            // Detail.RespondAndSaveAsDraft();
            // browser.pause(5000);
            //  })


            //  it("Should allow to respond Edit Billing, shipping Address and customer Information convert to Quote", () => {
            //      Detail.editQuoteOrRespond();
            //      browser.pause(2000);
            //     //  Edit.EditBuyerBillingAddress();
            //     //  Edit.EditBuyerShippingAddress();
            //      Edit.EditEndCustomerInformation("256", "Name", "Test", "ABB");
            //      browser.pause(3000);
            //      Edit.SellersubmitQuote();
            //      browser.pause(3000);
            
                      // })
                 
    //             it("Should allow to Place Order", () => {
    //           Detail.PlaceorderButton();
    //           browser.pause(5000);
    //                      })
    //  })







    //  describe("Internal Quote Without SPR ", () => {
    
      // it("Should allow to Create Internal Quote", () => {
      //   createQuote.Clickcartbutton();
      //   createQuote.SellerCreatingQuote("DCF");
      //   Summary.summarySellerCreateQuote();
      //   browser.pause(4000);
      //   ActionWrapper.checkEnabledAndSetValue(Quote.SubmitQuoteName, "$Automation");
      //   browser.pause(2000);
      //   ActionWrapper.checkVisibleClickableAndClick(Quote.Ok);
      //   browser.pause(5000);
      //  })

      // it("Should allow to Internal Quote Respond and save", () => {
      //   browser.url("https://demo.myapptino.com/Quotes/Quote-landing");
      //  browser.pause(5000);     
      // ActionWrapper.checkVisibleClickableAndClick(Quote.SelectQuote);
      // browser.pause(3000);
      // Detail.editQuoteOrRespond();
      // browser.pause(3000);
      // Respond.Savequote();
      // browser.pause(3000);
         })

        //  it("Should allow to Add Additional Item and Submit", () => {
        //   ActionWrapper.checkVisibleClickableAndClick(Quote.SelectQuote);
        // browser.pause(3000);
        // Detail.editQuoteOrRespond();
        // browser.pause(3000);
        // Respond.AddAdditionalTerm("Tracking");
        // browser.pause(1000);
        // Edit.SellersubmitQuote();
        // browser.pause(5000);
        //    })

          //  it("Should allow to Cancel Quote", () => {          
          // Detail.cancelQuote("Cancelled");
          //   browser.pause(5000);
          //    })

   // })








  //  describe("Clone the Quote with SPR ", () => {
    
    // it("Should allow to Clone the quote Change Approval group and Save as Darft", () => {
    //   Detail.CloneQuote("Clone");
    //   browser.pause(3000);
    //   Respond.ChangeApprovalgroup();
    //   Respond.Saveasdraft();

    //  })

  //   it("Should allow to Respond and create versionwith Add on Cost", () => {
  //       Detail.editQuoteOrRespond();
  //       browser.pause(3000);
  //       Respond.ChangeApprovalgroup();
  //       Respond.Saveasdraft();
  
  //      })









  //  })