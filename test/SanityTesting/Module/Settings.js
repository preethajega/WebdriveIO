const assert = require("assert");
const { time, exception } = require("console");
const { isYesterday } = require("date-fns");
const { taggedTemplateExpression } = require("jscodeshift");
const { format } = require("path");
let today =  new Date().toISOString().replace(/\/|-|:|/g,'');
const path = require('path');
const imageUpload = path.join(__dirname,'./../../FileUtils/profilepic.png');



describe("Sanity test check", async  () => {

    it("login page", async  () => {
        await browser.url('/auth/login');
        await browser.pause(3000);
        await browser.getCookies();
        await browser.deleteCookies();
        await browser.maximizeWindow();
        await browser.pause(3000);
        let loginUsername = await  $('[name="Email"]');
        let loginpassword = await  $('[name="Password"]');
        let signIn = await  $('//*[text()="Sign In"]');
        let Register = await  $('//*[text()="Register"]');
        let mailReq = await $('//p[text()="Email required"]');
        let pwdReq = await $('//p[text()="Password required"]');
        let invaildMail = await $('//p[text="Invalid business email"]');
        let userExist = await $('//p[text="User does not exist"]');
        let incrtPwd = await $('//p[text="Incorrect password"]');

        await  loginUsername.waitForDisplayed(2000);
        await  loginUsername.setValue("admin@apptino.com");
        await  loginpassword.waitForDisplayed(2000);
        await   loginpassword.setValue("Admin@123");
        await   signIn.click();
        if ((await mailReq.isDisplayed()) || (await invaildMail.isDisplayed())||(await userExist.isDisplayed()))
        {
          await  loginUsername.click();
             await browser.pause(2000)
              await browser.keys(["\uE009", "a"]);
              await    loginUsername.keys("\uE003");   
              await     loginUsername.setValue("admin@apptino.com");
              await      signIn.click();
        }
        if((await pwdReq.isDisplayed()) || (await incrtPwd.isDisplayed()))
        {         
          await  loginpassword.click();
            await browser.pause(2000)
             await browser.keys(["\uE009", "a"]);
             await    loginpassword.keys("\uE003");   
             await    loginpassword.setValue("Admin@123");
                await       signIn.click();
        }
        
        await browser.pause(5000);
        await browser.getUrl();
        await  expect(await browser).toHaveUrlContaining('dashboard');



    });


 


    
    
    it("Create  the Terms", async ()=> {

      let deliveryTerm= await $('//div[text()="Delivery Terms"]');
      let dispatchTerm= await $('//div[text()="Mode of Dispatch"]');
      let freightTerm= await $('//div[text()="Freight Charges"]');
      let insuranceTerm= await $('//div[text()="Insurance"]');
      let packingTerm= await $('//div[text()="Packaging & Forwarding"]');
      let warrantyTerm= await $('//div[text()="Warranty Terms"]');
      let paymentTerm= await $('//div[text()="Payment Terms"]');
      let save = await $('#loadingButton');
      let cancel=await $('//*[text()="Cancel"]');
      let addTerm=await $('//button[@title="Add new terms"]');
      let termName=await $('(//input[starts-with(@id,"MSETT_PT_CD_")])[last()]');
      let paymentName=await $('(//textarea[starts-with(@id,"MSETT_PT_CPT_CPT_")])[last()]');
      let paymentCode=await $('(//input[starts-with(@id,"MSETT_PT_CPT_CPC_")])[last()]');
      let orderStatus=await $('(//input[starts-with(@id,"MSETT_PT_CPT_COS_")])[last()]');
      let dueDays=await $('(//input[starts-with(@id,"MSETT_PT_CPT_CDD_")])[last()]');
      let percentage=await $('(//input[starts-with(@id,"MSETT_PT_CPT_CP_")])[last()]');
      let neworderStatus=await $('(//input[starts-with(@id,"MSETT_PT_CPT_COS_")])[last()]');
      let newdueDays=await $('(//input[starts-with(@id,"MSETT_PT_CPT_CDD_")])[last()]');
      let newpercentage=await $('(//input[starts-with(@id,"MSETT_PT_CPT_CP_")])[last()]');
      let addPayment=await $('(//button[starts-with(@id,"MSETT_PT_CPT_CFBA_")])[last()]');
      let deletePaymentline=await $('(//button[starts-with(@id,"MSETT_PT_CPT_CFBD_")])[last()]');
      let paymentGateway=await $('(//input[starts-with(@id,"logo")])[last()]');
      let paymentDefault=await $('(//input[starts-with(@id,"MSETT_PT_CPT_CDT_")])[last()]');
      let b2Cterm=await $('(//input[starts-with(@name,"b2C")])[last()]');
      let paymentError=await $('//p[text()="Sum of percentage must be 100%"]');
      let needApproval=await $('(//input[starts-with(@id,"MSETT_PT_CNA_")])[last()]');
      let defaultTerm=await $('(//input[starts-with(@id,"MSETT_PT_CDEF_")])[last()]');
      let snackbar=await $('#client-snackbar');

      await browser.url('/settings/terms');
      await browser.pause(1000);
   /*create delivery term */   
   await   deliveryTerm.click();
      await browser.pause(2000);
      await  addTerm.click();
      await browser.pause(2000);
      await  termName.setValue("sanity");
      await browser.pause(1000);
      await   needApproval.click();
      await   save.click();
      await browser.pause(3000);
      await assert.strictEqual(await snackbar.getText(),'Changes saved successfully');
      await   addTerm.click();
      await browser.pause(1000);
      await  termName.setValue("sanity");
      
      /*await assert.strictEqual(await snackbar.getText(),'Payment term already exist');*/

      /*create dispatchTerm term */   
      await   dispatchTerm.click();
      await browser.pause(1000);
      await  addTerm.click();
      await  termName.setValue("sanity");
      await browser.pause(1000);
      await  needApproval.click();
      await  save.click();
      
     /*await assert.strictEqual(await snackbar.getText(),'Changes saved successfully');*/
     await  addTerm.click();
      await browser.pause(1000);
      await termName.setValue("sanity");
      await browser.pause(1000);
      /*await assert.strictEqual(await snackbar.getText(),'Payment term already exist');*/



      /*create freightTerm */   
      await freightTerm.click();
      await browser.pause(1000);
      await addTerm.click();
      await termName.setValue("sanity");
        await browser.pause(1000);
        await needApproval.click();
        await save.click();
      await browser.pause(2000);
      await assert.strictEqual(await snackbar.getText(),'Changes saved successfully');
      await  addTerm.click();
      await browser.pause(1000);
      await termName.setValue("sanity");
      
     /*await assert.strictEqual(await snackbar.getText(),'Payment term already exist');*?



  /*create insuranceTerm  */
  await  insuranceTerm.click();
  await browser.pause(1000);
  await  addTerm.click();
  await  termName.setValue("sanity");
  await browser.pause(1000);
  await  needApproval.click();
  await  save.click();
  await browser.pause(2000);
  await assert.strictEqual(await snackbar.getText(),'Changes saved successfully');
  await addTerm.click();
  await browser.pause(1000);
  await  termName.setValue("sanity");
  
  /*await assert.strictEqual(await snackbar.getText(),'Payment term already exist');*/


  /*create packingTerm  */   
  await packingTerm.click();
  await browser.pause(1000);
  await  addTerm.click();
  await  termName.setValue("sanity");
  await browser.pause(1000);
  await needApproval.click();
  await save.click();
  await browser.pause(2000);
  await assert.strictEqual(await snackbar.getText(),'Changes saved successfully');
  await addTerm.click();
  await browser.pause(1000);
  await termName.setValue("sanity");
  
/*await assert.strictEqual(await snackbar.getText(),'Payment term already exist');*/



  /*create  warrantyTerm */   
  await warrantyTerm.click();
  await browser.pause(1000);
  await  addTerm.click();
  await termName.setValue("sanity");
  await browser.pause(1000);
  await needApproval.click();
  await browser.pause(1000);
  await save.click();
  await browser.pause(3000);
  await assert.strictEqual(await snackbar.getText(),'Changes saved successfully');
  await  addTerm.click();
  await browser.pause(1000);
  await  termName.setValue("sanity");
  
 /* await assert.strictEqual(await snackbar.getText(),'Payment term already exist');*/
/*create Payment Term */

await  paymentTerm.click();
await browser.pause(5000);
await  addTerm.scrollIntoView();
await    addTerm.click();
await browser.pause(2000);
await  paymentName.scrollIntoView();
await  paymentName.setValue("sanity");
await browser.pause(1000);
await  paymentCode.setValue('QA');
await browser.pause(1000);
await  deletePaymentline.click();
await browser.pause(2000);
await assert.strictEqual(await snackbar.getText(),"All payment term must have atleast one order status");
await  orderStatus.setValue('ORDER ACCEPTED');
await browser.pause(1000);
await  orderStatus.keys("\uE015");
await browser.pause(2000);
await  orderStatus.keys("\uE007");
await  dueDays.setValue('100');
await  percentage.setValue('90');


if(  await  paymentError.isDisplayed())
{   
  await   addPayment.click();
  await   neworderStatus.waitForDisplayed(5000);
  await    neworderStatus.setValue('INVOICED');
  await  neworderStatus.keys("\uE015");
await browser.pause(2000);
  await  neworderStatus.keys("\uE007");
  await  newdueDays.setValue('10');
  await  newpercentage.setValue("10");
}
await paymentGateway.click();
await b2Cterm.click();
await save.click();
 /*await assert.strictEqual(await snackbar.getText(),'Changes saved successfully');*/
   await browser.pause(3000);
   await addTerm.click();
   await browser.pause(2000);
   await  paymentName.setValue("Sanity");
   await paymentName.setValue("\uE004")
   await browser.pause(2000);
   await assert.strictEqual(await snackbar.getText(),'Payment term already exist');




  });

   it("Delete the Terms", async ()=> {

      let deliveryTerm= await $('//div[text()="Delivery Terms"]');
      let dispatchTerm= await $('//div[text()="Mode of Dispatch"]');
      let freightTerm= await $('//div[text()="Freight Charges"]');
      let insuranceTerm= await $('//div[text()="Insurance"]');
      let packingTerm= await $('//div[text()="Packaging & Forwarding"]');
      let warrantyTerm= await $('//div[text()="Warranty Terms"]');
      let paymentTerm= await $('//div[text()="Payment Terms"]');
      let save = await $('#loadingButton');
      let firstTerm=await $('//*[@id="MSETT_PT_CDEL_0"]');
      let deleteTerm=await $('(//button[starts-with(@id,"MSETT_PT_CDEL_")])[last()]');
      let snackbar=await $('#client-snackbar');
         let paymentName=await $('(//textarea[starts-with(@id,"MSETT_PT_CPT_CPT_")])[last()]');
         let deletePaymentTerm=await $('(//button[starts-with(@id,"MSETT_PT_CPT_CD_")])[last()]');
         let firstPaymentTerm=await $('#MSETT_PT_CPT_CD_0');


   /*delete delivery term */
   await  deliveryTerm.click();
      await browser.pause(1000);
      await   firstTerm.click();
       await browser.pause(1000);
       await    save.click();
       await browser.pause(2000);
       await assert.strictEqual(await snackbar.getText(),"Terms mapped with company preferences can't be deleted");

       await  deleteTerm.click();
      await browser.pause(1000);
      await   save.click();
      await browser.pause(2000);
      await assert.strictEqual(await snackbar.getText(),'Changes saved successfully');

      /*delete dispatch term */   
      await  dispatchTerm.click();
      await browser.pause(1000);
      await    firstTerm.click();
      await browser.pause(1000);
      await   save.click();
      await browser.pause(2000);
      await assert.strictEqual(await snackbar.getText(),"Terms mapped with company preferences can't be deleted");
      await browser.pause(1000);
      await  deleteTerm.click();
      await browser.pause(1000);
      await  save.click();
      await browser.pause(2000);
      /*await assert.strictEqual(await snackbar.getText(),'Changes saved successfully');*/

  /*delete freight term */ 
  await freightTerm.click();
  await browser.pause(1000);
  await firstTerm.click();
  await browser.pause(1000);
  await save.click();
  await browser.pause(2000);
  await assert.strictEqual(await snackbar.getText(),"Terms mapped with company preferences can't be deleted");
  await browser.pause(1000);
  await deleteTerm.click();
  await browser.pause(1000);
  await save.click();
  await browser.pause(3000);
  await assert.strictEqual(await snackbar.getText(),'Changes saved successfully');

  /*delete insurance term */ 
  await insuranceTerm.click();
  await browser.pause(1000);
  await firstTerm.click();
  await browser.pause(1000);
  await save.click();
  await browser.pause(2000);
  await assert.strictEqual(await snackbar.getText(),"Terms mapped with company preferences can't be deleted");
  await browser.pause(1000);
  await deleteTerm.click();
  await browser.pause(2000);
  await save.click();
  await browser.pause(2000);
  await assert.strictEqual(await snackbar.getText(),'Changes saved successfully');

  /*delete packing term */
  await packingTerm.click();
  await browser.pause(1000);
  await firstTerm.click();
  await browser.pause(1000);
  await save.click();
  await browser.pause(1000);
  /*await assert.strictEqual(await snackbar.getText(),"Terms mapped with company preferences can't be deleted");*/
  await browser.pause(1000);
  await deleteTerm.click();
  await browser.pause(1000);
  await save.click();
  await browser.pause(1000);
  /*await assert.strictEqual(await snackbar.getText(),'Changes saved successfully');*/

  /*delete warranty term */
  await warrantyTerm.click();
  await browser.pause(1000);
  await firstTerm.click();
  await browser.pause(2000);
  await save.click();
  await browser.pause(3000);
  await assert.strictEqual(await snackbar.getText(),"Terms mapped with company preferences can't be deleted");
  await browser.pause(1000);
  await deleteTerm.click();
  await browser.pause(2000);
  await save.click();
  await browser.pause(1000);
 await assert.strictEqual(await snackbar.getText(),'Changes saved successfully');
  


 await paymentTerm.click();
  await browser.pause(3000);
  await deletePaymentTerm.scrollIntoView();
  if(await paymentName.getValue()==='sanity')
  {
    await deletePaymentTerm.click();
    await  save.click();
  await assert.strictEqual(await snackbar.getText(),'Changes saved successfully');
  }
 

   });

  it("Create and delete the approval group", async ()=> {

      let approversGroup=await $('//span[text()="Approvers Group"]');
      let range=await $('//span[text()="Range"]');
      let createApproval=await $('//span[text()="Create Approval"]');
      let approvalName=await $('//*[@name="approvalName"]');
      let Submit=await $('#editDialogButton');
      let Cancel=await $('#editDialogCancel');
      let addusrGroup=await $('#addNewUserGroup');
      let deleteGroup=await $('#removeApproverGroup');
      let totalPrecedence=await $('#totalPrecedence');
      let groupName=await $('(//*[starts-with(@id,"groupName")])[last()]');
      let precendence=await $('(//*[starts-with(@id,"precedence")])[last()]');
      let reviewer=await $('(//*[starts-with(@id,"isReviewer")])[last()]');
      let optionalApprover=await $('(//*[starts-with(@id,"isOptional")])[last()]');
      let triggerOptional=await $('(//*[starts-with(@id,"optionalName")])[last()]');
      let approverName=await $('(//*[starts-with(@id,"approvers")])[last()]');
      let defaultApprover=await $('(//*[starts-with(@id,"defaultApprover")])[last()]');
      let save=await $('#loadingButton');
      let groupSugg=await $('//*[@placeholder="Search"]');
      let endMargin=await $('(//*[contains(@name,"endRange")])[last()]');
      let deleteRange=await $('#deleteRange');
      let snackbar=await $('#client-snackbar');
      let moreOptions=await $('//button[@title="More options"]');
      let deleteApproval=await $('#deleteApproval');
      let editApproval=await $('#editApproval');
      let yes=await $('#yes');


       /*delete approval group */
      await browser.url("/settings/approvals");
      await browser.pause('2000');
      await   range.click();
      if((await groupSugg.getValue()) !==''){
        await  approversGroup.click();
      await browser.pause(1000);
      await   deleteGroup.click();
      await browser.pause(2000);
      await assert.strictEqual(await snackbar.getText(),'User group exists in range mapping. Please remove approver group from range before deleting');
      }

   /*create approval*/   
      await browser.url("/settings/approvals");
      await browser.pause('2000');
      await   createApproval.click();
      await  approvalName.setValue('Sanity Test');
      await browser.pause('2000');
      await  Submit.click();
      await browser.pause('2000');
      await assert.strictEqual(await snackbar.getText(),'Saved successfully');

   /*create approval Group */   

   /*create approval Group */   
   await  totalPrecedence.setValue("\uE003");
   await   addusrGroup.click();
      await browser.pause(1000);
      await   groupName.setValue('sanity 1');
      await browser.pause(2000);
      await   precendence.setValue('1');
      await    precendence.keys("\uE015");
      await browser.pause(3000);
      await   precendence.keys("\uE007");
      await browser.pause(3000);
      await   reviewer.click();
      await browser.pause(2000);
      await   optionalApprover.click();
      await   triggerOptional.setValue('cost');
      await  triggerOptional.keys("\uE013");
      await browser.pause(3000);
      await   triggerOptional.keys("\uE007");
      await browser.pause(1000);
      await   approverName.scrollIntoView();
      await   approverName.setValue('admin');
      await   approverName.keys("\uE015");
      await browser.pause(3000);
      await  approverName.keys("\uE007");
      await browser.pause(1000);
      await  approverName.setValue('madhan');
      await   approverName.keys("\uE015");
      await browser.pause(3000);
      await  approverName.keys("\uE007");
      await browser.pause(1000);
      await   defaultApprover.scrollIntoView();
      await   defaultApprover.setValue('admin');
      await   defaultApprover.keys("\uE013");
      await browser.pause(3000);
      await  defaultApprover.keys("\uE007");
      await browser.pause(1000);
      await  save.click();
      await browser.pause(1000);
      await assert.strictEqual(await snackbar.getText(),'Changes saved successfully');


   /*create Range*/   
   await    range.click();
   await    endMargin.setValue("\uE017");
      await browser.pause(2000);
      await    endMargin.setValue("10");
      await browser.pause(2000);
      await    groupSugg.setValue('sanity');
      await   groupSugg.keys("\uE015");
      await browser.pause(3000);
      await    groupSugg.keys("\uE007");
      await browser.pause(3000);
      await    save.click();
      await browser.pause(2000);
      await assert.strictEqual(await snackbar.getText(),'Changes saved successfully');

  /*delete range*/
  await    range.click();
  await    deleteRange.click();
      await browser.pause(1000);
      await     save.click();
      await browser.pause(2000);
      await assert.strictEqual(await snackbar.getText(),'Changes saved successfully');

  /*delete approval group*/
  await    approversGroup.click();
      await browser.pause(1000);
      await    deleteGroup.click();
      await browser.pause(1000);
      await   save.click();
      await browser.pause(2000);

      await assert.strictEqual(await snackbar.getText(),'Changes saved successfully');

  /*delete approval*/    
  await     moreOptions.click();
      await browser.pause(1000);
      await deleteApproval.click();
      await browser.pause(1000);
      await   yes.click();
      await browser.pause(2000);
/*await assert.strictEqual(await snackbar.getText(),'Deleted succesfully');*/

});


     it("Create  Tax" ,async  () =>{
        
    let taxNametab=await $('//span[text()="Tax Name"]');
    let taxGrouptab= await $('//span[text()="Tax Group"]');
    let taxCodeTab= await $('//span[text()="Product Tax Code"]');
    let taxExeTab= await $('//span[text()="Tax Exemption"]');
    let save = await $('#loadingButton');
    let snackbar=await $('#client-snackbar');
    let required=await $('//p[text()="Required"]');
    let taxGroupReq= await $('//p[contains(text(),"required")]')

   let taxName=await $('(//input[contains(@name,"taxName")])[last()]');
   let taxRate=await $('(//input[contains(@name,"rate")])[last()]');
   let addTaxName=await $('//button[@title="Add new tax name"]');

   let taxGroupName=await $('(//input[contains(@name,"taxGroupName")])[last()]');
   let taxNameSugg=await $('(//input[contains(@name,"taxReqLs")])[last()]');
   let compoundTax=await $('(//input[contains(@name,"compoundTax")])[last()]');
   let defaultTax=await $('(//input[contains(@class,"MuiSwitch-input")])[last()]');
   let defalutlable=await $('//label[@title="***Field is disabled, already default assigned to a tax group"]');
   let addTaxGroup=await $('//button[@title="Add new tax group"]');

   let codeName=await $('(//input[contains(@name,"hsncode")])[last()]');
   let hsnDesc=await $('(//input[contains(@name,"description")])[last()]');
   let interTax=await $('(//input[contains(@name,"interTaxGrp")])[last()]');
   let intraTax=await $('(//input[contains(@name,"intraTaxGrp")])[last()]');
   let addCode=await $('//button[@title="Add new tax code"]');

   let addTaxExc=await $('//button[@title="Add new tax exemption"]');
   let taxExcName=await $('(//input[contains(@name,"taxExemptName")])[last()]');
   let excCustomer=await $('(//input[@name="position"][@value="customer"])[last()]');
   let excItem=await $('(//input[@name="position"][@value="item"])[last()]');

   await browser.url('/settings/tax');
  

/*Adding Tax name*/   
await  addTaxName.scrollIntoView();
   await browser.pause(2000);
   await   addTaxName.click();
     await browser.pause(4000);
     if(await taxName.getValue()===''){
      await  taxName.setValue('TSGST');}
       else {
        await    addTaxName.click();
           await browser.pause(2000);
           await   taxName.setValue('TSGST');
       }
       await   save.click();
           if(await required.isDisplayed()){
            await   taxRate.setValue('10');
            await  save.click();
        }
await assert.strictEqual(await snackbar.getText(),"Changes saved successfully");

    await browser.pause(2000);
    await   addTaxName.click();
    await    taxName.setValue('TCGST');
    await     save.click();
         if(await required.isDisplayed()){
          await  taxRate.setValue('10');
          await save.click();
        }
await assert.strictEqual(await snackbar.getText(),"Changes saved successfully");          

        await browser.pause(4000);
        await addTaxName.click();
        await   taxName.setValue('TIGST');
        await     taxRate.setValue('10');
                 await browser.pause(2000);
                 await         save.click();
await assert.strictEqual(await snackbar.getText(),"Changes saved successfully");
                    await browser.refresh();

/*Adding Tax Group*/   
        
await taxGrouptab.click();
await   addTaxGroup.scrollIntoView();
     await     addTaxGroup.click();
         await browser.pause(3000);
         await    taxGroupName.setValue("sanity inter");
         await     save.click();
          await browser.pause(1000);
        if(await taxGroupReq.isDisplayed())
        {
          await   taxNameSugg.setValue("TSGST");
          await    taxNameSugg.keys("\uE015");
            await browser.pause(2000);
            await      taxNameSugg.keys("\uE007");
                await browser.pause(2000);
                await    taxNameSugg.setValue("TCGST");
                await      taxNameSugg.keys("\uE015");
                 await browser.pause(2000);
                 await      taxNameSugg.keys("\uE007");
                     await browser.pause(2000);
                     await       save.click();
                            }
await assert.strictEqual(await snackbar.getText(),"Changes updated successfully");
 
                           await browser.refresh();
                           await   taxGrouptab.click();
                              await browser.pause(2000);
                              await     addTaxGroup.scrollIntoView(); 
                              await     addTaxGroup.click();
                              await        taxNameSugg.setValue("TIGST");
                              await         taxNameSugg.keys("\uE015");
                                      await browser.pause(2000);
                                      await           taxNameSugg.keys("\uE007");
                                          await browser.pause(2000);
                                          await        save.click();
                                             await browser.pause(1000);
                                               if(await taxGroupReq.isDisplayed())
                                                 {
                                                  await taxGroupName.setValue("sanity intra");
                                                  await    save.click();
                                                    }
 await assert.strictEqual(await snackbar.getText(),"Changes updated successfully");

/*Adding HSN */   

await browser.refresh();
await taxCodeTab.click();
await addCode.click();
await  addCode.scrollIntoView(); 
await   codeName.setValue('8297');
await     save.click();
          if(await required.isDisplayed())
          {
            await  hsnDesc.setValue('HSN TEST');
          }        
          await   save.click();
          if(await required.isDisplayed())   
          {
            await   interTax.setValue('sanity inter');
               await browser.pause(2000);
               await    interTax.keys("\uE015");
               await      interTax.keys("\uE007");
                  await browser.pause(2000);
                  await    intraTax.setValue('sanity intra');
                 await browser.pause(2000);
                 await      intraTax.keys("\uE015");
                 await    intraTax.keys("\uE007");
                        await browser.pause(2000);
                        await       save.click();
          } 
          await assert.strictEqual(await snackbar.getText(),"Changes saved successfully");

/*Adding TaxException*/   
await browser.refresh();
await  taxExeTab.click();
await  addTaxExc.click();
await   taxExcName.setValue("sanity");
await   save.click(); 
       if(await required.isDisplayed()){
        await   excCustomer.click();
        await   save.click();
       }
await assert.strictEqual(await snackbar.getText(),"Changes saved successfully");
     
     });

it("Tax Delete" ,async () =>{

     let taxNametab=await $('//span[text()="Tax Name"]');
     let taxGrouptab= await $('//span[text()="Tax Group"]');
     let taxCodeTab= await $('//span[text()="Product Tax Code"]');
     let taxExeTab= await $('//span[text()="Tax Exemption"]');
     let save = await $('#loadingButton');
     let deleteTerm=await $('(//button[@class="MuiButtonBase-root MuiIconButton-root"][@aria-label="delete"])[last()]');
     let snackbar=await $('#client-snackbar');
     let required=await $('//p[text()="Required"]');
     let firstTerm=await $('//button[@class="MuiButtonBase-root MuiIconButton-root"][@aria-label="delete"]');

await browser.url('/settings/tax');
  await browser.setTimeout({ 'pageLoad': 50000 });
  await   deleteTerm.scrollIntoView();
  await     deleteTerm.click();
/*await assert.strictEqual(await snackbar.getText(),"Tax name assigned in tax group(s) please remove from group before deleting");*/ 

await browser.refresh();
await taxGrouptab.click();
await   deleteTerm.scrollIntoView();
     await browser.pause(1000);
     await    deleteTerm.click();
       await browser.pause(1000);
       await    deleteTerm.click();
await assert.strictEqual(await snackbar.getText(),"Tax group associated with product tax code, please remove and try again");
await browser.refresh();
await taxCodeTab.click();
await  firstTerm.click();
     await browser.pause(1000);
await assert.strictEqual(await snackbar.getText(),"Tax code is associated with products please remove from products before deleting");  
   await browser.pause(2000);
   await  deleteTerm.scrollIntoView();
       await browser.pause(1000);
       await     deleteTerm.click();
       await    save.click();
          await browser.pause(2000);
await assert.strictEqual(await snackbar.getText(),"Changes saved successfully");

await browser.refresh();
await taxGrouptab.click();
await   deleteTerm.scrollIntoView();
     await browser.pause(1000);
     await  deleteTerm.click();
       await browser.pause(2000);
       await  save.click();
       await browser.pause(2000);

await assert.strictEqual(await snackbar.getText(),"Changes updated successfully");


await browser.refresh();
await taxGrouptab.click();
await deleteTerm.scrollIntoView();
    await browser.pause(1000);
    await   deleteTerm.click();
        await browser.pause(1000);
        await   save.click();
await assert.strictEqual(await snackbar.getText(),"Changes updated successfully");


await browser.refresh();
await taxNametab.click();
await deleteTerm.waitForDisplayed(2000);
await deleteTerm.scrollIntoView();
await  deleteTerm.click();
   await browser.pause(1000);
   await  deleteTerm.click();
     await browser.pause(1000);
     await  deleteTerm.click();
     await    save.click();
        await browser.pause(1000);
/*await assert.strictEqual(await snackbar.getText(),"Changes saved successfully"); */        

await browser.refresh();
await taxExeTab.click();
await  firstTerm.click();
    await browser.pause(1000);
await assert.strictEqual(await snackbar.getText(),"Tax Exemption associated with a item/customer");  
      await browser.pause(2000);
      await    deleteTerm.scrollIntoView();
      await    deleteTerm.click();
      await   save.click();
        await browser.pause(2000);
await assert.strictEqual(await snackbar.getText(),"Changes saved successfully");    

});

it("Create and Delete Tags" ,async () =>{

      let tagName=await $('#tags-outlined');
      let tagDelete=await $('(//*[contains(@class,"deleteIconSmall")])[last()]');
      let save=await $('#loadingButton');
      let snackbar=await $('client-snackbar');
   
       
      await browser.url('/settings/tags');
      await   tagName.setValue("sanity1");
      await    tagName.keys("\uE007");
         await      tagName.setValue("sanity2");
         await       tagName.keys("\uE007");
               await browser.pause(2000)
               await       save.click();
              
  /*await assert.strictEqual(await snackbar.getText(),"Changes saved successfully");
           await     tagName.setValue("tamilnadu");
             await      tagName.keys('\uE007');
  await assert.strictEqual(await snackbar.getText(),"Changes saved successfully");*/
                    
      await browser.refresh();
      await  tagDelete.click();
         await browser.pause(1000);
         await     tagDelete.click();
             await browser.pause(1000);
             await      save.click();
  /*await assert.strictEqual(await snackbar.getText(),"Changes saved successfully");*/
  
  });
  

it("Update profile" ,async () =>{

        let profileName=await $('//input[@name="ProfileData.displayName"]');
        let mobNo=await $('//input[@name="ProfileData.phoneNumber"]');
        let alterMobno=await $('//input[@name="ProfileData.secondaryPhoneNumber"]');
        let alterEmail=await $('//input[@name="ProfileData.secondaryEmail"]');
        let oldPwd=await $('//input[@name="OldPassword"]');
        let newPwd=await $('//input[@name="NewPassword"]');
        let cnfrmPwd=await $('//input[@name="ConfirmPassword"]');
        let dateFormat=await $('//input[@name="dateFormat"]');
        let timeZone=await $('//input[@name="PrefrenceData.timeZone"]');
        let timeFormat=await $('//input[@name="timeFormat"]');
        let save = await $('#loadingButton');
        let Cancel =await $('//span[text()="Cancel"]');
        let snackbar = await $('#client-snackbar');

   await browser.url('/settings/profile');
   if(await profileName.getValue()==='')
    {
      await  profileName.setValue('Admin');
       }
        if(await mobNo.getValue()==='')
         {
          await  mobNo.setValue('987654321');
          }
           if(await alterMobno.getValue()==='')
           {
            await  alterMobno.setValue('8567412350');
            }
             if(await alterEmail.getValue()==='')
             {
              await  alterEmail.setValue('naren@apptino.com');
              }
    let profilePic=await $('//h5[contains(text(),"Welcome")]/following::input[1]');
      await browser.execute(
        (el) => el.style.display = 'block',
        await  profilePic );
        await  profilePic.waitForDisplayed();
        await     profilePic.setValue(imageUpload);
                await browser.pause(5000);
                await dateFormat.scrollIntoView();
                await timeZone.click();
       await browser.pause(2000);
         await browser.keys(["\uE009", "a"]);
         await   timeZone.keys("\uE003");
           await browser.pause(2000);
           await    timeZone.setValue("(GMT+05:30) Sri Jayawardenapura");
             await browser.pause(2000);
             await     timeZone.keys("\uE015");
                await browser.pause(2000);
                await     timeZone.keys("\uE007");
                     await browser.pause(3000);
                     await  dateFormat.click();
     await browser.pause(2000);
      await browser.keys(["\uE009", "a"]);
       await browser.pause(2000);
       await  dateFormat.keys("\uE003");
         await browser.pause(2000);
         await   dateFormat.setValue('-');
            await browser.pause(2000);
            await   dateFormat.keys("\uE015");
                await browser.pause(3000);
                await     dateFormat.keys("\uE007");
                    await browser.pause(2000);
  await  timeFormat.click();
     await browser.pause(2000);
      await browser.keys(["\uE009", "a"]);
      await timeFormat.keys("\uE003");
        await browser.pause(2000);
        await   timeFormat.setValue("24");
           await browser.pause(2000);
           await     timeFormat.keys("\uE015");
              await browser.pause(2000);
              await timeFormat.keys("\uE007");
                  await browser.pause(2000);
                  await    save.click();
/*await assert.strictEqual(await snackbar.getText(),"Changes saved successfully" );*/

    });


it("General Settings", async () => {

  let addCurrency=await $('//span[text()="Add Currency"]');
  let companyIdentifier=await $('//*[@name="companyIdentifier"]');
  let defaultEmail=await $('//*[@name="email"]');
  let finacialYear=await $('//*[@name="finStartMonth"]');
  let deleteCurrency=await $('(//button[starts-with(@id,"Currency_")])[last()]');
  let baseCurrency=await $('//*[@name="baseCurrency"]');
  let decimalRoundOff=await $('//*[@name="roundOff"]');
  let dateFormat=await $('//input[@name="dateFormatId"]');
  let timeFormat=await $('//input[@name="timeFormat"]');
  let timeZone=await $('//input[@name="timeZone"]');
  let currCode=await $('//input[@name="currencyCode"]');
  let currName=await $('//input[@name="description"]');
  let currFormat=await $('(//input[@name="priceFormat"])[last()]');
  let currSymbol=await $('(//input[@name="currencyFormat"])[last()]');
  let currFactor=await $('//input[@name="factor"]');
  let currCancel=await $('#editDialogCancel');
  let currSave=await $('#editDialogButton');
  let save=await $('(//span[text()="Save"])[last()]');
  let snackbar = await $('#client-snackbar');
  
     await browser.url('/settings/general');
     await addCurrency.click();
      await browser.pause(2000);
      await  currCode.setValue("LKR");
      await browser.pause(2000);
      await     currFormat.click();
           await browser.pause(2000)
            await browser.keys(["\uE009", "a"]);
            await     currFormat.keys("\uE003");     
            await     currFormat.setValue('1 999.99');
            await      currFormat.keys("\uE015");
                     await browser.pause(2000);
                     await        currFormat.keys("\uE007");
                         await browser.pause(2000);
                         await       currSymbol.setValue('LKR');
                         await      currSymbol.keys("\uE015");
                              await browser.pause(2000);
                              await     currSymbol.keys("\uE007");
                                if(await currName.getValue()==='')
                                {
                                  await  currName.setValue("srilankan Doller");
                                }
                                   await browser.pause(2000);
                                   await  currSave.click();
                                      await browser.pause(2000);
await assert.strictEqual(await snackbar.getText(),"Changes saved successfully");
                                         await browser.refresh();
                                       if((await companyIdentifier.getValue())!=="Apptino"){
                                        await  companyIdentifier.setValue('Apptino Softwares');
                                    }
                                   if(await defaultEmail.getValue===""){
                                    await  defaultEmail.setValue('sellertesuser@gmail.com');
                               }
                            if(await finacialYear.getValue()===""){
                              await    finacialYear.setValue('April');
                         }
                         await    dateFormat.click();
                     await browser.pause(2000)
                   await browser.keys(["\uE009", "a"]);
                   await  dateFormat.keys("\uE003");
                   await dateFormat.setValue("-")
             await browser.pause(2000);
             await dateFormat.keys("\uE015")
           await browser.pause(2000);
           await dateFormat.keys("\uE007");
       await browser.pause(1000);
       await timeFormat.click();
     await browser.pause(2000);
      await browser.keys(["\uE009", "a"]);
      await  timeFormat.keys("\uE003");
        await browser.pause(2000);
        await   timeFormat.setValue("24");
           await browser.pause(2000);
           await      timeFormat.keys("\uE015");
              await browser.pause(2000);
              await    timeFormat.keys("\uE007");
                  await browser.pause(2000);
                  await timeZone.click();
                           await browser.pause(2000);
                             await browser.keys(["\uE009", "a"]);
                             await      timeZone.keys("\uE003");
                               await browser.pause(2000);
                               await   timeZone.setValue("Kathmandu");
                                 await browser.pause(2000);
                                 await   timeZone.keys("\uE013");
                                    await browser.pause(2000);
                                    await     timeZone.keys("\uE007");
                                         await browser.pause(2000);
                                         if(await save.isDisplayed()){
                                          await save.click();}
                                           else{
                                            await  timeFormat.setValue('12');
                                            await browser.pause(2000);
                                            await    timeFormat.keys("\uE015");
                                               await browser.pause(2000);
                                               await timeFormat.keys("\uE007");
                                               await   save.click();
                                           }
await assert.strictEqual(await snackbar.getText(),"Changes saved successfully");
                                  await browser.refresh();
                                  await   deleteCurrency.scrollIntoView();
                                  await  deleteCurrency.click();
await assert.strictEqual(await snackbar.getText(),"Changes saved successfully");

});

it("Customization Page", async () => {

  let addressTab=await $('//div[text()="Address"]');
  let branchOpt=await $('//span[text()="Branch Name"]/following::input[1]');
  let branchReq=await $('//span[text()="Branch Name"]/following::input[2]');
  let addressOpt=await $('//span[text()="Address Line"]/following::input[1]');
  let addressReq=await $('//span[text()="Address Line"]/following::input[2]');
  let localityOpt=await $('//span[text()="Locality"]/following::input[1]');
  let localityReq=await $('//span[text()="Locality"]/following::input[2]');
  let cityOpt=await $('//span[text()="City"]/following::input[1]');
  let cityReq=await $('//span[text()="City"]/following::input[2]');
  let stateOpt=await $('//span[text()="State"]/following::input[1]');
  let stateReq=await $('//span[text()="State"]/following::input[2]');
  let pinCodeOpt=await $('//span[text()="Pincode"]/following::input[1]');
  let pinCodeReq=await $('//span[text()="Pincode"]/following::input[2]');
  let CountryOpt=await $('//span[text()="Country"]/following::input[1]');
  let CountryReq=await $('//span[text()="Country"]/following::input[2]');
  let primaryContactOpt=await $('//span[text()="Primary contact"]/following::input[1]');
  let primaryContactReq=await $('//span[text()="Primary contact"]/following::input[2]');
  let contactNoOpt=await $('//span[text()="Contact No"]/following::input[1]');
  let contactNoReq=await $('//span[text()="Contact No"]/following::input[2]');
  let tax_GSTOpt=await $('//span[text()="Tax ID / GST#"]/following::input[1]');
  let tax_GSTReq=await $('//span[text()="Tax ID / GST#"]/following::input[2]');

  let save=await $('#loadingButton');
  let snackbar =await $('#client-snackbar');

  await browser.url('/settings/customization');
  if( await branchOpt.getValue()==='false'){
    await  branchOpt.click();
  }else {
    await  branchReq.click();
  }
  
  if(await addressOpt.getValue()==='false'){
    await  addressOpt.click();
  }else {
    await  addressReq.click();
  }
  if(await localityOpt.getValue()==='false'){
    await  localityOpt.click();
  }else {
    await  localityReq.click();
  }
  if(await cityOpt.getValue()==='false'){
    await   cityOpt.click();
  }else {
    await  cityReq.click();
  }
  if(await stateOpt.getValue()==='false'){
    await  stateOpt.click();
  }else {
    await stateReq.click();
  }  
  if(await pinCodeOpt.getValue()==='false'){
    await  pinCodeOpt.click();
  }else {
    await  pinCodeReq.click();
  }  
  if(await pinCodeOpt.getValue()==='false'){
    await pinCodeOpt.click();
  }else {
    await  pinCodeReq.click();
  }  
  if(await CountryOpt.getValue()==='false'){
    await    CountryOpt.click();
  }else {
    await  CountryReq.click();
  }   
  if(await primaryContactOpt.getValue()==='false'){
    await  primaryContactOpt.click();
  }else {
    await primaryContactReq.click();
  }           
       
  if(await contactNoOpt.getValue()==='false'){
    await contactNoOpt.click();
  }else {
    await contactNoReq.click();
  }  
      
  if(await tax_GSTOpt.getValue()==='false'){
    await  tax_GSTOpt.click();
  }else {
    await tax_GSTReq.click();
  }   
      
  await save.click();
await assert.strictEqual(await snackbar.getText(),"Changes saved successfully");


});


});