import config from 'config';
import BasePage from '../../base-page.js';
import SearchPage from '../search-result-page/search-result-page';

const quoteSelector = {id: 'navbar-query'};
const submitButton = {id: 'navbar-submit-button'};
const suggestionSelector = {xpath: '//*[@id="navbar-suggestionsearch"]/a'};
const pageAnchor = {id: 'navbar-query'};

export default class ImdbBaseHomePage extends BasePage {
	constructor( driver, visit = false ) {
		super( driver, pageAnchor, visit, config.get( 'imdbUrl' ) );
	}
  
	isSearchBarDisplayed() {
		return this.find().elements( quoteSelector ).then( e => !!e.length );
	}
  
	typeInSearch(text) {
    console.log('typing in search for ' + text);
		this.text().set(quoteSelector, text);
		this.wait().waitForElement(suggestionSelector, this.explicitWaitMS);
  }
  
  submitSearch() {
    console.log('Submitting Search');
    this.interactions().click(submitButton);
    return new SearchPage(this.driver);
  }
	
	getSearchSuggestions() {
    console.log('gathering all suggestions titles from search box');
    return this.text().getElementsTexts(suggestionSelector);
	}
}
