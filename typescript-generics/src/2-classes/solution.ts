/**
 * - Notice the <T> at the end of the Duplicator class declaration. This declares a generic variable that
 * can be used anywhere inside the class. It is class-scoped.
 * - When building a class that uses generics, you treat any generic variable as an "unknown" type.
 */
class Tester {
	constructor() {
		let duplicator = new Duplicator('value');
		let array = duplicator.duplicate(3);
	}
}

export class Duplicator<T> {
	private value: T;

	constructor(value: T) {
		this.value = value;
	}

	duplicate(count: number): T[] {
		return new Array(count).fill(this.value);
	}
}