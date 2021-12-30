const assert = require("assert");
const { time, exception } = require("console");
const { isYesterday } = require("date-fns");
const { taggedTemplateExpression } = require("jscodeshift");
const { format } = require("path");
let today =  new Date().toISOString().replace(/\/|-|:|/g,'');
const path = require('path');
const imageUpload = path.join(__dirname,'./../../FileUtils/profilepic.png');
const cartUpload = path.join(__dirname, './../../FileUtils/sample-cart.1fd3e1a4 (4).xlsx');



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


    it("create lead", () => {
        

        let cart = $('//*[@aria-label="cart"]');
        let leadName = $('//input[@name="leadName"]');
        let BuyerName = $('//input[@id="asynchronous-demo"]');
        let companyName = $('#companyName');
        let contactPerson = $('#fullName');
        let CustEmail = $('#email');
        let CustContactNo = $('#phone');
        let Source = $('#leadSource');
        let message = $('#message');
        let createLead = $('//button[@id="loadingButton"]');
        let snackbar=$('#client-snackbar');
        let remove=$('//div[contains(@class,"Paper-root jss")]');
        let MoreOptions=$('//*[text()="Upload Products"]/following::button[1]');
        let clearCart=$('//*[text()="Clear Cart"]');
        let attchmentAlert=$('//*[text()="Uploading attachment, please wait"]');
        let yes=$('#yes');

        browser.url('/');
        cart.waitForDisplayed(2000);
        cart.click();
        browser.pause(2000);

        if(remove.isExisting()){                     
                      MoreOptions.click();
                      browser.pause(2000);
                      clearCart.click();
                    yes.click();
                     
                  }

        leadName.setValue("Sanity Lead");
        BuyerName.waitForClickable(1000);
        BuyerName.setValue('ent');
        browser.pause(1000);
        BuyerName.keys("\uE015");
        browser.pause(1000);
        BuyerName.keys("\uE007");
       
        if (companyName.getValue() === '') {
           companyName.setValue('apptino Software');
        }
        if (contactPerson.getValue() === '') {
             contactPerson.setValue('fred');
        }
        if (CustEmail.getValue() === '') {
            CustEmail.setValue('fred@gmail.com');
        }
        if(CustContactNo.getValue()===''){
        CustContactNo.setValue('9876543210');
        }
        Source.setValue('Social Networks');
        browser.pause(1000);
        Source.keys("\uE015");
        browser.pause(1000);
        Source.keys("\uE007");
        Source.click();
        message.waitForDisplayed(1000);
        message.setValue('this is to inofrm one enquiry is receieved');  
        let attachment = $('#button-file-leads');
        browser.execute(            
            (el) => el.style.display = 'block',
          
            attachment
        );
        attachment.waitForDisplayed();
        attachment.setValue(imageUpload);
        createLead.click();
        if(attchmentAlert.isDisplayed()){
          browser.pause(2000);
          createLead.click();
          }else{
        browser.pause(2000);
       assert.strictEqual(snackbar.getText(),"Lead created successfully");

        }
      
        

    });


    it("Add to cart upload products and create lead", () => {
        browser.url("/");
      

        let cart = $('//*[@aria-label="cart"]');
        let AddtoCart = $('//*[text()="Add to Cart"]');
        let product = $('//input[@placeholder="Search for products"]');
        let CustomProduct = $('//div[@class="MuiBox-root jss164"]/button[1]');
        let createEnquiry = $('#panel1bh-header');
        let leadName = $('//input[@name="leadName"]');
        let BuyerName = $('//input[@id="companyName"]/preceding::input[1]');
        let companyName = $('#companyName');
        let contactPerson =$('//input[@id="companyName"]/following::input[1]');
        let CustEmail = $('#email');
        let CustContactNo = $('#phone');
        let Source = $('#leadSource');
        let message = $('#message');
        let createLead = $('//*[@type="button" and @id="loadingButton"]');
        let qty = $('#quantity');
        let snackbar=$('#client-snackbar');
        let remove=$('//div[contains(@class,"Paper-root jss")]');
        let MoreOptions=$('//*[text()="Upload Products"]/following::button[1]');
        let clearCart=$('//*[text()="Clear Cart"]');
        let yes=$('#yes');
        let attchmentAlert=$('//*[text()="Uploading attachment, please wait"]');

        browser.pause(2000);
        cart.click();
        browser.pause(2000);
        if(remove.isExisting()){

          MoreOptions.click();
          browser.pause(2000);
          clearCart.click();
        yes.click();
         
      }


        let uploadProducts = $('//*[text()="Upload Products"]');
        browser.pause(2000);
        uploadProducts.click();
        let uploadFile = $('#upload-excel-file');
        browser.execute(
            
            (el) => el.style.display = 'block',
            
            uploadFile
        );
        uploadFile.waitForDisplayed();
        uploadFile.setValue(cartUpload);
        browser.pause(2000);
        AddtoCart.click();

       
        browser.pause(1000);

        createEnquiry.click();
        leadName.setValue("Sanity Lead Upload");
        BuyerName.waitForClickable(2000);
        BuyerName.setValue('Enterprise');
        browser.pause(1000);
        BuyerName.keys("\uE015");
        browser.pause(1000);
        BuyerName.keys("\uE007");
      
         
        if (companyName.getValue()=== '') {
           companyName.setValue('apptino Software');
        }
        browser.pause(1000);
        if (contactPerson.getValue()==='') {
            contactPerson.setValue('fred');
        }
        if (CustEmail.getValue()==='') {
            CustEmail.setValue('fred@gmail.com');
        }
        if(CustContactNo.getValue()===''){
        CustContactNo.setValue('9876543210');
        }
         Source.setValue('a');
           browser.pause(1000);
           Source.keys("\uE015");
           browser.pause(1000);
           Source.keys("\uE007");
            Source.click();

        message.waitForDisplayed(2000);
        message.setValue('this is to inofrm one enquiry is receieved');
        let attachment = $('#button-file-leads');
        browser.execute(
            
            (el) => el.style.display = 'block',
          
            attachment
        );
        attachment.waitForDisplayed();
        attachment.setValue(imageUpload);
        createLead.click();
        browser.pause(2000);
         
        if(attchmentAlert.isDisplayed()){
          browser.pause(2000);
          createLead.click();
          }else{
        browser.pause(2000);
       assert.strictEqual(snackbar.getText(),"Lead created successfully");

        }
      
        


    });




    it("Create a Quote and saved as draft", () => {
       

        let cart = $('//*[@aria-label="cart"]');
        let myCart=$('//div[contains(@class,"Paper-root jss")]');
        let product = $('//input[@placeholder="Search for products"]');
        let SearchResult = $('//div[@class="MuiPaper-root MuiPaper-elevation1"]/div/ul/div[1]');
        let CustomProduct = $('//div[@class="MuiBox-root jss164"]/button[1]');
        let uploadProducts = $('//*[text()="Upload Products"]');
        let MoreOptions=$('//*[text()="Upload Products"]/following::button[1]');
        let clearCart=$('//*[text()="Clear Cart"]');
        let Buyer = $('#asynchronous-demo');
        let createQuote = $('//*[@id="cq_rfq"]');
        let QuoteReqDate = $('//input[@id="customerRequiredDate"]');
        let DateReq=$('//p[text()="Provide required delivery date"]');
        let currentDate = $('//button[contains(@class,"daySelected")]');
        let savedDraft = $('//*[@id="loadingButton"][1]');
        let reqApproval = $('//*[@id="loadingButton"][2]');
        let Quotename = $('#name');
        let QuoteComments = $('//*[@name="initiatedComments"]');
        let QuoteAccept = $('//*[@id="editDialogButton"]');
        let QuoteCancel = $('//*[@id="editDialogCancel"]');
        let ApprovalGroup=$('#ApprovalGroup');
        let remove=$('//span[text()="Remove"]');
        let yes=$('#yes');
        let snackbar=$('#client-snackbar');



       
        browser.pause(2000);
        cart.click();
        browser.pause(2000);

        if(myCart.isExisting()){

            MoreOptions.click();
            clearCart.click();
            yes.click();
           
        }
      
        product.setValue('mobile');
        browser.pause(2000);
        SearchResult.click();
        browser.pause(2000);
        assert.strictEqual(snackbar.getText(),'Product added to cart');
        browser.pause(5000);
        Buyer.setValue('En');
        browser.pause(2000);
        Buyer.keys("\uE015");
        browser.pause(2000);
        Buyer.keys("\uE007");
        createQuote.waitForDisplayed(2000);
        createQuote.click();
        browser.pause(1000);


        savedDraft.click();
        browser.pause(1000);
            QuoteReqDate.scrollIntoView();
            QuoteReqDate.click();
        /*click to move the focus from date picker*/
            browser.pause();
            currentDate.click();
            savedDraft.click();
            browser.pause(1000);

        Quotename.setValue("Sanity Quote 1");
        browser.pause(1000);
        QuoteAccept.click();
        browser.pause(1000);
        browser.getUrl();
        expect(browser).toHaveUrlContaining("quote-landing");

    });

        it("Create a Quote and Request Approval",() => {
            browser.url("/quotes/quote-landing");
            


            let quoteId=$('//*[contains(@title,"Sanity Quote 1")]');
            let respond=$('//span[text()="Respond"]');
            let reqApproval = $('//span[text()="Request Approval"]');
            let Quotename = $('//input[@name="quoteName"]');
            let QuoteComments = $('//*[@name="initiatedComments"]');
            let review=$('//span[text()="Review"]');
            let subReview=$('//*[@id="mosn"]/preceding::button[@id="loadingButton"]');
            let QuoteCancel = $('//*[@id="editDialogCancel"]');
            let QuoteAccept = $('//*[@id="editDialogButton"]')
            let createQuote=$('//*[text()="Create Quote"]');
            let cusNameReq=$('//p[text()="End customer name is required"]');
            let sprCompanyName=$('#sprDetails.companyName');
            let sprProjectName=$('//input[@name="sprDetails.projectName"]');
            let CompetitorName=$('//input[@name="sprDetails.competitorNames"]');
            let sprPriceJustify=$('#priceJustification');
            let referenceNo=$('//input[@name="buyerReferenceNumber"]');
            let yes=$('#yes');
            let submitTo=$('//*[contains(text(),"Submit")]');
            let Placeorder=$('//span[text()="Place Order"]');
            let PO=$('//*[@title="Close"]/preceding::button[@id="loadingButton"]');
            let approve=$('#approve');

            browser.url("/quotes/quote-landing");
            browser.pause(2000);
            quoteId.click();
            browser.getUrl();
           expect(browser).toHaveUrlContaining('QuoteDetails');
            respond.click();
            browser.pause(1000);
            if(yes.isDisplayed()===true){
              yes.click();
            }
            browser.pause(1000);

            if(reqApproval.isDisplayed()===true)
    {

               reqApproval.click();
                browser.pause(2000); 
                 if(!Quotename.isDisplayed()==true|| cusNameReq.isDisplayed()===true){
                referenceNo.scrollIntoView();
                referenceNo.setValue('9898989898');
                    sprCompanyName.setValue('mavas');
                      sprProjectName.setValue('qa');
                        CompetitorName.setValue('a');
                          browser.pause(2000);
                            CompetitorName.keys("\uE015");
                              browser.pause(2000);
                               CompetitorName.keys("\uE007");
                                 sprPriceJustify.setValue('Test');
                                   createQuote.click();
                                      yes.click();
                 }
            browser.pause(2000);
            QuoteComments.setValue("Quote comments");

            if(Quotename.getValue()==='')
            {
               Quotename.setValue("Sanity Quote2");
                }
            QuoteAccept.click();
            browser.pause(2000);
            browser.getUrl();
            expect(browser).toHaveUrlContaining("quote-landing");
            browser.pause(2000);
            browser.refresh();
            quoteId.click();
            browser.getUrl();
            expect(browser).toHaveUrlContaining('QuoteDetails');
            browser.pause(3000);
               if(approve.isExisting()===true ){
                approve.click();
               }
 
               else if(review.isExisting()===true){
                      review.click();
                      subReview.click();  
                        }
            browser.pause(3000);
            QuoteComments.setValue("approved");
            QuoteAccept.click();
            browser.pause(3000);
            respond.click();
            submitTo.click();
            yes.click();
            browser.pause(2000);
            Placeorder.click();
            browser.pause(2000);
            PO.click();
            yes.click();
            browser.getUrl();
            expect(browser).toHaveUrlContaining('order-landing');
    }
    else{
        createQuote.click(); 
        yes.click();
        browser.getUrl();
        expect(browser).toHaveUrlContaining("quote-landing");
        browser.refresh();
        browser.pause(1000);
        quoteId.click();
        browser.getUrl();
        expect(browser).toHaveUrlContaining('QuoteDetails');
        respond.click();
        browser.pause(2000);
        submitTo.click();
        yes.click();
        browser.pause(2000);
        Placeorder.click();
        browser.pause(2000);
        PO.click();
        yes.click();
        browser.getUrl();
        expect(browser).toHaveUrlContaining('order-landing'); 
    } 



       });

    it("Place the Order from the Cart", () => {


        let cart = $('//*[@aria-label="cart"]');
        let myCart=$('//div[contains(@class,"Paper-root jss")]');
        let product = $('//input[@placeholder="Search for products"]');
        let SearchResult = $('//div[@class="MuiPaper-root MuiPaper-elevation1"]/div/ul/div[1]');
        let CustomProduct = $('//div[@class="MuiBox-root jss164"]/button[1]');
        let uploadProducts = $('//*[text()="Upload Products"]');
        let MoreOptions=$('//*[text()="Upload Products"]/following::button[1]');
        let clearCart=$('//*[text()="Clear Cart"]');
        let Buyer = $('//input[@id="asynchronous-demo"]');
        let createOrder = $('#co');
        let ReqDate = $('//input[@id="customerRequiredDate"]');
        let currentDate = $('//button[@class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day MuiPickersDay-daySelected"]');
        let placeOrder = $('//span[text()="Place Order"]');
        let cancelOrder = $('#cancelSummary');
        let orderName = $('#name');
        let reqApproval = $('//*[@id="loadingButton"][2]');
        let Quotename = $('//*[@name="quoteName"]');
        let QuoteComments = $('//*[@name="initiatedComments"]');
        let QuoteAccept = $('//*[@id="editDialogButton"]');
        let QuoteCancel = $('//*[@id="editDialogCancel"]');
        let Accept = $('#editDialogButton');
        let Cancel = $('//*[@id="editDialogCancel"]/span[text()="Cancel"]');
        let yes=$('#yes');
        let CheckoutQuote=$('//span[text()="Checkout to quote"]');

        
       browser.pause(1000);
       cart.click();
       browser.pause(2000);
        if(myCart.isExisting()===true){

            MoreOptions.click();
            clearCart.click();
            yes.click();
        }
           
            browser.pause(2000);
        product.setValue('Apple');
        browser.pause(1000);
        SearchResult.click();
        browser.pause(5000);
        Buyer.setValue('Enterprise');
        browser.pause(2000); 
        Buyer.keys("\uE015");
        browser.pause(1000);
        Buyer.keys("\uE007");
        browser.pause(1000);
        createOrder.click();
        browser.pause(1000);
        browser.getUrl();
        expect(browser).toHaveUrlContaining("order-summary");
        browser.pause(2000);
        

        if(CheckoutQuote.isDisplayed()===true)
        {
            yes.click();
            browser.getUrl();
        expect(browser).toHaveUrlContaining('quote-summary');
        reqApproval.click();
        ReqDate.scrollIntoView();
        ReqDate.click();
        currentDate.click();
        reqApproval.click();
        Quotename.setValue("Sanity Quote2");
        QuoteComments.setValue("Quote comments");
        QuoteAccept.click();


        }else{
        ReqDate.scrollIntoView();
        ReqDate.click();
        currentDate.click();
        placeOrder.click();
        browser.pause(2000);
        orderName.setValue("Sanity Order");
        Accept.click();
        browser.pause(2000);
        }

    });


    it("Order to invoice ", () => {

        let OrderAck=$('//*[text()="ORDER ACKNOWLEDGED"]/preceding::td[2]');
        let OrderReceived=$('//*[text()="ORDER RECEIVED"]/preceding::td[2]');
        let OrderAccept=$('//*[text()="Accept Order"]');
        let submit=$('#editDialogButton');
        let OrderBooked=$('//*[text()="Book Order"]');
        let erpId=$('#erpId');
        let CreateInvoice=$('//*[text()="Create Invoice"]');
        let CI=$('//*[@title="Close"]/preceding::button[@id="loadingButton"]');
        let erpInvoice=$('//*[@name="invoiceDetails.invoiceRequest[0].extInvoiceNumber"]');
        let yes=$('#yes');
       


        browser.url('/orders/order-landing');
        if(OrderAck.isDisplayed===true){
            OrderAck.click();
        } else 
        {
         OrderReceived.click();

        }

        browser.pause(1000);
        OrderAccept.click();
        browser.pause(1000);
        submit.click();
        browser.pause(1000);
        OrderBooked.click();
        browser.pause(1000);
        erpId.setValue('sanity');
        browser.pause(1000);
        submit.click();
        browser.pause(1000);
        CreateInvoice.click();
        browser.pause(1000);
        CI.click();
        browser.pause(5000);
        erpInvoice.scrollIntoView();
        erpInvoice.setValue('ST0007');
        browser.pause(5000);

        CI.click();
        browser.pause(2000);
        yes.click();
        browser.getUrl();
        expect(browser).toHaveUrlContaining("InvoiceLanding");


    });

     it("Invoice to Shipment ", () => {

        let invoiceStatus=$('//*[text()="INVOICED"]/preceding::td[3]');
        let CreateShipment=$('//*[text()="Create Shipment"]');
        let shipmentCompany=$('//*[@name="shipmentCompany"]');
        let referenceNum=$('//*[@name="referenceNum"]');
        let shipmentNum=$('//*[@name="shipmentNum"]');
        let shipmentNumReq=$('//p[text()="AWB / Shipment number is required"]');
        let trackingUrl=$('//*[@name="trackingUrl"]');
        let deliveryType=$('//*[@name="deliveryType"]');
        let calendar=$('//*[@name="deliveryDate"]');
        let deliveryDate=$('//button[contains(@class,"daySelected")]/following::div[1]');
        let deliveryDateReq=$('//p[text()="Shipment date is required"]');
        let Submit=$('#editDialogButton');
        let Cancel=$('#editDialogCancel');
        let shipped=$('//p[text()="SHIPPED"]');
        let addPayment=$('//*[text()="Add Payment"]');
        let paymentWindow=$('//div[@class="MuiPaper-root MuiDialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthMd MuiDialog-paperFullWidth MuiPaper-elevation24 MuiPaper-rounded"]')
        let invoiceRadio=$('//*[@name="invoiceRadio"]');
        let orderAdvance=$('//*[@name="orderAdvanceRadio"]');
        let cashPayment=$('//*[@name="CashRadio"]');
        let payeeName=$('//*[@name="paymentData.payeeName"]');
        let recvAmunt=$('//*[@name="paymentData.amountReceived"]');
        let paymentRefnum=$('//*[@name="paymentData.refernceNumber"]');
        let paymentCalendar=$('//*[@name="paymentData.paymentDate"]');
        let paymentDate=$('//button[@class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day MuiPickersDay-current MuiPickersDay-daySelected"]/preceding::div[5]/button[1]');
        let adjustmentAmount=$('//*[@name="paymentData.paymentAdjustments[0].adjustmentAmount"]');
        let netPayableAmount=$('//*[text()="Net Payable"]/following::div[9]/p[1]');



        browser.url('/invoice/InvoiceLanding');
        invoiceStatus.click();
         browser.pause(1000);
        CreateShipment.click();
        browser.pause(3000);
        shipmentCompany.setValue('professional couriers');
        browser.pause(1000);
        referenceNum.setValue('pro2021sanity');
        browser.pause(1000);
        trackingUrl.setValue('https://www.aftership.com/couriers/professional-couriers');
        browser.pause(1000);
        deliveryType.setValue('road');
        shipmentNum.setValue('pro1235');
        browser.pause(1000);
        calendar.click();
        browser.pause(1000);
        deliveryDate.click();
        browser.pause(1000);
        Submit.click();
        expect(shipped).toBePresent();
        browser.refresh();


       /* addPayment.click();
        paymentWindow.waitForDisplayed(20000);
        expect(paymentWindow).toBeDisplayed();

        cashPayment.click();
        browser.pause(10000);
        payeeName.setValue('ronaldo');
        browser.pause(1000);
        recvAmunt.setValue('500');
        browser.pause(1000);
        paymentRefnum.setValue('icic20021');
        browser.pause(1000);
         paymentCalendar.click();
         browser.pause(1000);
         paymentDate.click();
         browser.pause(1000);
         adjustmentAmount.setValue('500');
         browser.pause(1000);
         submit.click();*/



     });

     

   it("Create and Support" ,()=>{

    let CreateTicket=$('//span[text()="Create Ticket"]');
    let Subject=$('//input[@name="title"]');
    let editTicket=$('//span[text()="Edit Ticket"]');
    let customer=$('#asynchronous-demo');
    let customerBranch=$('#ticketOwner');
    let customerCntPrsn=$('//input[@name="buyerContactPerson"]');
    let customerEmail=$('#buyerEmail');
    let customerCntNo=$('#buyerContactNumber');
    let PriorityHigh=$('#High');
    let PriorityMedium=$('#Medium');
    let PriorityLow=$('#Low');
    let severity=$('#severity');
    let Date=$('#dueDateTime');
    let currentdate=$('//*[contains(@class,"daySelected")]');
    let nextDate=$('//*[contains(@class,"daySelected")]//following::div[1]');
    let ok=$('//span[text()="OK"]');
    let Reason=$('#reason');
    let ticketOwner=$('//*[@placeholder="Search Owner"]');
    let ticketSource=$('#ticketSource');
    let save=$('#editDialogButton');
    let snackbar = $('#client-snackbar');
    let ticketId=$('//*[contains(@title,"Sanity Ticket")]');
    let prodCategoery=$('#category');
    let prodDetails=$('#productSKUs');
    let prodSN=$('#sn');
    let refernceNo=$('#refNof');
    let ticketTags=$('#tags');
    let submit=$('#loadingButton');
    let reply=$('//span[text()="Reply"]');
    let t_fieldService=$('//span[text()="Field Service"]');
    let t_resolution=$('//span[text()="Resolution"]');
    let t_attachment=$('//span[text()="Attachments"]');
    let t_tasks=$('//span[text()="Tasks"]');
    let t_activityLog=$('//span[text()="Activity Log"]');
    let createFS=$('//span[text()="Create Field Service"]');
    let fromDate=$('#appointmentFromDateTime');
    let toDate=$('#appointmentToDateTime');
    let ticketStatus=$('#ticketStatus');
    let fsCate=$('//*[@name="category"]');
    let serviceOwner=$('#serviceOwner');
    let Location=$('#location');
    let dateAlert=$('//p[text()="To date is required"]');
    let addResolution=$('//span[text()="Add Resolution"]');
    let addComment=$('//*[@placeholder="Add a comment"]');
    let post=$('//span[text()="Post"]');
    let deleteAttchment=$('//*[contains(@aria-label,"delete")]');
    let addTask=$('//span[text()="Add task"]');
    let taskName=$('//*[@name="task.taskName"]');
    let boardName=$('//*[@name="task.project"]');
    let taskStatus=$('//*[@name="task.project"]/following::input[2]');
    let taskUser=$('//*[@placeholder="Search for Users"]');
    let taskDueDate=$('//*[@name="task.dueDate"]');
    let taskPriority=$('//*[@name="task.dueDate"]/following::input[1]');
    let linkTask=$('//*[@placeholder="Search for Tasks"]');
    let close=$('(//*[contains(@class,"edgeEnd")])[last()]');
    let test=$('//tr[1]/td[1]/p[1]');
    

  browser.url("/Service/ServiceLanding");
  browser.pause(1000);
    CreateTicket.click();
     browser.pause(1000);
      Subject.setValue("Sanity Ticket");
       browser.keys(["\uE009", "a"]);
        browser.pause(1000);
          browser.keys(["\uE009", "c"]);
        browser.pause(2000);
         browser.keys("\uE004");
          browser.pause(1000);
            browser.keys(["\uE009", "v"]);   
     customer.setValue("arasan ");
      browser.pause(1000);
       customer.keys("\uE015");
        browser.pause(1000);
         customer.keys("\uE007");
          browser.pause(1000);
           customerBranch.setValue("a");
             customerBranch.keys("\uE015");
               browser.pause(1000);
                customerBranch.keys("\uE007");
                 browser.pause(1000);
                 customerCntPrsn.setValue("QA");
                 customerEmail.setValue("Test@apptino.com");           
 customerCntNo.setValue("909090909");
  browser.pause(1000);
   PriorityMedium.click();
 severity.setValue("low");
    severity.keys("\uE015");
         browser.pause(1000);
          severity.keys("\uE007");
             browser.pause(1000);
   Date.click(); 
    currentdate.click();
      browser.pause(1000);
       ok.click();
        Reason.scrollIntoView();
         Reason.setValue("Aud");
            Reason.keys("\uE015");
              browser.pause(1000);
                Reason.keys("\uE007");
                  browser.pause(1000);
   ticketOwner.setValue("madhan");
     ticketOwner.keys("\uE015");
       browser.pause(1000);
        ticketOwner.keys("\uE007");
         browser.pause(1000);
           ticketSource.setValue("EMAIL");
             ticketSource.keys("\uE015");
               browser.pause(1000);
                ticketSource.keys("\uE007");
                  browser.pause(1000);
                  let attachment = $('#button-file');
                  browser.execute(
          
                            (el) => el.style.display = 'block',
                          
                            attachment
                        );
                        attachment.waitForDisplayed();
                        attachment.setValue(imageUpload);
                   browser.pause(4000);
                   save.click();
assert.strictEqual(snackbar.getText(),"Support ticket created successfully");
                   browser.getUrl();
expect(browser).toHaveUrlContaining("Service/ServiceLanding");
      ticketId.click();
       browser.getUrl();
expect(browser).toHaveUrlContaining("Service/ServiceDetails");
        editTicket.click();
         if(Subject.getValue()==="Sanity Ticket"){
            Subject.click();
            browser.keys(["\uE009", "a"]);
            Subject.keys('\uE003');
            Subject.setValue('Ticket Sanity');
         }
         save.click();
assert.strictEqual(snackbar.getText(),"Updated successfully");
 prodCategoery.setValue('a');
  prodCategoery.keys("\uE015");
   prodCategoery.keys("\uE007");
    browser.pause(1000);
     prodDetails.setValue('ucp 207');
      prodSN.setValue('123');
       refernceNo.setValue('mum12/20-21/0007');
        browser.keys(["\uE009", "a"]);
         browser.pause(1000);
           browser.keys(["\uE009", "c"]);
         ticketTags.setValue('a');
          ticketTags.keys("\uE015");
            ticketTags.keys("\uE007");
               browser.pause(1000);
                if(submit.isDisplayed())
                {
                  submit.click();
                }
assert.strictEqual(snackbar.getText(),"Updated successfully");
reply.click();
 browser.keys("\uE004");
   browser.pause(1000);
    browser.keys(["\uE009", "v"]);
    browser.pause(1000);
       submit.click();
assert.strictEqual(snackbar.getText(),"Updated successfully");
  
   t_fieldService.click();
    browser.pause(1000);
      createFS.click();
       browser.pause(1000);
        Subject.setValue('sanity field service');
         browser.keys(["\uE009", "a"]);
         browser.pause(1000);
          browser.keys(["\uE009", "c"]);
           browser.pause(2000);
            browser.keys("\uE004");
             browser.pause(1000);
              browser.keys(["\uE009", "v"]);
               fromDate.click();
                currentdate.click();
                 ok.click();
                   fsCate.setValue('a');
                      fsCate.keys("\uE015");
                       fsCate.keys("\uE007");
                        browser.pause(1000);
                          serviceOwner.setValue('a');
                           browser.pause(1000);
                            serviceOwner.keys("\uE015");
                             browser.pause(1000);
                              serviceOwner.keys("\uE007");
                                Location.setValue('coimbatore');
                               browser.keys("\uE004");
                                browser.pause(1000);
                                 browser.keys(["\uE009", "v"]);
                                   submit.click();
                                   if(dateAlert.isDisplayed())
                                   { toDate.click();
                                    nextDate.click();
                                     ok.click();
                                     submit.click();
                                     }

assert.strictEqual(snackbar.getText(),"Field service created successfully");                                 
t_resolution.click();
 addResolution.click();
  browser.keys("\uE004");
   browser.pause(1000);
    browser.keys(["\uE009", "v"]);
      addResolution.click();
     t_attachment.click();
       deleteAttchment.click();
        submit.click();
        let attachment1 = $('#button-file');
        browser.execute(
          
          (el) => el.style.display = 'block',
        
          attachment1
      );
      attachment1.waitForDisplayed();
      attachment1.setValue(imageUpload);
 browser.pause(4000);
 submit.click();

 t_tasks.click();
   addTask.click();
     taskName.setValue("Sanity Tasks");
      browser.keys(["\uE009","a"]);
      browser.pause(1000);
       browser.keys(["\uE009","c"]);
        browser.pause(2000);
         browser.keys("\uE004");
          browser.pause(1000);
           browser.keys(["\uE009","v"]);
            boardName.setValue('support');
            browser.pause(5000);
             boardName.keys("\uE015");
             browser.pause(1000);
              browser.keys("\uE007");
              taskStatus.setValue('open');
                browser.pause(2000);
                taskStatus.keys("\uE015");
                   browser.pause(1000);
                   taskStatus.keys("\uE007");
                   if(taskUser.getValue()===''){
                 taskUser.setValue('Madhan');
                 browser.pause(2000);
                   taskUser.keys("\uE015");}
                    browser.pause(2000);
                    browser.keys("\uE007");
                    taskName.click();
                       taskDueDate.click();
                        currentdate.click();
                          taskPriority.setValue('low');
                            taskPriority.keys("\uE015");
                             browser.pause(1000);
                              taskPriority.keys("\uE007");
                                
                                    submit.click();
assert.strictEqual(snackbar.getText(),"Changes saved successfully");  
               close.click();
                                                

   }); 

it("Create and Delete Board" ,()=>{
  let AddBoard=$('//*[text()="Add Board"]');
  let BoardName=$('//input[@name="projectName"]');
  let Modules=$('//input[@name="moduleElementId"]');
  let save =$('#editDialogButton');
  let newBoard=$('//div[starts-with(@class,"MuiPaper-root MuiBox-root")]/following::h4[text()="Automation"]');
  let deleteBoard=$('//span[text()="Delete Board"]');
  let yes =$('#yes');
  let snackbar = $('#client-snackbar');

browser.url("/boards");
browser.pause(1000);
  AddBoard.click();
    browser.pause(2000);

BoardName.setValue("Automation");
Modules.setValue("Quotes");
Modules.keys("\uE015");
 browser.pause(2000);
  Modules.keys("\uE007");
    browser.pause(2000);
     save.click();
      browser.pause(5000);
assert.strictEqual(snackbar.getText(),"Board saved");

/*delete board*/
newBoard.scrollIntoView();
browser.pause(2000);
newBoard.click();
 browser.pause(2000);
   deleteBoard.click();
    yes.click();
     browser.pause(2000);
       browser.getUrl();
expect(browser).toHaveUrlContaining('boards');
});

it("Integartion page", () => {

  let directBank=$('//div[text()="Direct Bank"]');
  let paymentGateway=$('//div[text()="Payment Gateway"]');
  let accName=$('#accountName');
  let accNo=$('#accountNumber');
  let bankName=$('#bankName');
  let bankLocation=$('#bankLocation');
  let bankCode=$('//input[contains(@name,"bankCode")]');
  let bankIBAN=$('//input[contains(@name,"iban")]');
  let save=$('#loadingButton');
  let razorPay=$('//*[text()="RAZOR PAY"]');
  let enableRazorpay=$('#enabled_0');
  let apiKey=$('//*[@id="enabled_0"]/following::input[1]');
  let scretKey=$('//*[@id="enabled_0"]/following::input[2]');
  let alert=$('//p[contains(text(),"Required")]');
  let snackbar=$('#client-snackbar');

  browser.url('/settings/integration_settings');

  if(accName.getValue()===''){    
    accName.setValue(' Software Pvt ltd');
         }
     if(accNo.getValue()===''){
         accNo.setValue('89898766554787')
          }
           bankName.click();
            browser.keys(["\uE009", "a"]);
             bankName.keys("\uE003");
               browser.pause(2000);
                 bankName.setValue("CANRA Bank");
                   if(bankLocation.getValue===''){
                     bankLocation.setValue('Chennai');
                      }
                       bankCode.click();
                        browser.keys(["\uE009", "a"]);
                         bankCode.keys("\uE003");
                          browser.pause(2000);
                           bankCode.setValue('CB0098765021' );
                             bankIBAN.setValue('AA');
                             bankIBAN.keys("\uE003");
                              save.click();
assert.strictEqual(snackbar.getText(),"Changes saved successfully");                   
     paymentGateway.click();
      razorPay.click();
       if(enableRazorpay.getValue()==='0'){
           enableRazorpay.click();
            if(apiKey.getValue()!=='' && scretKey.getValue()!==''){
            apiKey.click();
             browser.keys(["\uE009", "a"]);
              apiKey.keys("\uE003");
               browser.pause(2000);
                scretKey.click();
                 browser.keys(["\uE009", "a"]);
                 scretKey.keys("\uE003");
                 browser.pause(2000);}
                  save.click();
                  browser.pause(2000);
                  if(alert.isDisplayed())
                  {
                   apiKey.setValue("rzp_test_cQQn4U1VqgLut1");
                   browser.pause(2000);
                   scretKey.setValue("PfClrm0tEgE7hPTpzHhYXl0Q");
                    }}
                    else if(enableRazorpay.getValue()==='1') {
                        enableRazorpay.click();
                    }
                    save.click();
                    browser.pause(2000);
assert.strictEqual(snackbar.getText(),"Changes saved successfully");
});


it("Shipping Page", ()=> {

  let createShipping=$('//span[text()="Create Shipping"]');
  let firstTerm=$('(//*[@id="active"])[last()]');
  let detailsTab=$('//span[text()="Shipping Details"]');
  let rateTab=$('//span[text()="Shipping Rates"]');
  let regionTab=$('//span[text()="Shipping Region"]');
  let categeroyTab=$('#wrapped-tab-3');
  let shippingName=$('(//input[contains(@name,"shippingName")])[last()]');
  let checklistName=$('(//input[contains(@name,"shortDescription")])[last()]');
  let shippingDesc=$('(//textarea[contains(@name,"description")])[last()]');
  let enableShipping=$('//textarea[contains(@name,"description")]/following::input[1]');
  let subTotal=$('//span[text()="Subtotal"]');
  let weight=$('//span[text()="Weight"]');
  let addRow=$('(//button[@title="Add new rates"])[last()]');
  let deleteRow=$('(//button[@aria-label="Delete Row"])[last()]');
  let startRange=$('//input[contains(@name,"startRange")][last()]');
  let endRange=$('//input[contains(@name,"endRange")][last()]');   
  let rateperOrder=$('//input[contains(@name,"rates")][last()]');
  let shippFrom=$('//input[@name="warehouse"]');
  let Drpdwn=$('//button[@title="Open"]');
  let shippTo=$('(//*[@title="Assign Variant Filter"])[last()]');
  let globalShip=$('//span[text()="Global shipping"]/following::input[1]');
  let subCategories=$('//input[@name="subCategoryId"]');
  let forAllcategoeries=$('//*[@id="logo"]');
  let save=$('#loadingButton');
  let cancel=$('//span[text()="Cancel"]');
  let moreOptions=$('//span[text()="Create Shipping"]/following::button[1]');
  let deleteShippig=$('//span[text()="Delete"]');
  let yes=$('#yes');
  let snackbar=$('#client-snackbar');

  browser.url('/settings/shipping');
   browser.pause(2000);
    createShipping.click();
    browser.pause(2000);
    shippingName.click();
     browser.keys(["\uE009", "a"]);
        shippingName.keys('\uE003');
           browser.pause(2000);
     shippingName.setValue('sanity2');
       checklistName.setValue('QA');
         shippingDesc.setValue('Shipping Automation');
           enableShipping.click();
            browser.pause(2000);
             save.click();

              regionTab.click();
               Drpdwn.click();
               browser.pause(2000);
                shippFrom.setValue('a');
                 shippFrom.keys("\uE013");
                   browser.pause(2000);
                    shippFrom.keys("\uE007");
                      browser.pause(2000);
                       shippTo.click();
                          globalShip.click(); 
                              categeroyTab.click();
                               subCategories.setValue('A');
                                browser.pause(2000);
                                subCategories.keys("\uE013");
                                  browser.pause(2000);
                                 subCategories.keys("\uE007");
                                   categeroyTab.click();
                                     save.click();
                                        browser.pause(2000);
assert.strictEqual(snackbar.getText(),"Changes saved successfully");
browser.pause(1000);
 moreOptions.click();
 moreOptions.scrollIntoView();
 browser.pause(1000);
 if(deleteShippig.isDisplayed()){
  deleteShippig.click();
  yes.click();
 }
 else{
 yes.click();
 }
 browser.pause(5000);
assert.strictEqual(snackbar.getText(),"Shipping deleted successfully");
   
               
});

it("Create and Delete Competitors" ,()=>{

let Competitors =$('(//input[contains(@id,"MSETT_PT_CD")])[last()]');
let addNew=$('#MSETT_PT_CFBA');
let deleteComp=$('(//*[contains(@id,"MSETT_PT_CDEL_")])[last()]');
let save=$('//h5[text()="Options"]/preceding::button[1]');
let cancel=$('//span[text()="Cancel"]');
let snackbar = $('#client-snackbar');

   browser.url("/settings/competitors");
    addNew.click();
     Competitors.setValue('Sanity');
       browser.pause(1000);
      save.click();
assert.strictEqual(snackbar.getText(),"Changes saved successfully");

    /*  Competitors.click();
       browser.keys(["\uE009", "a"]);
         browser.pause(1000);
          Competitors.keys('\uE003');
           browser.pause(1000);
            Competitors.setValue('QA');
             browser.pause(5000);
              save.click();
assert.strictEqual(snackbar.getText(),"Changes saved successfully");*/
         browser.refresh();
         addNew.click();
         browser.pause(2000);
          Competitors.setValue('Sanity');
          browser.pause(1000);
           save.click();
           assert.strictEqual(snackbar.getText(),"Sanity competitor already exist");
            browser.refresh();
           deleteComp.click();
         browser.pause(1000);
         save.click();
assert.strictEqual(snackbar.getText(),"Changes saved successfully");
          
});

it("Create and Delete BusinessUnits" ,()=>{

  let businessUnit =$('//*[@id="MSETT_PT_CFBA"]/preceding::input[2]');
  let addNew=$('#MSETT_PT_CFBA');
  let deleteBU=$('(//*[contains(@id,"MSETT_PT_CDEL_")])[last()]');
  let priorityBU=$('//*[@id="MSETT_PT_CFBA"]/preceding::input[1]');
  let requiredMsg=$('(//*[contains(@id,"-helper-text")])[last()]');
  let save=$('//h5[text()="Options"]/preceding::button[1]');
  let cancel=$('//span[text()="Cancel"]');
  let snackbar = $('#client-snackbar');
  
     browser.url("settings/businessunit");
      addNew.click();
      browser.pause(1000);
      businessUnit.setValue('Sanity');
         browser.pause(1000);
          save.click();
          browser.pause(2000);
          if(requiredMsg.isDisplayed){
            browser.pause(1000);
            priorityBU.setValue('10');
            browser.pause(1000);
            save.click();            
          }
  assert.strictEqual(snackbar.getText(),"Changes saved successfully");
  
      
           browser.refresh();
           addNew.click();
           browser.pause(2000);
           businessUnit.setValue('Sanity');
            browser.pause(1000);
             save.click();
             assert.strictEqual(snackbar.getText(),"Sanity already exists");
              browser.refresh();
             deleteBU.click();
           browser.pause(1000);
           save.click();
  assert.strictEqual(snackbar.getText(),"Changes saved successfully");
            
  });

it("API Settings Page", () =>{
  
         
         let viewApi = $('//*[@aria-label="toggle password visibility"]');
         let copyApi = $('#copy');
         let regenarateApi= $('#regenerate');
         let snackbar = $('#client-snackbar');
         let yes =$('#yes');

         browser.url("settings/api_key");
         browser.pause(1000);
         viewApi.click();
         copyApi.click();
         assert.strictEqual(snackbar.getText(),"Copied");
         regenarateApi.click();
         yes.click();
         browser.pause(3000);
         assert.strictEqual(snackbar.getText(),"API Key regenerated successfully");

})



it("Signout page", () => {

      let icon = $('//*[@aria-label="userMenu"]');
      let Signout = $('//*[text()="Sign Out"]');
      
  browser.url('/');
   icon.click();
     browser.pause(2000);
       Signout.click();
        browser.pause(2000);
         browser.getUrl();
expect(browser).toHaveUrlContaining('');
  });

  it("Register Page", () => {

          let contactName = $('[name="displayName"]');
          let userEmail = $('[name="userEmail"]');
          let mailExsist=$('//p[text()="Email already exists"]');
          let invaildMail=$('//p[text()="Invalid email"]');
          let mailReq=$('//p[text()="Email required"]');
          let userGst = $('[name="regAddress.gst"]');
          let companyName = $('#autocomplete');
          let register = $('//button[@id="loadingButton"]');
          let sucess= $('//h6[text()=" Successfully Registered"]');
          let localityAlert=$('//p[text()="Locality is required"]');
          let Address=$('//*[@name="regAddress.addressLine"]');
          let locality=$('//*[@name="regAddress.locality"]');
          let city=$('//input[@name="regAddress.city"]');
          let State=$('//input[@name="regAddress.state"]');
          let pin=$('//input[@name="regAddress.pinCodeId"]');
          let country=$('//input[@name="regAddress.country"]');

  browser.url('/auth/register');
   browser.pause(5000);
    contactName.setValue("MK");
     userEmail.setValue("varun@gmail.com");
       userGst.setValue("33AABCU9603R1ZM");
        companyName.setValue("ARC Parcel Service Pvt Ltd");
          browser.pause(1000);
            companyName.keys("\uE015");
              browser.pause(2000);
                companyName.keys("\uE007");
                  browser.pause(2000);
   if(mailExsist.isDisplayed()|| invaildMail.isDisplayed())
          {   
           userEmail.doubleClick();
             userEmail.click();
              browser.keys(["\uE009", "a"]);
               userEmail.keys("\uE003");
                browser.pause(2000);
                userEmail.setValue("muruganan@gmail.com");
          }
    if(localityAlert.isDisplayed()){
       locality.setValue('coimbatore');
    }
      

  register.scrollIntoView();
    register.click();
     browser.pause(2000);
expect(sucess).toBeDisplayed();
   });

    });