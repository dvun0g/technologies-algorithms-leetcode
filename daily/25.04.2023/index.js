class SmallestInfiniteSet {
	currentSmall = 1;
	addedList = [];

	popSmallest = function () {
		if (this.addedList.length) {
			return this.addedList.shift();
		} else {
			this.currentSmall = this.currentSmall + 1;
			return this.currentSmall - 1;
		}
	};

	addBack = function (number) {
		if (number < this.currentSmall) {
			if (!this.addedList.includes(number)) {
				this.addedList.push(number);
				this.addedList.sort((v1, v2) => v1 - v2);
			}
		}
	};
}

const test = function () {
	const instance = new SmallestInfiniteSet();

	console.log(instance.popSmallest());
	console.log(instance.popSmallest());
	console.log(instance.popSmallest());
	console.log(instance.popSmallest());
	console.log(instance.deleted);
};

test();
