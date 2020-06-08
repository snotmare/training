/**
 * 1. Add generics to the Duplicator class so that the duplicate method will return an array of the same type as the
 * value you pass in the constructor.
 * 2. Mouse over the array variable in the Tester class and to verify it is a string array.
 */
class Tester {
	constructor() {
		let duplicator = new Duplicator('value');
		let array = duplicator.duplicate(3);
	}
}

export class Duplicator {
	private value: unknown;

	constructor(value: unknown) {
		this.value = value;
	}

	duplicate(count: number): unknown[] {
		return new Array(count).fill(this.value);
	}
}