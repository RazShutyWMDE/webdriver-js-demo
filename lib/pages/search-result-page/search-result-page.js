import config from 'config';
import ImdbBaseHomePage from './imdb-base-homepage.js';

const pageAnchor = {class: 'findHeader'};
const searchResult = {class: 'result_text'};

export default class ImdSearchResultPage extends ImdbBaseHomePage {
	constructor( driver, visit = false ) {
		super( driver, pageAnchor, visit );
	}
  
	getAllSearchResultTitles() {
		console.log('gathering all search results titles');
    return this.text().getElementsTexts(searchResult);
	}
}