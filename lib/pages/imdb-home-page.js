import webdriver from 'selenium-webdriver';
import config from 'config';
import BasePage from '../base-page.js';

const quoteSelector = {id: 'navbar-query'};
const suggestionSelector = {id: 'navbar-suggestionsearch'};
export default class ImdbHomePage extends BasePage {
	constructor( driver, visit = false ) {
		const pageAnchor = {id: 'navbar-query'};
		super( driver, pageAnchor, visit, config.get( 'imdbUrl' ) );
	}


	searchBarPresent() {
		return this.findElements( quoteSelector ).then( e => !!e.length );
	}
	quoteTextDisplayed() {
		return this.getText( quoteSelector );
	}

	search(text) {
		this.type(quoteSelector, text);
		this.waitForElement(suggestionSelector, this.explicitWaitMS);
	}
	
	getSearchSuggestions() {		
		return this.findElements(webdriver.By.css('title')).then(found => console.log('Element found? %s', !!found.length));;
	}

}
