/**
 * Convert Types | Classes
 * Задача не вызвала трудностей.
 */

// Speed O(n), Space O(n), n = array.length
class ArrayWrapper {
	array = [];

	constructor(array) {
		this.array = array;
	}

	valueOf = function () {
		return this.array.reduce((acc, v) => acc + v, 0);
	};

	toString = function () {
		return `[${this.array.join(',')}]`;
	};
}
