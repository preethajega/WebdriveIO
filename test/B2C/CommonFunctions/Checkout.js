var actionwrappers = require("./../../CommonActions/ActionsWrappers");
var CheckoutPageObjects = require("./../PageObjects/Checkout.page");
var addressInput = require("./../Input/Address");
const assert = require("assert");

class Checkout {
  // to click cart icon and place order button
  clickCartIconAndPlaceOrderBtn = async () => {
    await actionwrappers.checkVisibleClickableMoveAndClick(
      await CheckoutPageObjects.cartIcon
    );
    await actionwrappers.checkVisibleClickableMoveAndClick(
      await CheckoutPageObjects.placeOrderCart
    );
   // return clickCartIconAndPlaceOrderBtn;
  };

  // If there is more than single delivery address, 2nd index will be selected
  changeDeliveryAddress = async () => {
    let deliveryAddressCardExists =
      await CheckoutPageObjects.deliveryAddressSecondIndex.isExisting();
    if (deliveryAddressCardExists) {
      await CheckoutPageObjects.deliveryAddressSecondIndex.click();
    }
   // return changeDeliveryAddress;
   
  };
  // To change the logged in user from checkout page
  logoutAndLoginAsAnotherUser = async () => {
    
    await actionwrappers.checkVisibleClickableMoveAndClick(
      await CheckoutPageObjects.loginStepInStepper
    );
    await actionwrappers.checkVisibleClickableMoveAndClick(
      await CheckoutPageObjects.changeLoginBtnInCart
    );
    await actionwrappers.checkVisibleClickableMoveAndClick(
      await CheckoutPageObjects.logoutAndLoginAnotherAccount
    );
        
  };

  
  //   Change seller addresses
  changePickUpAddress = async () => {
    await actionwrappers.checkVisibleClickableMoveAndClick(
      await CheckoutPageObjects.continueBtn
    );

    await actionwrappers.checkVisibleClickableMoveAndClick(
      await CheckoutPageObjects.changePickupAddress
    );

    await actionwrappers.checkVisibleClickableMoveAndClick(
      await CheckoutPageObjects.otherSellerAddress
    );

    await actionwrappers.checkVisibleClickableMoveAndClick(
      await CheckoutPageObjects.continueBtn
    );
  // return changePickUpAddress;
  };
  
  // to select pay on delivery and place order, note this assume the first index 
  // as pay on delivery after which place order will be done
  selectPODAndPlaceOrder = async()=>{
    await browser.pause(3000);

    await actionwrappers.checkVisibleClickableMoveAndClick(
      await CheckoutPageObjects.continueBtn
    );
    await actionwrappers.checkVisibleClickableMoveAndClick(
      await CheckoutPageObjects.continueBtn
    );
    await CheckoutPageObjects.payOnDelivery.click();

    await actionwrappers.checkVisibleClickableMoveAndClick(
      await CheckoutPageObjects.placeOrderAndPay
    );
  }


  //To select B2C term & select any one of the option
  selectOnlinePaymentAndPlaceOrder = async (onlineType) =>{
    
    await actionwrappers.checkVisibleClickableMoveAndClick(
      await CheckoutPageObjects.continueBtn
    );
     await actionwrappers.checkVisibleClickableMoveAndClick(
      await CheckoutPageObjects.continueBtn
    );

    await CheckoutPageObjects.onlinePayment.click();

    await actionwrappers.checkVisibleClickableMoveAndClick(
      await CheckoutPageObjects.placeOrderAndPay
      );

    this.selectMoMOPayAndPlaceOrder(onlineType); 
  
      await browser.pause(2000);

      await actionwrappers.checkVisibleClickableMoveAndClick(
        await CheckoutPageObjects.proceedPaymentDialog
      );
  
      /*await browser.pause(5000);
      if(CheckoutPageObjects.cancelPaymentDialog.isDisplayed()){
      await actionwrappers.checkVisibleClickableMoveAndClick(
      await CheckoutPageObjects.cancelPaymentDialog
      ); 
    }*/

  } 


// To select online payment momo pay(for hisense) and select the payment options with input to method and place order
  selectMoMOPayAndPlaceOrder= async (onlineType)  =>{
    if(onlineType === "otherNetwork"){
      await actionwrappers.checkVisibleClickableMoveAndClick(
        await CheckoutPageObjects.otherNetwork
      );
    } else if(onlineType === "MTNMoMoPay"){
      await actionwrappers.checkVisibleClickableMoveAndClick(
        await CheckoutPageObjects.MTNMoMoPay
      );
    } else{
      await actionwrappers.checkVisibleClickableMoveAndClick(
        await CheckoutPageObjects.bankTransfer
      );
    }   
   }



  
  
}
module.exports = new Checkout();
