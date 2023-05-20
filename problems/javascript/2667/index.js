/**
 * Closure | Base Function
 * Задача не вызвала проблем
 */

// Speed O(1), Space O(1)
const createHelloWorld = function () {
	const helloWorldText = 'Hello World';

	return function () {
		return helloWorldText;
	};
};
