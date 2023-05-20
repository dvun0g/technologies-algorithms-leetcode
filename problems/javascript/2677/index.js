/**
 * Algorithms | Array
 * Задача не вызвала проблем
 */

// Speed O(n), Space (n) - n = initialArray.length
const chunk = function (initialArray, chuckSize) {
	return initialArray.reduce((acc, value, index) => {
		const addNewArray = index % chuckSize === 0;
		const chuckArrayIndex = Math.floor(index / chuckSize);
		if (addNewArray) {
			acc.push([]);
		}

		acc[chuckArrayIndex].push(value);

		return acc;
	}, []);
};
