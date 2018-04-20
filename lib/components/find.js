import webdriver from 'selenium-webdriver';

export default class Find {
  constructor( session ) {
    this.session = session;
  }
  
  element(selector) {
		return this.session.driver.findElement(selector);
	}
  
	elements(selector) {
		return this.session.driver.findElements(selector);
  }

}
