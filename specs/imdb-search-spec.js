import assert from 'assert';
import webdriver from 'selenium-webdriver';
import test from 'selenium-webdriver/testing';
import config from 'config';
import ImdbHomePage from '../lib/pages/imdb-home-page';

let driver;

const mochaTimeoutMS = config.get( 'mochaTimeoutMS' );

test.describe( 'IMDB Search', function() {
	this.timeout( mochaTimeoutMS );

	test.before( function() {
		driver = new webdriver.Builder().withCapabilities( webdriver.Capabilities.chrome() ).build();
	} );

	test.it( 'shows the search bar', function() {
		var page = new ImdbHomePage( driver, true );
		page.searchBarPresent()
		.then( function( present ) {
			assert.equal( present, true, 'Search bar is visible' );
		} );
	} );

	test.it( 'suggest the right suggestions in the search bar', function() {
		var page = new ImdbHomePage( driver, true );
		const searchTerm = 'Ryan Reynolds';
		page.search(searchTerm);
		var suggestions = page.getSearchSuggestions();

		//assert.deepEqual( searchTerm, [''], 'Suggestions are not working well...' );
	} );

	test.afterEach( () => driver.manage().deleteAllCookies() );

	//test.after( () => driver.quit() );
} );
