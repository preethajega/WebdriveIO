var actionwrappers = require("./../../CommonActions/ActionsWrappers").default;
var CheckoutPageObjects = require("./../PageObjects/Address.page");
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
  };
  
  // to select pay on delivery and place order, note this assume the first index 
  // as pay on delivery after which place order will be done
  selectPODAndPlaceOrder = async()=>{
    await CheckoutPageObjects.payOnDelivery.click();
    await actionwrappers.checkVisibleClickableMoveAndClick(
      await CheckoutPageObjects.placeOrderAndPay
    );
  }

// To select online payment momo pay(for hisense) and select the payment options with input to method and place order
  selectMoMOPayAndPlaceOrder= async (onlineType)  =>{
    await CheckoutPageObjects.onlinePayment.click()
  
    await actionwrappers.checkVisibleClickableMoveAndClick(
      await CheckoutPageObjects.placeOrderAndPay
    );

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
    
    
    await actionwrappers.checkEnableddoubleClickDeleteAndSetValue(
      await CheckoutPageObjects.referenceNumber, "8489232492"
    );
    await actionwrappers.checkVisibleClickableMoveAndClick(
      await CheckoutPageObjects.cancelPaymentDialog
    );
    await actionwrappers.checkVisibleClickableMoveAndClick(
      await CheckoutPageObjects.placeOrderAndPay
    );

    await actionwrappers.checkVisibleClickableMoveAndClick(
      await CheckoutPageObjects.proceedPaymentDialog
    );
  }
  
  
}
module.exports = new Checkout();
