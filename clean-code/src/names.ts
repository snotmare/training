export class Names {
	/* Example 1 */
	
	//Anyone know what this method name is or what the variables hold?
	mkChcltChpCkie() {
		let sgr = '';
		let chkChp = '';
		let flr = '';
		
		let ingrs = [sgr, chkChp, flr];
		
		let cookie = ingrs.join();
	}
	
	
	
	
	/* Example 2 */
	
	//Do a search or 's' or 'date'
	shortNames() {
		let s = 'some string';
		let date = new Date();
		
		console.log('string: ' + s + ', date: ' + date);
	}
	
	
	
	
	/* Example 3 */
	
	longNames() {
		//Too long
		let walmartBasePriceWithSaleDiscountAndShoppersCoupon = 50;
		
		//Simpler is better
		let calculatedPrice = 50;
	}
	
	//Too long
	doLaunchShuttleToMoonToGetRocksAndPlaceFlag() {
		
	}
	
	//Simpler and more flexible 
	launch(whatToLaunch: any, destination: any, tasks: any[]) {
		
	}
}