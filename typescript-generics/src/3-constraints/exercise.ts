/**
 * 1. Add generics to the Mapper class so that the key is returned as the correct type instead of unknown. You'll need to add a new genric variable
 * to the class that represents the key.
 * 2. Add a value mapper to the Mapper class similar to how the key mapper works. You'll need to add a new generic variable to the class for the value.
 * 3. Modify the new Mapper object created in the tester constructor to pass in a function that returns the name of the row for the value mapping.
 * 4. Create a new class that extends the Mapper class. Call it DescriptionMapper. This purpose of this class is to use the description interface to
 * return a string value with the value mapper. You should start by declaring the same generic variables as the Mapper class and passing them to the class you 
 * extend.
 * 5. In your new class modify the R generic variable so that the row must be a Describable.
 * 6. In your new class constructor, call super passing in the rows array and the keyMapper passed in, but hard code a function to return the row's description
 * for the value mapper. You should no longer need to pass in a value mapper to the DescriptionMapper class constructor.
 * 7. Sicne we are hard coding the value mapper, you can remove the value generic from the DescriptionMapper and hard code a string for the Mapper value generic.
 * 8. In the tester constructor, create a new DescriptionMapper instead of a Mapper.
 * 9. Make sure that the map returned by the toMap() method returns a Map<number, string>.
 * 10. In the toMap() method of the Mapper class, remove the generics on the new Map<K, V>(). Notice that the method still compiles fine. However, notice how the
 * map variable is defined as a Map<any, any>. This compiles because the "any" type removes all compile time checks.
 * 11. In the toMap() method of the Mapper class, change the generics of the new Map<K, V>() to Map<unknown, unknown>(). Notice how you now get a compile "not assignable"
 * error. This is why "unknown" is better than "any". It allows you to still provide any value, but it retains compile type checking.
 * 12. Undo the previous 2 steps so the toMap() method once again creates a new Map<K, V>(). Change the accumulator.set() method to pass in a (key, key) intead of a
 * (key, value). Notice the compile error. When creating an API, having generics helps users of the API have strongly typed results, but it also helps your internal
 * code to be type checked. Undo this change.
 */
export class Tester3Exercise {
	constructor() {
		let rows: User[] = [
			new User(1,'Gandalf'),
			new User(2, 'Arwyn'),
			new User(3, 'Frodo'),
			new User(4, 'Gimli')
		];

		let mapper = new Mapper(rows, value => value.id);
		let map = mapper.toMap();

		console.log(map);
	}
}

class User implements Describable {
	id: number;
	name: string;

	constructor(id: number, name: string) {
		this.id = id;
		this.name = name;
	}

	get description(): string {
		return this.name;
	}
}

interface Describable {
	description: string;
}

export class Mapper<R> {
	rows: R[];
	keyMapper: (row: R) => unknown;

	constructor(rows: R[], keyMapper: (row: R) => unknown) {
		this.rows = rows;
		this.keyMapper = keyMapper;
	}

	toMap(): Map<unknown, R> {
		let map = this.rows.reduce((accumulator, element) => {
			let key = this.keyMapper(element);
			accumulator.set(key, element);
			return accumulator;
		}, new Map<unknown, R>());

		return map;
	}
}