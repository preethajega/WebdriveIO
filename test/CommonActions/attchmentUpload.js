var uploadAttchment = function() {
this.upload= async (ele,filePath)=>{
   await  browser.execute(
      (el) =>  el.style.display = 'block',
    await  ele
    );
    await  ele.waitForDisplayed();
    await  ele.setValue(filePath);
    await  browser.pause(5000);
      }
    }
      

module.exports = new uploadAttchment();