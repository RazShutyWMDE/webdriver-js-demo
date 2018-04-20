import webdriver from 'selenium-webdriver';
import config from 'config';
import { map } from 'lodash';
import WaitComponent from '../components/wait';
import TextComponent from '../components/text';
import FindComponent from '../components/find';
import InteractionsComponent from '../components/interactions';

const explicitWaitMS = config.get( 'explicitWaitMS' );

export default class BasePage {
	constructor( driver, expectedElementSelector, visit = false, url = null ) {
		this.driver = driver;
		this.driver.manage().timeouts().implicitlyWait(100);    
    if ( visit ) this.driver.get( url );
    
    console.log('Waiting for page to load');
    this.driver.wait( webdriver.until.elementLocated( expectedElementSelector ), this.explicitWaitMS );
  }
  
  wait() {
    return new WaitComponent(this);
  }

  interactions() {
    return new InteractionsComponent(this);
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