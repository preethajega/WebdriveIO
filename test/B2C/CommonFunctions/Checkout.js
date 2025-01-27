var actionwrappers = require("./../../CommonActions/ActionsWrappers");
var CheckoutPageObjects = require("./../PageObjects/Checkout.page");
var addressInput = require("./../Input/Address");
const assert = require("assert");
const LoginIo = require("../Input/Login.io");

class Checkout {
  // to click cart icon and place order button
  clickCartIconAndPlaceOrderBtn = async () => {
    await actionwrappers.checkVisibleClickableMoveAndClick(
      await CheckoutPageObjects.cartIcon
    );
    await actionwrappers.checkVisibleClickableMoveAndClick(
      await CheckoutPageObjects.placeOrderCart
    );

  };

  // If there is more than single delivery address, 2nd index will be selected
  changeDeliveryAddress = async () => {
    let deliveryAddressCardExists =
      await CheckoutPageObjects.deliveryAddressSecondIndex.isExisting();
    if (deliveryAddressCardExists) {
      await CheckoutPageObjects.deliveryAddressSecondIndex.click();
    }

   
  };
  // To change the logged in user from checkout page
  logoutAndLoginAsAnotherUser = async () => {
    
    await actionwrappers.checkVisibleClickableMoveAndClick(
      await CheckoutPageObjects.loginStepInStepper
    );
    await actionwrappers.checkVisibleClickableMoveAndClick(
      await CheckoutPageObjects.changeUser
    );
    await actionwrappers.checkVisibleClickableMoveAndClick(
      await CheckoutPageObjects.switchUser
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
  
    // await browser.pause(2000);
    // await actionwrappers.checkVisibleClickableMoveAndClick(
    //   await CheckoutPageObjects.deliveryAddressSecondIndex
    // );
    await actionwrappers.checkVisibleClickableMoveAndClick(
      await CheckoutPageObjects.continueBtn
    );
 
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
      await CheckoutPageObjects.placeOrder
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
      await CheckoutPageObjects.placeOrder
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
