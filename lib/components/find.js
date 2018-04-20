import webdriver from 'selenium-webdriver';

export default class Find {
	constructor( session ) {
		//log.debug('contructing Find');
		this.session = session;
	}
	
	element(selector) {
		//log.debug('locating element: ' + selector);
		return this.session.driver.findElement(selector);
	}
	
	elements(selector) {
		//log.debug('locating elements: ' + selector);
		return this.session.driver.findElements(selector);
	}
	
}
