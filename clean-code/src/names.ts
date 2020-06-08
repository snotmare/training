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
	
	hngNotation() {
		let numWeight = 180; // or nWeight
		let strName = 'Fred'; // or sName
		let dteBirthday = new Date(); // or dBirthday
		let aryAnimals = [];
		
		//Read this line outloud explaining wha the result will be
		console.log(strName + ' weighs ' + numWeight + ' and was born on ' + dteBirthday);
		
		for(let strAnimal of aryAnimals) {
			console.log('Animal: ' + strAnimal);
		}
	}
	
	//More readable
	noHungarianNotation() {
		let weight = 180;
		let name = 'Fred';
		let birthday = new Date();
		let animals = [];
		
		console.log(name + ' weighs ' + weight + ' and was born on ' + birthday);
		
		
		//This is still ok...
		for(let i = 0; i < animals.length; i++) {
			console.log('Animal: ' + animals[i]);
		}
		
		//But this is better...
		for(let animal of animals) {
			console.log('Animal: ' + animal);
		}

		//Fancy...
		animals.forEach(animal => console.log('Animal: ' + animal));
		
		//Works, but risky...
		animals.forEach(console.log);
	}
	
	
	
	
	/* Example 3 */
	
	//Do a search or 's' or 'date'
	shortNames() {
		let s = 'some string';
		let date = new Date();
		
		console.log('string: ' + s + ', date: ' + date);
	}
	
	
	
	
	/* Example 4 */
	
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