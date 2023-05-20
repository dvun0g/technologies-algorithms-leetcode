/**
 * Algorithms | Recursive | Array
 * Возникли некоторые сложности с параметром maxDepth
 */

// Speed O(n), Space O(n), n = array.length
const flat = function (array, maxDepth) {
	if (maxDepth === 0) {
		return array;
	}

	const flattenArray = [];

	for (const value of array) {
		if (Array.isArray(value)) {
			flattenArray.push(...flat(value, maxDepth - 1));
			continue;
		}

		flattenArray.push(value);
	}

	return flattenArray;
};
