// Hard | Matrix + DFS + Memoization
// Идея задачи достаточно легкая, не стандартно, только передачи предыдущего аргумента в рекурсивную фунцию. Реализация решения тоже не создала особых проблем.

// Matrix + DFS + Memoization | Done, Beats = 66.67%, 77.78%
// Speed O(n^4), Space O(n^2)
const countPaths = function (matrix) {
	let resultCountPaths = 0;
	const module = 1e9 + 7;

	const n = matrix.length;
	const m = matrix[0].length;
	const dp = new Array(n).fill().map(() => new Array(m).fill(0));

	const dfs = function (i, j, previousValue = Number.MIN_SAFE_INTEGER) {
		if (i < 0 || j < 0 || i === matrix.length || j === matrix[i].length) {
			return 0;
		}

		const currentValue = matrix[i][j];
		if (currentValue <= previousValue) {
			return 0;
		}

		if (dp[i][j]) {
			return dp[i][j];
		}

		dp[i][j] =
			(1 +
				dfs(i + 1, j, matrix[i][j]) +
				dfs(i - 1, j, matrix[i][j]) +
				dfs(i, j + 1, matrix[i][j]) +
				dfs(i, j - 1, matrix[i][j])) %
			module;

		return dp[i][j];
	};

	for (let i = 0; i < n; ++i) {
		for (let j = 0; j < m; ++j) {
			resultCountPaths += dfs(i, j) % module;
		}
	}

	return resultCountPaths % module;
};
