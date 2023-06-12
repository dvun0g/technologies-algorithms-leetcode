// Easy | Array + Two Pointer
// Идея задачи очевидная, реализация тоже.

// Array + Two Pointer | Done
// Speed O(n), Space O(n), n = array.length
const summaryRanges = function (array) {
	const isEmptyArray = array.length === 0;
	if (isEmptyArray) {
		return [];
	}

	const isOneValueArray = array.length === 1;
	if (isOneValueArray) {
		return [array[0].toString()];
	}

	let startRangeValue = array[0];
	const ranges = [];

	for (let i = 1, n = array.length; i <= n; ++i) {
		const prevValue = array[i - 1];
		const currentValue = array[i];

		if (currentValue - prevValue !== 1) {
			if (prevValue === startRangeValue) {
				ranges.push(prevValue.toString());
				startRangeValue = currentValue;
				continue;
			}

			ranges.push(`${startRangeValue}->${prevValue}`);
			startRangeValue = currentValue;
		}
	}

	return ranges;
};
