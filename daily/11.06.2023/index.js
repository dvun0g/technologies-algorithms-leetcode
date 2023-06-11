// Medium | Design + Array + Binary Search
// Идея не самая простая, но быстро до нее дошел. С реализацией бинарного поиска возникли небольшие проблемки.

// Design + Array + Binary Search | Done
// Speed O(logn), Space O(n + s), n = this.array.length, s = calls set
class SnapshotArray {
	array = [];
	snapId = 0;

	constructor(length) {
		if (length <= 0) {
			return;
		}

		this.array = new Array(length).fill().map(() => []);
	}

	set = function (index, val) {
		this.array[index].push([val, this.snapId]);
	};

	snap = function () {
		this.snapId += 1;
		return this.snapId - 1;
	};

	binarySearch = function (array, target) {
		let resultIndex = -1;

		let left = 0;
		let right = array.length - 1;

		while (left <= right) {
			const middle = left + Math.floor((right - left) / 2);
			if (array[middle][1] <= target) {
				resultIndex = middle;
				left = middle + 1;
			} else {
				right = middle - 1;
			}
		}

		return resultIndex;
	};

	get = function (index, snapId) {
		const currentElements = this.array[index];
		const resultIndex = this.binarySearch(currentElements, snapId);

		if (resultIndex === -1) {
			return 0;
		}

		return currentElements[resultIndex][0];
	};
}
