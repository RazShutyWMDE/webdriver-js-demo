import webdriver from 'selenium-webdriver';
import config from 'config';
import { map } from 'lodash';
import WaitComponent from './components/wait.js';
import TextComponent from './components/text.js';
import FindComponent from './components/find.js';

export default class BasePage {
	constructor( driver, expectedElementSelector, visit = false, url = null ) {
		this.explicitWaitMS = config.get( 'explicitWaitMS' );
		this.driver = driver;
		this.driver.manage().timeouts().implicitlyWait(100);
    
		this.expectedElementSelector = expectedElementSelector;
		this.url = url;
    
		if ( visit ) this.driver.get( this.url );
    
		console.log('Waiting for page to load');
		this.driver.wait( webdriver.until.elementLocated( this.expectedElementSelector ), this.explicitWaitMS );
  }
    
  wait() {
    return new WaitComponent(this);
  }

  text() {
    return new TextComponent(this);
  }

  find() {
    return new FindComponent(this);
  }
  
	consoleErrors() {
    return this.driver.manage().logs().get( 'browser' ).then( ( logs ) => {
      return map( logs, ( log ) => log.message );
    });
	}
}