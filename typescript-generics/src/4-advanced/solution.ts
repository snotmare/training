/**
 * 
 */
export class Tester4Solution {
	constructor() {
		let rows: User[] = [
			new User(1, 'Gandalf', new Date()),
			new User(2, 'Arwyn', new Date()),
			new User(3, 'Frodo', new Date()),
			new User(4, 'Gimli', new Date())
		];

		let newRows = rows.map(row => Utils.extract(row, User, 'id', 'name'));
		console.log(newRows);
	}
}

export class Utils {
	static extract<K extends keyof V, V>(value: V, constructor: ({new (): V;}), ...keys: K[]): Partial<V> {
		let newValue = new constructor();

		keys.forEach(key => {
			newValue[key] = value[key];
		});

		return newValue;
	}
}

class User {
	id: number;
	name: string;
	birthday: Date;

	constructor(id?: number, name?: string, birthday?: Date) {
		if(id) {
			this.id = id;
		}

		if(name) {
			this.name = name;
		}

		if(birthday) {
			this.birthday = birthday;
		}
	}
}
