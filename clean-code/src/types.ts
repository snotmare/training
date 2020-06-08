export class Types {
	
	/* Example 1 */
	
	processData1() {
		let name: any = 'Martha';
		this.displayLengthOfName(name);
		
		let stronglyTypedName = 'Martha';
		this.displayLengthOfName(stronglyTypedName);

		let lazyTypedName;
		lazyTypedName = 'Martha';
		this.displayLengthOfName(lazyTypedName);
	}
	
	displayLengthOfName(name: any) {
		if(name === undefined || name === null) {
			name = '';
		}
		
		if(typeof name === 'string') {
			console.log('length: ' + name.length);
		}
	}

	
	
	
	
	/* Example 2 */
	
	processData2() {
		let person = ['Bob', 'Smith', 50];
		
		this.displayPersonArray(person);
	}
	
	displayPersonArray(person: any[]) {
		//You don't always know what type of data is at what element in the array
		console.log('Name: ' + person[0] + ' ' + person[1] + ', age: ' + person[2]);
	}
	
	processData3() {
		let person = new Person();
		person.firstName = 'Mike';
		person.lastName = 'Jordan';
		person.age = 50;
		
		this.displayPerson(person);
	}
	
	//This is much more clear and you can guarentee the type of info coming in
	displayPerson(person: Person) {
		console.log('Name: ' + person.firstName + ' ' + person.lastName + ', age: ' + person.age);
	}
	
	
	
	
	/* Example 3 */
	
	processParameters() {
		// Not strongly typed
		let parameters = new Map<string, any>();
		parameters.set('param1', 'value1');
		parameters.set('param2', 10);
		parameters.set('param3', new Date());
		
		this.doSomethingMap(parameters);
		
		
		
		
		//Strongly typed
		let stronglyTypedParameters: StronglyTypedParameters = {
			param1: 'value',
			param2: 10,
			param3: new Date()
		}
		
		this.doSomething(stronglyTypedParameters);
	}
	
	doSomethingMap(parameters: Map<string, any>) {
		console.log(parameters.get('param1'));
		console.log(parameters.get('param2'));
		console.log(parameters.get('param3'));
	}
	
	doSomething(parameters: StronglyTypedParameters) {
		console.log(parameters.param1);
		console.log(parameters.param2);
		console.log(parameters.param3);
	}
	
}

class Person {
	firstName: string;
	lastName: string;
	age: number;
}

interface StronglyTypedParameters {
	param1: string;
	param2: number;
	param3: Date;
}