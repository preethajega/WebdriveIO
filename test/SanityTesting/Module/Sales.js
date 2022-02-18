const  assert = require("assert");
const { time, exception } = require("console");
const { isYesterday } = require("date-fns");
const { taggedTemplateExpression } = require("jscodeshift");
const { format } = require("path");
let today =  new Date().toISOString().replace(/\/|-|:|/g,'');
const path = require('path');
const imageUpload = path.join(__dirname,'./../../FileUtils/profilepic.png');
const cartUpload = path.join(__dirname, './../../FileUtils/sample-cart.1fd3e1a4 (4).xlsx');



describe("Sanity test check", async() => {

    it("login page", async () => {
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
        let mailReq = await  $('//p[text()="Email required"]');
        let pwdReq = await  $('//p[text()="Password required"]');
        let invaildMail = await  $('//p[text="Invalid business email"]');
        let userExist = await  $('//p[text="User does not exist"]');
        let incrtPwd = await  $('//p[text="Incorrect password"]');

    await    loginUsername.waitForDisplayed(2000);
    await      loginUsername.setValue("admin@apptino.com");
    await     loginpassword.waitForDisplayed(2000);
    await      loginpassword.setValue("Admin@123");
     await      signIn.click();
    await       browser.pause(5000);

        if ((await  mailReq.isDisplayed()) || (await  invaildMail.isDisplayed())||(await  userExist.isDisplayed()))
        {
          await   loginUsername.click();
             await browser.pause(2000)
              await browser.keys(["\uE009", "a"]);
              await     loginUsername.keys("\uE003");   
              await       loginUsername.setValue("admin@apptino.com");
              await       signIn.click();
        }
        if((await  pwdReq.isDisplayed()) || (await    incrtPwd.isDisplayed()))
        {         
          await    loginpassword.click();
            await browser.pause(2000)
             await browser.keys(["\uE009", "a"]);
             await      loginpassword.keys("\uE003");   
             await       loginpassword.setValue("Admin@123");
             await       signIn.click();
        }
        
        await browser.pause(5000);
        await browser.getUrl();
        await expect(await browser).toHaveUrlContaining('dashboard');



    });


    it("create lead", async () => {
        

        let cart = await  $('#cartIcon');
        let leadName = await  $('//input[@name="leadName"]');
        let BuyerName = await  $('//input[@id="asynchronous-demo"]');
        let companyName = await  $('#companyName');
        let contactPerson = await  $('#fullName');
        let CustEmail = await  $('#email');
        let CustContactNo = await  $('#phone');
        let Source = await  $('#leadSource');
        let message = await  $('#message');
        let createLead = await  $('//button[@id="loadingButton"]');
        let snackbar=await  $('#client-snackbar');
        let remove=await  $('//div[contains(@class,"Paper-root jss")]');
        let MoreOptions=await  $('//*[text()="Upload Products"]/following::button[1]');
        let clearCart=await  $('//*[text()="Clear Cart"]');
        let attchmentAlert=await  $('//*[text()="Uploading attachment, please wait"]');
        let yes=await  $('#yes');

        await browser.url('/');
        await     cart.waitForDisplayed(2000);
        await      cart.click();
        await browser.pause(2000);

        if(await   remove.isExisting()){                     
          await  MoreOptions.click();
                      await browser.pause(2000);
                      await clearCart.click();
                      await     yes.click();
                     
                  }

                  await      leadName.setValue("Sanity Lead");
                  await      BuyerName.waitForClickable(1000);
                  await      BuyerName.setValue('ent');
                  await     browser.pause(1000);
                  await     BuyerName.keys("\uE015");
        await browser.pause(1000);
        await    BuyerName.keys("\uE007");
       
        if (await  companyName.getValue() === '') {
          await    companyName.setValue('apptino Software');
        }
        if (await  contactPerson.getValue() === '') {
          await   contactPerson.setValue('fred');
        }
        if (await  CustEmail.getValue() === '') {
          await   CustEmail.setValue('fred@gmail.com');
        }
        if(await  CustContactNo.getValue()===''){
          await   CustContactNo.setValue('9876543210');
        }
        await     Source.setValue('Social Networks');
        await browser.pause(1000);
        await   Source.keys("\uE015");
        await browser.pause(1000);
        await    Source.keys("\uE007");
        await    Source.click();
        await     message.waitForDisplayed(1000);
        await    message.setValue('this is to inofrm one enquiry is receieved');  
        let attachment = await  $('#button-file-leads');
        await browser.execute(            
            (el) => el.style.display = 'block',
          
            await    attachment
        );
        await      attachment.waitForDisplayed();
        await      attachment.setValue(imageUpload);
        await     createLead.click();
        if(await  attchmentAlert.isDisplayed()){
          await browser.pause(2000);
          await    createLead.click();
          }else{
        await browser.pause(2000);
        assert.strictEqual(await snackbar.getText(),"Lead created successfully");

        }
      
        

    });


    it("Add to cart upload products and create lead", async () => {
        await browser.url("/");
      

        let cart = await  $('#cartIcon');
        let AddtoCart = await  $('//*[text()="Add to Cart"]');
        let product = await  $('//input[@placeholder="Search for products"]');
        let CustomProduct = await  $('//div[@class="MuiBox-root jss164"]/button[1]');
        let createEnquiry = await  $('#panel1bh-header');
        let leadName = await  $('//input[@name="leadName"]');
        let BuyerName = await  $('//input[@id="companyName"]/preceding::input[1]');
        let companyName = await  $('#companyName');
        let contactPerson =await  $('//input[@id="companyName"]/following::input[1]');
        let CustEmail = await  $('#email');
        let CustContactNo = await  $('#phone');
        let Source = await  $('#leadSource');
        let message = await  $('#message');
        let createLead = await  $('//*[@type="button" and @id="loadingButton"]');
        let qty = await  $('#quantity');
        let snackbar=await  $('#client-snackbar');
        let remove=await  $('//div[contains(@class,"Paper-root jss")]');
        let MoreOptions=await  $('//*[text()="Upload Products"]/following::button[1]');
        let clearCart=await  $('//*[text()="Clear Cart"]');
        let yes=await  $('#yes');
        let attchmentAlert=await  $('//*[text()="Uploading attachment, please wait"]');

        await browser.pause(2000);
        await   cart.click();
        await browser.pause(2000);
        if(await remove.isExisting()){

          await  MoreOptions.click();
          await browser.pause(2000);
          await   clearCart.click();
          await yes.click();
         
      }


        let uploadProducts = await  $('//*[text()="Upload Products"]');
        await browser.pause(2000);
        await uploadProducts.click();
        let uploadFile = await  $('#upload-excel-file');
        await browser.execute(
            
            (el) => el.style.display = 'block',
            
            await   uploadFile
        );
        await   uploadFile.waitForDisplayed();
        await   uploadFile.setValue(cartUpload);
        await browser.pause(2000);
        await  AddtoCart.click();

       
        await browser.pause(1000);

        await  createEnquiry.click();
        await   leadName.setValue("Sanity Lead Upload");
        await   BuyerName.waitForClickable(2000);
        await    BuyerName.setValue('Enterprise');
        await browser.pause(1000);
        await   BuyerName.keys("\uE015");
        await browser.pause(1000);
        await   BuyerName.keys("\uE007");
      
         
        if (await companyName.getValue()=== '') {
          await companyName.setValue('apptino Software');
        }
        await browser.pause(1000);
        if (await contactPerson.getValue()==='') {
          await contactPerson.setValue('fred');
        }
        if (await CustEmail.getValue()==='') {
          await  CustEmail.setValue('fred@gmail.com');
        }
        if(await CustContactNo.getValue()===''){
          await  CustContactNo.setValue('9876543210');
        }
        await   Source.setValue('a');
           await browser.pause(1000);
           await     Source.keys("\uE015");
           await browser.pause(1000);
           await     Source.keys("\uE007");
           await     Source.click();

           await    message.waitForDisplayed(2000);
           await    message.setValue('this is to inofrm one enquiry is receieved');
        let attachment = await  $('#button-file-leads');
        await browser.execute(
            
            (el) => el.style.display = 'block',
          
            await  attachment
        );
        await  attachment.waitForDisplayed();
        await   attachment.setValue(imageUpload);
        await   createLead.click();
        await browser.pause(2000);
         
        if(await attchmentAlert.isDisplayed()){
          await browser.pause(2000);
          await  createLead.click();
          }else{
        await browser.pause(2000);
       await assert.strictEqual(await snackbar.getText(),"Lead created successfully");

        }
      
        


    });




    it("Create a Quote and saved as draft", async () => {
       

        let cart = await  $('#cartIcon');
        let myCart=await  $('//div[contains(@class,"Paper-root jss")]');
        let product = await  $('//input[@placeholder="Search for products"]');
        let SearchResult = await  $('//div[@class="MuiPaper-root MuiPaper-elevation1"]/div/ul/div[1]');
        let CustomProduct = await  $('//div[@class="MuiBox-root jss164"]/button[1]');
        let uploadProducts = await  $('//*[text()="Upload Products"]');
        let MoreOptions=await  $('//*[text()="Upload Products"]/following::button[1]');
        let clearCart=await  $('//*[text()="Clear Cart"]');
        let Buyer = await  $('#asynchronous-demo');
        let createQuote = await  $('//*[@id="cq_rfq"]');
        let QuoteReqDate = await  $('//input[@id="customerRequiredDate"]');
        let DateReq=await  $('//p[text()="Provide required delivery date"]');
        let currentDate = await  $('//button[contains(@class,"daySelected")]');
        let savedDraft = await  $('//*[@id="loadingButton"][1]');
        let reqApproval = await  $('//*[@id="loadingButton"][2]');
        let Quotename = await  $('#name');
        let QuoteComments = await  $('//*[@name="initiatedComments"]');
        let QuoteAccept = await  $('//*[@id="editDialogButton"]');
        let QuoteCancel = await  $('//*[@id="editDialogCancel"]');
        let ApprovalGroup=await  $('#ApprovalGroup');
        let remove=await  $('//span[text()="Remove"]');
        let yes=await  $('#yes');
        let snackbar=await  $('#client-snackbar');



       
        await browser.pause(2000);
        await    cart.click();
        await browser.pause(2000);

        if(await myCart.isExisting()){

          await  MoreOptions.click();
          await   clearCart.click();
          await   yes.click();
           
        }
      
        await   product.setValue('mobile');
        await browser.pause(2000);
        await      SearchResult.click();
        await browser.pause(2000);
        await assert.strictEqual(await snackbar.getText(),'Product added to cart');
        await browser.pause(5000);
        await   Buyer.setValue('En');
        await browser.pause(2000);
        await    Buyer.keys("\uE015");
        await browser.pause(2000);
        await   Buyer.keys("\uE007");
        await  createQuote.waitForDisplayed(2000);
        await   createQuote.click();
        await browser.pause(1000);


        await    savedDraft.click();
        await browser.pause(1000);
        await       QuoteReqDate.scrollIntoView();
        await       QuoteReqDate.click();
        /*click to move the focus from date picker*/
            await browser.pause();
            await    currentDate.click();
            await     savedDraft.click();
            await browser.pause(1000);

            await   Quotename.setValue("Sanity Quote 1");
        await browser.pause(1000);
        await    QuoteAccept.click();
        await browser.pause(1000);
        await browser.getUrl();
        expect(await browser).toHaveUrlContaining("quote-landing");

    });

        it("Create a Quote and Request Approval",async () => {
            await browser.url("/quotes/quote-landing");
            


            let quoteId=await  $('//*[contains(@title,"Sanity Quote 1")]');
            let respond=await  $('//span[text()="Respond"]');
            let reqApproval = await  $('//span[text()="Request Approval"]');
            let Quotename = await  $('//input[@name="quoteName"]');
            let QuoteComments = await  $('//*[@name="initiatedComments"]');
            let review=await  $('//span[text()="Review"]');
            let subReview=await  $('//*[@id="mosn"]/preceding::button[@id="loadingButton"]');
            let QuoteCancel = await  $('//*[@id="editDialogCancel"]');
            let QuoteAccept = await  $('//*[@id="editDialogButton"]')
            let createQuote=await  $('//*[text()="Create Quote"]');
            let cusNameReq=await  $('//p[text()="End customer name is required"]');
            let sprCompanyName=await  $('#sprDetails.companyName');
            let sprProjectName=await  $('//input[@name="sprDetails.projectName"]');
            let CompetitorName=await  $('//input[@name="sprDetails.competitorNames"]');
            let sprPriceJustify=await  $('#priceJustification');
            let referenceNo=await  $('//input[@name="buyerReferenceNumber"]');
            let yes=await  $('#yes');
            let submitTo=await  $('//*[contains(text(),"Submit")]');
            let Placeorder=await  $('//span[text()="Place Order"]');
            let PO=await  $('//*[@title="Close"]/preceding::button[@id="loadingButton"]');
            let approve=await  $('#approve');

            await browser.url("/quotes/quote-landing");
            await browser.pause(2000);
            await quoteId.click();
             await browser.getUrl();
           expect(await browser).toHaveUrlContaining('QuoteDetails');
           await respond.click();
            await browser.pause(1000);
            if(await yes.isDisplayed()===true){
              await   yes.click();
            }
            await browser.pause(1000);

            if(await reqApproval.isDisplayed()===true)
    {

      await   reqApproval.click();
                await browser.pause(2000); 
                 if((await Quotename.isDisplayed())!==true|| (await cusNameReq.isDisplayed())===true){
                  await        referenceNo.scrollIntoView();
                  await     referenceNo.setValue('9898989898');
                  await         sprCompanyName.setValue('mavas');
                  await sprProjectName.setValue('qa');
                  await CompetitorName.setValue('a');
                          await browser.pause(2000);
                          await          CompetitorName.keys("\uE015");
                              await browser.pause(2000);
                              await        CompetitorName.keys("\uE007");
                              await       sprPriceJustify.setValue('Test');
                              await        createQuote.click();
                              await        yes.click();
                 }
            await browser.pause(2000);
            await   QuoteComments.setValue("Quote comments");

            if(await Quotename.getValue()==='')
            {
              await  Quotename.setValue("Sanity Quote2");
                }
                await   QuoteAccept.click();
            await browser.pause(2000);
            await browser.getUrl();
            expect(await browser).toHaveUrlContaining("quote-landing");
            await browser.pause(2000);
            await browser.refresh();
            await  quoteId.click();
            await browser.getUrl();
            expect(await browser).toHaveUrlContaining('QuoteDetails');
            await browser.pause(3000);
               if(await approve.isExisting()===true ){
                await  approve.click();
               }
 
               else if(await review.isExisting()===true){
                await   review.click();
                await    subReview.click();  
                        }
            await browser.pause(3000);
            await  QuoteComments.setValue("approved");
            await   QuoteAccept.click();
            await browser.pause(3000);
            await   respond.click();
            await   submitTo.click();
            await   yes.click();
            await browser.pause(2000);
            await  Placeorder.click();
            await browser.pause(2000);
            await  PO.click();
            await  yes.click();
            await browser.getUrl();
            expect(await browser).toHaveUrlContaining('order-landing');
    }
    else{
      await    createQuote.click(); 
      await    yes.click();
        await browser.getUrl();
        expect(await browser).toHaveUrlContaining("quote-landing");
        await browser.refresh();
        await browser.pause(1000);
        await  quoteId.click();
        await browser.getUrl();
        expect(await browser).toHaveUrlContaining('QuoteDetails');
        await  respond.click();
        await browser.pause(2000);
        await submitTo.click();
        await  yes.click();
        await browser.pause(2000);
        await  Placeorder.click();
        await browser.pause(2000);
        await  PO.click();
        await  yes.click();
        await browser.getUrl();
        expect(await browser).toHaveUrlContaining('order-landing'); 
    } 



       });

    it("Place the Order from the Cart", async () => {


        let cart = await  $('#cartIcon');
        let myCart=await  $('//div[contains(@class,"Paper-root jss")]');
        let product = await  $('//input[@placeholder="Search for products"]');
        let SearchResult = await  $('//div[@class="MuiPaper-root MuiPaper-elevation1"]/div/ul/div[1]');
        let CustomProduct = await  $('//div[@class="MuiBox-root jss164"]/button[1]');
        let uploadProducts = await  $('//*[text()="Upload Products"]');
        let MoreOptions=await  $('//*[text()="Upload Products"]/following::button[1]');
        let clearCart=await  $('//*[text()="Clear Cart"]');
        let Buyer = await  $('//input[@id="asynchronous-demo"]');
        let createOrder = await  $('#co');
        let ReqDate = await  $('//input[@id="customerRequiredDate"]');
        let currentDate = await  $('//button[@class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day MuiPickersDay-daySelected"]');
        let placeOrder = await  $('//span[text()="Place Order"]');
        let cancelOrder = await  $('#cancelSummary');
        let orderName = await  $('#name');
        let reqApproval = await  $('//*[@id="loadingButton"][2]');
        let Quotename = await  $('//*[@name="quoteName"]');
        let QuoteComments = await  $('//*[@name="initiatedComments"]');
        let QuoteAccept = await  $('//*[@id="editDialogButton"]');
        let QuoteCancel = await  $('//*[@id="editDialogCancel"]');
        let Accept = await  $('#editDialogButton');
        let Cancel = await  $('//*[@id="editDialogCancel"]/span[text()="Cancel"]');
        let yes=await  $('#yes');
        let CheckoutQuote=await  $('//span[text()="Checkout to quote"]');

        
       await browser.pause(1000);
       await   cart.click();
       await browser.pause(2000);
        if(await myCart.isExisting()===true){

          await  MoreOptions.click();
          await  clearCart.click();
          await   yes.click();
        }
           
            await browser.pause(2000);
            await  product.setValue('Apple');
        await browser.pause(1000);
        await   SearchResult.click();
        await browser.pause(5000);
        await   Buyer.setValue('Enterprise');
        await browser.pause(2000); 
        await   Buyer.keys("\uE015");
        await browser.pause(1000);
        await  Buyer.keys("\uE007");
        await browser.pause(1000);
        await  createOrder.click();
        await browser.pause(1000);
        await browser.getUrl();
        expect(await browser).toHaveUrlContaining("order-summary");
        await browser.pause(2000);
        

        if(await CheckoutQuote.isDisplayed()===true)
        {
          await   yes.click();
            await browser.getUrl();
        expect(await browser).toHaveUrlContaining('quote-summary');
        await  reqApproval.click();
        await  ReqDate.scrollIntoView();
        await  ReqDate.click();
        await  currentDate.click();
        await   reqApproval.click();
        await   Quotename.setValue("Sanity Quote2");
        await   QuoteComments.setValue("Quote comments");
        await   QuoteAccept.click();


        }else{
          await  ReqDate.scrollIntoView();
          await   ReqDate.click();
          await   currentDate.click();
          await   placeOrder.click();
        await browser.pause(2000);
        await   orderName.setValue("Sanity Order");
        await   Accept.click();
        await browser.pause(2000);
        }

    });


    it("Order to invoice ", async () => {

        let OrderAck=await  $('//*[text()="ORDER ACKNOWLEDGED"]/preceding::td[2]');
        let OrderReceived=await  $('//*[text()="ORDER RECEIVED"]/preceding::td[2]');
        let OrderAccept=await  $('//*[text()="Accept Order"]');
        let submit=await  $('#editDialogButton');
        let OrderBooked=await  $('//*[text()="Book Order"]');
        let erpId=await  $('#erpId');
        let CreateInvoice=await  $('//*[text()="Create Invoice"]');
        let CI=await  $('//*[@title="Close"]/preceding::button[@id="loadingButton"]');
        let erpInvoice=await  $('//*[@name="invoiceDetails.invoiceRequest[0].extInvoiceNumber"]');
        let yes=await  $('#yes');
       


        await browser.url('/orders/order-landing');
        if(await OrderAck.isDisplayed===true){
          await   OrderAck.click();
        } else 
        {
          await  OrderReceived.click();

        }

        await browser.pause(1000);
        await  OrderAccept.click();
        await browser.pause(1000);
        await   submit.click();
        await browser.pause(1000);
        await   OrderBooked.click();
        await browser.pause(1000);
        await   erpId.setValue('sanity');
        await browser.pause(1000);
        await  submit.click();
        await browser.pause(1000);
        await  CreateInvoice.click();
        await browser.pause(1000);
        await   CI.click();
        await browser.pause(5000);
        await   erpInvoice.scrollIntoView();
        await   erpInvoice.setValue('ST0007');
        await browser.pause(5000);

        await   CI.click();
        await browser.pause(2000);
        await   yes.click();
        await browser.getUrl();
        expect(await browser).toHaveUrlContaining("InvoiceLanding");


    });

     it("Invoice to Shipment ", async () => {

        let invoiceStatus=await  $('//*[text()="INVOICED"]/preceding::td[3]');
        let CreateShipment=await  $('//*[text()="Create Shipment"]');
        let shipmentCompany=await  $('//*[@name="shipmentCompany"]');
        let referenceNum=await  $('//*[@name="referenceNum"]');
        let shipmentNum=await  $('//*[@name="shipmentNum"]');
        let shipmentNumReq=await  $('//p[text()="AWB / Shipment number is required"]');
        let trackingUrl=await  $('//*[@name="trackingUrl"]');
        let deliveryType=await  $('//*[@name="deliveryType"]');
        let calendar=await  $('//*[@name="deliveryDate"]');
        let deliveryDate=await  $('//button[contains(@class,"daySelected")]/following::div[1]');
        let deliveryDateReq=await  $('//p[text()="Shipment date is required"]');
        let Submit=await  $('#editDialogButton');
        let Cancel=await  $('#editDialogCancel');
        let shipped=await  $('//p[text()="SHIPPED"]');
        let addPayment=await  $('//*[text()="Add Payment"]');
        let paymentWindow=await  $('//div[@class="MuiPaper-root MuiDialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthMd MuiDialog-paperFullWidth MuiPaper-elevation24 MuiPaper-rounded"]')
        let invoiceRadio=await  $('//*[@name="invoiceRadio"]');
        let orderAdvance=await  $('//*[@name="orderAdvanceRadio"]');
        let cashPayment=await  $('//*[@name="CashRadio"]');
        let payeeName=await  $('//*[@name="paymentData.payeeName"]');
        let recvAmunt=await  $('//*[@name="paymentData.amountReceived"]');
        let paymentRefnum=await  $('//*[@name="paymentData.refernceNumber"]');
        let paymentCalendar=await  $('//*[@name="paymentData.paymentDate"]');
        let paymentDate=await  $('//button[@class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day MuiPickersDay-current MuiPickersDay-daySelected"]/preceding::div[5]/button[1]');
        let adjustmentAmount=await  $('//*[@name="paymentData.paymentAdjustments[0].adjustmentAmount"]');
        let netPayableAmount=await  $('//*[text()="Net Payable"]/following::div[9]/p[1]');



        await browser.url('/invoice/InvoiceLanding');
        await     invoiceStatus.click();
         await browser.pause(1000);
         await  CreateShipment.click();
        await browser.pause(3000);
        await    shipmentCompany.setValue('professional couriers');
        await browser.pause(1000);
        await  referenceNum.setValue('pro2021sanity');
        await browser.pause(1000);
        await  trackingUrl.setValue('https://www.aftership.com/couriers/professional-couriers');
        await browser.pause(1000);
        await    deliveryType.setValue('road');
        await   shipmentNum.setValue('pro1235');
        await browser.pause(1000);
        await    calendar.click();
        await browser.pause(1000);
        await   deliveryDate.click();
        await browser.pause(1000);
        await  Submit.click();
        expect(shipped).toBePresent();
        await browser.refresh();


       /* addPayment.click();
     await   paymentWindow.waitForDisplayed(20000);
        expect(await paymentWindow).toBeDisplayed();

     await   cashPayment.click();
        await browser.pause(10000);
    await    payeeName.setValue('ronaldo');
        await browser.pause(1000);
     await   recvAmunt.setValue('500');
        await browser.pause(1000);
    await    paymentRefnum.setValue('icic20021');
        await browser.pause(1000);
     await    paymentCalendar.click();
         await browser.pause(1000);
      await   paymentDate.click();
         await browser.pause(1000);
      await   adjustmentAmount.setValue('500');
         await browser.pause(1000);
      await   submit.click();*/



     });

     

   it("Create and Support" ,async()=>{

    let CreateTicket= await $('//span[text()="Create Ticket"]');
    let Subject= await $('//input[@name="title"]');
    let editTicket=await  $('//span[text()="Edit Ticket"]');
    let customer=await  $('#asynchronous-demo');
    let customerBranch=await  $('#ticketOwner');
    let customerCntPrsn=await  $('//input[@name="buyerContactPerson"]');
    let customerEmail=await  $('#buyerEmail');
    let customerCntNo=await  $('#buyerContactNumber');
    let PriorityHigh=await  $('#High');
    let PriorityMedium=await  $('#Medium');
    let PriorityLow=await  $('#Low');
    let severity=await  $('#severity');
    let Date=await  $('#dueDateTime');
    let currentdate=await  $('//*[contains(@class,"daySelected")]');
    let nextDate=await  $('//*[contains(@class,"daySelected")]//following::div[1]');
    let ok=await  $('//span[text()="OK"]');
    let Reason=await  $('#reason');
    let ticketOwner=await  $('//*[@placeholder="Search Owner"]');
    let ticketSource=await  $('#ticketSource');
    let save=await  $('#editDialogButton');
    let snackbar = await  $('#client-snackbar');
    let ticketId=await  $('//*[contains(@title,"Sanity Ticket")]');
    let prodCategoery=await  $('#category');
    let prodDetails=await  $('#productSKUs');
    let prodSN=await  $('#sn');
    let refernceNo=await  $('#refNof');
    let ticketTags=await  $('#tags');
    let submit=await  $('#loadingButton');
    let reply=await  $('//span[text()="Reply"]');
    let t_fieldService=await  $('//span[text()="Field Service"]');
    let t_resolution=await  $('//span[text()="Resolution"]');
    let t_attachment=await  $('//span[text()="Attachments"]');
    let t_tasks=await  $('//span[text()="Tasks"]');
    let t_activityLog=await  $('//span[text()="Activity Log"]');
    let createFS=await  $('//span[text()="Create Field Service"]');
    let fromDate=await  $('#appointmentFromDateTime');
    let toDate=await  $('#appointmentToDateTime');
    let ticketStatus=await  $('#ticketStatus');
    let fsCate=await  $('//*[@name="category"]');
    let serviceOwner=await  $('#serviceOwner');
    let Location=await  $('#location');
    let dateAlert=await  $('//p[text()="To date is required"]');
    let addResolution=await  $('//span[text()="Add Resolution"]');
    let addComment=await  $('//*[@placeholder="Add a comment"]');
    let post=await  $('//span[text()="Post"]');
    let deleteAttchment=await  $('//*[contains(@aria-label,"delete")]');
    let addTask=await  $('//span[text()="Add task"]');
    let taskName=await  $('//*[@name="task.taskName"]');
    let boardName=await  $('//*[@name="task.project"]');
    let taskStatus=await  $('//*[@name="task.project"]/following::input[2]');
    let taskUser=await  $('//*[@placeholder="Search for Users"]');
    let taskDueDate=await  $('//*[@name="task.dueDate"]');
    let taskPriority=await  $('//*[@name="task.dueDate"]/following::input[1]');
    let linkTask=await  $('//*[@placeholder="Search for Tasks"]');
    let close=await  $('(//*[contains(@class,"edgeEnd")])[last()]');
    let test=await  $('//tr[1]/td[1]/p[1]');
    

  await browser.url("/Service/ServiceLanding");
  await browser.pause(1000);
  await  CreateTicket.click();
     await browser.pause(1000);
     await   Subject.setValue("Sanity Ticket");
       await browser.keys(["\uE009", "a"]);
        await browser.pause(1000);
          await browser.keys(["\uE009", "c"]);
        await browser.pause(2000);
         await browser.keys("\uE004");
          await browser.pause(1000);
            await browser.keys(["\uE009", "v"]);   
            await customer.setValue("arasan ");
      await browser.pause(1000);
      await    customer.keys("\uE015");
        await browser.pause(1000);
        await    customer.keys("\uE007");
          await browser.pause(1000);
          await     customerBranch.setValue("a");
          await     customerBranch.keys("\uE015");
               await browser.pause(1000);
               await     customerBranch.keys("\uE007");
                 await browser.pause(1000);
                 await customerCntPrsn.setValue("QA");
                 await     customerEmail.setValue("Test@apptino.com");           
 await customerCntNo.setValue("909090909");
  await browser.pause(1000);
  await PriorityMedium.click();
  await severity.setValue("low");
  await  severity.keys("\uE015");
         await browser.pause(1000);
         await severity.keys("\uE007");
             await browser.pause(1000);
             await  Date.click(); 
             await  currentdate.click();
      await browser.pause(1000);
      await     ok.click();
      await     Reason.scrollIntoView();
      await     Reason.setValue("Aud");
      await      Reason.keys("\uE015");
              await browser.pause(1000);
              await         Reason.keys("\uE007");
                  await browser.pause(1000);
                  await ticketOwner.setValue("madhan");
                  await  ticketOwner.keys("\uE015");
       await browser.pause(1000);
       await    ticketOwner.keys("\uE007");
         await browser.pause(1000);
         await    ticketSource.setValue("EMAIL");
         await      ticketSource.keys("\uE015");
               await browser.pause(1000);
               await        ticketSource.keys("\uE007");
                  await browser.pause(1000);
                  let attachment = await  $('#button-file');
                  await browser.execute(
          
                            (el) => el.style.display = 'block',
                          
                            await   attachment
                        );
                        await    attachment.waitForDisplayed();
                        await   attachment.setValue(imageUpload);
                   await browser.pause(4000);
                   await  save.click();
await assert.strictEqual(await snackbar.getText(),"Support ticket created successfully");
                   await browser.getUrl();
expect(await browser).toHaveUrlContaining("Service/ServiceLanding");
await ticketId.click();
       await browser.getUrl();
expect(await browser).toHaveUrlContaining("Service/ServiceDetails");
await    editTicket.click();
         if(await Subject.getValue()==="Sanity Ticket"){
          await   Subject.click();
            await browser.keys(["\uE009", "a"]);
            await   Subject.keys('\uE003');
            await  Subject.setValue('Ticket Sanity');
         }
         await   save.click();
await assert.strictEqual(await snackbar.getText(),"Updated successfully");
await prodCategoery.setValue('a');
await  prodCategoery.keys("\uE015");
await  prodCategoery.keys("\uE007");
    await browser.pause(1000);
    await    prodDetails.setValue('ucp 207');
    await   prodSN.setValue('123');
    await   refernceNo.setValue('mum12/20-21/0007');
        await browser.keys(["\uE009", "a"]);
         await browser.pause(1000);
           await browser.keys(["\uE009", "c"]);
           await ticketTags.setValue('a');
           await   ticketTags.keys("\uE015");
           await   ticketTags.keys("\uE007");
               await browser.pause(1000);
                if(await submit.isDisplayed())
                {
                  await  submit.click();
                }
await assert.strictEqual(await snackbar.getText(),"Updated successfully");
await reply.click();
 await browser.keys("\uE004");
   await browser.pause(1000);
    await browser.keys(["\uE009", "v"]);
    await browser.pause(1000);
    await  submit.click();
await assert.strictEqual(await snackbar.getText(),"Updated successfully");
  
await  t_fieldService.click();
    await browser.pause(1000);
    await    createFS.click();
       await browser.pause(1000);
       await   Subject.setValue('sanity field service');
         await browser.keys(["\uE009", "a"]);
         await browser.pause(1000);
          await browser.keys(["\uE009", "c"]);
           await browser.pause(2000);
            await browser.keys("\uE004");
             await browser.pause(1000);
              await browser.keys(["\uE009", "v"]);
              await fromDate.click();
              await  currentdate.click();
              await   ok.click();
              await      fsCate.setValue('a');
              await        fsCate.keys("\uE015");
              await       fsCate.keys("\uE007");
                        await browser.pause(1000);
                        await  serviceOwner.setValue('a');
                           await browser.pause(1000);
                           await   serviceOwner.keys("\uE015");
                             await browser.pause(1000);
                             await    serviceOwner.keys("\uE007");
                              await      Location.setValue('coimbatore');
                               await browser.keys("\uE004");
                                await browser.pause(1000);
                                 await browser.keys(["\uE009", "v"]);
                                 await   submit.click();
                                   if(await dateAlert.isDisplayed())
                                   {await  toDate.click();
                                    await nextDate.click();
                                    await ok.click();
                                    await  submit.click();
                                     }

await assert.strictEqual(await snackbar.getText(),"Field service created successfully");                                 
await t_resolution.click();
await  addResolution.click();
  await browser.keys("\uE004");
   await browser.pause(1000);
    await browser.keys(["\uE009", "v"]);
    await    addResolution.click();
    await   t_attachment.click();
    await     deleteAttchment.click();
    await     submit.click();
        let attachment1 = await  $('#button-file');
        await browser.execute(
          
          (el) => el.style.display = 'block',
        
          await  attachment1
      );
      await    attachment1.waitForDisplayed();
      await    attachment1.setValue(imageUpload);
 await browser.pause(4000);
 await submit.click();

 await t_tasks.click();
 await   addTask.click();
 await     taskName.setValue("Sanity Tasks");
      await browser.keys(["\uE009","a"]);
      await browser.pause(1000);
       await browser.keys(["\uE009","c"]);
        await browser.pause(2000);
         await browser.keys("\uE004");
          await browser.pause(1000);
           await browser.keys(["\uE009","v"]);
           await      boardName.setValue('support');
            await browser.pause(5000);
            await     boardName.keys("\uE015");
             await browser.pause(1000);
              await browser.keys("\uE007");
              await    taskStatus.setValue('open');
                await browser.pause(2000);
                await     taskStatus.keys("\uE015");
                   await browser.pause(1000);
                   await      taskStatus.keys("\uE007");
                   if(await taskUser.getValue()===''){
                    await    taskUser.setValue('Madhan');
                 await browser.pause(2000);
                 await   taskUser.keys("\uE015");}
                    await browser.pause(2000);
                    await browser.keys("\uE007");
                    await   taskName.click();
                    await      taskDueDate.click();
                    await      currentdate.click();
                    await     taskPriority.setValue('low');
                    await       taskPriority.keys("\uE015");
                             await browser.pause(1000);
                             await  taskPriority.keys("\uE007");
                                
                             await submit.click();
await assert.strictEqual(await snackbar.getText(),"Changes saved successfully");  
await  close.click();
                                                

   }); 

it("Create and Delete Board" ,async()=>{
  let AddBoard=await  $('//*[text()="Add Board"]');
  let BoardName=await  $('//input[@name="projectName"]');
  let Modules=await  $('//input[@name="moduleElementId"]');
  let save =await  $('#editDialogButton');
  let newBoard=await  $('//div[starts-with(@class,"MuiPaper-root MuiBox-root")]/following::h4[text()="Automation"]');
  let deleteBoard=await  $('//span[text()="Delete Board"]');
  let yes =await  $('#yes');
  let snackbar = await  $('#client-snackbar');

await browser.url("/boards");
await browser.pause(1000);
await  AddBoard.click();
    await browser.pause(2000);

    await BoardName.setValue("Automation");
    await Modules.setValue("Quotes");
    await Modules.keys("\uE015");
 await browser.pause(2000);
 await Modules.keys("\uE007");
    await browser.pause(2000);
    await   save.click();
      await browser.pause(5000);
await assert.strictEqual(await snackbar.getText(),"Board saved");

/*delete board*/
await newBoard.scrollIntoView();
await browser.pause(2000);
await newBoard.click();
 await browser.pause(2000);
 await deleteBoard.click();
 await  yes.click();
     await browser.pause(2000);
       await browser.getUrl();
expect(await browser).toHaveUrlContaining('boards');
});

it("Integartion page", async () => {

  let directBank=await  $('//div[text()="Direct Bank"]');
  let paymentGateway=await  $('//div[text()="Payment Gateway"]');
  let accName=await  $('#accountName');
  let accNo=await  $('#accountNumber');
  let bankName=await  $('#bankName');
  let bankLocation=await  $('#bankLocation');
  let bankCode=await  $('//input[contains(@name,"bankCode")]');
  let bankIBAN=await  $('//input[contains(@name,"iban")]');
  let save=await  $('#loadingButton');
  let razorPay=await  $('//*[text()="RAZOR PAY"]');
  let enableRazorpay=await  $('#enabled_0');
  let apiKey=await  $('//*[@id="enabled_0"]/following::input[1]');
  let scretKey=await  $('//*[@id="enabled_0"]/following::input[2]');
  let alert=await  $('//p[contains(text(),"Required")]');
  let snackbar=await  $('#client-snackbar');

  await browser.url('/settings/integration_settings');

  if(await accName.getValue()===''){    
    await   accName.setValue(' Software Pvt ltd');
         }
     if(await accNo.getValue()===''){
      await  accNo.setValue('89898766554787')
          }
          await  bankName.click();
            await browser.keys(["\uE009", "a"]);
            await   bankName.keys("\uE003");
               await browser.pause(2000);
               await     bankName.setValue("CANRA Bank");
                   if(await bankLocation.getValue===''){
                    await  bankLocation.setValue('Chennai');
                      }
                      await  bankCode.click();
                        await browser.keys(["\uE009", "a"]);
                        await     bankCode.keys("\uE003");
                          await browser.pause(2000);
                          await      bankCode.setValue('CB0098765021' );
                          await     bankIBAN.setValue('AA');
                          await     bankIBAN.keys("\uE003");
                          await     save.click();
await assert.strictEqual(await snackbar.getText(),"Changes saved successfully");                   
await   paymentGateway.click();
await    razorPay.click();
       if(await enableRazorpay.getValue()==='0'){
        await  enableRazorpay.click();
            if(await apiKey.getValue()!=='' && scretKey.getValue()!==''){
              await    apiKey.click();
             await browser.keys(["\uE009", "a"]);
             await     apiKey.keys("\uE003");
               await browser.pause(2000);
               await     scretKey.click();
                 await browser.keys(["\uE009", "a"]);
                 await    scretKey.keys("\uE003");
                 await browser.pause(2000);}
                 await    save.click();
                  await browser.pause(2000);
                  if(await alert.isDisplayed())
                  {
                    await   apiKey.setValue("rzp_test_cQQn4U1VqgLut1");
                   await browser.pause(2000);
                   await   scretKey.setValue("PfClrm0tEgE7hPTpzHhYXl0Q");
                    }}
                    else if(await enableRazorpay.getValue()==='1') {
                      await  enableRazorpay.click();
                    }
                    await  save.click();
                    await browser.pause(2000);
await assert.strictEqual(await snackbar.getText(),"Changes saved successfully");
});


it("Shipping Page", async()=> {

  let createShipping=await  $('//span[text()="Create Shipping"]');
  let firstTerm=await  $('(//*[@id="active"])[last()]');
  let detailsTab=await  $('//span[text()="Shipping Details"]');
  let rateTab=await  $('//span[text()="Shipping Rates"]');
  let regionTab=await  $('//span[text()="Shipping Region"]');
  let categeroyTab=await  $('#wrapped-tab-3');
  let shippingName=await  $('(//input[contains(@name,"shippingName")])[last()]');
  let checklistName=await  $('(//input[contains(@name,"shortDescription")])[last()]');
  let shippingDesc=await  $('(//textarea[contains(@name,"description")])[last()]');
  let enableShipping=await  $('//textarea[contains(@name,"description")]/following::input[1]');
  let subTotal=await  $('//span[text()="Subtotal"]');
  let weight=await  $('//span[text()="Weight"]');
  let addRow=await  $('(//button[@title="Add new rates"])[last()]');
  let deleteRow=await  $('(//button[@aria-label="Delete Row"])[last()]');
  let startRange=await  $('//input[contains(@name,"startRange")][last()]');
  let endRange=await  $('//input[contains(@name,"endRange")][last()]');   
  let rateperOrder=await  $('//input[contains(@name,"rates")][last()]');
  let shippFrom=await  $('//input[@name="warehouse"]');
  let Drpdwn=await  $('//button[@title="Open"]');
  let shippTo=await  $('(//*[@title="Assign Variant Filter"])[last()]');
  let globalShip=await  $('//span[text()="Global shipping"]/following::input[1]');
  let subCategories=await  $('//input[@name="subCategoryId"]');
  let forAllcategoeries=await  $('//*[@id="logo"]');
  let save=await  $('#loadingButton');
  let cancel=await  $('//span[text()="Cancel"]');
  let moreOptions=await  $('//span[text()="Create Shipping"]/following::button[1]');
  let deleteShippig=await  $('//span[text()="Delete"]');
  let yes=await  $('#yes');
  let snackbar=await  $('#client-snackbar');

  await browser.url('/settings/shipping');
   await browser.pause(2000);
   await createShipping.click();
    await browser.pause(2000);
    await   shippingName.click();
     await browser.keys(["\uE009", "a"]);
     await   shippingName.keys('\uE003');
           await browser.pause(2000);
           await   shippingName.setValue('sanity2');
           await    checklistName.setValue('QA');
           await     shippingDesc.setValue('Shipping Automation');
           await      enableShipping.click();
            await browser.pause(2000);
            await      save.click();

            await       regionTab.click();
            await         Drpdwn.click();
               await browser.pause(2000);
               await         shippFrom.setValue('a');
               await        shippFrom.keys("\uE013");
                   await browser.pause(2000);
                   await        shippFrom.keys("\uE007");
                      await browser.pause(2000);
                      await         shippTo.click();
                      await          globalShip.click(); 
                      await             categeroyTab.click();
                      await            subCategories.setValue('A');
                      await          await browser.pause(2000);
                      await         subCategories.keys("\uE013");
                      await           await browser.pause(2000);
                      await          subCategories.keys("\uE007");
                      await            categeroyTab.click();
                      await             save.click();
                                        await browser.pause(2000);
await assert.strictEqual(await snackbar.getText(),"Changes saved successfully");
await browser.pause(1000);
await moreOptions.click();
await  moreOptions.scrollIntoView();
 await browser.pause(1000);
 if(await deleteShippig.isDisplayed()){
  await deleteShippig.click();
  await yes.click();
 }
 else{
  await yes.click();
 }
 await browser.pause(5000);
await assert.strictEqual(await snackbar.getText(),"Shipping deleted successfully");
   
               
});

it("Create and Delete Competitors" ,async()=>{

let Competitors =await  $('(//input[contains(@id,"MSETT_PT_CD")])[last()]');
let addNew=await  $('#MSETT_PT_CFBA');
let deleteComp=await  $('(//*[contains(@id,"MSETT_PT_CDEL_")])[last()]');
let save=await  $('//h5[text()="Options"]/preceding::button[1]');
let cancel=await  $('//span[text()="Cancel"]');
let snackbar = await  $('#client-snackbar');

   await browser.url("/settings/competitors");
    addNew.click();
     Competitors.setValue('Sanity');
       await browser.pause(1000);
      save.click();
await assert.strictEqual(await snackbar.getText(),"Changes saved successfully");

    /*  Competitors.click();
       await browser.keys(["\uE009", "a"]);
         await browser.pause(1000);
     await     Competitors.keys('\uE003');
           await browser.pause(1000);
       await     Competitors.setValue('QA');
             await browser.pause(5000);
       await       save.click();
await assert.strictEqual(await snackbar.getText(),"Changes saved successfully");*/
         await browser.refresh();
         await     addNew.click();
         await browser.pause(2000);
         await    Competitors.setValue('Sanity');
          await browser.pause(1000);
          await    save.click();
           await assert.strictEqual(await snackbar.getText(),"Sanity competitor already exist");
            await browser.refresh();
            await   deleteComp.click();
         await browser.pause(1000);
         await   save.click();
await assert.strictEqual(await snackbar.getText(),"Changes saved successfully");
          
});

it("Create and Delete BusinessUnits" ,async()=>{

  let businessUnit =await  $('//*[@id="MSETT_PT_CFBA"]/preceding::input[2]');
  let addNew=await  $('#MSETT_PT_CFBA');
  let deleteBU=await  $('(//*[contains(@id,"MSETT_PT_CDEL_")])[last()]');
  let priorityBU=await  $('//*[@id="MSETT_PT_CFBA"]/preceding::input[1]');
  let requiredMsg=await  $('(//*[contains(@id,"-helper-text")])[last()]');
  let save=await  $('//h5[text()="Options"]/preceding::button[1]');
  let cancel=await  $('//span[text()="Cancel"]');
  let snackbar = await  $('#client-snackbar');
  
     await browser.url("settings/businessunit");
     await   addNew.click();
      await browser.pause(1000);
      await   businessUnit.setValue('Sanity');
         await browser.pause(1000);
         await    save.click();
          await browser.pause(2000);
          if(await requiredMsg.isDisplayed){
            await browser.pause(1000);
            await  priorityBU.setValue('10');
            await browser.pause(1000);
            await  save.click();            
          }
  await assert.strictEqual(await snackbar.getText(),"Changes saved successfully");
  
      
           await browser.refresh();
           await addNew.click();
           await browser.pause(2000);
           await businessUnit.setValue('Sanity');
            await browser.pause(1000);
            await  save.click();
             await assert.strictEqual(await snackbar.getText(),"Sanity already exists");
              await browser.refresh();
              await    deleteBU.click();
           await browser.pause(1000);
           await  save.click();
  await assert.strictEqual(await snackbar.getText(),"Changes saved successfully");
            
  });

it("API Settings Page",async () =>{
  
         
         let viewApi = await  $('//*[@aria-label="toggle password visibility"]');
         let copyApi = await  $('#copy');
         let regenarateApi= await  $('#regenerate');
         let snackbar = await  $('#client-snackbar');
         let yes =await  $('#yes');

         await browser.url("settings/api_key");
         await browser.pause(1000);
         await  viewApi.click();
         await  copyApi.click();
         await assert.strictEqual(await snackbar.getText(),"Copied");
         await  regenarateApi.click();
         await  yes.click();
         await browser.pause(3000);
         await assert.strictEqual(await snackbar.getText(),"API Key regenerated successfully");

})



it("Signout page", async () => {

      let icon = await  $('//*[@aria-label="userMenu"]');
      let Signout = await  $('//*[text()="Sign Out"]');
      
  await browser.url('/');
  await   icon.click();
     await browser.pause(2000);
     await    Signout.click();
        await browser.pause(2000);
         await browser.getUrl();
expect(await browser).toHaveUrlContaining('');
  });

  it("Register Page", async () => {

          let contactName = await  $('[name="displayName"]');
          let userEmail = await  $('[name="userEmail"]');
          let mailExsist=await  $('//p[text()="Email already exists"]');
          let invaildMail=await  $('//p[text()="Invalid email"]');
          let mailReq=await  $('//p[text()="Email required"]');
          let userGst = await  $('[name="regAddress.gst"]');
          let companyName = await  $('#autocomplete');
          let register = await  $('//button[@id="loadingButton"]');
          let sucess= await  $('//h6[text()=" Successfully Registered"]');
          let localityAlert=await  $('//p[text()="Locality is required"]');
          let Address=await  $('//*[@name="regAddress.addressLine"]');
          let locality=await  $('//*[@name="regAddress.locality"]');
          let city=await  $('//input[@name="regAddress.city"]');
          let State=await  $('//input[@name="regAddress.state"]');
          let pin=await  $('//input[@name="regAddress.pinCodeId"]');
          let country=await  $('//input[@name="regAddress.country"]');

  await browser.url('/auth/register');
   await browser.pause(5000);
   await   contactName.setValue("MK");
   await  userEmail.setValue("varun@gmail.com");
   await    userGst.setValue("33AABCU9603R1ZM");
   await    companyName.setValue("ARC Parcel Service Pvt Ltd");
          await browser.pause(1000);
          await        companyName.keys("\uE015");
              await browser.pause(2000);
              await        companyName.keys("\uE007");
                  await browser.pause(2000);
   if((await mailExsist.isDisplayed())|| (await invaildMail.isDisplayed()))
          {   
            await  userEmail.doubleClick();
            await  userEmail.click();
              await browser.keys(["\uE009", "a"]);
              await   userEmail.keys("\uE003");
                await browser.pause(2000);
                await    userEmail.setValue("muruganan@gmail.com");
          }
    if(await localityAlert.isDisplayed()){
      await   locality.setValue('coimbatore');
    }
      

    await  register.scrollIntoView();
    await   register.click();
     await browser.pause(2000);
expect(await sucess).toBeDisplayed();
   });

    });