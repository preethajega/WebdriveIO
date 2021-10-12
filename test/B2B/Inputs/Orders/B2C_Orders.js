function B2C_OrdersIp() {        
    this.url = "b2cOrders/order-landing";
    this.customer ="Madhan";
    this.product ="mobile";
    this.validMobile ="91 9500817492";
    this.validNo ="CR7";
    this.tax="12";
    this.warehouse="FISHHARWH";
    this.orderBooked="Order successfully booked";
    this.orderaccepted="Order accepted";
    this.pendingPayment="Payment is pending";
    this.acceptAndPay="Accept order to add payment";
    this.alreadyPaid="Order paid already";
    this.cancelOrder="Order cancelled";
    this.alreadyCanceled="Order was cancelled already";
    this.notAllowed='Action not allowed';
    this.invoice="Invoice created successfully";
    this.erpId="mum12001";
    this.cancelMsg="cancel";
    this.deliveryType="Road";
    this.deliveryNote="Thanks for shopping";
    this.deliveryMsg="Delivery created successfully";
    
}


module.exports = new B2C_OrdersIp();