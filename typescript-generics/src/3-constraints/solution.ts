/**
 * - Notice how we have 3 generic variables for our Mapper class instead of 1 now. There is no limit to the number of generics you can have. Many generics
 * only become a problem when someone using our API has to declare all of those generics. When creating your own classes and methods, you'll have to weigh
 * the value of having strongly typed values (such as the return of the toMap()) method against the ease of creating a new class.
 * - Notice that when you extend a generic class, you must still provide those generics somehow. You can require generics on your new class and pass them
 * along or you can hard code the generic value.
 * - Notice the DescriptionMapper class requires that R extend Description. This is known as a generic constraint. You can constrain a generic to anything
 * you want. The constraint itself can even have a generic on it.
 */
export class Tester3Solution {
	constructor() {
		let rows: User[] = [
			new User(1, 'Gandalf'),
			new User(2, 'Arwyn'),
			new User(3, 'Frodo'),
			new User(4, 'Gimli')
		];

		let mapper = new DescriptionMapper(rows, row => row.id);
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

export class Mapper<R, K, V> {
	rows: R[];
	keyMapper: (row: R) => K;
	valueMapper: (row: R) => V;

	constructor(rows: R[], keyMapper: (row: R) => K, valueMapper: (row: R) => V) {
		this.rows = rows;
		this.keyMapper = keyMapper;
		this.valueMapper = valueMapper;
	}

	toMap(): Map<K, V> {
		let map = this.rows.reduce((accumulator, element) => {
			let key = this.keyMapper(element);
			let value = this.valueMapper(element);
			accumulator.set(key, value);
			return accumulator;
		}, new Map<K, V>());

		return map;
	}
}

export class DescriptionMapper<R extends Describable, K> extends Mapper<R, K, string> {
	constructor(rows: R[], keyMapper: (row: R) => K) {
		super(rows, keyMapper, row => row.description);
	}
}