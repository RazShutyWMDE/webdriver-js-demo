import webdriver from 'selenium-webdriver';

export default class Text {
  constructor( session ) {
    this.session = session;
  }
  
  get(selector) {
    return this.session.find().element(selector).getText();
  }
  
  set(selector, text) {
    return this.session.find().element(selector).sendKeys(text);
  }

  getElementsTexts(selector) {
    var elementsTexts = [];
    return this.session.find().elements(selector).then( elements => {
      elements.forEach(element => {
        element.getText().then( elementText => elementsTexts.push(elementText));
      });
      return elementsTexts;
    });
	}
}
