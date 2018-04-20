import webdriver from 'selenium-webdriver';

const until = webdriver.until;

export default class Wait {
  constructor( session ) {
    this.session = session;
  }
  
  waitForVisibleElement(selector, wait) {
    this.session.wait( until.elementIsVisible( selector ), wait );
  }
  
  waitForElement(selector, wait) {
    this.session.wait( until.elementLocated( selector ), wait );
  }
}
