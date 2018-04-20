import webdriver from 'selenium-webdriver';
import config from 'config';
import { map } from 'lodash';

const until = webdriver.until;

export default class BasePage {
	constructor( driver, expectedElementSelector, visit = false, url = null ) {
		this.explicitWaitMS = config.get( 'explicitWaitMS' );
		this.driver = driver;
		this.expectedElementSelector = expectedElementSelector;
		this.url = url;

		if ( visit ) this.driver.get( this.url );

		console.log('Waiting for page to load');
		this.driver.wait( until.elementLocated( this.expectedElementSelector ), this.explicitWaitMS );
	}

	consoleErrors() {
		return this.driver.manage().logs().get( 'browser' ).then( ( logs ) => {
			return map( logs, ( log ) => log.message );
		} );
	}

	waitForElement(selector, wait) {
		this.driver.wait( until.elementLocated( selector ), wait );
	}
	findElement(selector) {
		return this.driver.findElement(selector);
	}

	findElements(selector) {
		return this.driver.findElements(selector);
	}

	getText(selector) {
		return this.findElement(selector).getText();
	}

	type(selector, text) {
		this.findElement(selector).sendKeys(text);
	}
}
