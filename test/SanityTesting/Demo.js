const assert = require("assert");
const { time, exception } = require("console");
const { isYesterday } = require("date-fns");
const { taggedTemplateExpression } = require("jscodeshift");
const { format } = require("path");
let today =  new Date().toISOString().replace(/\/|-|:|/g,'');


describe("Sanity test check", () => {

    it("login page", () => {
        browser.url('/auth/login');
        browser.pause(3000);
        browser.getCookies();
        browser.deleteCookies();
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
        

        let cart = $('//img[@alt="userIcon"]//preceding::button[1]');
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
        attachment.setValue("C:/Users/Madhan/Downloads/order.PNG");

        browser.pause(5000);
        createLead.click();
        browser.pause(2000);
       assert.strictEqual(snackbar.getText(),"Lead created successfully");

      

    });


    it("Add to cart upload products and create lead", () => {
        browser.url("/");
      

        let cart = $('//img[@alt="userIcon"]//preceding::button[1]');
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
        uploadFile.setValue("C:/Users/Madhan/Downloads/sample-cart.1fd3e1a4 (4).xlsx");
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
        attachment.setValue("C:/Users/Madhan/Downloads/order.PNG");
        browser.pause(2000);
        createLead.click();
        browser.pause(2000);

        assert.strictEqual(snackbar.getText(),"Lead created successfully");
        


    });




    it("Create a Quote and saved as draft", () => {
       

        let cart = $('//img[@alt="userIcon"]//preceding::button[1]');
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
            browser.pause(2000);
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


        let cart = $('//img[@alt="userIcon"]//preceding::button[1]');
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

    it("Create and delete the Brand", () => {
        
        let AddBrand = $('//span[text()="Delete"]/following::button[1]');
        let Brandname = $('//span[text()="Cancel"]/preceding::input[1]');
        let Submit = $('//*[@id="editDialogButton"]');
        let Cancel = $('#editDialogCancel');
        let save = $('#loadingButton');
        let DeleteBrand = $('//span[text()="Delete"]');
        let Yes = $('#yes');
        let snackbar = $('#client-snackbar');
        let nameExsists = $('//p[text()="brand Name already exists "]');

        browser.url("/brands");
        browser.pause(1000);
        AddBrand.click();
        browser.pause(1000);
        Brandname.setValue("Nokia");
        browser.pause(1000);
        Submit.click();
        if (nameExsists.isDisplayed()) {
            Brandname.click();
            browser.pause(1000);
            browser.keys(["\uE009", "a"]);
            Brandname.keys("\uE003");
            browser.pause(1000);
            Brandname.setValue('Sanity');
            Submit.click();
        }
        browser.pause(2000);
        assert.strictEqual(snackbar.getText(),"Brand added");


        let brandImage = $('//h6[text()="Brands Image"]/following::input[1]');
        browser.execute(
            (el) => el.style.display = 'block',
            brandImage);
        brandImage.waitForDisplayed();
        brandImage.setValue("C:/Users/Madhan/Downloads/wps_download/profilepic.png");
        browser.pause(2000);
        save.click();

        DeleteBrand.click();
        browser.pause(2000);
        Yes.click();
        browser.pause(2000);
        assert.strictEqual(snackbar.getText(),"Brand deleted successfully");


    })


    it("Create and delete the Category", ()=>{
       
      let AddCategoery=$('//span[text()="Add Category"]');
      let catName = $('//span[text()="Cancel"]/preceding::input[1]');
      let submit = $('//*[@id="editDialogButton"]');
      let save=$('#loadingButton');
      let Cancel =$('#editDialogCancel');
      let DeleteCategoery = $('//span[text()="Delete"]');
      let Yes = $('#yes');
      let snackbar = $('#client-snackbar');



    browser.url("/categories");
     browser.pause(2000);
      AddCategoery.click();
      browser.pause(2000);
        catName.setValue("bocsh");
          submit.click();
             browser.pause(2000);
assert.strictEqual(snackbar.getText(),"Category added Successfully");

    let catIcon=$('//h6[text()="Category Icon"]/following::input[1]');
      browser.execute(
        (el) => el.style.display = 'block',
          catIcon );
    catIcon.waitForDisplayed();
      catIcon.setValue("C:/Users/Madhan/Downloads/wps_download/profilepic.png");
        browser.pause(2000);

    let catImage=$('//h6[text()="Category Image"]/following::input[1]');
      browser.execute(
            (el) => el.style.display = 'block',
         catImage );
   catImage.waitForDisplayed()
     catImage.setValue("C:/Users/Madhan/Downloads/wps_download/profilepic.png");
      browser.pause(2000);
        save.click();
     DeleteCategoery.click();
      browser.pause(2000);
        Yes.click();
          browser.pause(2000);
assert.strictEqual(snackbar.getText(),"category deleted successfully");

    });

    it("Create and delete the product",()=>{
       
        let AddProdcut=$('#MPG_PPGL_CFBCPG');
        let save = $('//*[@id="editDialogButton"]');
        let Cancel =$('#editDialogCancel');
        let ProductName=$('//input[@name="name"]');
        let LeadTime=$('//input[@name="standardLeadTime"]');
        let Time=$('//input[@value="Days"]');
        let BrandName=$('//input[@id="brandsId"]');
        let Date =$('#date-picker-inline');
        let currentDate = $('//*[@class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day MuiPickersDay-current MuiPickersDay-daySelected"]');
        let CreateVarient=$('#MPG_PPGL_CFBCPG');
        let productID=$('//input[@name="brandProductId"]');
        let cloneProdID=$('//p[text()="Product ID required"]/preceding::input[1]');
        let productVarient=$('//*[@name="productShortDescription"]');
        let primaryCategory=$('//*[@id="productSubCategories.primarySubcategoryName"]');
        let HSN=$('//input[@name="hsnCode"]');
        let unitPrice=$('//input[@name="unitListPrice"]');
        let UnitQty=$('//input[@name="unitQuantity"]');
        let PackQty=$('//input[@name="packagingQty"]');
        let UOM=$('//input[@name="unitOfMeasure"]');
        let MoreOptions=$('//button[@Title="More options"]');
        let DeleteProdvarient=$('//*[text()="Delete"]');
        let DeleteProd=$('//*[text()="Delete"]');
        let yes=$('#yes');
        let snackbar=$('#client-snackbar');
        let publish=$('//span[text()="Publish"]');
        let clone=$('//span[text()="Clone"]');
        let catalogID=$('//*[@name="extendedProductID"]');
        let subCategoery=$('//*[@placeholder="Search for Categories"]');
        let MSRP=$('//input[@name="unitMrp"]');
        let prodCost=$('//input[@name="productCost"]');
        let costValidty=$('//input[@name="costValidity"]');
        let vaildDate=$('//button[contains(@class,"daySelected")]/following::div[1]');
        let MOQ=$('//input[@name="outerPackQty"]/preceding::input[1]');
        let outerPack=$('//input[@name="outerPackQty"]');
        let isNew=$('//input[@name="isNew"]');
        let priceTocus=$('//input[@name="isDiscontinued"]');
        let movingProd=$('//input[@name="isBrandStock"]');
        let DisconProd=$('//input[@name="isDiscontinued"]');
        let disTocustmers=$('//input[@name="isListpricePublic"]');
        let internalProd=$('//input[@name="internal"]');
        let saveProd=$('#loadingButton');
        let lastProd=$('//h4[text()="Product Variants"]/following::div[contains(@class," MuiPaper-elevation1 MuiPaper-rounded")][last()]');
        let asset=$('//*[@id="Assets"]');
        let primeImage=$('(//*[@title="Make Primary Image"])[last()]');
        let freqBought=$('//*[@id="Frequently Bought Together"]');
        let frqBoughtVarient=$('//*[@placeholder="Search for Product Variant"]');
        let longDesc=$('//*[@id="Long Description & Keywords"]');
        let addKeywords=$('//*[@id="Long Description & Keywords"]/following::input[1]');
        let varientAccess=$('//*[@id="Variant Accessories"]');
        let addprodVarient=$('//*[@placeholder="Search for Product Variant"]');
        let spec=$('#Specifications');
        let specDesc=$('//*[@id="Specifications"]/following::input[1]');
        let specValue=$('//*[@id="Specifications"]/following::input[2]');
        let addtionalInfo=$('//*[@id="Additional Information"]');
        let packingDimensions=$('//*[@name="packagingDimension"]');
        let netWeight=$('//*[@name="netWeight"]');
        let eanUpc=$('//*[@name="ean"]');
        let orginCountry=$('//*[@name="ean"]/following::input[1]');
        let prodExsists=$('//p[text()="Product ID (SKU) already exists"]');
        let uploadProd=$('//*[text()="Upload Products"]');
        let groupAssign=$('//span[text()="Assign"]');
        let category=$('//span[text()="Assign"]/preceding::input[1]');
        let uploadSave=$('//span[text()="Save"]');
        let optionsMore=$('//span[text()="Create product variant"]/following::button[1]');

            


      /*create product*/
    browser.url("/create-products/productgroup-landing");
     browser.pause(1000);
      AddProdcut.click();
       browser.pause(1000);
        ProductName.setValue("1100");
         LeadTime.setValue("10");
           browser.pause(1000);
            Time.click();
             browser.pause(1000);
              browser.keys(["\uE009", "a"]);
               Time.keys("\uE003");
                browser.pause(1000);
                 Time.setValue("Days");
                   Time.keys("\uE015");
                     Time.keys("\uE007");
                       browser.pause(1000);
                        BrandName.setValue("HP");
                          browser.pause(1000);
                           BrandName.keys("\uE015");
                             browser.pause(1000);
                               BrandName.keys("\uE007");
                                 browser.pause(1000);
                                  Date.click();
                                   currentDate.click();
                                      save.click();
                                        browser.pause(2000);
assert.strictEqual(snackbar.getText(),'Product group created');

/* upload product */
 MoreOptions.click();
  browser.pause(1000);
   uploadProd.click();
    
   let uploadFile = $('#upload-excel-file');
      browser.execute(
           
           (el) => el.style.display = 'block',
           uploadFile
       );
       uploadFile.waitForDisplayed();
       uploadFile.setValue("C:/Users/Madhan/Downloads/productUpload.xlsx");

       category.setValue("Apple watch");
       browser.pause(1000);
         category.keys("\uE015");
           browser.pause(1000);
             category.keys("\uE007");
               groupAssign.click();
                // uploadSave.click();

      
                

        /*create product variant*/
    browser.refresh();
    CreateVarient.click();
      browser.pause(1000);
       productID.setValue("1100 black");
         productVarient.setValue("Nokia 1100");
          primaryCategory.setValue("Apple watch");
           browser.pause(1000);
             primaryCategory.keys("\uE015");
               browser.pause(1000);
                 primaryCategory.keys("\uE007");
                   HSN.setValue("7");
                    browser.pause(1000);
                      HSN.keys("\uE015");
                         browser.pause(1000);
                           HSN.keys("\uE007");
                             unitPrice.setValue("10000");
                                UnitQty.setValue("1");
                                  PackQty.setValue("1");
                                     UOM.setValue("NOS");
                                       save.click();
                                         if(prodExsists.isDisplayed()){
                                             productVarient.click();
                                              browser.keys(["\uE009", "a"]);
                                               productVarient.keys("\uE003");
                                                 browser.pause(2000);
                                                  productVarient.setValue("Nokia 11000 test");
                                                   save.click();
                                         }
                                         
                                        browser.pause(1000);
assert.strictEqual(snackbar.getText(),'Product created');
   
    catalogID.setValue('12345');
     subCategoery.setValue('mobile phones');
       subCategoery.keys("\uE015");
        browser.pause(1000);
         subCategoery.keys("\uE007");
           longDesc.click();
           browser.pause(1000);
            addKeywords.setValue('nokia');
              addKeywords.keys('\uE007');
                  asset.click();
                    let prodImg=$('//*[@id="button-file"]');
                        browser.execute(
                           (el) => el.style.display = 'block',
                             prodImg );
                          prodImg.waitForDisplayed();
                       prodImg.setValue("C:/Users/Madhan/Downloads/wps_download/profilepic.png");
                  prodImg.pause(2000);
              prodImg.waitForDisplayed();
           prodImg.setValue("C:/Users/Madhan/Downloads/wps_download/download.jpg");
       prodImg.pause(1000);
     primeImage.click();
  /* freqBought.click();
     frqBoughtVarient.setValue('redmi');
       frqBoughtVarient.keys('\uE015');
         browser.pause(1000);
          frqBoughtVarient.keys('\uE007');*/
    
          spec.click();
            browser.pause(1000);
             specDesc.setValue("nokia best mobile");
              specValue.setValue('2500');
              browser.pause(1000);
                addtionalInfo.click();
                browser.pause(1000);
               packingDimensions.setValue('10*10');
              netWeight.setValue('250g');
            eanUpc.setValue(1100);
          orginCountry.setValue('china'); 
    MSRP.setValue('1000');
    prodCost.setValue('800');
      costValidty.click();
        vaildDate.click();
          MOQ.waitForClickable(1000);
          MOQ.setValue('2');
           outerPack.setValue('1');
           browser.pause(1000);
             isNew.scrollIntoView();
               isNew.click();
                 if(priceTocus.getValue()===true){
                     priceTocus.click();
                      }
                      if(disTocustmers.getValue()===true){
                        disTocustmers.click();
                         }
                          internalProd.click();
                            movingProd.click();
                              DisconProd.click();
                                saveProd.click();
                                  browser.pause(1000);
/*assert.strictEqual(snackbar.getText(),'Product updated');*/
                                      browser.pause(1000);
                                     publish.click();
                                       yes.click();
                                        browser.pause(1000);                            
/*assert.strictEqual(snackbar.getText(),'Product group published');*/
                                       browser.pause(1000);  
                                          clone.click();
                                            productID.setValue('1100 red');
                                              save.click();
                                              if(cloneProdID.isDisplayed()){
                                                cloneProdID.setValue('1100 Red');
                                                 save.click();}
                                                  browser.pause(1000);
/*assert.strictEqual(snackbar.getText(),'Product created'); */  
    MoreOptions.click();
     browser.pause(2000);
       DeleteProdvarient.click();
         browser.pause(1000);
           yes.click();
        
 /*assert.strictEqual(snackbar.getText(),'Product deleted');*/

    optionsMore.click();
      browser.pause(2000);
       DeleteProd.click();
        browser.pause(1000);
         yes.click();
          browser.pause(1000);
/*assert.strictEqual(snackbar.getText(),'1 products linked to this Product Group, kindly delete those products first');*/
          lastProd.scrollIntoView();
           browser.pause(1000);
            lastProd.click();
             browser.pause(1000);
              MoreOptions.click();
               browser.pause(1000);
                 DeleteProdvarient.click();
                   browser.pause(1000);
                     yes.click();
                       browser.pause(1000);
/*assert.strictEqual(snackbar.getText(),'Product deleted');*/
                          optionsMore.click();
                             browser.pause(1000);
                               DeleteProd.click();
                                 browser.pause(1000);
                                   yes.click();
                                     browser.pause(1000);
                                       browser.getUrl();       
expect(browser).toHaveUrlContaining('productgroup-landing');
      });

    it("Create and delete the Pricelist", ()=>{
       
      let CreatePriceList=$('//span[text()="Create Price List"]');
      let PlName = $('//input[@name="priceListName"]');
      let PlDesc =$('//textarea[@name="description"]');
      let PlCurrency =$('//input[@name="currencyId"]');
      let isDefaultPL=$('//input[@name="isDefault"]');
      let isApprovalPL=$('//input[@name="isDefault"]/following::input[1]');
      let save = $('//*[@id="editDialogButton"]');
      let Cancel =$('#editDialogCancel');
      let SearchPL=$('//input[@placeholder="Search by price list name"]');
      let SelectPL=$('//tbody[@class="MuiTableBody-root"]/tr[1]/td[1]'); 
      let DeletePL = $('//span[text()="Delete Price list"]');
      let submit = $('#loadingButton');
      let snackbar = $('#client-snackbar');
      let companySearch=$('//*[@placeholder="Search Companies"]');
      let addCompany=$('//span[text()="Add Companies"]');
      let addProdcuts=$('//span[text()="Add Products"]');
      let prodBrand=$('//*[text()="Brands"]/following::div[1]/input[1]');
      let prodCate=$('//*[text()="Catgeory"]/following::div[1]/input[1]');
      let prodSubcat=$('//*[text()="Sub-Category"]/following::div[1]/input[1]');
      let prodGroup=$('//*[text()="Product Group"]/following::div[1]/input[1]');
      let prodName=$('//*[text()="Products"]/following::div[1]/input[1]');
      let prodDisc=$('//*[contains(text(),"Discounts")]/following::div[1]/input[1]');
      let ProdToList=$('//span[text()="Add Products To List"]');
      let saveProd=$('//span[text()="Save"]');
      let checkAll=$('//span[@title="Checkall"]');
      let applyDisc=$('//span[text()="Apply Discount"]');
      let deleteprod=$('//span[text()="Delete"]');
      let discount=$('//*[@name="discount"]');





    browser.url("pricelist/landing");
     browser.pause(2000);
      CreatePriceList.click();
        browser.pause(1000);
         PlName.setValue("Sanity Pricelist");
          PlDesc.setValue("Testing");
           PlCurrency.setValue("INR");
            browser.pause(1000);
              PlCurrency.keys("\uE015");
               browser.pause(1000);
                 PlCurrency.keys("\uE007");
                  browser.pause(1000);
                     isApprovalPL.click();
                        save.click();
                           browser.pause(2000);
assert.strictEqual(snackbar.getText(),"Pricelist Created");
    browser.refresh();
      SearchPL.setValue('Sanity');
        SelectPL.click();
        companySearch.setValue('a');
         browser.pause(1000);
          companySearch.keys("\uE015");
            browser.pause(1000);
              companySearch.keys("\uE007");
                browser.pause(1000);
                  companySearch.click();
                     addCompany.click();
                       submit.click();
                        browser.pause(2000);
assert.strictEqual(snackbar.getText(),"PriceList updated");
                  addProdcuts.click();
                    browser.pause(1000);
                     prodBrand.setValue('a');
                      browser.pause(1000);
                      prodBrand.keys("\uE015");
                       browser.pause(1000);
                        prodBrand.keys("\uE007");
                         browser.pause(1000);
                          prodCate.setValue('a');
                          browser.pause(1000);
                           prodCate.keys("\uE015");
                            browser.pause(1000);
                              prodCate.keys("\uE007");
                               browser.pause(1000);
                                prodSubcat.setValue('a');
                                browser.pause(1000);
                                 prodSubcat.keys("\uE015");
                                  browser.pause(1000);
                                   prodSubcat.keys("\uE007");
                                     browser.pause(1000);
                                      prodGroup.setValue('a');
                                      browser.pause(1000);
                                       prodGroup.keys("\uE015");
                                         browser.pause(1000);
                                          prodGroup.keys("\uE007");
                                            browser.pause(1000);
                                              prodName.setValue('a');
                                              browser.pause(1000);
                                               prodName.keys("\uE015");
                                                browser.pause(1000);
                                                  prodName.keys("\uE007");
                                                   browser.pause(1000);
                                                    prodDisc.setValue('10');
                                                      ProdToList.click();
                                                        saveProd.click();
                                                          browser.pause(2000);
                                                            checkAll.click();
                                                            applyDisc.click();
                                                           discount.setValue(10);
                                                          submit.click();
                                                        checkAll.scrollIntoView();
                                                      checkAll.click();
                                                    deleteprod.click();
                                                 submit.click();
                                             browser.pause(1000);                                                                                                                                                                                                                              
                                         DeletePL.click();
                                     browser.pause(1000);
                               submit.click();
                           browser.pause(1000);
                        browser.getUrl();
expect(browser).toHaveUrlContaining('pricelist/landing');
    });

    it("Create and delete the Inventory", ()=>{



    let AddInventory =$('//span[text()="Add New Inventory"]');
    let searchProduct=$('//input[@placeholder="Search for products"]');
    let SearchResult = $('//div[@class="MuiPaper-root MuiPaper-elevation1"]/div/ul/div[1]');
    let prodcutId=$('//input[@name="InventoryForm.productsId.brandProductId"]');
    let BrandName=$('//input[@name="InventoryForm.brandId.name"]');
    let shortDes=$('//input[@name="InventoryForm.productsId.productShortDescription"]');
    let ListPrice=$('//input[@name="InventoryForm.productsId.unitListPrice"]');
    let UniqueQty=$('//input[@name="InventoryForm.productsId.unitQuantity"]');
    let wareHouse=$('//input[@name="InventoryForm.wareHouse.branchName"]');
    let warehouseDrpdwn=$('//button[@title="Open"]');
    let stockQty=$('//input[@name="InventoryForm.stockQuantity"]');
    let safetyQty=$('//input[@name="InventoryForm.safetyStock"]');
    let availableQty=$('//input[@name="InventoryForm.availableQuantity"]');
    let avgCost=$('//input[@name="InventoryForm.averageCost"]');
    let cancel=$('//span[text()="Cancel"]');
    let save=$('#loadingButton');
    let snackbar = $('#client-snackbar');
    let search=$('//input[@placeholder="Search by Product ID"]');
    let MoreOptions=$('//button[@Title="More options"]');
    let Delete=$('//*[text()="Delete"]');
    let productResult=$('//div[@role="button"][1]');
    let maxValue=$('//p[contains(text(),"Maximum")]');




    browser.url("/inventory/landing");
     browser.pause(2000);
      AddInventory.click();
       browser.pause(1000);
    searchProduct.setValue("MQTX2HN/A");
      browser.pause(1000);
      SearchResult.click();
       safetyQty.scrollIntoView();
            if(!wareHouse.getValue()==='')
            {
              browser.keys(["\uE009", "a"]);
               wareHouse.keys('\uE003');
            }
        warehouseDrpdwn.click();
         wareHouse.setValue('a');
          browser.pause(1000);
            wareHouse.keys("\uE015");
             browser.pause(1000);
               wareHouse.keys("\uE007");
                browser.pause(1000);
                if(stockQty.getValue()===''){
                  stockQty.setValue('10');
                   browser.pause(1000);
                   }
                 if(safetyQty.getValue()===''){
                    safetyQty.setValue('1');
                        browser.pause(1000);
                   }
                    avgCost.setValue('01');
                           save.click();
                           if(maxValue.isDisplayed()){
                            browser.keys(["\uE009", "a"]);
                            avgCost.keys('\uE003');
                            avgCost.setValue(100);
                            save.click();
                           }
                            browser.pause(2000);
assert.strictEqual(snackbar.getText(),"Saved successfully");

    search.setValue('MQTX2HN/A');
      browser.pause(1000);
        productResult.click();
          browser.pause(1000);
           MoreOptions.click();
            browser.pause(1000);
              Delete.click();
               browser.pause(1000);
                save.click();
                  browser.pause(1000);
assert.strictEqual(snackbar.getText(),"Saved successfully");
    });

    it("upload and delete the inventory", ()=>{

    let upload =$('//*[text()="Upload"]');
    let save=$('#loadingButton');
    let filters=$('//*[text()="Filters"]');
    let productID=$('//*[@id="brand"]/following::input[1]');
    let Apply=$('//*[text()="Apply"]');
    let checkbox=$('//input[@type="checkbox"]')
    let MoreOptions=$('//button[@Title="More options"]');
    let Delete=$('//*[text()="Delete"]');
    let snackbar = $('#client-snackbar');
    let alertMsg=$('//*[text()="Warehouse name not exist"]');
    let wareHouse=$('//*[contains(@name,"warehouseId.branchName")]');
    let filterResults=$('(//*[contains(@class,"-deleteIconSmall")])[last()]');
    let filterClear=$('//span[text()="Clear All"]');


    browser.url("/inventory/landing");
     browser.pause(2000);
     if(filterResults.isExisting())
           {    browser.pause(2000);
                filterResults.click();
               }

      upload.click();
        let uploadFile = $('#upload-excel-file');
            browser.execute(
                
                (el) => el.style.display = 'block',
                
                uploadFile
            );
    uploadFile.waitForDisplayed();
      uploadFile.setValue("C:/Users/Madhan/Downloads/sample-inventory.xlsx");
        browser.pause(2000);
        if(alertMsg.isDisplayed()){
        wareHouse.click();   
          browser.pause(1000);
            browser.keys("\uE015");
             browser.pause(1000);
                browser.keys("\uE007")

        }
          save.click();
            browser.pause(1000);
assert.strictEqual(snackbar.getText(),"Saved successfully");

    browser.refresh();
    filters.click();
    browser.pause(1000);
    filterClear.click();
     browser.pause(1000);
      productID.setValue('Z0WX1HN/A');
       browser.pause(1000);
        Apply.click();
         browser.pause(1000);

      checkbox.click();
        browser.pause(1000);
          MoreOptions.click();
            browser.pause(1000);
             Delete.click();
              browser.pause(1000);
               save.click();
                browser.pause(1000);
assert.strictEqual(snackbar.getText(),"Changes saved successfully");
    });


     it("Create and delete the Buyer", ()=>{

      let createCustomer=$('//span[text()="Create Customer"]');
      let BuyerName=$('//input[@name="companyName"]');
      let BranchName=$('//input[@name="regAddress.branchName"]');
      let Address=$('//*[@name="regAddress.addressLine"]');
      let locality=$('//*[@name="regAddress.locality"]');
      let city=$('//input[@name="regAddress.city"]');
      let State=$('//input[@name="regAddress.state"]');
      let pin=$('//input[@name="regAddress.pinCodeId"]');
      let country=$('//input[@name="regAddress.country"]');
      let billing=$('//input[@name="regAddress.isBilling"]');
      let Shipping=$('//input[@name="regAddress.isShipping"]');
      let tax=$('//input[@name="regAddress.gst"]');
      let BusinessType=$('//input[@name="businesstype"]');
      let Currency=$('//input[@name="currencyId"]');
      let BuyerUsrName=$('//input[@name="displayName"]');
      let UsrMobileNo=$('//input[@name="mobileNo"]');
      let UsrEmail=$('//input[@name="userEmail"]');
      let UsrRole=$('//input[@name="roleName"]');
      let UsrDepartment=$('//input[@name="department"]');
      let usrJobTilte=$('//input[@name="jobTitle"]');
      let save=$('#editDialogButton');
      let cancel=$('#editDialogCancel');
      let invite=$('//*[text()="invite"]');
      let Buyerlist=$('//*[contains(@title,"Apple")]');
      let createUser=$('//*[text()="Create User"]');
      let createBranch=$('//span[text()="Create Branch"]');
      let usrmail=$('//input[@name="email"]');
      let Checkbox=$('(//input[@type="checkbox"])[last()]')
      let snackbar = $('#client-snackbar');
      let MoreOptions=$('//*[@title="More options"]');
      let deleteBuyer=$('//span[text()="Delete Customer"]');
      let userEdit=$('//span[text()="Edit"]');
      let userMoreOptions=$('//span[text()="Edit"]/following::button[@title="More options"]');
      let userDelete=$('//span[text()="Delete"]');
      let userReinvite=$('//span[text()="Reinvite"]');
      let yes=$('#yes');
      let alreadyExsists=$('//p[text()="Email already exists"]');
      let filter=$('//span[text()="Filters"]');
      let customerName=$('#companyName');
      let filterApply=$('//span[text()="Apply"]');
      let filterResults=$('(//*[@class="MuiChip-deleteIcon MuiChip-deleteIconSmall"])[last()]');
      let cusWebsite=$('//input[@name="website"]');
      let cusTaxid=$('//input[@name="taxDetailsId.pan"]');
      let cusSubIndustry=$('//input[@name="subIndustryId"]');
      let acuntOwner=$('//input[@name="subIndustryId"]/following::input[1]');
      let supportOwner=$('//input[@name="subIndustryId"]/following::input[2]');
      let contactsTab=$('//span[text()="Contacts"]');
      let preferenceTab=$('//span[text()="Preferences"]');
      let addressTab=$('//span[text()="Addresses"]');
      let inviteAccess=$('//input[@name="inviteAccess"]');
      let inventoryAccess=$('//input[@name="inventory"]');
      let showPrice=$('//*[@name="showPrice"]');
      let taxExempted=$('//input[@name="companyId.taxExempted"]');
      let branchName=$('//input[@name="branchName"]');
       let branchAddress=$('//textarea[@name="addressLine"]');
       let branchlocality=$('//input[@name="locality"]');
       let branchCity=$('//input[@name="city"]');
       let branchPin=$('//input[@name="pinCodeId"]');
       let branchState=$('//input[@name="state"]');
       let branchCountry=$('//input[@name="country"]');
       let branchLattitude=$('//input[@name="lattitude"]');
       let branchLongitude=$('//input[@name="longitude"]');
       let branchbilling=$('//input[@name="isBilling"]');
       let branchShipping=$('//input[@name="isShipping"]');
       let branchtax=$('//input[@name="gst"]');
       let contactName=$('//input[@name="primaryContact"]');
       let contactNo=$('//input[@name="mobileNo"]');
       let submit=$('//*[@id="loadingButton"]');
       let goBack=$('//*[@title="Go Back"]');
       let deleteBranch=$('(//div[contains(@class,"edgeEnd")]/preceding::button[1])[last()]');
       let editBranch=$('(//div[contains(@class,"edgeEnd")])[last()]');
       let branchTags=$('//*[@name="tags"]');
       let erpCode=$('//*[@name="erpCode"]');
       let vendorCode=$('//*[@name="vendorID"]');
       let exemptionId=$('//input[contains(@name,"ExemptionId")]');
       let close=$('//*[@title="Close"]');
     

    browser.url("/accounts/landing");
                if(filterResults.isDisplayed())
         {
          filterResults.click();
         }
        createCustomer.click();
         BuyerName.setValue("Apple Campus");
           browser.pause(1000);
             BuyerName.keys("\uE015");
              browser.pause(1000);
                 BuyerName.keys("\uE007")
                   BranchName.setValue("Coimbatore");
    if(Address.getValue()===''){
        Address.setValue("100 main road");
      }
        if(locality.getValue()===''){
          locality.setValue("US");
        }
         if(city.getValue()===''){
           city.setValue("coimbatore");
         }
            if(State.getValue()===''){
             State.setValue("tamilNadu");
            }
             if(country.getValue()===''){
               country.setValue("India");
             }
               if(pin.getValue()===''){
                 pin.setValue("641010");
                }
                 if(billing.getValue()===false){
                  billing.click();
                 }
                  if(Shipping.getValue()===false){
                    Shipping.click();
                   }
     tax.setValue("Gst");
      BusinessType.setValue("Dealer");
       browser.pause(1000);
       BusinessType.keys("\uE015");
        browser.pause(2000);
        BusinessType.keys("\uE007");
         browser.pause(1000);
          UsrDepartment.scrollIntoView();
            Currency.setValue("INR");
            browser.pause(2000);
             Currency.keys("\uE015");
              browser.pause(2000);
               Currency.keys("\uE007");
                browser.pause(2000);
                 BuyerUsrName.setValue("JD");
                  UsrMobileNo.setValue("90909090");
                     UsrEmail.setValue("realMadrid007"+today+"@gmail.com");
                        UsrRole.setValue("User");
                           browser.pause(2000);
                            UsrRole.keys("\uE015");
                              browser.pause(2000);
                               UsrRole.keys("\uE007");
                                usrJobTilte.setValue("user");
                                 UsrDepartment.setValue("EEE");
                                    save.click();
                                     browser.pause(1000);
                                       if(alreadyExsists.isDisplayed()){
                                         UsrEmail.click();
                                         browser.keys(["\uE009","a"]);
                                          UsrEmail.keys("\uE003");
                                           browser.pause(2000);
                                            UsrEmail.setValue('mkc3031'+today+'@gmail.com');
                                              save.click();}
/* assert.strictEqual(snackbar.getText(),"Account Created");*/
  
   browser.pause(1000);
   filter.click();
    customerName.setValue('apple');
     customerName.keys("\uE015");
      browser.pause(1000);
       customerName.keys("\uE007");
        filterApply.click();
          browser.pause(2000);
            invite.click();
            browser.pause(2000);
/*assert.strictEqual(snackbar.getText(),"User invited");*/
  browser.pause(3000);
   Buyerlist.click();
    cusWebsite.setValue('www.apple.com');
     cusTaxid.setValue('GST');
      cusSubIndustry.scrollIntoView();
       cusSubIndustry.setValue('Tires & Rubber');
        cusSubIndustry.keys("\uE013");
         browser.pause(2000);
          cusSubIndustry.keys("\uE007");
           acuntOwner.scrollIntoView();
            acuntOwner.setValue('admin')
              acuntOwner.keys("\uE013");
               browser.pause(2000);
                 acuntOwner.keys("\uE007");
                  supportOwner.scrollIntoView();
                   supportOwner.setValue('admin');
                     supportOwner.keys("\uE015");
                       browser.pause(2000);
                         supportOwner.keys("\uE007");
                           submit.click();
                             
/*assert.strictEqual(snackbar.getText(),"Account updated successfully");*/  
  browser.pause(2000);                        
   createUser.click();
    BuyerUsrName.setValue("MK");
     UsrMobileNo.setValue("90909090");
      usrmail.setValue("realMadrid0310"+today+"@gmail.com");
       UsrRole.setValue("User");
         browser.pause(1000);
           UsrRole.keys("\uE015");
            browser.pause(1000);
              UsrRole.keys("\uE007");
                save.click();
                 browser.pause(1000);
                                       if(alreadyExsists.isDisplayed()){
                                         UsrEmail.click();
                                         browser.keys(["\uE009","a"]);
                                          UsrEmail.keys("\uE003");
                                           browser.pause(2000);
                                            UsrEmail.setValue('mkw3031'+today+'@gmail.com');
                                              save.click();}
/*assert.strictEqual(snackbar.getText(),"Account updated successfully");*/
                    browser.pause(2000);
                     Checkbox.click();
                      browser.pause(1000);
                        invite.click();
                         browser.pause(2000);
/*assert.strictEqual(snackbar.getText(),"User invited");*/
          browser.refresh();
           MoreOptions.click();
            browser.pause(1000);
              deleteBuyer.click();
                 browser.pause(1000);
/*assert.strictEqual(snackbar.getText(),"Delete the Contacts other than default email user, before deleting company");*/

                            Checkbox.click();
                              browser.pause(1000);
                              userMoreOptions.click();
                                browser.pause(2000);
                                  userReinvite.click();
                                
 /*assert.strictEqual(snackbar.getText(),"User reinvited");*/
          addressTab.click();
            deleteBranch.click();
             
/*assert.strictEqual(snackbar.getText(),"you can`t delete the register address");*/ 
                browser.refresh();
                  createBranch.click();
                    branchName.setValue("Coimabtore Branch");
                      branchAddress.setValue("16 avinashi road");
                        branchlocality.setValue("coimbatore");
                           branchCity.setValue("coimbatore");
                             branchPin.setValue("641010");
                               branchState.setValue("Tamilnadu");
                                  branchCountry.setValue("india");
                                    branchtax.setValue('GST');
                                      contactName.setValue("admin");
                                        contactNo.setValue("9898989899");
                                          save.click();
                                                          
/*assert.strictEqual(snackbar.getText(),"Address added successfully");*/
                             browser.pause(1000);
                               addressTab.click();
                                 editBranch.click();
                                   branchTags.scrollIntoView();
                                    branchTags.setValue('TN');
                                     branchTags.keys("\uE015");
                                       browser.pause(1000);
                                        branchTags.keys("\uE007");
                                          browser.pause(1000);
                                            erpCode.setValue("SYS2021");
                                             vendorCode.setValue("2021");
                                               submit.click();
/*assert.strictEqual(snackbar.getText(),"Account updated successfully");*/
close.click();
browser.getUrl();
  expect(browser).toHaveUrlContaining('accounts/landing');
     Buyerlist.click();
      contactsTab.click();
       Checkbox.click();
        userEdit.click();
         usrJobTilte.scrollIntoView();
          usrJobTilte.setValue("QA");
           UsrDepartment.setValue("ECE");
             submit.click();             
/*assert.strictEqual(snackbar.getText(),"Saved successfully");*/

 browser.pause(1000);
  goBack.click();
   browser.pause();
    Checkbox.click();
     userMoreOptions.click();
      browser.pause(1000);
        userDelete.click();
         yes.click();
   
/*assert.strictEqual(snackbar.getText(),"User deleted successfully");*/
               browser.pause(1000);
                preferenceTab.click();
                  inviteAccess.scrollIntoView();
                   inviteAccess.click();
                     inventoryAccess.click();
                   /* showPrice.click();
                      taxExempted.click();
                      if(exemptionId.isDisplayed()){
                          exemptionId.setValue("test");
                          exemptionId.keys("\uE013");
                             browser.pause(1000);
                              exemptionId.keys("\uE007");
                              browser.pause(1000);
                               }*/
                          browser.pause(1000);
                           submit.click();
                            browser.pause(1000);
/*assert.strictEqual(snackbar.getText(),"Account updated successfully");*/

                                   
/*Buyer delete*/
    MoreOptions.waitForDisplayed(2000);
     MoreOptions.click();
      browser.pause(1000);
       deleteBuyer.click();
        browser.pause(1000);
         expect(yes).toBeExisting();
          yes.click();
           browser.getUrl();
expect(browser).toHaveUrlContaining('accounts/landing');


     });


    it("Create a Company Address",()=>{

       let addAddress =$('//*[text()="Add Address"]');
       let search=$('//input[@name="Search"]');
       let branchName=$('//input[@name="branchName"]');
       let branchAddress=$('//textarea[@name="addressLine"]');
       let locality=$('//input[@name="locality"]');
       let branchCity=$('//input[@name="city"]');
       let branchPin=$('//input[@name="pinCodeId"]');
       let branchDistrict=$('//input[@name="district"]');
       let branchState=$('//input[@name="state"]');
       let branchCountry=$('//input[@name="country"]');
       let Lattitude=$('//input[@name="lattitude"]');
       let Longitude=$('//input[@name="longitude"]');
       let billing=$('//input[@name="isBilling"]');
       let Shipping=$('//input[@name="isShipping"]');
       let warehouse=$('//input[@name="wareHouse"]');
       let tax=$('//input[@name="gst"]');
       let contactName=$('//input[@name="primaryContact"]');
       let contactNo=$('//input[@name="mobileNo"]');
       let save = $('#editDialogButton');
       let cancel=$('#editDialogCancel');
       let firstBranch=$('//input[@name="subIndustryId"]/following::button[3]');
       let moreOptions=$('(//button[contains(@class,"MuiIconButton-root")])[last()]');
       let cmpanyEdit=$('//li[text()="Edit"]');
       let cmpnyDelete=$('//li[text()="Delete"]');
       let snackbar =$('#client-snackbar');
       let yes=$('#yes');


       browser.url('/settings/company');
       browser.pause(1000);
    firstBranch.click();
      browser.pause(2000);
         cmpnyDelete.click();
           yes.click();
            browser.pause(2000);
assert.strictEqual(snackbar.getText(),"Registered Address cannot be deleted");
             
    
 addAddress.click();
  browser.pause(1000);
   branchName.setValue("Coimabtore ");
     branchAddress.setValue("16 avinashi road");
      locality.setValue("coimbatore");
       branchCity.setValue("coimbatore");
         /*branchDistrict.setValue("coimbatore");*/
         branchPin.setValue("641010");
          branchState.setValue("Tamilnadu");
           branchCountry.setValue("india");
            tax.setValue('GST');
             warehouse.click();
              contactName.setValue("madhan");
                contactNo.setValue("9898989899");
                  save.click();
                   browser.pause(2000);
assert.strictEqual(snackbar.getText(),"Address added successfully");
  
    moreOptions.scrollIntoView();  
     moreOptions.click();
      browser.pause(1000);
        cmpanyEdit.click();
          browser.pause(1000);
          branchName.setValue("Branch ");
          if(Shipping.getValue()==='true'){
            browser.pause(1000);
              Shipping.click();
          }
          contactName.setValue('kumar');
          browser.pause(1000);
            save.click();
             browser.pause(2000);
assert.strictEqual(snackbar.getText(),"Address updated Successfully");
         
          
          moreOptions.scrollIntoView();  
          moreOptions.click();
            browser.pause(2000);
              cmpnyDelete.click();
                yes.click();
                 browser.pause(2000);
assert.strictEqual(snackbar.getText(),"Branch address deleted succesfully");
    });

 it("Create and delete the  user " ,() =>{

          let createUser = $('//button[@type="button"]/following::span[text()="Add User"]');
          let EmpName = $('//input[@name="displayName"]');
          let EmpMobile= $('//input[@name="mobileNo"]');
          let EmpEmail = $('//input[@name="email"]');
          let EmpJobTitle = $('//input[@name="jobTitle"]');
          let EmpDepart = $('//input[@name="department"]');
          let EmpRole = $('//input[@name="roleName"]');
          let EmpSave=$('#loadingButton');
          let invite=$('//*[contains(@title,"ABCD")]/following::td[5]');
          let Emplist=$('//*[contains(@title,"ABCD")]');
          let activeEmp=$('//*[contains(@title,"Admin")]');
          let MoreOptions=$('//button[@title="More options"]');
          let deleteEmp=$('//*[text()="Delete"]');
          let activateEmp=$('//*[text()="Activate"]');
          let inactivateEmp=$('//*[text()="Inactivate"]');
          let tags=$('//*[@placeholder="Search"]');
          let yes=$('#yes');
          let save=$('#loadingButton');
          let snackbar = $('#client-snackbar');
          let alreadyExsists=$('//p[text()="Email id already exists"]');
          let close=$('//button[@title="Close"]');
          



     browser.url("/settings/team/landing");
    
createUser.doubleClick();   
 browser.pause(2000);
  EmpName.setValue('ABCD');
   EmpMobile.setValue('9090909090');
    EmpEmail.setValue("qa7"+today+"@gmail.com");
     EmpJobTitle.setValue('QA');
      EmpDepart.setValue('Accounts');
       EmpRole.setValue("user");
         browser.pause(1000);
          EmpRole.keys("\uE015");
           browser.pause(1000);
            EmpRole.keys("\uE007");
             browser.pause(2000);
              EmpSave.click();
              if(alreadyExsists.isDisplayed()){
                EmpEmail.click();
                 browser.keys(["\uE009", "a"]);
                 EmpEmail.keys("\uE003");
                  browser.pause(2000);
                   EmpEmail.setValue("mkc3031"+today+"@gmail.com");
                    EmpSave.click();
              }
               browser.pause(2000);
assert.strictEqual(snackbar.getText(),"User added successfully");

 /*invite the employee*/
    
    invite.click();
     browser.pause(2000);
/*assert.strictEqual(snackbar.getText(),"User invited");*/

/*edit the employee*/
Emplist.click();
tags.setValue('a');
tags.keys("\uE015");
browser.pause(1000);
tags.keys("\uE007");
save.click();
browser.pause(2000);
/*assert.strictEqual(snackbar.getText(),"User updated successfully");*/

/*delete the employee*/
   browser.refresh();
     MoreOptions.click();
      browser.pause(1000);
       deleteEmp.click();
        browser.pause(1000);
         yes.click();
         browser.pause(2000);
assert.strictEqual(snackbar.getText(),"User deleted successfully");

/*

browser.pause(2000);
activeEmp.click();
browser.pause('1000');
MoreOptions.click();
browser.pause(1000);
  inactivateEmp.click();
    yes.click();
    browser.pause(2000);
assert.strictEqual(snackbar.getText(),"User activated");


MoreOptions.click();
browser.pause(1000);
  activateEmp.click();
    yes.click();
    browser.pause(2000);
assert.strictEqual(snackbar.getText(),"User activated"); */


    

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
   browser.pause(2000);
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
   browser.setTimeout({ 'pageLoad': 50000 });

/*Adding Tax name*/   
   addTaxName.scrollIntoView();
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
    //let tagTN=$('');
     
    browser.url('/settings/tags');
      tagName.setValue("sanity1");
       tagName.keys("\uE007");
         tagName.setValue("sanity2");
           tagName.keys("\uE007");
             browser.pause(2000)
             save.click();
            
/*assert.strictEqual(snackbar.getText(),"Changes saved successfully");*/
//               tagName.setValue("tamilnadu");
//                  tagName.keys('\uE007');
// assert.strictEqual(snackbar.getText(),"Changes saved successfully");
                  
    browser.refresh();
     tagDelete.click();
       browser.pause(1000);
         tagDelete.click();
           browser.pause(1000);
             save.click();
/*assert.strictEqual(snackbar.getText(),"Changes saved successfully");*/

});

it("Update profile" ,() =>{

        let profileName=$('//input[@name="given_name"]');
        let mobNo=$('//input[@name="custom:phn_secondary"]');
        let alterMobno=$('//input[@name="custom:phn_primary"]');
        let alterEmail=$('//input[@name="custom:email2"]');
        let oldPwd=$('//input[@name="OldPassword"]');
        let newPwd=$('//input[@name="NewPassword"]');
        let cnfrmPwd=$('//input[@name="ConfirmPassword"]');
        let dateFormat=$('//input[@name="dateFormat"]');
        let timeZone=$('//input[@name="timeZone"]');
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
               profilePic.setValue("C:/Users/Madhan/Downloads/wps_download/profilepic.png");
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
  let branchName=$('//span[text()="Branch Name"]/following::input[1]');
  let addressLine=$('//span[text()="Address Line"]/following::input[1]');
  let locality=$('//span[text()="Locality"]/following::input[1]');
  let city=$('//span[text()="City"]/following::input[1]');
  let state=$('//span[text()="State"]/following::input[1]');
  let pinCode=$('//span[text()="Pincode"]/following::input[1]');
  let Country=$('//span[text()="Country"]/following::input[1]');
  let primaryContact=$('//span[text()="Primary contact"]/following::input[1]');
  let contactNo=$('//span[text()="Contact No"]/following::input[1]');
  let tax_GST=$('//span[text()="Tax ID / GST#"]/following::input[1]');
  let save=$('#loadingButton');
  let snackbar =$('#client-snackbar');

  browser.url('/settings/customization');
  
  branchName.click();
    addressLine.click();
       locality.click();           
         city.click();
           state.click();
             pinCode.click();
               Country.click();
                   primaryContact.click();
                      contactNo.click();
                        tax_GST.click();
                           save.click();
assert.strictEqual(snackbar.getText(),"Changes saved successfully");


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
       customer.setValue("Enterp");
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
                          attachment.setValue("C:/Users/Madhan/Downloads/order.PNG");
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
        attachment1.setValue("C:/Users/Madhan/Downloads/order.PNG");
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
it("Signout page", () => {

        let icon = $('//button[@type="button"]/span[1]/div/img');
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