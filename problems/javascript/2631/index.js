/**
 * Lodash | Algorithms | Array
 * Задача не вызвала проблем.
 */

// Speed O(n), Space O(n), n = array.length
Array.prototype.groupBy = function (callback) {
	const array = this;

	return array.reduce((acc, value) => {
		const key = callback(value);

		if (!Object.hasOwn(acc, key)) {
			acc[key] = [];
		}

		acc[key].push(value);

		return acc;
	}, {});
};
