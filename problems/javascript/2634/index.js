/**
 * Standard Library Methods | Array
 * Задача не вызвала сложностей. 
 */

// Speed O(n), Space O(1), n = initialArray.length
const filter = function (initialArray, callback) {
	return initialArray.reduce((acc, value, index, array) => {
		if (callback(value, index, array)) {
			acc.push(value);
		}

		return acc;
	}, []);
};
