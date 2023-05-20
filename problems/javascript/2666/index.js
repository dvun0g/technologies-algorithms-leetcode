/**
 * Closure
 * Задача не вызвала трудностей.
 */

// Speed O(1), Space O(1)
const once = function (fn) {
	let isFirstCall = true;

	return function (...args) {
		if (!isFirstCall) {
			return;
		}

		isFirstCall = false;
		return fn(...args);
	};
};
