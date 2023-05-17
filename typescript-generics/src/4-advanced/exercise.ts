/**
 * //TODO Add description
 * 
 * Adding Generics
 * 1. Start by adding a generic in the extract method for the key, "K". This will actually take us a step back for now. This change will let you pass in numbers instead of
 * the strings "id" and "name". We'll come back to this.
 * 2. Add a generic for the value, "V". You'll need to declare V, use it with the value passed in, return V, and cast the new object to V. When
 * you are done, you should see 2 errors inside the .forEach() method.
 * 3. The error messages tell us there is something wrong with the keys, "K". The transpiler cannot verify that the values you passed in represent keys
 * in the object. After all, it will let us pass in numbers or any other type if we want to. To solve this problem, typescript introduced "keyof". Add
 * a constraint to the key generic so that it "extends keyof V".
 * 4. Inside the tester class constructor where it calls the extract() method, try passing in a different string or value that is not represented in the
 * user object. Notice that the transpiler won't let you. Also notice that you will get assistance when you start typing a new string to pass in.
 * 
 * Partial Objects
 * 5. The problem we have now is that after calling extract, typescript still thinks the type is a full User object. We need to let typescript that this
 * may or may not be true. Start by changing the return type of the extract method to "{}". This tells typescript that our return type is an object.
 * 6. Next, let's provide some information that this is an object with keys and values. Change the return type to "{any: any}". The first any represents
 * they keys of our object, the second any represents the value. You should get a build error.
 * 7. Tell typescript that the key is optional by changing the return type to "{any?: any}". The build error should go away.
 * 8. Tell typescript that the key of our return object is a key in V by changing the return type to "{[P in keyof V]?: any}". The P declares a new generic
 * for this portion of the code that represents the keys in V. The brackets are required with this syntax, but it also indicates that the object will have
 * 0 to many keys from V.
 * 9. Tell typescript that the value in our return object should match the values from the associated keys in V. Change the return type to
 * "{[P in keyof V]?: V[P]}".
 * 10. Our new return type seems like it could be useful in other places, so declare a new exported type called Partial and assign it our new return type.
 * You'll need to declare the "V" generic in the new Partial type.
 * 11. Change the return type of the extract method to use the new Partial type.
 * 12. The Partial type is actually built in to typescript and was introduced with version 2.1. Remove your new Partial type. The code should still build
 * because Partial now points to the built-in type.
 * 13. Drill in to the Partial type and explore the other built in types provided by typescript.
 * 
 * Constructors
 * Note: Inside the extract method, we're creating a new object and then casting it to V. This is perfectly acceptable the way it is. There are times it
 * is useful to require a constructor to be passed in, so we will use this example to explore how that works.
 * 14. Create a new exported type called Constructor with a generic of V. Assign the new type the value "{new (): V;}". This creates a new type that has
 * is "newable", meaning it can be called the same way you create a new Object(). The V binds the return type to what's being created. 
 * 15. Add a parameter to the extract method for passing in the constructor type "constructor: Constructor<V>". It should be before tke keys array.
 * 16. Inside the extract method, replace the new <V>{} with new constructor().
 * 17. Inside the tester constructor, pass in "User" as the 2nd parameter of the extract method. Notice the error. This is because the User constructor
 * currently requires 3 parameters to be passed in, which does not match the type we created requiring 0 parameters.
 * 18. Change all variables in the User constructor to be optional. Alternatively, change the declaration of our Constructor type to
 * "{new (...args: any): V;}"
 */
export class Tester4Exercise {
	constructor() {
		let rows: User[] = [
			new User(1, 'Gandalf', new Date()),
			new User(2, 'Arwyn', new Date()),
			new User(3, 'Frodo', new Date()),
			new User(4, 'Gimli', new Date())
		];

		let newRows = rows.map(row => Utils.extract(row, 'id', 'name'));
		console.log(newRows);
	}
}

export class Utils {
	static extract(value: any, ...keys: string[]): any {
		let newValue = <any>{};

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

	constructor(id: number, name: string, birthday: Date) {
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