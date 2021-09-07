var uploadAttchment = function() {
this.upload=(ele,filePath)=>{
      browser.execute(
      (el) => el.style.display = 'block',
      ele
    );
    ele.waitForDisplayed();
    ele.setValue(filePath);
    browser.pause(5000);
      }
    }
      

module.exports = new uploadAttchment();