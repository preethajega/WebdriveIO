const Page = require("../../../../B2B/PageObjects/page");
const actionWrapper = require("../../../../CommonActions/ActionsWrappers");
const Quoteip = require("../../../Inputs/salesModule/summarypage/QuoteBTnsIp");
const attchmentUpload = require("../../../../CommonActions/attchmentUpload");
const common = require("../../../PageObjects/Common/commonObjects");
const path = require("../../../PageObjects/SalesModule/summarypage/quoteBtn.pag");
const EndCustomer_path = require("../../../PageObjects/SalesModule/summarypage/EndCustomerCard.page");
const EndCusip = require("../../../Inputs/salesModule/summarypage/EndCustomerIp");
const Sidnav_path = require("../../../PageObjects/SalesModule/summarypage/sidNavQuote.page");
const sidnavIp = require("../../../Inputs/salesModule/summarypage/sidnavIp");
const LogOutPage = require("../../../PageObjects/logout.page");
const LoginPage = require("../../../PageObjects/Login.page");
const B2B_loginIp = require("../../../Inputs/B2B_login");


const assert = require("assert");



class QuoteBtnCard extends Page {

    async open() {
        super.open(Quoteip.QuotelandingPageUrl);
    }


    QuoteBtnIdentify = async (sumbitBtn, sumbitIp, CreateQuoteBtn, ReqApprovalBtn) => {
        console.log(await sumbitBtn.getText());
        if ((await sumbitBtn.getText()) === sumbitIp) {
            await actionWrapper.Click(CreateQuoteBtn)
            await browser.pause(2000)
        } else {
            await actionWrapper.Click(ReqApprovalBtn)
            await browser.pause(2000)
        }
    }
    createQuote = async (quoteName, quoteIp, ConfBtn) => {
        await actionWrapper.clearAndsetValue(quoteName, quoteIp)
        await actionWrapper.Click(ConfBtn)
    }
    createApprovalQuote = async (quoteName, quoteIp, commentName, commentIp, ConfBtn) => {
        await actionWrapper.clearAndsetValue(quoteName, quoteIp)
        await actionWrapper.clickAndSetvalue(commentName, commentIp)
        await actionWrapper.Click(ConfBtn)
    }


    QuotePopUP = async (sumbitBtn, sumbitIp, CreateQuoteBtn, ReqApprovalBtn, QuoteEle, quoteip, quoteName,
        quoteIp, ConfBtn, quoteName1, quoteIp1, commentName, commentIp, ConfBtn1) => {
        this.QuoteBtnIdentify(sumbitBtn, sumbitIp, CreateQuoteBtn, ReqApprovalBtn)
        if ((await QuoteEle.getText()) === quoteip) {
            await this.createQuote(quoteName, quoteIp, ConfBtn)
        } else {
            await this.createApprovalQuote(quoteName1, quoteIp1, commentName, commentIp, ConfBtn1)
        }
    }
    /* this method first check whether the Quote summary page has which Button (like Create Quote or RequestFor Approval)
        next it will check which pop upwindow ,then check the field validation based on Window showed
        it will check whether the one or Two Approver is present  based on that it will validate the Fields*/
    PopUPFieldValidation = async (sumbitBtn, sumbitIp, CreateQuoteBtn, ReqApprovalBtn, QuoteEle, quoteip, btn, snakpath, snakip, CancelBtn,
        approvalCheckEle, approvalInput1, btns1, snakpaths1, snakips1, approvalInput2, btns2, snakpaths2, snakips2,
        approvalInput3, btns3, snakpaths3, snakips3, btn1, snakpath1, snakip1, commentpath, commentIp, CancelBtn1) => {

        await this.QuoteBtnIdentify(sumbitBtn, sumbitIp, CreateQuoteBtn, ReqApprovalBtn)
        if ((await QuoteEle.getText()) === quoteip) {
            await this.PopUpWindowFieldValidation(btn, snakpath, snakip)
            await actionWrapper.Click(CancelBtn)
        } else {
            await this.ApproverCheck(approvalCheckEle, approvalInput1, btns1, snakpaths1, snakips1, approvalInput2, btns2, snakpaths2, snakips2,
                approvalInput3, btns3, snakpaths3, snakips3)
            await this.PopUpWindowFieldValidation(btn1, snakpath1, snakip1)
            await actionWrapper.snackBarValidate(commentpath, commentIp)
            await actionWrapper.Click(CancelBtn1)
        }
    }
    ApproverCheck = async (approvalCheckEle, approvalInput1, btn1, snakpath1, snakip1, approvalInput2, btn2, snakpath2, snakip2,
        approvalInput3, btn3, snakpath3, snakip3) => {
        if ((await approvalCheckEle.isDisplayed()) === true) {
            await this.ApprovalFieldValid(approvalInput1, btn1, snakpath1, snakip1)
            await this.ApprovalFieldValid(approvalInput2, btn2, snakpath2, snakip2)
        } else {
            await this.ApprovalFieldValid(approvalInput3, btn3, snakpath3, snakip3)
        }
    }
    PopUpWindowFieldValidation = async (btn, snakpath, snakip) => {
        await actionWrapper.Click(btn)
        await browser.pause(1000)
        await actionWrapper.snackBarValidate(snakpath, snakip)
        await browser.pause(2000)
    }
    ApprovalFieldValid = async (approvalInput, btn, snakpath, snakip) => {
        await actionWrapper.clearValues(approvalInput)
        await browser.pause(2000)
        await actionWrapper.Click(btn)
        await browser.pause(1000)
        await actionWrapper.snackBarValidate(snakpath, snakip)
        await browser.pause(2000)
    }
    saveAsDraft = async (saveAsBtn, quotepath, quoteip, confbtns) => {
        await actionWrapper.Click(saveAsBtn)
        await actionWrapper.clickAndSetvalue(quotepath, quoteip)
        await actionWrapper.Click(confbtns)
    }
    QuoteNameValidation = async (selectData, QuoteOrderNameInputs, names) => {
        await browser.pause(4000)
        await actionWrapper.checkClickableAnddoubleClick(selectData)
        await browser.pause(3000)
        await actionWrapper.Click(path.QuoteOrderNameEditIcon)
        if ((await QuoteOrderNameInputs.getValue() === names)) {
            await actionWrapper.Click(path.QuoteOrderConfyesBtn)
            return true;
        } else {
            await actionWrapper.Click(path.QuoteOrderConfCancelBtn)
            return false;
        }

    }
    QuoteRequiresApproval = async (ResponReviewdBtn, SumbitRevResBtn, commentpath, commentip, confbtn,
        SumbitRevResBtn1, commentpath1, commentip1, confbtn1) => {
        await actionWrapper.Click(ResponReviewdBtn)
        await browser.pause(4000)
        if ((await common.snackbar.isDisplayed()) === true) {
            await actionWrapper.Click(SumbitRevResBtn)
            await browser.pause(3000)
            await actionWrapper.clickAndSetvalue(commentpath, commentip)
            await actionWrapper.Click(confbtn)
        } else {
            await actionWrapper.Click(SumbitRevResBtn1)
            await browser.pause(3000)
            await actionWrapper.clickAndSetvalue(commentpath1, commentip1)
            await actionWrapper.Click(confbtn1)
        }
    }
    RespondReviewQuote = async (selectdata, ResponReviewdBtn, SumbitRevResBtn, commentpath, commentip, confbtn,
        SumbitRevResBtn1, commentpath1, commentip1, confbtn1) => {
        await actionWrapper.Click(selectdata)
        await browser.pause(2000)
        await this.QuoteRequiresApproval(ResponReviewdBtn, SumbitRevResBtn, commentpath, commentip, confbtn,
            SumbitRevResBtn1, commentpath1, commentip1, confbtn1)
    }
    sumbitQuoteToCus = async (selectdata, validFromPath, NextMonBtn, datepath, confbtn) => {
        await actionWrapper.Click(selectdata)
        await browser.pause(2000)
        await actionWrapper.Click(Sidnav_path.RespondBtn)
        await actionWrapper.Click(Sidnav_path.SumbitToCustomer)
        if ((await common.snackbar.isDisplayed()) === true) {
            if (await common.snackbar.getText() === "Select future date") {
                await this.DateSelecter(validFromPath, NextMonBtn, datepath)
                await actionWrapper.Click(confbtn)
            }
        } else {
            await actionWrapper.Click(confbtn)
        }

    }
    cloneQuoteseller = async (sumbitBtn, sumbitIp, CreateQuoteBtn, ReqApprovalBtn, validFromPath, NextMonBtn, datepath, Tagpath, TagIp, tagpath,
        sumbitBtn1, sumbitIp1, CreateQuoteBtn1, ReqApprovalBtn1, QuoteEle, quoteip, quoteName, quoteIp, ConfBtn, quoteName1, quoteIp1, commentName, commentIp, ConfBtn1) => {
        await actionWrapper.Click(Sidnav_path.MoreOptionBtn)
        await actionWrapper.Click(Sidnav_path.CloneBtn)
        await browser.pause(3000)
        await this.RequiredDateValid(sumbitBtn, sumbitIp, CreateQuoteBtn, ReqApprovalBtn, validFromPath, NextMonBtn, datepath, Tagpath, TagIp, tagpath)
        await browser.pause(5000)
        await this.QuotePopUP(sumbitBtn1, sumbitIp1, CreateQuoteBtn1, ReqApprovalBtn1, QuoteEle, quoteip, quoteName,
            quoteIp, ConfBtn, quoteName1, quoteIp1, commentName, commentIp, ConfBtn1)

    }
    ApprovalTextValid1 = async (textpath,ExpandBtn, textpath1, textip) => {
        await this.ApprovalExpanValid(textpath,ExpandBtn)
        await browser.pause(2000)
        await actionWrapper.snackBarValidate(textpath1, textip)
    }
    ApprovalTextValid = async (ExpandBtn, textpath1, textip) => {
        await actionWrapper.Click(ExpandBtn)
        await browser.pause(2000)
        await actionWrapper.snackBarValidate(textpath1, textip)
    }
    ApprovalExpanValid =async(textpath,ExpandBtn)=>{
        if ((await textpath.isDisplayed()) == true) {
            await actionWrapper.Click1(ExpandBtn)
        }
    }
    ApprovedQuoteValid = async(textpath, textip,textpath1,textpath2, textip1)=>{
        await actionWrapper.snackBarValidate(textpath, textip)
        const value1 =await textpath1.getText()
        const  currentApprover = await value1.slice(1, -1);
        const value2 =await textpath2.getText()
        const nextlogeduser = await value2.slice(1, -1);
        await browser.pause(2000)
        await actionWrapper.Click(LogOutPage.logouticon)
        const currentuser =await textip1.getText()
        await actionWrapper.Click(LoginPage.homePge)
        if ((await currentApprover) == currentuser) {
            await LogOutPage.logout(LogOutPage.logouticon, LogOutPage.logoutBtn, common.snackbar,
                B2B_loginIp.logoutAlertMsg)
                await LoginPage.open();
                await LoginPage.login(nextlogeduser, B2B_loginIp.OwnerPassword);
                await actionWrapper.urlValidation("/dev3.myapptino.com/");
            }
    }
    ApprovalWorkflowLoginLogout = async (selectData,textpath1, textip) => {
        await actionWrapper.Click(selectData)
        // await this.ApprovalExpanValid(textpath,ExpandBtn)
        await browser.pause(5000)
        if ((await textpath1.getText()) === textip) {
            await LogOutPage.logout(LogOutPage.logouticon, LogOutPage.logoutBtn, common.snackbar,
                B2B_loginIp.logoutAlertMsg)
            await browser.pause(3000)
            await LoginPage.open();
            await LoginPage.login(B2B_loginIp.Buyer5Email, B2B_loginIp.OwnerPassword);
            await actionWrapper.urlValidation("/dev3.myapptino.com/");
        }
        else{
            await LogOutPage.logout(LogOutPage.logouticon, LogOutPage.logoutBtn, common.snackbar,
                B2B_loginIp.logoutAlertMsg)
            await browser.pause(3000)
            await LoginPage.open();
            await LoginPage.login(B2B_loginIp.Buyer4Email, B2B_loginIp.OwnerPassword);
            await actionWrapper.urlValidation("/dev3.myapptino.com/");
        }
    }

    ApproveRejectQuote= async(ApproveRejectBtn,commentpath, commentip,confbtn)=>{
        await actionWrapper.Click(ApproveRejectBtn)
        await browser.pause(3000)
        await actionWrapper.clickAndSetvalue(commentpath, commentip)
        await actionWrapper.Click(confbtn)
    }
TermsValid = async(ele)=>{
        await actionWrapper.MoveTo(ele)
        const value =await ele.getValue();
        await console.log(value)
    }

    /************* BUYER SIDE METHOD FOR SIDNAVE PAGE ************* */
    createQuote1 = async (quoteName, quoteIp, ConfBtn) => {
        await actionWrapper.clearAndsetValue(quoteName, quoteIp)
        await browser.pause(3000)
        await actionWrapper.Click(ConfBtn)
        await browser.pause(3000)
    }
    createApprovalQuote1 = async (quoteName, quoteIp, commentName, commentIp, ConfBtn) => {
        await actionWrapper.clearAndsetValue(quoteName, quoteIp)
        await actionWrapper.clickAndSetvalue(commentName, commentIp)
        await actionWrapper.Click(ConfBtn)
    }
    QuotePopUP1 = async (sumbitBtn, sumbitIp, CreateQuoteBtn, ReqApprovalBtn, QuoteEle, quoteip, quoteName,
        quoteIp, ConfBtn, quoteName1, quoteIp1, ConfBtn1) => {
        this.QuoteBtnIdentify(sumbitBtn, sumbitIp, CreateQuoteBtn, ReqApprovalBtn)
        if ((await QuoteEle.getText()) === quoteip) {
            await this.createQuote1(quoteName, quoteIp, ConfBtn)
        } else {
            await this.createQuote1(quoteName1, quoteIp1, ConfBtn1)
        }
    }
    Tag = async (Tagpath, TagIp, tagpath) => {
        await actionWrapper.clearValueAndSetValueSelectDropdown(Tagpath, TagIp)
        await actionWrapper.Click(tagpath)
    }
    DateSelecter = async (validFromPath, NextMonBtn, datepath) => {
        await actionWrapper.MoveTo(validFromPath)
        await browser.pause(2000)
        await actionWrapper.Click(NextMonBtn)
        await browser.pause(1000)
        await actionWrapper.Click(datepath)
    }
    RequiredDateValid = async (sumbitBtn, sumbitIp, CreateQuoteBtn, ReqApprovalBtn, validFromPath, NextMonBtn, datepath, Tagpath, TagIp, tagpath) => {
        await this.QuoteBtnIdentify(sumbitBtn, sumbitIp, CreateQuoteBtn, ReqApprovalBtn)
        if (await common.snackbar.isDisplayed()) {
            if ((await common.snackbar.getText()) === EndCusip.ReqDeliveryDate) {
                await browser.pause(3000)
                await actionWrapper.scrollEle(EndCustomer_path.RequiredDate)
                this.DateSelecter(validFromPath, NextMonBtn, datepath)
            } else {
                await browser.pause(3000)
                await this.Tag(Tagpath, TagIp, tagpath)
            }
        }
    }
    cloneQuote = async (sumbitBtn, sumbitIp, CreateQuoteBtn, ReqApprovalBtn, validFromPath, NextMonBtn, datepath, Tagpath, TagIp, tagpath,
        sumbitBtn1, sumbitIp1, CreateQuoteBtn1, ReqApprovalBtn1, QuoteEle, quoteip, quoteName, quoteIp, ConfBtn, quoteName1, quoteIp1, ConfBtn1) => {
        await actionWrapper.Click(Sidnav_path.MoreOptionBtn)
        await actionWrapper.Click(Sidnav_path.CloneBtn)
        await browser.pause(3000)
        await this.RequiredDateValid(sumbitBtn, sumbitIp, CreateQuoteBtn, ReqApprovalBtn, validFromPath, NextMonBtn, datepath, Tagpath, TagIp, tagpath)
        await browser.pause(5000)
        await this.QuotePopUP1(sumbitBtn1, sumbitIp1, CreateQuoteBtn1, ReqApprovalBtn1, QuoteEle, quoteip, quoteName,
            quoteIp, ConfBtn, quoteName1, quoteIp1, ConfBtn1)

    }
    cancelQuote = async (EditData, moreoption, cancelQuBtn, cancelMsgPath, Cancelmsg, confBtn) => {
        await actionWrapper.Click(EditData)
        await browser.pause(3000)
        await actionWrapper.Click(moreoption)
        await actionWrapper.Click(cancelQuBtn)
        await actionWrapper.clickAndSetvalue(cancelMsgPath, Cancelmsg)
        await actionWrapper.Click(confBtn)
        await actionWrapper.snackBarValidate(common.snackbar, sidnavIp.quotecancelMsg)
    }
    ExportProduct = async (EditData, Exportbutton) => {
        await actionWrapper.Click(EditData)
        await browser.pause(2000)
        await actionWrapper.MoveTo(Exportbutton)
        await actionWrapper.Click(Sidnav_path.BuyerCloseCardBtn)
    }
    SellerUpdate = async () => {
        if ((await Sidnav_path.DetailPageStatus.getText()) === "QUOTE RECEIVED") {
            await console.log("Seller Reviewed the Quote & also Quote recevied by Buyer")
        }
    }
    UpdateQuoteName = async (EditData, EditBtn, quoteNameFieldPath, quoteNameFieldIp, confBtn) => {
        await actionWrapper.Click(EditData)
        await browser.pause(2000)
        await actionWrapper.Click(EditBtn)
        await actionWrapper.clearAndsetValue(quoteNameFieldPath, quoteNameFieldIp)
        await actionWrapper.Click(confBtn)
    }





}
module.exports = new QuoteBtnCard();