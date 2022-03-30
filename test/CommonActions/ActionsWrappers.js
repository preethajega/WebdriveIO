const assert = require("assert");
class TestActionWrapper  {
  // Wait for an element, move and then check clickable before clicking
  checkVisibleClickableMoveAndClick = async (ele) => {
    
    await ele.waitForDisplayed(2000);
    await ele.waitForClickable({ timeout:2000 });
    await ele.moveTo();
    await ele.click();
  };
// Wait for an element, move 
checkVisibleClickableMove = async (ele) => {
    
  await ele.waitForDisplayed(1000);
  await ele.waitForClickable({ timeout:2000 });
  await ele.moveTo();
  await ele.waitForDisplayed(1000);

};
  // wait for an element.click
  Click = async(ele) => {
    await ele.waitForDisplayed(2000);
    await ele.click();
    await browser.pause(1000);
  };
  // scroll into view and click an element
  scrollEleAndClick = async(ele)=>{
    await ele.waitForDisplayed(2000);
    await ele.scrollIntoView();
    await ele.click();
  }
  // scroll element double clik
  scrollEleAndDoubleClick = async(ele)=>{
    await ele.waitForDisplayed(1000);
    await ele.scrollIntoView();
    await ele.doubleClick();
  }
  // validating a snackbar text eruals to element input
  snackBarValidate = async(msgalert,ipalert) =>{
    if(await msgalert.isDisplayed()){
      assert.strictEqual(
      await msgalert.getText(),ipalert);
   } 
  }
  //clear a value then click an element then set the value
  clearValueAndSetValueSelectDropdown =  async(ele,value)=>{
    await ele.waitForDisplayed(2000);
    await ele.scrollIntoView();
    await ele.click();
    await ele.clearValue();
    await ele.setValue(value);
    await browser.pause(1000);
    await ele.keys("\uE015");
    await browser.pause(1000);
    await ele.keys("\uE007");
  }
  
  // click a element & set the value & click the first option using keyboard 
  clickSetvalueAndSelectoption= async(ele,value) =>{
    await ele.waitForDisplayed(2000);
    await ele.scrollIntoView();
    await ele.click();
    await ele.setValue(value);
    await browser.pause(1000);
    await ele.keys("\uE015");
    await browser.pause(1000);
    await ele.keys("\uE007");
  }
  // click a element & set value & selct the second option using Keyboard
  clickSetvalueAndSelectSecondOption = async(ele,value) =>{
    await ele.waitForDisplayed(2000);
    await ele.click();
    await ele.setValue(value);
    await browser.pause(1000);
    await ele.keys("\uE015");
    await ele.keys("\uE015");
    await browser.pause(2000);
    await ele.keys("\uE007");
  }
  //click and select a value from dropdown
  clickAndSetvalue = async(ele,value) =>{
    await ele.waitForDisplayed(2000);
    await ele.click();
    await ele.setValue(value);
  }  
  // Wait for an element, check clickable before clicking
  checkVisibleClickableAndClick = async (ele) => {
    await ele.waitForDisplayed(1000);
    await ele.waitForClickable({ timeout: 2000 });
    await ele.click();
  };
  //   Clear the input and enter the value
  checkEnabledClearAndSetValue = async (elem, value) => {
    await elem.waitForEnabled(2000);
    await elem.clearValue();
    await elem.setValue(value);
  };
  //   Without clearing the existing value
  checkEnabledAndSetValue = async (elem, value) => {
    await elem.waitForEnabled(2000);
    await elem.setValue(value);
    
  };
  // To choose the first option in the drop down with an click action.
  ClickElementAndkeyboardVal = async (ele, keyValue) => {
    await ele.waitForDisplayed(2000);
    await ele.waitForClickable({ timeout: 2000 });
    await ele.click();
    await browser.pause(2000);
    await ele.keys(keyValue);
    await ele.keys("\uE015");
    await browser.pause(1000);
    await ele.keys("\uE007");
  };
  // To choose the first option in the drop down with an setvalue action.
  SetValueElementMoveAndkeyboardVal = async (ele, inputValue, keyValue) => {
    await ele.moveTo();
    await ele.waitForDisplayed(2000);
    await ele.waitForClickable({ timeout: 2000 });
    await ele.click();
    await ele.setValue(inputValue);
    await browser.pause(1000);
    await ele.keys(keyValue);
    await ele.keys("\uE015");
    await browser.pause(1000);
    await ele.keys("\uE007");
  };
  //Wait for an element,and check clickable before clicking
  checkClickableAndClick =  async (ele) => {
    await ele.waitForDisplayed(2000);
    await ele.waitForClickable({ timeout: 2000 });
    await  ele.click();
  };

   //Wait for an element,and check clickable before Double clicking
   checkClickableAnddoubleClick =  async (ele) => {
    await ele.waitForClickable({ timeout: 2000 });
    await  ele.doubleClick();
  };

  //Clear the setvalue using doubleclick and delete, and enter the new value
  //double click does not work when there is more than 1 word.
  checkEnableddoubleClickDeleteAndSetValue = async (
    elem,
    inputvalue
  ) => {
    await elem.waitForEnabled(2000);
    await elem.waitForClickable({ timeout: 2000 });
    await elem.doubleClick();
    await elem.keys("\uE017");
    await browser.pause(1000);
    await elem.setValue(inputvalue);
    
  };

  //double click and delete
  checkVisibleClickableAndDoubleClickDelete = async (ele) => {
    await ele.waitForDisplayed(2000);
    await ele.waitForClickable({ timeout: 2000 });
    await ele.doubleClick();
    await ele.keys("\uE0017");
  };

  //Clear value and select value from dropdown using keyboard
  clearValue_selectDropdownvalue = async (ele, inputvalue) => {
    await ele.waitForDisplayed(2000);
    await ele.click();
    await browser.keys(["\uE009", "a"]);
    await ele.keys("\uE003");
    await browser.pause(2000);
    await ele.setValue(inputvalue);
    await ele.keys("\uE015");
    await browser.pause(2000);
    await ele.keys("\uE007");
    await browser.pause(2000);
  };

  //select first dropdown value if keyboard arrrows are not working
  selectfirstDropdownValue = async (ele1,input,ele2) =>{
    await ele1.waitForDisplayed(2000);
    await ele1.setValue(input);
    await browser.pause(2000);
    await ele2.waitForClickable({ timeout: 2000 });
    await ele2.click();

  };

  //select first dropdown value when keyboard is working without input 
  selectDrpdownusingKeyboard = async (ele) =>{
    await ele.waitForClickable({ timeout: 2000 });
    await ele.click();
    await ele.keys("\uE015");
    await browser.pause(2000);
    await ele.keys("\uE007");
    await browser.pause(2000);
  }

  //search for the input and select first dropdown value when keyboard
  searchAndselectDrpdownusingKeyboard = async (searchText, ele) =>{
    await browser.pause(2000);
    await ele.setValue(searchText);
    await ele.click();
    await ele.keys("\uE015");
    await browser.pause(2000);
    await ele.keys("\uE007");
    await browser.pause(2000);
  }



  //Clear the value using keyboard
  clearValues = async (ele) => {
    await ele.waitForDisplayed(2000);
    await ele.click();
    await browser.keys(["\uE009", "a"]);
    await ele.keys("\uE003");
   
  };



urlValidation= async (ExceptedURL)=>{
  await browser.pause(3000);
  await browser.getUrl();
  await expect(browser).toHaveUrlContaining(ExceptedURL);
};

displayValidation= async (elem) =>{
  expect(elem).toBeDisabled();
}

navigateTo= async(Url)=>{
  await browser.pause(3000);
  await browser.Url(Url);
}

  //if value is empty set the value
  isEmpty_setValue = async (ele, inputValue) => {
    if (await ele.getValue()=== "") {
      await  ele.waitForDisplayed(2000);
      await  ele.setValue(inputValue);
    }
  };

  //if value is not equal to empty clear the value & set the new value else enter the new value
  isNotEmpty_clearAndsetValue = async (ele, inputValue) => {
    if (! await ele.getValue()==="") {
      await ele.waitForDisplayed(4000);
      await ele.click();
      await browser.keys(["\uE009", "a"]);
      await ele.keys("\uE003");
      await browser.pause(2000);
      await ele.setValue(inputValue);
    } else {
      await ele.waitForDisplayed(2000);
      await ele.setValue(inputValue);
    }
  };

  //clear the value & set the new value else enter the new value
  clearAndsetValue = async (ele, inputValue) => {
    await ele.waitForDisplayed(4000);
    await ele.click();
      await browser.keys(["\uE009", "a"]);
      await browser.pause(2000);
      await ele.keys("\uE003");
      await  browser.pause(2000);
      await  ele.setValue(inputValue);
    } ;

  //to scroll the page
  scrollEle = async (ele)=>{
    await  browser.pause(2000);
    await ele.scrollTo( 
      {block: "start",
       behavior: "smooth",});
  };
 
  eleDisplayed = async (ele) =>{
    await ele.waitForDisplayed(2000);
    await ele.isDisplayed();
  }

  isNotDisplayed_scrollAndClick=async (ele)=>{
   // await ele.waitForDisplayed(2000);
    await ele.waitForClickable({ timeout: 2000 });
    await ele.click();
    if(ele.isDisplayed ===false){
      await  browser.pause(2000);
      await ele.scrollIntoView();  
      await ele.waitForClickable({ timeout: 2000 });
      await ele.click(); 
     }

  }
//Move To action elemet
MoveTo = async(ele)=>{
  await ele.waitForDisplayed(2000);
  await ele.click({action: 'moveTo',x:20,right:10})

}
  //hover method
  hoverElement = async(ele,ele1)=>{
   await ele.waitForDisplayed(2000);
   await ele.click({action: 'moveTo',x:20,right:10});
   await  browser.pause(2000);
   await ele1.click();
  }


  
    



};
module.exports = new TestActionWrapper();
