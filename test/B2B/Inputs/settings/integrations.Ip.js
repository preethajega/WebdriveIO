let today =  new Date().toISOString().replace(/\/|-|:|/g,'');
function integrationip(){
    this.IntegrationUrl="/settings/integration_settings"

}
module.exports = new integrationip();
