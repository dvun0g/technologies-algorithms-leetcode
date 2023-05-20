/**
 * Function | Timeout
 * Немножко сложноватая задача для меня,
 * но в принципе затратил немного времени на ее решение
 */

// Speed O(1), Space O(1)
const debounce = function (fn, milliseconds) {
	let timeoutId = null;

	return function (...args) {
		if (timeoutId !== null) {
			clearTimeout(timeoutId);
		}

		timeoutId = setTimeout(function () {
			fn(...args);
			clearTimeout(timeoutId);
		}, milliseconds);
	};
};
