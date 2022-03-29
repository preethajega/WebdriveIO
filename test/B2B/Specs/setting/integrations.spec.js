const assert = require("assert");
const path = require("path");
const LoginPage = require("../../PageObjects/Login.page");
const B2B_loginIp = require("../../Inputs/B2B_login");
const actionsWrappers = require("../../../CommonActions/ActionsWrappers");
const integration_path = require("../../PageObjects/Settings/integrations.page");
const integrtion_fn = require("../../CommonFunctions/settings/integrations");
var integrtionip = require("../../Inputs/settings/integrations.Ip");
const imageUpload = path.join(__dirname, '../../../FileUtils/profilepic.png');
const common = require("../../PageObjects/Common/commonObjects");

describe('Integrations Page', () => {
    it("Should allow to access login into Integration page ", async () => {
        await LoginPage.open();
        await LoginPage.login(B2B_loginIp.OwnerEmail, B2B_loginIp.OwnerPassword);
        await actionsWrappers.urlValidation("/dashboard");
        await integrtion_fn.open();
        await actionsWrappers.urlValidation("/integration_settings");
    });
    /* ***************** DIRECT BANK CARD******************* */
    it('should validate a Account name field in the Direct Bank card',async () => {
        await integrtion_fn.DirectBankCard(integration_path.AccName,integrtionip.AccName,common.SaveBtn,common.snackbar,integrtionip.saveAlert)
    });
    it('should validate a Account name field in the Direct Bank card',async () => {
        await integrtion_fn.DirectBankCard(integration_path.AccNum,integrtionip.AccNum,common.SaveBtn,common.snackbar,integrtionip.saveAlert)
    });
    it('should validate a Account name field in the Direct Bank card',async () => {
        await integrtion_fn.DirectBankCard(integration_path.BankName,integrtionip.BankName,common.SaveBtn,common.snackbar,integrtionip.saveAlert)
    });
    it('should validate a Account name field in the Direct Bank card',async () => {
        await integrtion_fn.DirectBankCard(integration_path.BankLocation,integrtionip.BankLocation,common.SaveBtn,common.snackbar,integrtionip.saveAlert)
    });
    it('should validate a Account name field in the Direct Bank card',async () => {
        await integrtion_fn.DirectBankCard(integration_path.BankCode,integrtionip.BankCode,common.SaveBtn,common.snackbar,integrtionip.saveAlert)
    });
    it('should validate a Account name field in the Direct Bank card',async () => {
        await integrtion_fn.DirectBankCard(integration_path.IBAN,integrtionip.IBAN,common.SaveBtn,common.snackbar,integrtionip.saveAlert)
    });
    it('should change the changed data into orginal data',async () => {
        await integrtion_fn.DirectBankCard(integration_path.AccName,integrtionip.orgAccName,common.SaveBtn,common.snackbar,integrtionip.saveAlert)
        await integrtion_fn.DirectBankCard(integration_path.AccNum,integrtionip.orgAccNum,common.SaveBtn,common.snackbar,integrtionip.saveAlert)
        await integrtion_fn.DirectBankCard(integration_path.BankName,integrtionip.orgBankName,common.SaveBtn,common.snackbar,integrtionip.saveAlert)
        await integrtion_fn.DirectBankCard(integration_path.BankLocation,integrtionip.orgBankLocation,common.SaveBtn,common.snackbar,integrtionip.saveAlert)
        await integrtion_fn.DirectBankCard(integration_path.BankCode,integrtionip.orgBankCode,common.SaveBtn,common.snackbar,integrtionip.saveAlert)
        await integrtion_fn.DirectBankCard(integration_path.IBAN,integrtionip.orgIBAN,common.SaveBtn,common.snackbar,integrtionip.saveAlert)
    });
    /* ***************** PAYMENT GATEWAY CARD******************* */
    it('should validate a RazorPay Pyament Method', async () => {
        await integrtion_fn.RazorPayFields(integration_path.APIKey, integrtionip.APIKey, integration_path.SecretKey,
            integrtionip.SecretKey, common.SaveBtn)
    });
    it('should validate a Stripe Pyament Method', async () => {
        await integrtion_fn.StripeFields(integration_path.PublishKey, integrtionip.PublishableKey, integration_path.StripeSecretKey, integrtionip.SecretKeyStripe,
            integration_path.PublishKey1, integrtionip.PublishableKey1, integration_path.StripeSecretKey1, integrtionip.SecretKeyStripe1, common.SaveBtn)
    });
    it('should validate a CCAvenue Pyament Method', async () => {
        await integrtion_fn.CCAvenueFields(integration_path.MerchantId, integrtionip.MerchantId, integration_path.AccesCode, integrtionip.AccessCode,
            integration_path.WorkingKey, integrtionip.WorkingKey, common.SaveBtn)
    });

    // /* *****************  RAZOR PAY FIELD VALIDATION ******************* */
    // it('should validate a RazorPay API key filed vaildation',async () => {
    //     await integrtion_fn.PaymentGatewayMandatoryFieldValid(integration_path.RazorPayExpand,integration_path.RazorEnable,
    //         integration_path.APIKey,integration_path.ErrCCAvenuMsg,integrtionip.errCCAvenuMsg)
    // });
    // it('should validate a RazorPay Secret key filed vaildation',async () => {
    //     await integrtion_fn.PaymentGatewayMandatoryFieldValid(integration_path.RazorPayExpand,integration_path.RazorEnable,
    //         integration_path.SecretKey,integration_path.ErrCCAvenuMsg,integrtionip.errCCAvenuMsg)
    // });
    // /* *****************  STRIPE  FIELD VALIDATION ******************* */
    // it('should validate a Stripe Publishable key filed vaildation',async () => {
    //     await integrtion_fn.PaymentGatewayMandatoryFieldValid(integration_path.StripeExpand,integration_path.StripeEnable,
    //         integration_path.PublishKey,integration_path.ErrCCAvenuMsg,integrtionip.errCCAvenuMsg)
    // });
    // it('should validate a Stripe Secret key filed vaildation',async () => {
    //     await integrtion_fn.PaymentGatewayMandatoryFieldValid(integration_path.StripeExpand,integration_path.StripeEnable,
    //         integration_path.StripeSecretKey,integration_path.ErrCCAvenuMsg,integrtionip.errCCAvenuMsg)
    // });
    // it('should validate a Stripe Publishable key filed vaildation',async () => {
    //     await integrtion_fn.PaymentGatewayMandatoryFieldValid(integration_path.StripeExpand,integration_path.StripeEnable,
    //         integration_path.PublishKey1,integration_path.ErrCCAvenuMsg,integrtionip.errCCAvenuMsg)
    // });
    // it('should validate a Stripe Secret key filed vaildation',async () => {
    //     await integrtion_fn.PaymentGatewayMandatoryFieldValid(integration_path.StripeExpand,integration_path.StripeEnable,
    //         integration_path.StripeSecretKey1,integration_path.ErrCCAvenuMsg,integrtionip.errCCAvenuMsg)
    // });

    // /* *****************  CC AVENU FIELD VALIDATION ******************* */
    // it('should validate a CC Avenue MerchantId filed vaildation',async () => {
    //     await integrtion_fn.PaymentGatewayMandatoryFieldValid(integration_path.CCAvenueExpand,integration_path.CCAvenuEnable,
    //         integration_path.MerchantId,integration_path.ErrCCAvenuMsg,integrtionip.errCCAvenuMsg)
    // });
    // it('should validate a CC Avenue Acces Code filed vaildation',async () => {
    //     await integrtion_fn.PaymentGatewayMandatoryFieldValid(integration_path.CCAvenueExpand,integration_path.CCAvenuEnable,
    //         integration_path.AccesCode,integration_path.ErrCCAvenuMsg,integrtionip.errCCAvenuMsg)
    // });
    // it('should validate a CC Avenue MerchantId filed vaildation',async () => {
    //     await integrtion_fn.PaymentGatewayMandatoryFieldValid(integration_path.CCAvenueExpand,integration_path.CCAvenuEnable,
    //         integration_path.WorkingKey,integration_path.ErrCCAvenuMsg,integrtionip.errCCAvenuMsg)
    // });

    it('should change the all the Changed data into orginal payment Gateway Method ', async () => {
        await browser.refresh();
        await integrtion_fn.RazorPayFields(integration_path.APIKey, integrtionip.orgAPIKey, integration_path.SecretKey,
            integrtionip.orgSecretKey, common.SaveBtn)
        await integrtion_fn.StripeFields(integration_path.PublishKey, integrtionip.orgPublishableKey, integration_path.StripeSecretKey, integrtionip.orgSecretKeys,
            integration_path.PublishKey1, integrtionip.orgPublishableKeys, integration_path.StripeSecretKey1, integrtionip.orgSecretKeys1, common.SaveBtn)
        await integrtion_fn.CCAvenueFields(integration_path.MerchantId, integrtionip.orgMerchantId, integration_path.AccesCode, integrtionip.orgAccessCode,
            integration_path.WorkingKey, integrtionip.orgWorkingKey, common.SaveBtn)
    });

});