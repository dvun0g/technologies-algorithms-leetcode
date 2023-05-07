// Time complexity O(n^2) | Dynamic Programming + BF
// Error Time Limit 47 Test Case
const longestObstacleCourseAtEachPositionTimeLimit = function (array) {
	const dp = [1];

	for (let i = 1, n = array.length; i < n; ++i) {
		let maxValue = 1;
		for (let j = i - 1; j >= 0; --j) {
			if (array[i] >= array[j]) {
				maxValue = Math.max(dp[j] + 1, maxValue);
			}
		}

		dp.push(maxValue);
	}

	return dp;
};

// Time complexity O(log(n) * n) | Dynamic Programming + Binary Search
const longestObstacleCourseAtEachPosition = function (array) {
	const result = [];
	const dp = [];

	for (const val of array) {
		const index = binarySearch(dp, val);

		if (index === dp.length) {
			dp.push(val);
		} else {
			dp[index] = val;
		}

		result.push(index + 1);
	}

	return result;
};

const binarySearch = function (array, target) {
	let start = 0;
	let end = array.length - 1;

	while (start <= end) {
		const middle = Math.floor((start + end) / 2);

		if (array[middle] <= target) {
			start = middle + 1;
		} else {
			end = middle - 1;
		}
	}

	return start;
};

const array = [5, 1, 5, 5, 1, 3, 4, 5, 1, 4];
console.log(longestObstacleCourseAtEachPosition(array));
