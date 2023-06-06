// Easy | Array | Sorting
// Идея задача очень легкая, реализация тоже, проблем при решение не возникло.

// Array | Sorting | Done
// Speed O(n logn), Space O(1), n = array.length
const canMakeArithmeticProgression = function (array) {
	if (array.length <= 2) {
		return true;
	}

	array.sort((v1, v2) => v1 - v2);

	const differentValue = array[1] - array[0];

	for (let i = 2, n = array.length; i < n; ++i) {
		const currentValue = array[i];
		const prevValue = array[i - 1];

		if (currentValue - prevValue !== differentValue) {
			return false;
		}
	}

	return true;
};
