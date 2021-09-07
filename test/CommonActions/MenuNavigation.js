var MenuNavigation = function() {
  var MenuIcon = $(".MuiAvatar-root");
  var MenuList = $(".MuiPopover-paper");

  // To click the menu Icon
  this.MenuIconClick = () => {
    MenuIcon.waitForDisplayed(5000);
    MenuIcon.waitForClickable(5000);
    MenuIcon.click();
    MenuList.waitForDisplayed(2000);
  };

  //The number variable is used to decide the menu and submenu or else the menu alone in the dropdown
  this.MainMenuClick = (numbers, menu, submenu) => {
    if (numbers === 1) {
      menu.waitForDisplayed(5000);
      menu.click();
    } else {
      menu.waitForDisplayed(5000);
      menu.waitForClickable(5000);
      menu.click();
      submenu.waitForDisplayed(5000);
      submenu.waitForClickable(5000);
      submenu.click();
    }
  };

  //   Settings page menu navigation
  this.SettingsMenuNavigation = settingsSubMenu => {
    settingsSubMenu.moveTo();
    settingsSubMenu.waitForDisplayed();
    settingsSubMenu.waitForClickable();
    settingsSubMenu.click();
  };

  //This method is used to select the menu and submenu by hovering alone
  this.MenuClickHover = (number, Menu1, Menu2, Menu3) => {
    /*
When number is 0 - Major category will be selected.
When number is 1 - Category will be selected.
When number is 2 - Sub category will be selected.
*/
    if (number === 0) {
      Menu1.moveTo();
      Menu1.click();
    } else if (number === 1) {
      Menu1.moveTo();
      Menu2.waitForDisplayed(2000);
      Menu2.waitForClickable(2000);
      Menu2.click();
    } else if (number === 2) {
      Menu1.moveTo();
      Menu2.waitForDisplayed(2000);
      Menu2.waitForClickable(2000);
      Menu2.moveTo();
      Menu3.waitForDisplayed(2000);
      Menu3.click();
    }
  };
};
module.exports = new MenuNavigation();
