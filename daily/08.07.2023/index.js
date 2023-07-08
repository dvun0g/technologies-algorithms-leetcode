// Hard | Array + Sorting
// Идея задачи очень сложная, понял ее после просмотра видео разбора.
// Реализация не составила проблем.

// Speed O(n logn), Space(n - 1), n = weight.length
// Done | Beats Speed=14, Space=100
const putMarbles = function (weights, k) {
	const pairs = [];
	const n = weights.length;

	for (let i = 1; i < n; i++) {
		pairs.push(weights[i - 1] + weights[i]);
	}

	pairs.sort((v1, v2) => v1 - v2);

	let max = 0;
	let min = 0;

	for (let i = 0; i < k - 1; i++) {
		min += pairs[i];
		max += pairs[n - i - 2];
	}

	return max - min;
};
