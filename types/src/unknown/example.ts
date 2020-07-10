export class Example {
	/**
	 * Assignments
	 * - You can assign any value to an unknown just like you can any
	 * - Variables that are strongly typed must use cast when assigning an unknown variable
	 */
	assignments() {
		let valueAny: any = 'Hello';
		let valueUnknown: unknown = 'Hello';

		valueAny = 0;
		valueUnknown = 0;

		let arrayAny: any[] = ['Hi', 0, new Date()];
		let arrayUnknown: unknown[] = ['Hi', 0, new Date()];

		let number1: number = <any>'';
		let number2: number = <number><unknown>'';
		
		//valueUnknown[1] = ''; //Compiler error
	}

	/**
	 * Methods
	 * - If a method requires a specific type, any allows you to call it with no type checking
	 * - Unknown requires you to cast. This is good because it causes the developer to think about what they're doing
	 */
	methods() {
		let valueAny: any = 'Hello';
		let valueUnknown: unknown = 'Hello';

		this.expectNumber(valueAny); //Anything goes
		this.expectNumber(<number>valueUnknown); //Invalid unless you cast

		valueAny.foo(); //This will break at runtime
		// valueUnknown.foo(); //Compiler error
	}

	private expectNumber(value: number) {}

	/**
	 * Be as specific as possible. It's better to declare a class with an unknown generic than declaring the whole object unknown
	 */
	generics() {
		let unknownObject: unknown = new GenericClass<unknown>();
		// unknownObject.value = ''; //Compiler error

		let unknownGeneric = new GenericClass<unknown>();
		unknownGeneric.value = '';
	}
}

class GenericClass<T> {
	value: T;
}