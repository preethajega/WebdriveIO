const assert = require("assert");
const { time, exception } = require("console");
const { isYesterday } = require("date-fns");
const { taggedTemplateExpression } = require("jscodeshift");
const { format } = require("path");
let today =  new Date().toISOString().replace(/\/|-|:|/g,'');
const path = require('path');
const imageUpload = path.join(__dirname,'./../../FileUtils/profilepic.png');



describe("Sanity test check", () => {

    it("login page", () => {
        browser.url('/auth/login');
        browser.pause(3000);
        browser.getCookies();
        browser.deleteCookies();
        browser.maximizeWindow();
        browser.pause(3000);
        console.log(browser.getTitle);
        let loginUsername = $('[name="Username"]');
        let loginpassword = $('[name="Password"]');
        let signIn = $('#loadingButton');
        let Register = $('//*[text()="Sign Up"]');
        let mailReq = $('//p[text()="Email required"]');
        let pwdReq = $('//p[text()="Password required"]');
        let invaildMail = $('//p[text="Invalid business email"]');
        let userExist = $('//p[text="User does not exist"]');
        let incrtPwd = $('//p[text="Incorrect password"]');

        loginUsername.waitForDisplayed(2000);
        loginUsername.setValue("admin@apptino.com");
        loginpassword.waitForDisplayed(2000);
        loginpassword.setValue("Admin@123");
        signIn.click();
        if ((mailReq.isDisplayed()) || (invaildMail.isDisplayed())||(userExist.isDisplayed()))
        {
           loginUsername.click();
             browser.pause(2000)
              browser.keys(["\uE009", "a"]);
                loginUsername.keys("\uE003");   
                  loginUsername.setValue("admin@apptino.com");
                    signIn.click();
        }
        if((pwdReq.isDisplayed()) || (incrtPwd.isDisplayed()))
        {         
          loginpassword.click();
            browser.pause(2000)
             browser.keys(["\uE009", "a"]);
              loginpassword.keys("\uE003");   
                loginpassword.setValue("Admin@123");
                  signIn.click();
        }
        
        browser.pause(5000);
        browser.getUrl();
       expect(browser).toHaveUrlContaining('dashboard');



    });


 


    
    
    it("Create  the Terms", ()=>{

      let deliveryTerm= $('//div[text()="Delivery Terms"]');
      let dispatchTerm= $('//div[text()="Mode of Dispatch"]');
      let freightTerm= $('//div[text()="Freight Charges"]');
      let insuranceTerm= $('//div[text()="Insurance"]');
      let packingTerm= $('//div[text()="Packaging & Forwarding"]');
      let warrantyTerm= $('//div[text()="Warranty Terms"]');
      let paymentTerm= $('//div[text()="Payment Terms"]');
      let save = $('#loadingButton');
      let cancel=$('//*[text()="Cancel"]');
      let addTerm=$('//button[@title="Add new terms"]');
      let termName=$('(//input[starts-with(@id,"MSETT_PT_CD_")])[last()]');
      let paymentName=$('(//textarea[starts-with(@id,"MSETT_PT_CPT_CPT_")])[last()]');
      let paymentCode=$('(//input[starts-with(@id,"MSETT_PT_CPT_CPC_")])[last()]');
      let orderStatus=$('(//input[starts-with(@id,"MSETT_PT_CPT_COS_")])[last()]');
      let dueDays=$('(//input[starts-with(@id,"MSETT_PT_CPT_CDD_")])[last()]');
      let percentage=$('(//input[starts-with(@id,"MSETT_PT_CPT_CP_")])[last()]');
      let neworderStatus=$('(//input[starts-with(@id,"MSETT_PT_CPT_COS_")])[last()]');
      let newdueDays=$('(//input[starts-with(@id,"MSETT_PT_CPT_CDD_")])[last()]');
      let newpercentage=$('(//input[starts-with(@id,"MSETT_PT_CPT_CP_")])[last()]');
      let addPayment=$('(//button[starts-with(@id,"MSETT_PT_CPT_CFBA_")])[last()]');
      let deletePaymentline=$('(//button[starts-with(@id,"MSETT_PT_CPT_CFBD_")])[last()]');
      let paymentGateway=$('(//input[starts-with(@id,"logo")])[last()]');
      let paymentDefault=$('(//input[starts-with(@id,"MSETT_PT_CPT_CDT_")])[last()]');
      let b2Cterm=$('(//input[starts-with(@name,"b2C")])[last()]');
      let paymentError=$('//p[text()="Sum of percentage must be 100%"]');
      let needApproval=$('(//input[starts-with(@id,"MSETT_PT_CNA_")])[last()]');
      let defaultTerm=$('(//input[starts-with(@id,"MSETT_PT_CDEF_")])[last()]');
      let snackbar=$('#client-snackbar');

      browser.url('/settings/terms');
      browser.pause(1000);
   /*create delivery term */   
      deliveryTerm.click();
      browser.pause(2000);
      addTerm.click();
      browser.pause(2000);
      termName.setValue("sanity");
      browser.pause(1000);
      needApproval.click();
      save.click();
      browser.pause(3000);
      assert.strictEqual(snackbar.getText(),'Changes saved successfully');
      addTerm.click();
      browser.pause(1000);
      termName.setValue("sanity");
      
      /*assert.strictEqual(snackbar.getText(),'Payment term already exist');*/

      /*create dispatchTerm term */   
      dispatchTerm.click();
      browser.pause(1000);
      addTerm.click();
      termName.setValue("sanity");
      browser.pause(1000);
      needApproval.click();
      save.click();
      
     /*assert.strictEqual(snackbar.getText(),'Changes saved successfully');*/
      addTerm.click();
      browser.pause(1000);
      termName.setValue("sanity");
      browser.pause(1000);
      /*assert.strictEqual(snackbar.getText(),'Payment term already exist');*/



      /*create freightTerm */   
      freightTerm.click();
      browser.pause(1000);
      addTerm.click();
      termName.setValue("sanity");
      browser.pause(1000);
      needApproval.click();
      save.click();
      browser.pause(2000);
      assert.strictEqual(snackbar.getText(),'Changes saved successfully');
      addTerm.click();
      browser.pause(1000);
      termName.setValue("sanity");
      
     /*assert.strictEqual(snackbar.getText(),'Payment term already exist');*?



  /*create insuranceTerm  */
  insuranceTerm.click();
  browser.pause(1000);
  addTerm.click();
  termName.setValue("sanity");
  browser.pause(1000);
  needApproval.click();
  save.click();
  browser.pause(2000);
  assert.strictEqual(snackbar.getText(),'Changes saved successfully');
  addTerm.click();
  browser.pause(1000);
  termName.setValue("sanity");
  
  /*assert.strictEqual(snackbar.getText(),'Payment term already exist');*/


  /*create packingTerm  */   
  packingTerm.click();
  browser.pause(1000);
  addTerm.click();
  termName.setValue("sanity");
  browser.pause(1000);
  needApproval.click();
  save.click();
  browser.pause(2000);
  assert.strictEqual(snackbar.getText(),'Changes saved successfully');
  addTerm.click();
  browser.pause(1000);
  termName.setValue("sanity");
  
/*assert.strictEqual(snackbar.getText(),'Payment term already exist');*/



  /*create  warrantyTerm */   
  warrantyTerm.click();
  browser.pause(1000);
  addTerm.click();
  termName.setValue("sanity");
  browser.pause(1000);
  needApproval.click();
  browser.pause(1000);
  save.click();
  browser.pause(3000);
  assert.strictEqual(snackbar.getText(),'Changes saved successfully');
  addTerm.click();
  browser.pause(1000);
  termName.setValue("sanity");
  
 /* assert.strictEqual(snackbar.getText(),'Payment term already exist');*/
/*create Payment Term */

paymentTerm.click();
browser.pause(5000);
addTerm.scrollIntoView();
addTerm.click();
browser.pause(2000);
paymentName.scrollIntoView();
paymentName.setValue("sanity");
browser.pause(1000);
paymentCode.setValue('QA');
browser.pause(1000);
deletePaymentline.click();
browser.pause(2000);
assert.strictEqual(snackbar.getText(),"All payment term must have atleast one order status");
orderStatus.setValue('ORDER ACCEPTED');
browser.pause(1000);
orderStatus.keys("\uE015");
browser.pause(2000);
orderStatus.keys("\uE007");
dueDays.setValue('100');
percentage.setValue('90');


if(paymentError.isDisplayed())
{   
   addPayment.click();
   neworderStatus.waitForDisplayed(5000);
   neworderStatus.setValue('INVOICED');
neworderStatus.keys("\uE015");
browser.pause(2000);
neworderStatus.keys("\uE007");
newdueDays.setValue('10');
newpercentage.setValue("10");
}
paymentGateway.click();
b2Cterm.click();
save.click();
 /*assert.strictEqual(snackbar.getText(),'Changes saved successfully');*/
   browser.pause(3000);
   addTerm.click();
   browser.pause(2000);
   paymentName.setValue("Sanity");
   paymentName.setValue("\uE004")
   browser.pause(2000);
   assert.strictEqual(snackbar.getText(),'Payment term already exist');




  });

   it("Delete the Terms", ()=>{

      let deliveryTerm= $('//div[text()="Delivery Terms"]');
      let dispatchTerm= $('//div[text()="Mode of Dispatch"]');
      let freightTerm= $('//div[text()="Freight Charges"]');
      let insuranceTerm= $('//div[text()="Insurance"]');
      let packingTerm= $('//div[text()="Packaging & Forwarding"]');
      let warrantyTerm= $('//div[text()="Warranty Terms"]');
      let paymentTerm= $('//div[text()="Payment Terms"]');
      let save = $('#loadingButton');
      let firstTerm=$('//*[@id="MSETT_PT_CDEL_0"]');
      let deleteTerm=$('(//button[starts-with(@id,"MSETT_PT_CDEL_")])[last()]');
      let snackbar=$('#client-snackbar');
         let paymentName=$('(//textarea[starts-with(@id,"MSETT_PT_CPT_CPT_")])[last()]');
         let deletePaymentTerm=$('(//button[starts-with(@id,"MSETT_PT_CPT_CD_")])[last()]');
         let firstPaymentTerm=$('#MSETT_PT_CPT_CD_0');


   /*delete delivery term */
    deliveryTerm.click();
      browser.pause(1000);
      firstTerm.click();
       browser.pause(1000);
       save.click();
       browser.pause(2000);
       assert.strictEqual(snackbar.getText(),"Terms mapped with company preferences can't be deleted");

      deleteTerm.click();
      browser.pause(1000);
      save.click();
      browser.pause(2000);
      assert.strictEqual(snackbar.getText(),'Changes saved successfully');

      /*delete dispatch term */   
      dispatchTerm.click();
      browser.pause(1000);
      firstTerm.click();
      browser.pause(1000);
      save.click();
      browser.pause(2000);
      assert.strictEqual(snackbar.getText(),"Terms mapped with company preferences can't be deleted");
      browser.pause(1000);
      deleteTerm.click();
      browser.pause(1000);
      save.click();
      browser.pause(2000);
      /*assert.strictEqual(snackbar.getText(),'Changes saved successfully');*/

  /*delete freight term */ 
  freightTerm.click();
  browser.pause(1000);
  firstTerm.click();
  browser.pause(1000);
  save.click();
  browser.pause(2000);
  assert.strictEqual(snackbar.getText(),"Terms mapped with company preferences can't be deleted");
  browser.pause(1000);
  deleteTerm.click();
  browser.pause(1000);
  save.click();
  browser.pause(3000);
  assert.strictEqual(snackbar.getText(),'Changes saved successfully');

  /*delete insurance term */ 
  insuranceTerm.click();
  browser.pause(1000);
  firstTerm.click();
  browser.pause(1000);
  save.click();
  browser.pause(2000);
  assert.strictEqual(snackbar.getText(),"Terms mapped with company preferences can't be deleted");
  browser.pause(1000);
  deleteTerm.click();
  browser.pause(2000);
  save.click();
  browser.pause(2000);
  assert.strictEqual(snackbar.getText(),'Changes saved successfully');

  /*delete packing term */
  packingTerm.click();
  browser.pause(1000);
  firstTerm.click();
  browser.pause(1000);
  save.click();
  browser.pause(1000);
  /*assert.strictEqual(snackbar.getText(),"Terms mapped with company preferences can't be deleted");*/
  browser.pause(1000);
  deleteTerm.click();
  browser.pause(1000);
  save.click();
  browser.pause(1000);
  /*assert.strictEqual(snackbar.getText(),'Changes saved successfully');*/

  /*delete warranty term */
  warrantyTerm.click();
  browser.pause(1000);
  firstTerm.click();
  browser.pause(2000);
  save.click();
  browser.pause(3000);
  assert.strictEqual(snackbar.getText(),"Terms mapped with company preferences can't be deleted");
  browser.pause(1000);
  deleteTerm.click();
  browser.pause(2000);
  save.click();
  browser.pause(1000);
 assert.strictEqual(snackbar.getText(),'Changes saved successfully');
  


  paymentTerm.click();
  browser.pause(3000);
  deletePaymentTerm.scrollIntoView();
  if(paymentName.getValue()==='sanity')
  {
  deletePaymentTerm.click();
  save.click();
  assert.strictEqual(snackbar.getText(),'Changes saved successfully');
  }
 

   });

  it("Create and delete the approval group", ()=>{

      let approversGroup=$('//span[text()="Approvers Group"]');
      let range=$('//span[text()="Range"]');
      let createApproval=$('//span[text()="Create Approval"]');
      let approvalName=$('//*[@name="approvalName"]');
      let Submit=$('#editDialogButton');
      let Cancel=$('#editDialogCancel');
      let addusrGroup=$('#addNewUserGroup');
      let deleteGroup=$('#removeApproverGroup');
      let totalPrecedence=$('#totalPrecedence');
      let groupName=$('(//*[starts-with(@id,"groupName")])[last()]');
      let precendence=$('(//*[starts-with(@id,"precedence")])[last()]');
      let reviewer=$('(//*[starts-with(@id,"isReviewer")])[last()]');
      let optionalApprover=$('(//*[starts-with(@id,"isOptional")])[last()]');
      let triggerOptional=$('(//*[starts-with(@id,"optionalName")])[last()]');
      let approverName=$('(//*[starts-with(@id,"approvers")])[last()]');
      let defaultApprover=$('(//*[starts-with(@id,"defaultApprover")])[last()]');
      let save=$('#loadingButton');
      let groupSugg=$('//*[@placeholder="Search"]');
      let endMargin=$('(//*[contains(@name,"endRange")])[last()]');
      let deleteRange=$('#deleteRange');
      let snackbar=$('#client-snackbar');
      let moreOptions=$('//button[@title="More options"]');
      let deleteApproval=$('#deleteApproval');
      let editApproval=$('#editApproval');
      let yes=$('#yes');


       /*delete approval group */
      browser.url("/settings/approvals");
      browser.pause('2000');
      range.click();
      if(!groupSugg.getValue()===''){
      approversGroup.click();
      browser.pause(1000);
      deleteGroup.click();
      browser.pause(2000);
      assert.strictEqual(snackbar.getText(),'User group exists in range mapping. Please remove approver group from range before deleting');
      }

   /*create approval*/   
      browser.url("/settings/approvals");
      browser.pause('2000');
      createApproval.click();
      approvalName.setValue('Sanity Test');
      browser.pause('2000');
      Submit.click();
      browser.pause('2000');
      assert.strictEqual(snackbar.getText(),'Saved successfully');

   /*create approval Group */   

   /*create approval Group */   
      totalPrecedence.setValue("\uE003");
      addusrGroup.click();
      browser.pause(1000);
      groupName.setValue('sanity 1');
      browser.pause(2000);
      precendence.setValue('1');
      precendence.keys("\uE015");
      browser.pause(3000);
      precendence.keys("\uE007");
      browser.pause(3000);
      reviewer.click();
      browser.pause(2000);
      optionalApprover.click();
      triggerOptional.setValue('cost');
      triggerOptional.keys("\uE013");
      browser.pause(3000);
      triggerOptional.keys("\uE007");
      browser.pause(1000);
      approverName.scrollIntoView();
      approverName.setValue('admin');
      approverName.keys("\uE015");
      browser.pause(3000);
      approverName.keys("\uE007");
      browser.pause(1000);
      approverName.setValue('madhan');
      approverName.keys("\uE015");
      browser.pause(3000);
      approverName.keys("\uE007");
      browser.pause(1000);
      defaultApprover.scrollIntoView();
      defaultApprover.setValue('admin');
      defaultApprover.keys("\uE013");
      browser.pause(3000);
      defaultApprover.keys("\uE007");
      browser.pause(1000);
      save.click();
      browser.pause(1000);
      assert.strictEqual(snackbar.getText(),'Changes saved successfully');


   /*create Range*/   
      range.click();
      endMargin.setValue("\uE017");
      browser.pause(2000);
      endMargin.setValue("10");
      browser.pause(2000);
      groupSugg.setValue('sanity');
      groupSugg.keys("\uE015");
      browser.pause(3000);
      groupSugg.keys("\uE007");
      browser.pause(3000);
      save.click();
      browser.pause(2000);
      assert.strictEqual(snackbar.getText(),'Changes saved successfully');

  /*delete range*/
      range.click();
      deleteRange.click();
      browser.pause(1000);
      save.click();
      browser.pause(2000);
      assert.strictEqual(snackbar.getText(),'Changes saved successfully');

  /*delete approval group*/
      approversGroup.click();
      browser.pause(1000);
      deleteGroup.click();
      browser.pause(1000);
      save.click();
      browser.pause(2000);

      assert.strictEqual(snackbar.getText(),'Changes saved successfully');

  /*delete approval*/    
      moreOptions.click();
      browser.pause(1000);
      deleteApproval.click();
      browser.pause(1000);
      yes.click();
      browser.pause(2000);
/*assert.strictEqual(snackbar.getText(),'Deleted succesfully');*/

});


     it("Create  Tax" ,() =>{
        
    let taxNametab=$('//span[text()="Tax Name"]');
    let taxGrouptab= $('//span[text()="Tax Group"]');
    let taxCodeTab= $('//span[text()="Product Tax Code"]');
    let taxExeTab= $('//span[text()="Tax Exemption"]');
    let save = $('#loadingButton');
    let snackbar=$('#client-snackbar');
    let required=$('//p[text()="Required"]');
    let taxGroupReq= $('//p[contains(text(),"required")]')

   let taxName=$('(//input[contains(@name,"taxName")])[last()]');
   let taxRate=$('(//input[contains(@name,"rate")])[last()]');
   let addTaxName=$('//button[@title="Add new tax name"]');

   let taxGroupName=$('(//input[contains(@name,"taxGroupName")])[last()]');
   let taxNameSugg=$('(//input[contains(@name,"taxReqLs")])[last()]');
   let compoundTax=$('(//input[contains(@name,"compoundTax")])[last()]');
   let defaultTax=$('(//input[contains(@class,"MuiSwitch-input")])[last()]');
   let defalutlable=$('//label[@title="***Field is disabled, already default assigned to a tax group"]');
   let addTaxGroup=$('//button[@title="Add new tax group"]');

   let codeName=$('(//input[contains(@name,"hsncode")])[last()]');
   let hsnDesc=$('(//input[contains(@name,"description")])[last()]');
   let interTax=$('(//input[contains(@name,"interTaxGrp")])[last()]');
   let intraTax=$('(//input[contains(@name,"intraTaxGrp")])[last()]');
   let addCode=$('//button[@title="Add new tax code"]');

   let addTaxExc=$('//button[@title="Add new tax exemption"]');
   let taxExcName=$('(//input[contains(@name,"taxExemptName")])[last()]');
   let excCustomer=$('(//input[@name="position"][@value="customer"])[last()]');
   let excItem=$('(//input[@name="position"][@value="item"])[last()]');

   browser.url('/settings/tax');
  

/*Adding Tax name*/   
   addTaxName.scrollIntoView();
   browser.pause(2000);
   addTaxName.click();
     browser.pause(4000);
     if(taxName.getValue()===''){
       taxName.setValue('TSGST');}
       else {
           addTaxName.click();
           browser.pause(2000);
           taxName.setValue('TSGST');
       }
         save.click();
           if(required.isDisplayed()){
            taxRate.setValue('10');
            save.click();
        }
assert.strictEqual(snackbar.getText(),"Changes saved successfully");

    browser.pause(2000);
       addTaxName.click();
         taxName.setValue('TCGST');
           save.click();
         if(required.isDisplayed()){
            taxRate.setValue('10');
            save.click();
        }
assert.strictEqual(snackbar.getText(),"Changes saved successfully");          

        browser.pause(4000);
           addTaxName.click();
              taxName.setValue('TIGST');
                taxRate.setValue('10');
                 browser.pause(2000);
                  save.click();
assert.strictEqual(snackbar.getText(),"Changes saved successfully");
                    browser.refresh();

/*Adding Tax Group*/   
        
    taxGrouptab.click();
     addTaxGroup.scrollIntoView();
      addTaxGroup.click();
         browser.pause(3000);
        taxGroupName.setValue("sanity inter");
         save.click();
          browser.pause(1000);
        if(taxGroupReq.isDisplayed())
        {
          taxNameSugg.setValue("TSGST");
           taxNameSugg.keys("\uE015");
            browser.pause(2000);
              taxNameSugg.keys("\uE007");
                browser.pause(2000);
             taxNameSugg.setValue("TCGST");
                taxNameSugg.keys("\uE015");
                 browser.pause(2000);
                   taxNameSugg.keys("\uE007");
                     browser.pause(2000);
                        save.click();
                            }
assert.strictEqual(snackbar.getText(),"Changes updated successfully");
 
                           browser.refresh();
                            taxGrouptab.click();
                              browser.pause(2000);
                              addTaxGroup.scrollIntoView(); 
                                addTaxGroup.click();
                                    taxNameSugg.setValue("TIGST");
                                     taxNameSugg.keys("\uE015");
                                      browser.pause(2000);
                                        taxNameSugg.keys("\uE007");
                                          browser.pause(2000);
                                            save.click();
                                             browser.pause(1000);
                                               if(taxGroupReq.isDisplayed())
                                                 {
                                                  taxGroupName.setValue("sanity intra");
                                                    save.click();
                                                    }
 assert.strictEqual(snackbar.getText(),"Changes updated successfully");

/*Adding HSN */   

browser.refresh();
taxCodeTab.click();
  addCode.click();
    addCode.scrollIntoView(); 
     codeName.setValue('8297');
         save.click();
          if(required.isDisplayed())
          {
              hsnDesc.setValue('HSN TEST');
          }        
          save.click();
          if(required.isDisplayed())   
          {
              interTax.setValue('sanity inter');
               browser.pause(2000);
                interTax.keys("\uE015");
                 interTax.keys("\uE007");
                  browser.pause(2000);
                intraTax.setValue('sanity intra');
                 browser.pause(2000);
                   intraTax.keys("\uE015");
                     intraTax.keys("\uE007");
                        browser.pause(2000);
                          save.click();
          } 
assert.strictEqual(snackbar.getText(),"Changes saved successfully");

/*Adding TaxException*/   
browser.refresh();
 taxExeTab.click();
   addTaxExc.click();
     taxExcName.setValue("sanity");
      save.click(); 
       if(required.isDisplayed()){
         excCustomer.click();
             save.click();
       }
assert.strictEqual(snackbar.getText(),"Changes saved successfully");
     
     });

it("Tax Delete" ,() =>{

     let taxNametab=$('//span[text()="Tax Name"]');
     let taxGrouptab= $('//span[text()="Tax Group"]');
     let taxCodeTab= $('//span[text()="Product Tax Code"]');
     let taxExeTab= $('//span[text()="Tax Exemption"]');
     let save = $('#loadingButton');
     let deleteTerm=$('(//button[@class="MuiButtonBase-root MuiIconButton-root"][@aria-label="delete"])[last()]');
     let snackbar=$('#client-snackbar');
     let required=$('//p[text()="Required"]');
     let firstTerm=$('//button[@class="MuiButtonBase-root MuiIconButton-root"][@aria-label="delete"]');

browser.url('/settings/tax');
  browser.setTimeout({ 'pageLoad': 50000 });
     deleteTerm.scrollIntoView();
       deleteTerm.click();
/*assert.strictEqual(snackbar.getText(),"Tax name assigned in tax group(s) please remove from group before deleting");*/ 

browser.refresh();
  taxGrouptab.click();
    deleteTerm.scrollIntoView();
     browser.pause(1000);
      deleteTerm.click();
       browser.pause(1000);
         deleteTerm.click();
assert.strictEqual(snackbar.getText(),"Tax group associated with product tax code, please remove and try again");
browser.refresh();
 taxCodeTab.click();
    firstTerm.click();
     browser.pause(1000);
assert.strictEqual(snackbar.getText(),"Tax code is associated with products please remove from products before deleting");  
   browser.pause(2000);
    deleteTerm.scrollIntoView();
       browser.pause(1000);
         deleteTerm.click();
          save.click();
          browser.pause(2000);
assert.strictEqual(snackbar.getText(),"Changes saved successfully");

browser.refresh();
 taxGrouptab.click();
    deleteTerm.scrollIntoView();
     browser.pause(1000);
      deleteTerm.click();
       browser.pause(2000);
        save.click();
       browser.pause(2000);

assert.strictEqual(snackbar.getText(),"Changes updated successfully");


browser.refresh();
taxGrouptab.click();
  deleteTerm.scrollIntoView();
    browser.pause(1000);
      deleteTerm.click();
        browser.pause(1000);
          save.click();
assert.strictEqual(snackbar.getText(),"Changes updated successfully");


browser.refresh();
 taxNametab.click();
  deleteTerm.waitForDisplayed(2000);
  deleteTerm.scrollIntoView();
   deleteTerm.click();
   browser.pause(1000);
    deleteTerm.click();
     browser.pause(1000);
      deleteTerm.click();
       save.click();
        browser.pause(1000);
/*assert.strictEqual(snackbar.getText(),"Changes saved successfully"); */        

browser.refresh();
  taxExeTab.click();
   firstTerm.click();
    browser.pause(1000);
assert.strictEqual(snackbar.getText(),"Tax Exemption associated with a item/customer");  
      browser.pause(2000);
      deleteTerm.scrollIntoView();
        deleteTerm.click();
        save.click();
        browser.pause(2000);
assert.strictEqual(snackbar.getText(),"Changes saved successfully");    

});

it("Create and Delete Tags" ,() =>{

      let tagName=$('#tags-outlined');
      let tagDelete=$('(//*[contains(@class,"deleteIconSmall")])[last()]');
      let save=$('#loadingButton');
      let snackbar=$('client-snackbar');
   
       
      browser.url('/settings/tags');
        tagName.setValue("sanity1");
         tagName.keys("\uE007");
           tagName.setValue("sanity2");
             tagName.keys("\uE007");
               browser.pause(2000)
               save.click();
              
  /*assert.strictEqual(snackbar.getText(),"Changes saved successfully");
                tagName.setValue("tamilnadu");
                   tagName.keys('\uE007');
  assert.strictEqual(snackbar.getText(),"Changes saved successfully");*/
                    
      browser.refresh();
       tagDelete.click();
         browser.pause(1000);
           tagDelete.click();
             browser.pause(1000);
               save.click();
  /*assert.strictEqual(snackbar.getText(),"Changes saved successfully");*/
  
  });
  

it("Update profile" ,() =>{

        let profileName=$('//input[@name="ProfileData.displayName"]');
        let mobNo=$('//input[@name="ProfileData.phoneNumber"]');
        let alterMobno=$('//input[@name="ProfileData.secondaryPhoneNumber"]');
        let alterEmail=$('//input[@name="ProfileData.secondaryEmail"]');
        let oldPwd=$('//input[@name="OldPassword"]');
        let newPwd=$('//input[@name="NewPassword"]');
        let cnfrmPwd=$('//input[@name="ConfirmPassword"]');
        let dateFormat=$('//input[@name="dateFormat"]');
        let timeZone=$('//input[@name="PrefrenceData.timeZone"]');
        let timeFormat=$('//input[@name="timeFormat"]');
        let save = $('#loadingButton');
        let Cancel =$('//span[text()="Cancel"]');
        let snackbar = $('#client-snackbar');

   browser.url('/settings/profile');
   if(profileName.getValue()==='')
    {
     profileName.setValue('Admin');
       }
        if(mobNo.getValue()==='')
         {
            mobNo.setValue('987654321');
          }
           if(alterMobno.getValue()==='')
           {
            alterMobno.setValue('8567412350');
            }
             if(alterEmail.getValue()==='')
             {
              alterEmail.setValue('naren@apptino.com');
              }
    let profilePic=$('//h5[contains(text(),"Welcome")]/following::input[1]');
      browser.execute(
        (el) => el.style.display = 'block',
          profilePic );
            profilePic.waitForDisplayed();
               profilePic.setValue(imageUpload);
                browser.pause(5000);
    dateFormat.scrollIntoView();
      timeZone.click();
       browser.pause(2000);
         browser.keys(["\uE009", "a"]);
          timeZone.keys("\uE003");
           browser.pause(2000);
            timeZone.setValue("(GMT+05:30) Sri Jayawardenapura");
             browser.pause(2000);
              timeZone.keys("\uE015");
                browser.pause(2000);
                  timeZone.keys("\uE007");
                     browser.pause(3000);
    dateFormat.click();
     browser.pause(2000);
      browser.keys(["\uE009", "a"]);
       browser.pause(2000);
        dateFormat.keys("\uE003");
         browser.pause(2000);
           dateFormat.setValue('-');
            browser.pause(2000);
              dateFormat.keys("\uE015");
                browser.pause(3000);
                 dateFormat.keys("\uE007");
                    browser.pause(2000);
    timeFormat.click();
     browser.pause(2000);
      browser.keys(["\uE009", "a"]);
       timeFormat.keys("\uE003");
        browser.pause(2000);
         timeFormat.setValue("24");
           browser.pause(2000);
              timeFormat.keys("\uE015");
              browser.pause(2000);
                timeFormat.keys("\uE007");
                  browser.pause(2000);
                    save.click();
/*assert.strictEqual(snackbar.getText(),"Changes saved successfully" );*/

    });


it("General Settings", () => {

  let addCurrency=$('//span[text()="Add Currency"]');
  let companyIdentifier=$('//*[@name="companyIdentifier"]');
  let defaultEmail=$('//*[@name="email"]');
  let finacialYear=$('//*[@name="finStartMonth"]');
  let deleteCurrency=$('(//button[starts-with(@id,"Currency_")])[last()]');
  let baseCurrency=$('//*[@name="baseCurrency"]');
  let decimalRoundOff=$('//*[@name="roundOff"]');
  let dateFormat=$('//input[@name="dateFormatId"]');
  let timeFormat=$('//input[@name="timeFormat"]');
  let timeZone=$('//input[@name="timeZone"]');
  let currCode=$('//input[@name="currencyCode"]');
  let currName=$('//input[@name="description"]');
  let currFormat=$('(//input[@name="priceFormat"])[last()]');
  let currSymbol=$('(//input[@name="currencyFormat"])[last()]');
  let currFactor=$('//input[@name="factor"]');
  let currCancel=$('#editDialogCancel');
  let currSave=$('#editDialogButton');
  let save=$('(//span[text()="Save"])[last()]');
  let snackbar = $('#client-snackbar');
  
     browser.url('/settings/general');
     addCurrency.click();
      browser.pause(2000);
      currCode.setValue("LKR");
      browser.pause(2000);
          currFormat.click();
           browser.pause(2000)
            browser.keys(["\uE009", "a"]);
              currFormat.keys("\uE003");     
                 currFormat.setValue('1 999.99');
                  currFormat.keys("\uE015");
                     browser.pause(2000);
                       currFormat.keys("\uE007");
                         browser.pause(2000);
                           currSymbol.setValue('LKR');
                            currSymbol.keys("\uE015");
                              browser.pause(2000);
                                currSymbol.keys("\uE007");
                                if(currName.getValue()==='')
                                {
                                  currName.setValue("srilankan Doller");
                                }
                                   browser.pause(2000);
                                      currSave.click();
                                      browser.pause(2000);
assert.strictEqual(snackbar.getText(),"Changes saved successfully");
                                         browser.refresh();
                                       if(!companyIdentifier.getValue()==="Apptino"){
                                     companyIdentifier.setValue('Apptino Softwares');
                                    }
                                   if(defaultEmail.getValue===""){
                                defaultEmail.setValue('sellertesuser@gmail.com');
                               }
                            if(finacialYear.getValue()===""){
                          finacialYear.setValue('April');
                         }
                      dateFormat.click();
                     browser.pause(2000)
                   browser.keys(["\uE009", "a"]);
                dateFormat.keys("\uE003");
              dateFormat.setValue("-")
             browser.pause(2000);
            dateFormat.keys("\uE015")
           browser.pause(2000);
         dateFormat.keys("\uE007");
       browser.pause(1000);
    timeFormat.click();
     browser.pause(2000);
      browser.keys(["\uE009", "a"]);
       timeFormat.keys("\uE003");
        browser.pause(2000);
         timeFormat.setValue("24");
           browser.pause(2000);
              timeFormat.keys("\uE015");
              browser.pause(2000);
                timeFormat.keys("\uE007");
                  browser.pause(2000);
                        timeZone.click();
                           browser.pause(2000);
                             browser.keys(["\uE009", "a"]);
                              timeZone.keys("\uE003");
                               browser.pause(2000);
                                timeZone.setValue("Kathmandu");
                                 browser.pause(2000);
                                  timeZone.keys("\uE013");
                                    browser.pause(2000);
                                      timeZone.keys("\uE007");
                                         browser.pause(2000);
                                         if(save.isDisplayed()){
                                           save.click();}
                                           else{
                                            timeFormat.setValue('12');
                                            browser.pause(2000);
                                               timeFormat.keys("\uE015");
                                               browser.pause(2000);
                                                 timeFormat.keys("\uE007");
                                                   save.click();
                                           }
assert.strictEqual(snackbar.getText(),"Changes saved successfully");
                                  browser.refresh();
                                deleteCurrency.scrollIntoView();
                               deleteCurrency.click();
assert.strictEqual(snackbar.getText(),"Changes saved successfully");

});

it("Customization Page", () => {

  let addressTab=$('//div[text()="Address"]');
  let branchOpt=$('//span[text()="Branch Name"]/following::input[1]');
  let branchReq=$('//span[text()="Branch Name"]/following::input[2]');
  let addressOpt=$('//span[text()="Address Line"]/following::input[1]');
  let addressReq=$('//span[text()="Address Line"]/following::input[2]');
  let localityOpt=$('//span[text()="Locality"]/following::input[1]');
  let localityReq=$('//span[text()="Locality"]/following::input[2]');
  let cityOpt=$('//span[text()="City"]/following::input[1]');
  let cityReq=$('//span[text()="City"]/following::input[2]');
  let stateOpt=$('//span[text()="State"]/following::input[1]');
  let stateReq=$('//span[text()="State"]/following::input[2]');
  let pinCodeOpt=$('//span[text()="Pincode"]/following::input[1]');
  let pinCodeReq=$('//span[text()="Pincode"]/following::input[2]');
  let CountryOpt=$('//span[text()="Country"]/following::input[1]');
  let CountryReq=$('//span[text()="Country"]/following::input[2]');
  let primaryContactOpt=$('//span[text()="Primary contact"]/following::input[1]');
  let primaryContactReq=$('//span[text()="Primary contact"]/following::input[2]');
  let contactNoOpt=$('//span[text()="Contact No"]/following::input[1]');
  let contactNoReq=$('//span[text()="Contact No"]/following::input[2]');
  let tax_GSTOpt=$('//span[text()="Tax ID / GST#"]/following::input[1]');
  let tax_GSTReq=$('//span[text()="Tax ID / GST#"]/following::input[2]');

  let save=$('#loadingButton');
  let snackbar =$('#client-snackbar');

  browser.url('/settings/customization');
  if(branchOpt.getValue()==='false'){
    branchOpt.click();
  }else {
    branchReq.click();
  }
  
  if(addressOpt.getValue()==='false'){
    addressOpt.click();
  }else {
    addressReq.click();
  }
  if(localityOpt.getValue()==='false'){
    localityOpt.click();
  }else {
    localityReq.click();
  }
  if(cityOpt.getValue()==='false'){
    cityOpt.click();
  }else {
    cityReq.click();
  }
  if(stateOpt.getValue()==='false'){
    stateOpt.click();
  }else {
    stateReq.click();
  }  
  if(pinCodeOpt.getValue()==='false'){
    pinCodeOpt.click();
  }else {
    pinCodeReq.click();
  }  
  if(pinCodeOpt.getValue()==='false'){
    pinCodeOpt.click();
  }else {
    pinCodeReq.click();
  }  
  if(CountryOpt.getValue()==='false'){
    CountryOpt.click();
  }else {
    CountryReq.click();
  }   
  if(primaryContactOpt.getValue()==='false'){
    primaryContactOpt.click();
  }else {
    primaryContactReq.click();
  }           
       
  if(contactNoOpt.getValue()==='false'){
    contactNoOpt.click();
  }else {
    contactNoReq.click();
  }  
      
  if(tax_GSTOpt.getValue()==='false'){
    tax_GSTOpt.click();
  }else {
    tax_GSTReq.click();
  }   
      
  save.click();
assert.strictEqual(snackbar.getText(),"Changes saved successfully");


});


});