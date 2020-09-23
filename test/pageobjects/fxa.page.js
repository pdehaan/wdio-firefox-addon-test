const Page = require("./page");

class FxAPage extends Page {
  open() {
    return super.open("https://www.mozilla.org/firefox/accounts/");
  }
}

module.exports = new FxAPage();
