import webdriver from 'selenium-webdriver';

export default class Interactions {
  constructor( session ) {
    //log.debug('contructing Interactions');
    this.session = session;
  }
  
  click(selector) {
    //log.debug('click: ' + selector);
		return this.session.driver.findElement(selector).click();
	}
  
  //We can add here 'drag', 'dragAndDrop' and other UI interactions 

}
