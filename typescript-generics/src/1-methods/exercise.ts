/**
 * There are 2 places to add generic parameters. This focuses on methods.
 * 1. Add generics to the duplicate method so that it will return an array of the same type as the
 * value you pass in.
 * 2. Mouse over the array variable in the test method and to verify it is a string array.
 * 3. At this point, you should have declared a generic variable and used it in 2 places (see solution). Remove the first use for the value parameter inside the method.
 * Notice that the code still builds and will run. Mousing over the array variable in the test method and notice that we're back to an unknown array even though we
 * declared a generic variable and use it in the method's return type. The reason for this is because our method doesn't know what your generic represents. It is not
 * bound to a type. When you bind the generic to something you pass in, the transpiler recognizes the type and applies that type to all places the generic is used.
 */
export class Utils {
	static test() {
		let array = Utils.duplicate('value', 3);
		console.log(array);
	}

	static duplicate(value: unknown, count: number): unknown[] {
		return new Array(count).fill(value);
	}
}