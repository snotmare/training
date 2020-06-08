export class Scope {
	
	/* 
	 * Example 1
	 */
	
	topVariables() {
		let firstName = 'Sarah';
		let secondName = 'Bob';
		let minNames = 2;
		let maxNames = 5;
		let maxNameLength = 30;
		
		
		console.log(firstName);
		console.log(secondName);
		
		//Some more code
		
		let names = [firstName, secondName];
		
		for(let name of names) {
			console.log(name);
		}
		
		//Some more code
		
		if(names.length < minNames) {
			throw new Error('Not enough names');
		}
		
		//Some more code
		
		if(names.length > maxNames) {
			throw new Error('Too many names');
		}
		
		for(let name of names) {
			if(name.length > maxNameLength) {
				throw new Error('The name ' + name + ' is too long');
			}
		}
	}
	
	/*
	 * Advantages:
	 * - Clarity of what variables are doing and how they are used
	 * - Better use of memory... no need to declare variables that are never used (returning early)
	 * - What if the max name length was the result of an expensive method call and we did that at the top?
	 */
	inlineVariables() {
		let firstName = 'Sarah';
		let secondName = 'Bob';
		
		console.log(firstName);
		console.log(secondName);
		
		//Some more code
		
		let names = [firstName, secondName];
		
		for(let name of names) {
			console.log(name);
		}
		
		//Some more code
		
		let minNames = 2;
		
		if(names.length < minNames) {
			throw new Error('Not enough names');
		}
		
		//Some more code
		
		let maxNames = 5;
		
		if(names.length > maxNames) {
			throw new Error('Too many names');
		}
		
		let maxNameLength = 30;
		
		for(let name of names) {
			if(name.length > maxNameLength) {
				throw new Error('The name ' + name + ' is too long');
			}
		}
	}
}

/* 
 * Example 2
 * - Problem with non-private members
 */

abstract class Life {
	name: string;
	age: number; //in milliseconds
	birthday: Date;
	
	calculateAge() {
		//Some time consuming age calculating that accounts for time zones, leap years, etc
		
		this.age = 10;
	}
	
	protected abstract celebrateBirthday();
}

class Person extends Life {
	protected celebrateBirthday() {
		if(this.age == 1) {
			//Get sugar free cake
		} else if(this.age == 16) {
			//Give keys to new car
		} else if(this.age > 75) {
			//Get sugar free cake
		}
	}
}

class Animal extends Life {
	protected celebrateBirthday() {
		if(this.age == 1) {
			//Get ball
		} else if(this.age == 5) {
			//Take to vet to get shots
		}
	}
}

function processLife() {
	let person = new Person();
	person.name = 'Bill';
	person.birthday = new Date(1984, 4, 15);
	person.calculateAge();
	
	let animal = new Animal();
	animal.name = 'Fido';
	animal.birthday = new Date(2015, 2, 16);
	animal.calculateAge();
	
	//Do stuff
	
	if(isAdopted()) {
		//Uh oh, now we've messed up the age
		person.birthday.setFullYear(1983);
	}
}

function isAdopted() {
	return (Math.random() * 10) % 2 == 0;
}
