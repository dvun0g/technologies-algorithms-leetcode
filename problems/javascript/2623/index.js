/**
 * Function | HashMap
 * Задача не вызваала проблем.
 */

// Speed O(1), Space O(n), n = количество вызовов функции с уникальными аргументами.
const memoize = function (fn) {
	const previousArgumentsCollection = Object.create(null);

	return function (...args) {
		const key = args.join(',');
		if (Object.hasOwn(previousArgumentsCollection, key)) {
			return previousArgumentsCollection[key];
		}

		previousArgumentsCollection[key] = fn(...args);
		return previousArgumentsCollection[key];
	};
};
