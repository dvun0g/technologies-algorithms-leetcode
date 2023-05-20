/**
 * Standard Library Methods | Array
 * Задача не вызвала каких-либо сложностей.
 */

// Speed O(n), Space O(1), n - длина массива
const reduce = function (initialArray, callback, initialValue) {
	let resultValue = initialValue;
	const initialArrayLength = initialArray.length;

	for (let i = 0; i < initialArrayLength; ++i) {
		resultValue = callback(resultValue, initialArray[i], i, initialArray);
	}

	return resultValue;
};
