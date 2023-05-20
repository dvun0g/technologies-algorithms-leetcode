/**
 * Function Programming
 * Немного больше уделил времени на эту задачу.
 * TODO: Стоит реализовать универсальную функцию compose.
 */

// Speed O(n), Space O(1), n = functionArray.length
const compose = function (functionArray) {
	const functionArrayLength = functionArray.length;

	return function (value) {
		for (let i = functionArrayLength - 1; i >= 0; i--) {
			value = functionArray[i](value);
		}

		return value;
	};
};
