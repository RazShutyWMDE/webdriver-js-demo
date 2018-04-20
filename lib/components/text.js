import webdriver from 'selenium-webdriver';

export default class Text {
	constructor( session ) {
		//log.debug('contructing Text');
		this.session = session;
	}
	
	get(selector) {
		//log.debug('get: ' + selector);
		let text = this.session.find().element(selector).getText();
		//log.debug('text found: ' + text);
		return text;
		
	}
	
	set(selector, text) {
		//log.debug('set ' + text + ' on: ' + selector);
		this.session.find().element(selector).sendKeys(text);
	}
	
	getElementsTexts(selector) {
		//log.debug('getElementsTexts of: ' + selector);
		var elementsTexts = [];
		return this.session.find().elements(selector).then( elements => {
			elements.forEach(element => {
				element.getText().then( elementText => elementsTexts.push(elementText));
			});
			//log.debug('texts found: ' + elementsTexts);
			return elementsTexts;
		});
	}
}
