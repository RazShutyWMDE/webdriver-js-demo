import config from 'config';
import ImdbBaseHomePage from './imdb-base-homepage.js';
 
const pageAnchor = {id: 'navbar-query'};

export default class ImdbHomePage extends ImdbBaseHomePage {
	constructor( driver, visit = false ) {
		super( driver, pageAnchor, visit, config.get( 'imdbUrl' ) );
	}
}
