/**
 * Closure
 * Задача не вызвала сложностей.
 */

// Speed O(1), Space O(1)
const createCounter = function (initialValue) {
	let counter = initialValue;

	const increment = () => ++counter;
	const decrement = () => --counter;
	const reset = () => (counter = initialValue);

	return {
		increment,
		decrement,
		reset,
	};
};
