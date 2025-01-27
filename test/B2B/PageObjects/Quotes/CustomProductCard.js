const { AddCustomProduct } = require("../../CommonFunctions/Quotes/CustomProductCards");
const AddCustomProducts = require("../../Inputs/salesModule/AddCustomProducts");
const Page = require("../../PageObjects/page");
class CustomProductCard extends Page {
    open() {
        super.open('auth/login'); //this will append `login` to the baseUrl to form complete URL
      }

      get ClickCartIcon(){
        return super.pathByXpath('//*[@id="cartIcon"]/ancestor::button');
      }
      get AddCustomProductBtn(){
        return super.pathByXpath('//button[@id="acp"]');
      }
      get ProductIDField(){
        return super.pathByName('brandProductId');
      }
      get ProductVariantField(){
        return super.pathByName('productShortDescription');
      }
      get ProductNameField(){
        return super.pathByXpath('//input[@placeholder="Select Product Group"]');
      }
      get ProductNameDrpdwnArrow(){
        return super.pathByXpath('//input[@placeholder="Select Product Group"]/following::button[1]');
      }
      get PrimaryCategoryField(){
        return super.pathByXpath('//input[@placeholder="Search for a Category"]')
      }
      get PrimaryCategoryCancelIcon(){
        return super.pathByXpath('//button[@aria-label="Clear"]')
      }
      get PrimaryCategoryDrpdwnArrow(){
        return super.pathByXpath('//input[@placeholder="Search for a Category"]/following::button[2]')
      }
      get HSNCodeField(){
        return super.pathByXpath('//input[@name="hsnCode"]');
      }
      get HSNCodeDrpdwnArrow(){
        return super.pathByXpath('//input[@name="hsnCode"]/following::button[1]')
      }
      get UnitPriceListField(){
        return super.pathByName('unitListPrice')
      }
      get ProductCostField(){
        return super.pathByName('productCost')
      }
      get UnitQuantityField(){
        return super.pathByName('unitQuantity')
      }
      get PackQuantityField(){
        return super.pathByName('packagingQty')
      }
      get DivisionField(){
        return super.pathByXpath('//input[@placeholder="Search for a division"]')
      }
      get DivisiondrpdwnArrow(){
        return super.pathByXpath('//input[@placeholder="Search for a division"]/following::button[1]')
      }
      get BUField(){
        return super.pathByXpath('//input[@name="businessUnit"]')
      }
      get BUArrowdrpdwn(){
        return super.pathByXpath('//input[@name="businessUnit"]/following::button[1]')
      }
      get UnitOfMeasure(){
        return super.pathByName('unitOfMeasure')
      }
      get IsCustomProductSwitch(){
        return super.pathByXpath('//input[@class="MuiSwitch-input PrivateSwitchBase-input css-1m9pwf3"]')
      }
      get SaveBtn(){
        return super.pathByXpath('//button[@id="editDialogButton"]')
      }
      get Toaster(){
        return super.pathByXpath('//div[@id="notistack-snackbar"]')
    }
      get CancelBtn(){
        return super.pathByXpath('//button[@id="editDialogCancel"]')
      }
      get ProductIDRequire(){
        return super.pathByXpath('//p[@id="mui-128-helper-text"]')
      }
      get ProductVariantRequire(){
        return super.pathByXpath('//p[@id="mui-129-helper-text"]')
      }
      get ProductNameRequire(){
        return super.pathByXpath('//p[@id="mui-131-helper-text"]')
      }
      get PrimaryCategoryRequire(){
        return super.pathByXpath('//p[@id="mui-133-helper-text"]')
      }
      get HSDCodeRequire(){
        return super.pathByXpath('//p[@id="mui-135-helper-text"]')
      }
      get QuantityfieldInCP(){
        return super.pathByXpath('//input[@id="quantity"]')
      }
      get removeCPBtn(){
        return super.pathByXpath('//div[@class="MuiBox-root css-z92jtp"]/child::button[1]')
      }
      get RemoveAlertCPbtn(){
        return super.pathByXpath('//button[@id="yes"]')
      }
      get CancelCPBtn(){
        return super.pathByXpath('//button[@aria-label="cancel"]')
      }
      get SelectBuyerCom(){
        return super.pathByXpath('//input[@id="asynchronous-demo"]')
      }
      get Create_Quote(){
        return super.pathByXpath('//button[@id="cq_rfq"]')
      }
      get Quote_AddCustomProductBtn1(){
        return super.pathByXpath('//button[@class="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButtonBase-root  css-1i9x1pu"]')
      }
      get ClickCP_product(){
        return super.pathByXpath('//div[contains(@class," jss886 css-45ujxc")]/div[3]/div[1]//h3')
      }
      get Click_prodGetTxt(){
        return super.pathByXpath(`//h3[text()="${AddCustomProducts.ProductVariantname}"]`)
      }
      get PenBtnProductPage(){
        return super.pathByXpath('//div[@id="productEditButton"]')
      }
      get TextOfCp(){
        return super.pathByXpath('//p[text()="CP"]')
      }
      get scrollToCP(){
         return super.pathByXpath('//span[text()="Is it a custom product?"]')
      }
      get CPOff(){
         return super.pathByXpath('//span[text()="Is it a custom product?"]/following::input')
      }
      get saveAndpublish(){
        return super.pathByXpath('//button[@id="loadingButton"]')
      }

      

    };
    module.exports = new CustomProductCard();