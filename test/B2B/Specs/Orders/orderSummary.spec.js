const assert = require("assert");
const LoginPage = require("../../PageObjects/Login.page");
const orderSummaryInput = require("../../Inputs/Orders/OrderSummary");
const OrderCommonActions = require("../../CommonFunctions/Orders/Summary");
describe("Order Summary", () => {
  it("Logging in as seller user", () => {
    browser.maximizeWindow();
    LoginPage.open();
    browser.pause(6000);
    LoginPage.usernameInput.waitForExist();
    LoginPage.login(
      orderSummaryInput.sellerEmail,
      orderSummaryInput.sellerPassword
    );
    browser.pause(8000);
  });

  it("Navigate to cart and clear cart", () => {
    OrderCommonActions.clearCart();
    OrderCommonActions.searchProduct("MT9F2HN/A");
    OrderCommonActions.selectBuyer();
    OrderCommonActions.cartCreateOrder();

  });
});
