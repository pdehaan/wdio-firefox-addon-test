const FxAPage = require("../pageobjects/fxa.page");
const SecurePage = require("../pageobjects/secure.page");

describe("My FxA page", () => {
  it("should login with valid credentials", () => {
    FxAPage.open();
    browser.pause(5000);
    browser.saveScreenshot('./screenshots/fxa-screenshot.png');
    browser.url("about:addons");
    browser.pause(5000);
    browser.saveScreenshot('./screenshots/about-addons.png');
    browser.url("https://www.whatismybrowser.com/detect/what-is-my-user-agent");
    browser.pause(1000);
    browser.saveScreenshot("./screenshots/user-agent.png");
  });
});
