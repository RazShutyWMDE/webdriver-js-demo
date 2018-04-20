import webdriver from 'selenium-webdriver';

const until = webdriver.until;

export default class Wait {
	constructor( session ) {
		//log.debug('contructing Wait');
		this.session = session;
	}
	
	waitForVisibleElement(selector, wait) {
		//log.debug('waitForVisibleElement with: ' + selector);
		this.session.wait( until.elementIsVisible( selector ), wait );
	}
	
	waitForElement(selector, wait) {
		//log.debug('waitForElement with: ' + selector);
		this.session.wait( until.elementLocated( selector ), wait );
	}
}
