export class Complexity {
	/* Example 1 */
	
	billWorkOrderComplex(wono: string) {
		if(wono !== null && wono.length === 5) {
			let workOrderData = new WorkOrderData();
			let workOrder = workOrderData.getWorkOrder(wono);
			
			if(workOrder !== null) {
				let cost = workOrder.cost;
				
				if(workOrder.type === 'Paint') {
					cost = cost * 1.1;
				} else if(workOrder.type === 'Interior') {
					cost = cost * .95;
				}
				
				workOrder.cost = cost;
				
				let customerData = new CustomerData();
				let emails = customerData.getEmails(wono);
				
				for(let email of emails) {
					if(email !== null && email.length > 0) {
						let subject = 'Your invoice';
						let body = 'Your total is: ' + workOrder.cost;
						
						let emailUtility = new EmailUtility();
						emailUtility.sendEmail(email, subject, body);
					}
				}
				
				if(workOrder.projectManagerEmail !== null && workOrder.projectManagerEmail.length > 0) {
					let subject = 'Work order billed';
					let body = 'The customer total is: ' + workOrder.cost;
					
					let emailUtility = new EmailUtility();
					emailUtility.sendEmail(workOrder.projectManagerEmail, subject, body); 
				}
			} else {
				throw new Error('Work order could not be found');
			}
		} else {
			throw new Error('Invalid work order #: ' + wono);
		}
	}
	
	
	billWorkOrderSimple(wono: string) {
		//Fail fast
		if(!this.validateWorkOrder(wono)) {
			return;
		}
		
		let workOrderData = new WorkOrderData();
		let workOrder = workOrderData.getWorkOrder(wono);
		
		//Return early
		if(workOrder === undefined) {
			throw new Error('Work order could not be found');
		}
		
		//Do one thing and do it well
		this.adjustedCost(workOrder);
		this.emailCustomer(workOrder);
		this.notifyProjectManager(workOrder);
	}
	
	validateWorkOrder(wono: string): boolean { return true; }
	adjustedCost(workOrder: WorkOrder) {}
	emailCustomer(workOrder: WorkOrder){}
	notifyProjectManager(workOrder: WorkOrder){}
	
	
	
	/* Example 2 */
	
	static readonly TYPE_SHOE = 'SHOE';
	static readonly TYPE_BOOT = 'BOOT';
	static readonly TYPE_SANDLE = 'SANDLE';
	static readonly TYPE_FLIP_FLOP = 'FLIP_FLOP';
	
	
	//Magic numbers
	static readonly SUNDAY = 1;
	static readonly SATURDAY = 7;
	
	complexIf() {
		let type = 'SHOE';
		let dayOfWeek = 2;
		let discount = 0;
		
		//What does this if statement do?
		//Can anyone find the bug?
		
		if(type !== null
			&& ((type === Complexity.TYPE_SHOE || type === Complexity.TYPE_BOOT)
				&& (dayOfWeek === Complexity.SUNDAY || dayOfWeek === Complexity.SATURDAY))
			|| (type === Complexity.TYPE_SANDLE && dayOfWeek !== Complexity.SUNDAY && dayOfWeek !== Complexity.SATURDAY)) {
			discount = 50;
		}
		
		console.log('discount: ' + discount + '%');
	}
	
	
	
	simpleIf() {
		let type = 'SHOE';
		let dayOfWeek = 2;
		let discount = 0;
		
		//Can you see the error now?
		
		//The method calls convey intent clearly
		if(this.isTypeValid(type)
			&& (this.isClosedType(type) && this.isWeekend(dayOfWeek))
			|| !this.isClosedType(type) && !this.isWeekend(dayOfWeek)) {
			discount = 50;
		}
		
		console.log('discount: ' + discount + '%');
	}
	
	isTypeValid(type: string): boolean {
		return type != null;
	}
	
	isClosedType(type: string): boolean {
		return Complexity.TYPE_SHOE === type || Complexity.TYPE_BOOT === type;
	}
	
	isWeekend(dayOfWeek: number): boolean {
		return dayOfWeek == Complexity.SUNDAY || dayOfWeek == Complexity.SATURDAY;
	}
	
	
	
	
	/* Example 3 */
	
	private badConstructor() {
		let wono = 'AAAA';
		let customerNumber = '1234556';
		let dateDue = new Date();
		let projectManager = 'Bob';
		let note = 'This is a note';
		
		//Whoops!
		let workOrder = new BadWorkOrder(wono, customerNumber, dateDue, projectManager, note);
	}

	private builderConstructor() {
		let workOrder = new WorkOrderBuilder('ABCDE')
			.setCustomerNumber('1234')
			.setProjectManager('Joe Montana')
			.setNote('This is a note')
			.build();
	}
	
	private interfaceBuilder() {
		let workOrder = new BestWorkOrder({
			wono: 'AAAA',
			customerNumber: '1234',
			projectManager: 'Julie',
			note: 'This is a note'
		});
	}
	
	
	
	/* Example 4 */
	
	doProcess() {
		setInterval(() => {
			//Lots of code...
			
			setInterval(() => {

			});
		
			
			
			
			
			//This should be broken out into a method
			
			
			//Various nested callbacks, eck
			setInterval(() => {
				setInterval(() => {
					setInterval(() => {

					});
				});
			});

			
			
			//End of lots of code
		});
	}
	
	
	
	
	/* Example 5 */
	
	myTest() {
		let value = 0;
		
		if(true) {
			value = 5;
		} else {
			value = 10;
		}
		
		//Ternary is cleaner and simpler
		value = true ? 5 : 10;
	}
}




class WorkOrderData {
	public getWorkOrder(wono: string): WorkOrder {
		return new WorkOrder();
	}
}

class WorkOrder {
	wono: string;
	type: string;
	cost: number;
	projectManagerEmail: string;
}

class CustomerData {
	public getEmails(wono: string): string[] {
		return [];
	}
}

class EmailUtility {
	public sendEmail(to: string, subject: string, body: string) {}
}

enum FootwareType {
	SHOE,
	SANDLE,
	BOOT
}

class BadWorkOrder {
	private wono: string;
	private customerNumber: string;
	private dateDue: string;
	private projectManager: string;
	private status: string;
	private note: string

	constructor(wono: string, customerNumber?: string, dateDue?: Date, projectManager?: string, status?: string, note?: string) {
		//Set values
	}
}

class WorkOrderBuilder {
	private _wono: string;
	private _customerNumber: string;
	private _dateDue: string;
	private _projectManager: string;
	private _status: string;
	private _note: string
	
	constructor(wono: string) {
		this.setWono(wono);
	}
	
	get wono(): string {
		return this._wono;
	}
	
	setWono(wono: string): this {
		this._wono = wono;
		return this;
	}
	
	get customerNumber(): string {
		return this._customerNumber;
	}
	
	setCustomerNumber(customerNumber: string): this {
		this._customerNumber = customerNumber;
		return this;
	}
	
	get dateDue(): string {
		return this._dateDue;
	}
	
	setDateDue(dateDue: string): this {
		this._dateDue = dateDue;
		return this;
	}
	
	get projectManager(): string {
		return this._projectManager;
	}
	
	setProjectManager(projectManager: string): this {
		this._projectManager = projectManager;
		return this;
	}

	get status(): string {
		return this._status;
	}
	
	setStatus(status: string): this {
		this._status = status;
		return this;
	}

	get note(): string {
		return this._note;
	}
	
	setNote(note: string): this {
		this._note = note;
		return this;
	}
	
	build(): OkWorkOrder {
		return new OkWorkOrder(this);
	}

}

class OkWorkOrder {
	private wono: string;
	private customerNumber?: string;
	private dateDue?: string;
	private projectManager?: string;
	private status?: string;
	private note?: string

	constructor(builder: WorkOrderBuilder) {
		//Set values
	}
}

interface WorkOrderOptions {
	wono: string;
	customerNumber?: string;
	dateDue?: string;
	projectManager?: string;
	status?: string;
	note?: string
}

class BestWorkOrder {
	private wono: string;
	private customerNumber?: string;
	private dateDue?: string;
	private projectManager?: string;
	private status?: string;
	private note?: string

	constructor(options: WorkOrderOptions) {
		//Set values
	}
}