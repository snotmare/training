/**
 * - Notice the <T> before the ( of the duplicate method. This declares a variable for the generic that can be
 * used anywhere in the method. You cannot use that generic variable anywhere outside the method. It is 
 * method-scoped.
 * - By convention, the generic variable is a single charactor name (ex: T). In more complicated situations,
 * you may find it useful to have a longer name. First, consider refactoring to make it less complex. Second,
 * try to use no more than a 2 character variable name (ex: SR instead of SearchRow).
 * - The name of the generic variable should represent what it is used for. Most of the time you can use T for
 * type or V for value. Other examples include R for row and F for filter.
 */
export class Utils {
	static test() {
		let array = Utils.duplicate('value', 3);
	}
	
	static duplicate<T>(value: T, count: number): T[] {
		return new Array(count).fill(value);
	}
}