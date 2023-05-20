/**
 * Standard Library Methods | Array
 * Задача не вызвала трудностей.
 */

// Speed O(n), Space O(1), n = initialArray.length
const map = function (initialArray, callback) {
	return initialArray.reduce((acc, value, index, array) => {
		acc.push(callback(value, index, array));
		return acc;
	}, []);
};
