export class Comments {
	/* Example 1 */
	
	//Is this jsdoc comment really helping?
	
	/**
	 * Gets us a new work order
	 * 
	 * @param type
	 * @param customerNumber
	 * @return {string}
	 */
	getNewWorkOrder(type: string, customerNumber: string): string {
		return '';
	}
	
	
	/* Example 2 */
		
	isTimeForDMVWithComments(): boolean {
		let age = 20;
		
		//Get a learner's permit
		if(age == 15) {
			return true;
		} else if(age > 15) {
			//Get a license if 16, otherwise it's every 5 years
			if(age % 5 == 0 || age == 16) {
				return true;
			}
		}
		
		return false;
	}
	
	isTimeForDMVSelfDocumenting(): boolean {
		let age = 20;
		
		if(this.canGetLearnersPermit(age)) {
			return true;
		} else if(this.isOldEnoughForLicense(age)) {
			if(this.isTimeForLicense(age)) { 
				return true;
			}
		}
		
		return false;
	}
	
	private canGetLearnersPermit(age: number): boolean {
		return age == 15;
	}
	
	private isOldEnoughForLicense(age: number): boolean {
		return age > 15;
	}
	
	private isTimeForLicense(age: number): boolean {
		return age == 16 || age % 5 == 0;
	}
}