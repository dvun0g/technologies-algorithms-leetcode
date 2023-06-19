// Easy | Array + Prefix Sum
// Идея задачи легкая, реализация тоже.

// Speed O(n), Space O(1), n = gain.length
// Array + Prefix Sum | Done
const largestAltitude = function (gain) {
	let previousValue = 0;
	let maximumHeigh = previousValue;

	for (const value of gain) {
		const currentValue = previousValue + value;
		previousValue = currentValue;

		maximumHeigh = Math.max(maximumHeigh, previousValue);
	}

	return maximumHeigh;
};
