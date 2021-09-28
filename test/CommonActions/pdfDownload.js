const actionWrapper = require("../CommonActions/ActionsWrappers");


var downloadFile = function() {
    this.download_switchWindow = async(ele1,ele2) =>{
        var firstWindow = browser.getWindowHandle();
        await actionWrapper.checkClickableAndClick(ele1);
        await actionWrapper.checkClickableAndClick(ele2);
        await browser.pause(2000);
        var allWindows = browser.getWindowHandles();

        for(var i = 0; i< allWindows.length;i++){
            if( allWindows[i] = firstWindow){
                browser.switchToWindow(firstWindow);
                break;            }
        }



    }
}
module.exports = new downloadFile();