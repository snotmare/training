/**
 * 1. Add generics to the duplicate method so that it will return an array of the same type as the
 * value you pass in.
 * 2. Mouse over the array variable in the test method and to verify it is a string array.
 */
export class Utils {
	static test() {
		let array = Utils.duplicate('value', 3);
	}

	static duplicate(value: unknown, count: number): unknown[] {
		return new Array(count).fill(value);
	}
}