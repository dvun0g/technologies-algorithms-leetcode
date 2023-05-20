/**
 * Function Programming | Recursive
 * Задача не вызвала проблем.
 */

// Speed O(1), Space O(n), n - количество аргументов функции
const curry = function (fn) {
	const initialArgumentsArrayLength = fn.length;
	const currentArgumentsArray = [];

	return function curried(...args) {
		currentArgumentsArray.push(...args);

		if (currentArgumentsArray.length === initialArgumentsArrayLength) {
			return fn(...currentArgumentsArray);
		}

		return curried;
	};
};
