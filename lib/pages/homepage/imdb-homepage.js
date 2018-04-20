import ImdbBasePage from '../imdb-base-page';
import SearchPage from '../search-result-page/search-result-page';

const pageAnchor = {id: 'navbar-query'};
const suggestedTraileres = {class: 'ninja_left'};

export default class ImdbHomePage extends ImdbBasePage {
	constructor( driver, visit = false ) {
		super( driver, pageAnchor, visit, '' );
	}
  
	getSuggestedTraileres() {
		console.log('gathering all suggested trailer from trailer widget');
    return this.text().getElementsTexts(suggestedTraileres);
  }
  
  submitSearch() {
    console.log('Submitting Search');
    this.interactions().click(submitButton);
    return new SearchPage(this.driver);
  }
}
