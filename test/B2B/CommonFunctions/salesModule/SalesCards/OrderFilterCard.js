const Page = require("../../../../B2B/PageObjects/page");
const actionWrapper = require("../../../../CommonActions/ActionsWrappers");
const common = require("../../../PageObjects/Common/commonObjects");
const path = require("../../../PageObjects/SalesModule/summarypage/OrderFilterCard.page");
const assert = require("assert");
const OrderFilterip = require("../../../Inputs/salesModule/summarypage/OrderFilterCardIp");


class OrderFilter extends Page {

    async open() {
        super.open(OrderFilterip.OrderandingPageUrl);
    }
    
}
module.exports = new OrderFilter();