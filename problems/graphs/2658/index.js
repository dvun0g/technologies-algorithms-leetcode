const findMaxFish = function (grid) {
	let result = 0;
	const n = grid.length;
	const m = grid[0].length;

	const visited = new Set();

	const dfs = function (i, j) {
		const key = `${i} | ${j}`;

		if (i < 0 || j < 0 || i >= n || j >= m) {
			return 0;
		}

		if (visited.has(key)) {
			return 0;
		}

		visited.add(key);
		if (grid[i][j] === 0) {
			return 0;
		}

		let counter = grid[i][j];
		counter +=
			dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1);

		return counter;
	};

	for (let i = 0; i < n; ++i) {
		for (let j = 0; j < m; ++j) {
			const key = `${i} | ${j}`;
			if (!visited.has(key)) {
				result = Math.max(result, dfs(i, j));
			}
		}
	}

	return result;
};

const grid = [[0, 4]];
console.log(findMaxFish(grid));
