/**
 * Sorting | HashMap | Array
 * При решение задачи не возникло проблем.
 */

// Speed O(n logn), Space O(n), n = array.length
const topKFrequent = function (array, counterNumbers) {
	const collectionNumbers = Object.create(null);

	for (const value of array) {
		if (!Object.hasOwn(collectionNumbers, value)) {
			collectionNumbers[value] = 0;
		}

		collectionNumbers[value] += 1;
	}

	return Object.keys(collectionNumbers)
		.sort((key1, key2) => collectionNumbers[key2] - collectionNumbers[key1])
		.slice(0, counterNumbers);
};
