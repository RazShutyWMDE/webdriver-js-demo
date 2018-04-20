import config from 'config';
import ImdbBaseHomePage from './imdb-base-homepage.js';

const pageAnchor = {id: 'navbar-query'};
const suggestedTraileres = {class: 'ninja_left'};

export default class ImdbHomePage extends ImdbBaseHomePage {
	constructor( driver, visit = false ) {
		super( driver, pageAnchor, visit, config.get( 'imdbUrl' ) );
	}
  
	getSuggestedTraileres() {
		console.log('gathering all suggested trailer from trailer widget');
    return this.text().getElementsTexts(suggestedTraileres);
	}
}
