let today =  new Date().toISOString().replace(/\/|-|:|/g,'');
function integrationip(){
    this.IntegrationUrl="/settings/integration_settings"
    this.saveAlert="Changes saved successfully"

/* **************** DIRECT BANK CARD *************** */    
    this.orgAccName=" Software Pvt "
    this.orgAccNum="898987665547872"
    this.orgBankName="CANRA Bank"
    this.orgBankLocation="Chennai"
    this.orgBankCode="CB0098765021"
    this.orgIBAN="13AA"
    this.AccName="Apptino Pvt Ltd"
    this.AccName1="Apptino Pvt Ltd1"
    this.AccNum="9627771071111"
    this.AccNum1="762886612333"
    this.BankName="ICICI Bank"
    this.BankName1="KVB Bank"
    this.BankLocation="Theni"
    this.BankLocation1="Madurai"
    this.BankCode="123IC"
    this.BankCode1="232AC"
    this.IBAN="13AS"
    this.IBAN1="12KA"
    /* ****************  RAZOR PAY CARD *************** */    
    this.orgAPIKey="rzp_test_cQQn4U1VqgLut1"
    this.orgSecretKey="PfClrm0tEgE7hPTpzHhYXl0Q"
    this.APIKey="rzp_test_cQQn4U1VqgLut2"
    this.APIKey1="rzp_test_cQQn4U1VqgLut3"
    this.SecretKey="PfClrm0tEgE6hPTpzHhYXl0Q"
    this.SecretKey1="PfClrm0tEgE5hPTpzHhYXl0Q"
/* **************** STRIPE CARD *************** */    
    this.orgPublishableKey="Test"
    this.orgSecretKeys="Test"
    this.orgPublishableKeys="tet"
    this.orgSecretKeys1="te"
    this.PublishableKey="Test Mode"
    this.PublishableKey1="TestModes"
    this.SecretKeyStripe="Testing"
    this.SecretKeyStripe1="Testings"
    this.SecretKeys="tes"
    this.SecretKeys1="tes"
    this.PublishableKeys="TES"
    this.PublishableKeys1="TES"

/* ****************  CC AVENUE CARD *************** */  
    this.orgMerchantId="760474"
    this.orgAccessCode="AVYU63IL07BH11UYHB"
    this.orgWorkingKey="F11C5BB6306B29C4269FC2E1496B21E1"
    this.MerchantId="988676"
    this.AccessCode="AVYU63IL08BH11UYHB"
    this.WorkingKey="F11C5BB6306B29C4269FC2E1426B21E1"  
    this.MerchantId1="87267"
    this.AccessCode1="AVYU63IL09BH11UYHB"
    this.WorkingKey1="F11C5BB6306B29C4269FC2E1416B21E1"  
    this.errCCAvenuMsg="Required"
}
module.exports = new integrationip();
