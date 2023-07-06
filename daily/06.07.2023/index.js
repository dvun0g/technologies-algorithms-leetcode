// Medium | Array + Two Pointers + Prefix Array
// Сначала попытался сделать с помощью binary search, но потом понял, что все равно асимптотическая сложность будет O(n) (можно попробовать посчитать prefix array и искать с помощью binary search), в реализации с двумя указателями немного запутался.

// Speed O(n), Space O(1), n = array.length
// Done | Beats Speed=70, Space=83
const minSubArrayLen = function (target, array) {
	let left = 0;
	let right = 0;
	let minSize = Number.MAX_SAFE_INTEGER;

	let subArraySum = array[0];

	while (left <= right && right < array.length) {
		if (subArraySum >= target) {
			minSize = Math.min(minSize, right - left + 1);
			subArraySum -= array[left];
			left++;
		} else {
			right++;
			subArraySum += array[right];
		}
	}

	if (minSize === Number.MAX_SAFE_INTEGER) {
		return 0;
	}

	return minSize;
};
