export class PrimeFactors {
	private range(end: number): number[] {
		let i = 2, result = [];
		
		while(i <= end) {
			result.push(i++)
		}

		return result;
	}
	
	public factors(num: number): number[] {
		if (num === 1) {
			return [];
		}

		for (let i of this.range(num)) {
			if (num % i === 0) {
				return [i].concat(this.factors(num / i))
			}
		}				
		return [num]
	}
}