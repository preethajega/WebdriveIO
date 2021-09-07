const assert = require("assert");
const Quote = require("../../PageObjects/Quotes/BuyerQuote.page");
const LoginPage = require("../../PageObjects/Login.page")
const createQuote = require("../../CommonFunctions/Quotes/createQuote");
const Summary = require("../../CommonFunctions/Quotes/Summary")
const Edit = require("../../CommonFunctions/Quotes/Edit");
const Detail = require("../../CommonFunctions/Quotes/Detail");
const ActionWrapper = require("../../CommonActions/ActionsWrappers");
const Landing = require("../../CommonFunctions/Quotes/Landing");
const Respond = require("../../CommonFunctions/Quotes/Respond");
const { pathById } = require("../../PageObjects/Quotes/createQuote.page");
describe("Request For Quote Without SRP ", () => {
    
  it("Should allow to access login ", () => {
     browser.maximizeWindow();
     LoginPage.open();
     LoginPage.login("aravindanv79@gmail.com", "Admin@123");  
     LoginPage.signinButton;
     browser.pause(8000);
   })


     it("Should allow to Click RFQ on Cart page", () => {
          createQuote.Clickcartbutton(Quote.CartButton);
          browser.pause(1000);
          createQuote.BuyerCreatingQuote("Bil");
         browser.pause(5000);
   })
        


   it("Should allow to Check the Validation for Quotue Name Field", () => {
    
        ActionWrapper.checkVisibleClickableAndClick(Quote.RequireDate);
        browser.pause(1000);
        ActionWrapper.checkVisibleClickableAndClick(Quote.nextmonth);
        browser.pause(1000);
        ActionWrapper.checkVisibleClickableAndClick(Quote.Date);        
        browser.pause(1000);
        Summary.summaryBuyerCreateQuote();
        browser.pause(1000);
        ActionWrapper.checkEnabledAndSetValue(Quote.QuoteName, "");
        browser.pause(1000);
        ActionWrapper.checkVisibleClickableAndClick(Quote.Ok);
        assert.strictEqual(Quote.QuoteNameRequired.getText(), "Name is required");
        browser.pause(2000);
        ActionWrapper.checkEnabledAndSetValue(Quote.QuoteName, "B-Automation$");
        browser.pause(1000);
        ActionWrapper.checkVisibleClickableAndClick(Quote.QuoteNameCancel);
        browser.pause(3000);
     
   })


   it("Should allow to Create Qotue And Not allow to place order when the status is in open", () => {
        Summary.summaryBuyerCreateQuote();
        browser.pause(5000);
        ActionWrapper.checkEnabledAndSetValue(Quote.QuoteName, "B-Automation$");
        browser.pause(1000);
        ActionWrapper.checkVisibleClickableAndClick(Quote.Ok);
        browser.pause(5000);     
        ActionWrapper.checkVisibleClickableAndClick(Quote.SelectQuote);
        browser.pause(5000);
        Detail.PlaceorderButton();        
    //  Quote.OrderToaster.isDisplayed();
    //  console.log("PlaceorderButton" + promptSnackbar.isExisting());
        browser.pause(5000);

})

   

      it("Should allow to Sign out Buyer", () => {  
         ActionWrapper.checkVisibleClickableAndClick(Quote.Icon);
         browser.pause(1000);
         ActionWrapper.checkVisibleClickableMoveAndClick(Quote.signout);
         browser.pause(5000);
         })

      
      it("Should allow to access login Seller", () => {
        LoginPage.open();
        LoginPage.login("admin@apptino.com", "Admin@123");  
        LoginPage.signinButton;
        browser.pause(8000);
      })
      
      
      
      it("Should allow to open a Quote", () => {
       browser.url("https://demo.myapptino.com/Quotes/Quote-landing")
          browser.pause(5000);     
          ActionWrapper.checkVisibleClickableAndClick(Quote.SelectQuote);
          browser.pause(3000);
          })



    it("Should allow to Sign out Seller ", () => {
            ActionWrapper.checkVisibleClickableAndClick(Quote.Icon);
            browser.pause(1000);
             ActionWrapper.checkVisibleClickableMoveAndClick(Quote.signout);
            browser.pause(5000);
             })
        
         it("Should allow to access login Buyer", () => {
             LoginPage.open();
             LoginPage.login("madrastown18@gmail.com", "India@123");  
             LoginPage.signinButton;
             browser.pause(8000);
           })

           it("Should not allow to Edit and Place order when status is In progress ", () => {
              browser.url("https://demo.myapptino.com/Quotes/Quote-landing");
              browser.pause(5000);     
              ActionWrapper.checkVisibleClickableAndClick(Quote.SelectQuote);
              browser.pause(3000);
              Quote.CheckStatus.isDisplayed();
              assert.strictEqual(Quote.CheckStatus.getText(),'IN PROGRESS');
              browser.pause(500);
              Detail.editQuoteOrRespond();
        //       // console.log("Enquiry clicked" + Toaster.isExisting());
              browser.pause(5000);
              Detail.PlaceorderButton();        
        //         // Quote.OrderToaster.isDisplayed();
        //         // assert.strictEqual(Quote.OrderToaster.getText(),'Quote owner is working on this quote');
              browser.pause(8000);
                 

          })

          it("Should allow to clone the Quote", () => {
               
              browser.url("https://demo.myapptino.com/Quotes/Quote-landing");
              browser.pause(5000);  
              ActionWrapper.checkVisibleClickableAndClick(Quote.SelectQuote);
              browser.pause(3000);
              ActionWrapper.checkVisibleClickableMoveAndClick(Quote.moreoption);
              browser.pause(2000);
              Detail.CloneQuote();
          ActionWrapper.checkVisibleClickableAndClick(Quote.RequireDate);
        browser.pause(1000);
        ActionWrapper.checkVisibleClickableAndClick(Quote.nextmonth1);
        browser.pause(1000);
        ActionWrapper.checkVisibleClickableAndClick(Quote.Date1);        
        browser.pause(1000);
              ActionWrapper.checkVisibleClickableAndClick(Quote.RFQ);
              browser.pause(1000);
              ActionWrapper.checkEnabledAndSetValue(Quote.QuoteName, "Clone");
              ActionWrapper.checkVisibleClickableAndClick(Quote.Ok);                       
              browser.pause(5000);
          })



          it("Should allow to Sign out Buyer ", () => {
             ActionWrapper.checkVisibleClickableAndClick(Quote.Icon);
             browser.pause(1000);
             ActionWrapper.checkVisibleClickableMoveAndClick(Quote.signout);
             browser.pause(5000);
             })
        
         it("Should allow to access login Seller", () => {
             LoginPage.open();
             LoginPage.login("admin@apptino.com", "Admin@123");  
             LoginPage.signinButton;
             browser.pause(8000);
           })


            it("Should allow to Respond and Save quote as s Seller", () => {
                browser.url("https://demo.myapptino.com/Quotes/Quote-landing")
                browser.pause(5000);     
                ActionWrapper.checkVisibleClickableAndClick(Quote.SelectQuote);
                browser.pause(3000);
                Detail.editQuoteOrRespond();
                browser.pause(3000);
                ActionWrapper.checkVisibleClickableMoveAndClick(Quote.SaveQuote);
                ActionWrapper.checkVisibleClickableMoveAndClick(Quote.Saveok);
                browser.pause(3000);
                  
                          })
         

              it("Should allow to Respond convert Save to Submit quote as s Seller", () => {
                  browser.url("https://demo.myapptino.com/Quotes/Quote-landing")
                  browser.pause(5000);  
                  ActionWrapper.checkVisibleClickableAndClick(Quote.SelectQuote);
                browser.pause(3000);
                  Detail.editQuoteOrRespond();
                  browser.pause(3000); 
                  Edit.SellersubmitQuote();
                  browser.pause(10000); 
                        })
  

                it("Should allow to Sign out Seller ", () => {
                    ActionWrapper.checkVisibleClickableAndClick(Quote.Icon);
                    browser.pause(1000);
                     ActionWrapper.checkVisibleClickableMoveAndClick(Quote.signout);
                    browser.pause(5000);
                     })
                
                 it("Should allow to access login Buyer", () => {
                     LoginPage.open();
                     LoginPage.login("madrastown18@gmail.com", "India@123");  
                     LoginPage.signinButton;
                     browser.pause(8000);
                   })


          it("Edid quote, Add 10 products and create New version", () => {
               browser.url("https://demo.myapptino.com/Quotes/QuoteDetails/QApptino20100075");
               browser.pause(5000);     
              ActionWrapper.checkVisibleClickableAndClick(Quote.SelectQuote);
              browser.pause(3000);
              Detail.editQuoteOrRespond();
              browser.pause(3000);
              Edit.EditBuyerBillingAddress();
              browser.pause(1000);
              Edit.EditBuyerShippingAddress();
              browser.pause(3000);
             Edit.EditEndCustomerInformation("123", "Name", "PName");
             browser.pause(3000);           
             Edit.Addmoreproduct("Bil");
          browser.pause(3000);
          Respond.QuantityandMOQValidation();
              Edit.BuyersubmitQuote();
              browser.pause(5000);
                })

            it("Should allow to Sign out Buyer ", () => {
                ActionWrapper.checkVisibleClickableAndClick(Quote.Icon);
                browser.pause(1000);
                 ActionWrapper.checkVisibleClickableMoveAndClick(Quote.signout);
                browser.pause(5000);
                 })
            
             it("Should allow to access login Seller", () => {
                 LoginPage.open();
                 LoginPage.login("admin@apptino.com", "Admin@123");  
                 LoginPage.signinButton;
                 browser.pause(8000);
               })


             
              it("Should allow to Respond and Submit quote as s Seller", () => {
                browser.url("https://demo.myapptino.com/Quotes/Quote-landing");
                browser.pause(5000); 
                ActionWrapper.checkVisibleClickableAndClick(Quote.SelectQuote);
              browser.pause(3000);    
                Detail.editQuoteOrRespond();
                    browser.pause(5000); 
                 Edit.SellersubmitQuote();
                browser.pause(5000); 
                      })


              it("Should allow to Sign out Seller ", () => {
                  ActionWrapper.checkVisibleClickableAndClick(Quote.Icon);
                  browser.pause(1000);
                   ActionWrapper.checkVisibleClickableMoveAndClick(Quote.signout);
                  browser.pause(5000);
                   })
              
               it("Should allow to access login Buyer", () => {
                   LoginPage.open();
                   LoginPage.login("madrastown18@gmail.com", "India@123"); 
                   LoginPage.signinButton;
                   browser.pause(8000);
                 })


                it("Should allow to Place order", () => {
                        browser.url("https://demo.myapptino.com/Quotes/Quote-landing");
                        browser.pause(5000);  
                        ActionWrapper.checkVisibleClickableAndClick(Quote.SelectQuote);
                        browser.pause(3000);
                    Detail.PlaceorderButton();
                    browser.pause(5000); 
                    
                })

              })




         describe("Request For Quote Without SRP ", () => {
       it("Should allow to access login ", () => {
          LoginPage.open();
         LoginPage.login("madrastown18@gmail.com", "India@123");  
          LoginPage.signinButton;
          browser.pause(8000);
        })
                
       it("Should allow to Click RFQ on Cart page", () => {
           createQuote.Clickcartbutton(Quote.CartButton);
           browser.pause(2000);
           createQuote.BuyerCreatingQuote("Bil");
           browser.pause(5000);
        })


    it("Should allow to Add product in Summary page", () => {
      ActionWrapper.checkEnabledAndSetValue(Quote.SummarySearch, "Bil");
      ActionWrapper.checkVisibleClickableAndClick(Quote.RequireDate);
        browser.pause(1000);
        ActionWrapper.checkVisibleClickableAndClick(Quote.nextmonth);
        browser.pause(1000);
        ActionWrapper.checkVisibleClickableAndClick(Quote.Date);        
        browser.pause(1000);
      Summary.summaryBuyerCreateQuote();      
        browser.pause(1000);
      ActionWrapper.checkEnabledAndSetValue(Quote.QuoteName, "B-Automation@%");
      browser.pause(1000);
      ActionWrapper.checkVisibleClickableAndClick(Quote.Ok);
      browser.pause(5000);
  })



     it("Should allow to Remove product and create New version", () => {
        browser.url("https://demo.myapptino.com/Quotes/Quote-landing");
        browser.pause(5000);  
        ActionWrapper.checkVisibleClickableAndClick(Quote.SelectQuote);
        browser.pause(3000);
        //  ActionWrapper.checkEnabledClearAndSetValue(Quote.NewName, "New");
        // browser.pause(1000);
        // ActionWrapper.checkVisibleClickableAndClick(Quote.Tick);
        // browser.pause(1000);
        Detail.editQuoteOrRespond();  
        browser.pause(5000); 
        Edit.Removeproduct();
        browser.pause(3000);
    // Edit.AddtargetDiscount(25);
    //   browser.pause(3000);
        Edit.BuyersubmitQuote();
        browser.pause(5000);
         })
      

         it("Should allow to Sign out Buyer ", () => {
            ActionWrapper.checkVisibleClickableAndClick(Quote.Icon);
            browser.pause(1000);
             ActionWrapper.checkVisibleClickableMoveAndClick(Quote.signout);
            browser.pause(5000);
             })
        
         it("Should allow to access login Seller", () => {
             LoginPage.open();
             LoginPage.login("admin@apptino.com", "Admin@123");  
             LoginPage.signinButton;
             browser.pause(8000);
           })  


           it("Should allow to Respond and Submit quote as s Seller", () => {
            browser.url("https://demo.myapptino.com/Quotes/Quote-landing")
                 browser.pause(5000);     
                 ActionWrapper.checkVisibleClickableAndClick(Quote.SelectQuote);
              browser.pause(5000);     
              Detail.editQuoteOrRespond();
               browser.pause(5000); 
                Edit.SellersubmitQuote();
              browser.pause(5000); 
                    })       

        
                    it("Should allow to Sign out Seller ", () => {
                      ActionWrapper.checkVisibleClickableAndClick(Quote.Icon);
                      browser.pause(1000);
                       ActionWrapper.checkVisibleClickableMoveAndClick(Quote.signout);
                      browser.pause(5000);
                       })
                  
                   it("Should allow to access login Buyer", () => {
                       LoginPage.open();
                      LoginPage.login("madrastown18@gmail.com", "India@123");   
                       LoginPage.signinButton;
                       browser.pause(8000);
                     })  


                     it("Should allow to Export product and cancel quote", () => {
                       browser.url("https://demo.myapptino.com/Quotes/Quote-landing");
                       browser.pause(5000);
                      ActionWrapper.checkVisibleClickableAndClick(Quote.SelectQuote);
                      browser.pause(5000);
                      Detail.ExporttheProduct();
                      browser.pause(1000);
                      ActionWrapper.checkVisibleClickableMoveAndClick(Quote.moreoption);
                      browser.pause(5000);
                      Detail.cancelQuote();
                      browser.pause(5000);
                     })

                     it("Should allow to clone a quote and cancelled", () => {
                      browser.url("https://demo.myapptino.com/Quotes/Quote-landing");
                      browser.pause(5000);  
                      ActionWrapper.checkVisibleClickableAndClick(Quote.SelectQuote);
                      browser.pause(3000);
                      ActionWrapper.checkVisibleClickableMoveAndClick(Quote.moreoption);
                      browser.pause(2000);
                      Detail.CloneQuote();
                      ActionWrapper.checkVisibleClickableAndClick(Quote.RFQ);
                       browser.pause(1000);
                       ActionWrapper.checkEnabledAndSetValue(Quote.QuoteName, "Clone");
                       ActionWrapper.checkVisibleClickableAndClick(Quote.Ok);                       
                      browser.pause(8000);
                      ActionWrapper.checkVisibleClickableAndClick(Quote.SelectQuote);
                      browser.pause(3000);
                      ActionWrapper.checkVisibleClickableMoveAndClick(Quote.moreoption);
                      browser.pause(5000);
                      Detail.cancelQuote();
                      browser.pause(5000);
                      

                      })

})

       describe("Request For Quote With Request Price", () => {

       it("Should allow to access login ", () => {
          LoginPage.open();
         LoginPage.login("madrastown18@gmail.com", "India@123");  
          LoginPage.signinButton;
          browser.pause(8000);
        })
                
       it("Should allow to add request Price Product", () => {
           createQuote.Clickcartbutton(Quote.CartButton);
           browser.pause(2000);
           createQuote.BuyerCreatingQuote("SM-A920FZKDINS");
           ActionWrapper.checkVisibleClickableAndClick(Quote.RequireDate);
        browser.pause(1000);
        ActionWrapper.checkVisibleClickableAndClick(Quote.nextmonth);
        browser.pause(1000);
        ActionWrapper.checkVisibleClickableAndClick(Quote.Date);        
        browser.pause(1000);
           Summary.summaryBuyerCreateQuote();
          ActionWrapper.checkEnabledAndSetValue(Quote.QuoteName, "Request price");
          browser.pause(1000);
          ActionWrapper.checkVisibleClickableAndClick(Quote.Ok);
          browser.pause(5000);     
        })
      })


      describe("Request For Quote With SRP ", () => {
    
        it("Should allow to access login ", () => {
           browser.maximizeWindow();
           LoginPage.open();
           LoginPage.login("madrastown18@gmail.com", "India@123");  
           LoginPage.signinButton;
           browser.pause(8000);
         })
      
      
           it("SPR Should allow to Click RFQ on Cart page", () => {
                createQuote.Clickcartbutton(Quote.CartButton);
                browser.pause(1000);
                createQuote.BuyerCreatingQuote("Bil");
               browser.pause(5000);
         })
              
      
      
         it("Should allow to create SPR Quote", () => {
          ActionWrapper.checkEnabledAndSetValue(Quote.TargetDiscount, "15" );
          browser.pause(1000);
              ActionWrapper.checkVisibleClickableAndClick(Quote.RequireDate);
              browser.pause(1000);
              ActionWrapper.checkVisibleClickableAndClick(Quote.nextmonth);
              browser.pause(1000);
              ActionWrapper.checkVisibleClickableAndClick(Quote.Date);        
              browser.pause(1000);
              Summary.summaryBuyerCreateQuote();
              browser.pause(1000);
              ActionWrapper.checkEnabledAndSetValue(Quote.CustomerName, "Rithish");
              browser.pause(1000);
              ActionWrapper.checkEnabledAndSetValue(Quote.ProjetName, "Insurance");
              browser.pause(1000);
              ActionWrapper.ClickElementAndkeyboardVal(Quote.Competitors, "\uE015");
              browser.pause(1000);
              ActionWrapper.checkEnabledAndSetValue(Quote.PriceJustification, "Price");
             browser.pause(1000); 
          Summary.summaryBuyerCreateQuote();
              browser.pause(3000);             
             
           
         })
      
      
         it("Should allow to Create Qotue And Not allow to place order when the status is in open", () => {
              Summary.summaryBuyerCreateQuote();
              browser.pause(5000);
              ActionWrapper.checkEnabledAndSetValue(Quote.QuoteName, "SPRAutomation$");
              browser.pause(1000);
              ActionWrapper.checkVisibleClickableAndClick(Quote.Ok);
              browser.pause(5000);     
              ActionWrapper.checkVisibleClickableAndClick(Quote.SelectQuote);
              browser.pause(5000);
              Detail.PlaceorderButton();        
           Quote.OrderToaster.isDisplayed();
           console.log("PlaceorderButton" + promptSnackbar.isExisting());
              browser.pause(5000);
      
      })
      
         
      
            it("Should allow to Sign out Buyer", () => {  
               ActionWrapper.checkVisibleClickableAndClick(Quote.Icon);
               browser.pause(1000);
               ActionWrapper.checkVisibleClickableMoveAndClick(Quote.signout);
               browser.pause(5000);
               })
      
            
            it("Should allow to access login Seller", () => {
              LoginPage.open();
              LoginPage.login("admin@apptino.com", "Admin@123");  
              LoginPage.signinButton;
              browser.pause(8000);
            })
            
            
            
            it("Should allow to open a Quote", () => {
             browser.url("https://demo.myapptino.com/Quotes/Quote-landing")
                browser.pause(5000);     
                ActionWrapper.checkVisibleClickableAndClick(Quote.SelectQuote);
                browser.pause(3000);
                })
      
      
      
          it("Should allow to Sign out Seller ", () => {
                  ActionWrapper.checkVisibleClickableAndClick(Quote.Icon);
                  browser.pause(1000);
                   ActionWrapper.checkVisibleClickableMoveAndClick(Quote.signout);
                  browser.pause(5000);
                   })
              
               it("Should allow to access login Buyer", () => {
                   LoginPage.open();
                   LoginPage.login("madrastown18@gmail.com", "India@123");  
                   LoginPage.signinButton;
                   browser.pause(8000);
                 })
      
                 it("Should not allow to Edit and Place order when status is In progress ", () => {
                    browser.url("https://demo.myapptino.com/Quotes/Quote-landing");
                    browser.pause(5000);     
                    ActionWrapper.checkVisibleClickableAndClick(Quote.SelectQuote);
                    browser.pause(3000);
                    Quote.CheckStatus.isDisplayed();
                    assert.strictEqual(Quote.CheckStatus.getText(),'IN PROGRESS');
                    browser.pause(500);
                    Detail.editQuoteOrRespond();
              //       // console.log("Enquiry clicked" + Toaster.isExisting());
                    browser.pause(5000);
                    Detail.PlaceorderButton();        
              //         // Quote.OrderToaster.isDisplayed();
              //         // assert.strictEqual(Quote.OrderToaster.getText(),'Quote owner is working on this quote');
                    browser.pause(8000);
                       
      
                })
      
                it("Should allow to clone the SPR Quote", () => {
                     
                    browser.url("https://demo.myapptino.com/Quotes/Quote-landing");
                    browser.pause(5000);  
                    ActionWrapper.checkVisibleClickableAndClick(Quote.SelectQuote);
                    browser.pause(3000);
                    ActionWrapper.checkVisibleClickableMoveAndClick(Quote.moreoption);
                    browser.pause(2000);
                    Detail.CloneQuote();
                ActionWrapper.checkVisibleClickableAndClick(Quote.RequireDate);
              browser.pause(1000);
              ActionWrapper.checkVisibleClickableAndClick(Quote.nextmonth1);
              browser.pause(1000);
              ActionWrapper.checkVisibleClickableAndClick(Quote.Date1);        
              browser.pause(1000);
                    ActionWrapper.checkVisibleClickableAndClick(Quote.RFQ);
                    browser.pause(1000);
                    ActionWrapper.checkEnabledAndSetValue(Quote.QuoteName, "Clone");
                    ActionWrapper.checkVisibleClickableAndClick(Quote.Ok);                       
                    browser.pause(5000);
                })
      
      
      
                it("Should allow to Sign out Buyer ", () => {
                   ActionWrapper.checkVisibleClickableAndClick(Quote.Icon);
                   browser.pause(1000);
                   ActionWrapper.checkVisibleClickableMoveAndClick(Quote.signout);
                   browser.pause(5000);
                   })
              
               it("Should allow to access login Seller", () => {
                   LoginPage.open();
                   LoginPage.login("admin@apptino.com", "Admin@123");  
                   LoginPage.signinButton;
                   browser.pause(8000);
                 })
      
      
                  it("Should allow to Respond and Save quote as s Seller FOR SPR", () => {
                      browser.url("https://demo.myapptino.com/Quotes/Quote-landing")
                      browser.pause(5000);     
                      ActionWrapper.checkVisibleClickableAndClick(Quote.SelectQuote);
                      browser.pause(3000);
                      Detail.editQuoteOrRespond();
                      browser.pause(3000);
                      ActionWrapper.checkVisibleClickableMoveAndClick(Quote.SaveQuote);
                      ActionWrapper.checkVisibleClickableMoveAndClick(Quote.Saveok);
                      browser.pause(3000);
                        
                                })
               
      
                    it("Should allow to Respond convert Save to Submit SPR quote as s Seller", () => {
                        browser.url("https://demo.myapptino.com/Quotes/Quote-landing")
                        browser.pause(5000);  
                        ActionWrapper.checkVisibleClickableAndClick(Quote.SelectQuote);
                      browser.pause(3000);
                        Detail.editQuoteOrRespond();
                        browser.pause(3000); 
                        Edit.SellersubmitQuote();
                        browser.pause(10000); 
                              })
        
      
                      it("Should allow to Sign out Seller ", () => {
                          ActionWrapper.checkVisibleClickableAndClick(Quote.Icon);
                          browser.pause(1000);
                           ActionWrapper.checkVisibleClickableMoveAndClick(Quote.signout);
                          browser.pause(5000);
                           })
                      
                       it("Should allow to access login Buyer", () => {
                           LoginPage.open();
                           LoginPage.login("madrastown18@gmail.com", "India@123");  
                           LoginPage.signinButton;
                           browser.pause(8000);
                         })
      
      
                it("Edid quote, Add 10 products and create New version FOR SPR QUOTES", () => {
                     browser.url("https://demo.myapptino.com/Quotes/QuoteDetails/QApptino20100075");
                     browser.pause(5000);     
                    ActionWrapper.checkVisibleClickableAndClick(Quote.SelectQuote);
                    browser.pause(3000);
                    Detail.editQuoteOrRespond();
                    browser.pause(3000);
                    Edit.EditBuyerBillingAddress();
                    browser.pause(1000);
                    Edit.EditBuyerShippingAddress();
                    browser.pause(3000);
                   Edit.EditEndCustomerInformation("123", "Name", "PName");
                   browser.pause(3000);           
                   Edit.Addmoreproduct("Bil");
                browser.pause(3000);
                Respond.QuantityandMOQValidation();
                    Edit.BuyersubmitQuote();
                    browser.pause(5000);
                      })
      
                  it("Should allow to Sign out Buyer ", () => {
                      ActionWrapper.checkVisibleClickableAndClick(Quote.Icon);
                      browser.pause(1000);
                       ActionWrapper.checkVisibleClickableMoveAndClick(Quote.signout);
                      browser.pause(5000);
                       })
                  
                   it("Should allow to access login Seller", () => {
                       LoginPage.open();
                       LoginPage.login("admin@apptino.com", "Admin@123");  
                       LoginPage.signinButton;
                       browser.pause(8000);
                     })
      
      
                   
                    it("Should allow to Respond and Submit SPR quote as s Seller", () => {
                      browser.url("https://demo.myapptino.com/Quotes/Quote-landing");
                      browser.pause(5000); 
                      ActionWrapper.checkVisibleClickableAndClick(Quote.SelectQuote);
                    browser.pause(3000);    
                      Detail.editQuoteOrRespond();
                          browser.pause(5000); 
                       Edit.SellersubmitQuote();
                      browser.pause(5000); 
                            })
      
      
                    it("Should allow to Sign out Seller ", () => {
                        ActionWrapper.checkVisibleClickableAndClick(Quote.Icon);
                        browser.pause(1000);
                         ActionWrapper.checkVisibleClickableMoveAndClick(Quote.signout);
                        browser.pause(5000);
                         })
                    
                     it("Should allow to access login Buyer", () => {
                         LoginPage.open();
                         LoginPage.login("madrastown18@gmail.com", "India@123"); 
                         LoginPage.signinButton;
                         browser.pause(8000);
                       })
      
      
                      it("SPR Should allow to Place order", () => {
                              browser.url("https://demo.myapptino.com/Quotes/Quote-landing");
                              browser.pause(5000);  
                              ActionWrapper.checkVisibleClickableAndClick(Quote.SelectQuote);
                              browser.pause(3000);
                          Detail.PlaceorderButton();
                          browser.pause(5000); 
                          
                      })
      
                    })
      
      
      
      
               describe("Request For Quote With SRP ", () => {
             it("Should allow to access login ", () => {
                LoginPage.open();
               LoginPage.login("madrastown18@gmail.com", "India@123");  
                LoginPage.signinButton;
                browser.pause(8000);
              })
                      
             it("Should allow to Click RFQ on Cart page", () => {
                 createQuote.Clickcartbutton(Quote.CartButton);
                 browser.pause(2000);
                 createQuote.BuyerCreatingQuote("Bil");
                 browser.pause(5000);
              })
      
      
          it("Should allow to Add product in Summary page", () => {
            ActionWrapper.checkEnabledAndSetValue(Quote.SummarySearch, "Bil");
            ActionWrapper.checkEnabledAndSetValue(Quote.TargetDiscount, "15" );
          browser.pause(1000);
              ActionWrapper.checkVisibleClickableAndClick(Quote.RequireDate);
              browser.pause(1000);
              ActionWrapper.checkVisibleClickableAndClick(Quote.nextmonth);
              browser.pause(1000);
              ActionWrapper.checkVisibleClickableAndClick(Quote.Date);        
              browser.pause(1000);
              Summary.summaryBuyerCreateQuote();
              browser.pause(1000);
              ActionWrapper.checkEnabledAndSetValue(Quote.CustomerName, "Rithish");
              browser.pause(1000);
              ActionWrapper.checkEnabledAndSetValue(Quote.ProjetName, "Insurance");
              browser.pause(1000);
              ActionWrapper.ClickElementAndkeyboardVal(Quote.Competitors, "\uE015");
              browser.pause(1000);
              ActionWrapper.checkEnabledAndSetValue(Quote.PriceJustification, "Price");
             browser.pause(1000); 
              Summary.summaryBuyerCreateQuote();      
              browser.pause(1000);
            ActionWrapper.checkEnabledAndSetValue(Quote.QuoteName, "SPRAutomation@%");
            browser.pause(1000);
            ActionWrapper.checkVisibleClickableAndClick(Quote.Ok);
            browser.pause(5000);
        })
      
      
      
           it("Should allow to Remove product and create New version FOR SPR QUOTE", () => {
              browser.url("https://demo.myapptino.com/Quotes/Quote-landing");
              browser.pause(5000);  
              ActionWrapper.checkVisibleClickableAndClick(Quote.SelectQuote);
              browser.pause(3000);
              //  ActionWrapper.checkEnabledClearAndSetValue(Quote.NewName, "New");
              // browser.pause(1000);
              // ActionWrapper.checkVisibleClickableAndClick(Quote.Tick);
              // browser.pause(1000);
              Detail.editQuoteOrRespond();  
              browser.pause(5000); 
              Edit.Removeproduct();
              browser.pause(3000);
          // Edit.AddtargetDiscount(25);
          //   browser.pause(3000);
              Edit.BuyersubmitQuote();
              browser.pause(5000);
               })
            
      
               it("Should allow to Sign out Buyer ", () => {
                  ActionWrapper.checkVisibleClickableAndClick(Quote.Icon);
                  browser.pause(1000);
                   ActionWrapper.checkVisibleClickableMoveAndClick(Quote.signout);
                  browser.pause(5000);
                   })
              
               it("Should allow to access login Seller", () => {
                   LoginPage.open();
                   LoginPage.login("admin@apptino.com", "Admin@123");  
                   LoginPage.signinButton;
                   browser.pause(8000);
                 })  
      
      
                 it("Should allow to Respond and Submit SPR quote as s Seller", () => {
                  browser.url("https://demo.myapptino.com/Quotes/Quote-landing")
                       browser.pause(5000);     
                       ActionWrapper.checkVisibleClickableAndClick(Quote.SelectQuote);
                    browser.pause(5000);     
                    Detail.editQuoteOrRespond();
                     browser.pause(5000); 
                      Edit.SellersubmitQuote();
                    browser.pause(5000); 
                          })       
      
              
                          it("Should allow to Sign out Seller ", () => {
                            ActionWrapper.checkVisibleClickableAndClick(Quote.Icon);
                            browser.pause(1000);
                             ActionWrapper.checkVisibleClickableMoveAndClick(Quote.signout);
                            browser.pause(5000);
                             })
                        
                         it("Should allow to access login Buyer", () => {
                             LoginPage.open();
                            LoginPage.login("madrastown18@gmail.com", "India@123");   
                             LoginPage.signinButton;
                             browser.pause(8000);
                           })  
      
      
                           it("Should allow to Export product and cancel SPR quote", () => {
                             browser.url("https://demo.myapptino.com/Quotes/Quote-landing");
                             browser.pause(5000);
                            ActionWrapper.checkVisibleClickableAndClick(Quote.SelectQuote);
                            browser.pause(5000);
                            Detail.ExporttheProduct();
                            browser.pause(1000);
                            ActionWrapper.checkVisibleClickableMoveAndClick(Quote.moreoption);
                            browser.pause(5000);
                            Detail.cancelQuote();
                            browser.pause(5000);
                           })
      
                           it("Should allow to clone a SPR quote and cancelled", () => {
                            browser.url("https://demo.myapptino.com/Quotes/Quote-landing");
                            browser.pause(5000);  
                            ActionWrapper.checkVisibleClickableAndClick(Quote.SelectQuote);
                            browser.pause(3000);
                            ActionWrapper.checkVisibleClickableMoveAndClick(Quote.moreoption);
                            browser.pause(2000);
                            Detail.CloneQuote();
                            ActionWrapper.checkVisibleClickableAndClick(Quote.RFQ);
                             browser.pause(1000);
                             ActionWrapper.checkEnabledAndSetValue(Quote.QuoteName, "Clone");
                             ActionWrapper.checkVisibleClickableAndClick(Quote.Ok);                       
                            browser.pause(8000);
                            ActionWrapper.checkVisibleClickableAndClick(Quote.SelectQuote);
                            browser.pause(3000);
                            ActionWrapper.checkVisibleClickableMoveAndClick(Quote.moreoption);
                            browser.pause(5000);
                            Detail.cancelQuote();
                            browser.pause(5000);
                            
      
                            })
      
      })
      
             describe("Request SPR For Quote With Request Price", () => {
      
             it("Should allow to access login ", () => {
                LoginPage.open();
               LoginPage.login("madrastown18@gmail.com", "India@123");  
                LoginPage.signinButton;
                browser.pause(8000);
              })
                      
             it("Should allow to add request Price Product with SPR", () => {
                 createQuote.Clickcartbutton(Quote.CartButton);
                 browser.pause(2000);
                 createQuote.BuyerCreatingQuote("SM-A920FZKDINS");
                 ActionWrapper.checkEnabledAndSetValue(Quote.TargetDiscount, "15" );
          browser.pause(1000);
              ActionWrapper.checkVisibleClickableAndClick(Quote.RequireDate);
              browser.pause(1000);
              ActionWrapper.checkVisibleClickableAndClick(Quote.nextmonth);
              browser.pause(1000);
              ActionWrapper.checkVisibleClickableAndClick(Quote.Date);        
              browser.pause(1000);
              Summary.summaryBuyerCreateQuote();
              browser.pause(1000);
              ActionWrapper.checkEnabledAndSetValue(Quote.CustomerName, "Rithish");
              browser.pause(1000);
              ActionWrapper.checkEnabledAndSetValue(Quote.ProjetName, "Insurance");
              browser.pause(1000);
              ActionWrapper.ClickElementAndkeyboardVal(Quote.Competitors, "\uE015");
              browser.pause(1000);
              ActionWrapper.checkEnabledAndSetValue(Quote.PriceJustification, "Price");
             browser.pause(1000); 
                 Summary.summaryBuyerCreateQuote();
                ActionWrapper.checkEnabledAndSetValue(Quote.QuoteName, "Request price");
                browser.pause(1000);
                ActionWrapper.checkVisibleClickableAndClick(Quote.Ok);
                browser.pause(5000);     
              })
            })





