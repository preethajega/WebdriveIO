const assert = require("assert");
const path = require("path");
const Company = require("../../PageObjects/Companies.page");
const TestActionWrapper = require("../../CommonFunctions/ActionsWrappers");
describe("Create New Company", () => {
    it("Should allow to access login ", () => {
        Company.open()
        Company.login("admin@apptino.com", "Admin@123");  
      browser.pause(3000);
        })

 it("Navigate to Company page ", () => {
    TestActionWrapper.checkVisibleClickableMoveAndClick(Company.Icon); 
    TestActionWrapper.checkVisibleClickableAndClick(Company.Companyicon);
    TestActionWrapper.checkVisibleClickableMoveAndClick(Company.create); 
           })

 it("Should not allow to add company ", () => {
      
      TestActionWrapper.SetValueElementAndkeyboardVal(Company.accountDt, "", "\uE015" );
      TestActionWrapper.checkVisibleClickableMoveAndClick(Company.BranchName); 
      TestActionWrapper.checkVisibleClickableMoveAndClick(Company.AddressName); 
      TestActionWrapper.ClickElementAndkeyboardVal(Company.Businesstype, "\uE015");
      TestActionWrapper.ClickElementAndkeyboardVal(Company.currency, "\uE015");
      TestActionWrapper.checkEnabledMoveAndSetValue(Company.ContactName, "");
      TestActionWrapper.checkEnabledMoveAndSetValue(Company.BusinessEmail, "");
      TestActionWrapper.checkEnabledMoveAndSetValue(Company.ContactNo, "");
      TestActionWrapper.checkVisibleClickableMoveAndClick(Company.Save); 
            
                   })


 it("Should not allow to add company ", () => {
      
       TestActionWrapper.SetValueElementAndkeyboardVal(Company.accountDt, "B", "\uE015" );
       TestActionWrapper.checkEnabledMoveAndSetValue(Company.BranchName, "Beriln" ); 
       TestActionWrapper.ClickElementAndkeyboardVal(Company.Businesstype, "\uE015");
       TestActionWrapper.ClickElementAndkeyboardVal(Company.currency, "\uE015");
       TestActionWrapper.checkEnabledMoveAndSetValue(Company.ContactName, "Nethra");
       TestActionWrapper.checkEnabledMoveAndSetValue(Company.BusinessEmail, "nethra@gmail.com");
       TestActionWrapper.checkEnabledMoveAndSetValue(Company.ContactNo, "9536824170");
       TestActionWrapper.checkVisibleClickableMoveAndClick(Company.Save); 
                          
   })

   it("Should not allow to add company Address ", () => {
      
    TestActionWrapper.SetValueElementAndkeyboardVal(Company.search, "Beriln", "\uE015");
                       
                              })                        
        
})