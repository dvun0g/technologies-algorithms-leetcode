/**
 * Задача не вызвала каких-либо затруднений.
 */

// Speed O(1), Space O(1)
Array.prototype.last = function () {
	const array = this;
	const arrayLength = array.length;

	const isEmptyArray = arrayLength === 0;
	const defaultValue = -1;
	if (isEmptyArray) {
		return defaultValue;
	}

	return array.at(-1);
};
