import config from 'config';
import ImdbBasePage from '../imdb-base-page';

const pageAnchor = {class: 'findHeader'};
const searchResult = {class: 'result_text'};

export default class ImdbSearchResultPage extends ImdbBasePage {
	constructor( driver, visit = false ) {
		super( driver, pageAnchor, visit);
	}
	
	getAllSearchResultTitles() {
		console.log('gathering all search results titles');
		return this.text().getElementsTexts(searchResult);
	}
}
