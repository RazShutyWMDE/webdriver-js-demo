import config from 'config';
import BasePage from '../../base-page.js';

const quoteSelector = {id: 'navbar-query'};
const suggestionSelector = {xpath: '//*[@id="navbar-suggestionsearch"]/a'};
const pageAnchor = {id: 'navbar-query'};

export default class ImdbBaseHomePage extends BasePage {
	constructor( driver, visit = false ) {
		super( driver, pageAnchor, visit, config.get( 'imdbUrl' ) );
	}
  
	isSearchBarDisplayed() {
		return this.find().elements( quoteSelector ).then( e => !!e.length );
	}
  
	search(text) {
    console.log('searching for ' + text);
		this.text().set(quoteSelector, text);
		this.wait().waitForElement(suggestionSelector, this.explicitWaitMS);
	}
	
	getSearchSuggestions() {
    console.log('gathering all suggestions titles from search box');
    return this.text().getElementsTexts(suggestionSelector);
	}
}
