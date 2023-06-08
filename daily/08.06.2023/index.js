// Easy | Matrix + Binary Search
// Идея простая - бинарный поиск, небольшие проблемы возникли с релизацией бинарного поиска

const binarySearchCountNegaviteNumbers = function (array) {
	const isEmptyArray = array.length === 0;

	if (isEmptyArray) {
		return 0;
	}

	let start = 0;
	let end = array.length - 1;

	while (start <= end) {
		const middle = Math.floor((end + start) / 2);
		if (array[middle] >= 0) {
			start = middle + 1;
		} else {
			end = middle - 1;
		}
	}

	return array.length - start;
};

// Matrix + Binary Search | Done
// Speed O(n * logn), Space O(1), n = matrix[0].length * matrix.length
const countNegatives = function (matrix) {
	let result = 0;

	for (let i = 0, n = matrix.length; i < n; ++i) {
		result += binarySearchCountNegaviteNumbers(matrix[i]);
	}

	return result;
};
