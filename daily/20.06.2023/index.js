// Medium | Array + Prefix Sum + Sliding Window
// Идея задачи достаточно легкая, при реализации много времени уделил двум указателям для sliding window

// Array + Prefix Sum + Sliding Window | Done
// Speed O(n), Space O(n), n = array.length
const getAverages = function (array, k) {
	const arrayAverageSum = new Array(array.length).fill().map(() => -1);

	if (k > array.length) {
		return arrayAverageSum;
	}

	let sumSubArray = 0;
	const countElementsInSumSubArray = k * 2 + 1;

	for (let left = 0, right = 0, n = array.length; right < n; right++) {
		sumSubArray += array[right];

		if (right - left + 1 !== countElementsInSumSubArray) {
			continue;
		}

		const averageSumSubArray = Math.floor(
			sumSubArray / countElementsInSumSubArray
		);
		arrayAverageSum[right - k] = averageSumSubArray;

		sumSubArray -= array[left];
		left++;
	}

	return arrayAverageSum;
};
