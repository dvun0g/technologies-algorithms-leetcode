class KthLargest {
	constructor(counter, array) {
		this.array = [...array].sort((val1, val2) => val1 - val2);
		this.counter = counter;
	}

	add = function (value) {
		const arrayLength = this.array.length;

		for (let i = 0; i < arrayLength; ++i) {
			if (this.array[i] >= value) {
				this.array.splice(i, 0, value);
				break;
			}
		}

		if (arrayLength === this.array.length) {
			this.array.push(value);
		}

		return this.array[this.array.length - this.counter];
	};
}
