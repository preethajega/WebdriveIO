function shippmentIp() {        
    this.shippmentName = 'Professional Courier';
    this.shipReference = 'Admin@123';
    this.shippmentNo ="Pro1234";
    this.trackingUrl="https://trackcourier.io/professional-courier-tracking";
    this.deliveryType="Road";
    this.shippmentMsg='Shipment created successfully';
}


module.exports = new shippmentIp();