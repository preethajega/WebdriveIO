const actionWrapper = require("../CommonActions/ActionsWrappers");


var downloadFile = function() {
    this.download_switchWindow = async(ele1,ele2) =>{
        var parentWindow = browser.getWindowHandle();
        await actionWrapper.checkClickableAndClick(ele1);
        await actionWrapper.checkClickableAndClick(ele2);
        await browser.pause(2000);
        var allWindows = browser.getWindowHandles();

        for(var i = 0; i< allWindows.length;i++){
            if( allWindows[i] != parentWindow){
                browser.switchToWindow(allWindows[i]);
                browser.close(allWindows[i]);
                break;            }
        }
        browser.pause(3000)
        browser.switchToWindow(parentWindow)


    }
}
module.exports = new downloadFile();