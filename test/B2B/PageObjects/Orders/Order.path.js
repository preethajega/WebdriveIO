const page=require("../page");
const Orderip=require("../../Inputs/Orders/Order_ip")


class Order extends page{

   // SELLER SIDE PATH //   

    get ALLTab(){
        return super.pathById('scrollable-force-tab-0')
    }
    get firstrow(){
        return super.pathByXpath('//table/tbody/tr[1]')
    }
    get Sproductid(){
        return super.pathByXpath('//table/tbody/tr[1]/td[2]/div/p/a')
    }
    get MoreOption(){
        return super.pathByXpath('//button[@aria-label="moreOptions"]')
    }
    get reorder(){
        return super.pathByXpath('//li[text()="Reorder"]')
    }
    get ScrollAddMoreProduct(){
        return super.pathByXpath('//h4[text()=" Add More Products"]')
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
        return super.pathByXpath('//div[@class="MuiBox-root css-70qvj9"]/div[@class="MuiBox-root css-1ni0sna"]/following::p[1]')
    }
    get clicksearch(){
        return super.pathByXpath('//ul[@class="MuiList-root MuiList-padding css-1ontqvh"]/child::div[1]')
    }
    get scrollSelectAccount(){
        return super.pathByXpath('//h4[text()="Select Account"]')
    }

    get Toaster(){
        return super.pathByXpath('//div[@id="notistack-snackbar"]')
    }
    get tagsButton(){
        return super.pathByXpath('//input[@id="tags-outlined"]/following::button[1]')
    }

    get MOQErrorMsg(){
        return super.pathByXpath('//p[@id="dbProductDetails[0].askedQuantity-helper-text"]')
    }

    get InputMOQ(){
        return super.pathByXpath('//input[@id="dbProductDetails[0].askedQuantity"]')
    }

        // BUYER SIDE PATH //

        get Bproductid(){
            return super.pathByXpath('//table/tbody/tr[1]/td[3]/div/p/a')
        }

        get BScrollToShip(){
            return super.pathByXpath('//div[@class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 css-1s50f5r"]/child::h4[text()="Ship To"]')
        }
        get BTHQuantity(){
            return super.pathByXpath('//th/p[text()="Quantity"]')
        }
        get ScrollAttachment(){
            return super.pathByXpath('//h4[text()="Attachments"][@class="MuiTypography-root MuiTypography-h4 css-mbzx6o"]')
        }

        //// REQUEST PRICE ////
        get RequestPriceInput(){
            return super.pathByXpath('//tbody/tr[1]/td[1]/span/input')
        }
        get CheckRequestPrice(){
            return super.pathByXpath('//p[text()="Amount(₹)"]/following::td[9]')
        }
        get RemoveProduct(){
            return super.pathById('removeProduct')
        }
        get RemoveProductYesButton(){
            return super.pathById('yes')
        }
        get RemoveProductCancelButton(){
            return super.pathByXpath('//button[text()="Cancel"]')
        }


        get MOQinput(){
            return super.pathByXpath('//p[text()="MOQ is 3"]/preceding::input[1]')
        }

        get SearchProductId(){
            return super.pathByXpath('//p[text()="MOQ is 5"]/preceding::input[1]/preceding::h6[1]')
        }
        get PackOfQTY(){
            return super.pathByXpath('//table/tbody/tr[1]/td[2]/div/div[2]/span[3]')
        }

         // order buyer path
       get selectbuyer(){
        return super.pathByXpath('//input[@id="asynchronous-demo"]')
       }
       get CreateOrderbtn(){
        return super.pathByXpath('//button[@id="co"]')
       }
       get selectproduct(){
        return super.pathByXpath(`//p[text()="${Orderip.search}"]`)
       }
       get PlaceOrderName(){
        return super.pathByXpath('//input[@id="name"]')
       }
       get placeOrderDilogBtn(){
        return super.pathByXpath('//button[@id="editDialogButton"]')
       }
       get PODialogCancelbtn(){
        return super.pathByXpath('//button[@id="editDialogCancel"]')
       }
       get PONamemadatory(){
        return super.pathByXpath('//p[text()="Name is required"]')
       }
       get logicon(){
        return super.pathById('userIcon')
       }
       get Salespath(){
        return super.pathByXpath('//div[text()="Sales"]')
       }
       get OrdersDetailsPage(){
        return super.pathByXpath('//div[text()="Orders"]')
       }
       get OrderDetailsPage_Order(){
        return super.pathByXpath(`//td[text()="${Orderip.NewOrder_Buyer}"]`)
       }
       get statusOfOrderpath(){
        return super.pathByXpath('//p[text()="ORDER ACKNOWLEDGED"]')
       }
       get ExportBtn_OrderProd(){
        return super.pathByXpath('//button[@id="exportorder"]')
       }
       get ThreeDot(){
        return super.pathByXpath('//button[@aria-label="moreOptions"]')
       }
       get downloadOrderPDF(){
        return super.pathByXpath('//ul[@role="menu"]/li[4]')
       }

}
module.exports = new Order()