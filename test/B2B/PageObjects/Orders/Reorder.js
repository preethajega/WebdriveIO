const page=require("../page");


class ReOrder extends page{

   // SELLER SIDE PATH //   

    get ALLTab(){
        return super.pathById('scrollable-force-tab-0')
    }
    get firstrow(){
        return super.pathByXpath('//table/tbody/tr[1]')
    }
    get productid(){
        return super.pathByXpath('//table/tbody/tr[1]/td[2]/div/p/a')
    }
    get MoreOption(){
        return super.pathByXpath('//button[@aria-label="moreOptions"]')
    }
    get reorder(){
        return super.pathByXpath('//li[text()="Reorder"]')
    }
  
    get Searchbox(){
        return super.pathByXpath('//input[@placeholder="Search for products"]')
    }
    get RequiredDate(){
        return super.pathByXpath('//div[@class="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth Mui-focused MuiInputBase-formControl MuiInputBase-sizeSmall MuiInputBase-adornedEnd css-5bi86z"]/child::input')
    }
    get PlaceOrderBtn(){
        return super.pathById('loadingButton')
    }
    get placeOrderName(){
        return super.pathById('name')
    }
    get EditDialogeCancel(){
        return super.pathById('editDialogCancel')
    }
    get EditDialogePlaceOrder(){
        return super.pathById('editDialogButton')
    }
    get OrderAcknowledge(){
        return super.pathByXpath('//p[text()="ORDER ACKNOWLEDGED"]')
    }
    get clicksearch(){
        return super.pathByXpath('//ul[@class="MuiList-root MuiList-padding css-1ontqvh"]/child::div[2]')
    }
    get scrollFinancial(){
        return super.pathByXpath('//div[@class="MuiBox-root css-1yuhvjn"]/child::h4')
    }
    get scrollSelectAccount(){
        return super.pathByXpath('//h4[text()="Select Account"]')
    }

    get Toaster(){
        return super.pathByXpath('//div[@id="notistack-snackbar"]')
    }

    get MOQ5(){
        return super.pathByXpath('//p[text()="MOQ is 5"]')
    }

    get InputMOQ5(){
        return super.pathByXpath('//input[@id="dbProductDetails[0].askedQuantity"]')
    }

        // BUYER SIDE PATH //

        get Bproductid(){
            return super.pathByXpath('//table/tbody/tr[1]/td[3]/div/p/a')
        }

        get BScrollToShip(){
            return super.pathByXpath('//div[@class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 css-1s50f5r"]/child::h4[text()="Ship To"]')
        }
        




        



}
module.exports = new ReOrder()