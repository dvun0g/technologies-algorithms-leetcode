// Medium | Binary Search + Done
// Идея задачи для меня была максимально непонятна, как и реализация решения.
// Посмотрел видео разбор + решение.

// Binary Search + Greedy | Done
// Speed O(logn), Space O(1), n = n
const maxValue = function (n, index, maxSum) {
	let left = Math.floor(maxSum / n);
	let right = maxSum;

	const findSum = (num, len) => {
		if (len < num) {
			return (len * (num + num - len + 1)) / 2;
		}

		return (num * (num + 1)) / 2 + (len - num);
	};

	const isWithin = (num) => {
		const leftSum = findSum(num, index + 1);
		const rightSum = findSum(num, n - index);

		return maxSum >= leftSum + rightSum - num;
	};

	while (left <= right) {
		const mid = (left + right) >> 1;

		isWithin(mid) ? (left = mid + 1) : (right = mid - 1);
	}

	return right;
};
