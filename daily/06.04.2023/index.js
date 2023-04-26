function closedIsland(matrix) {
	let result = 0;
	const visited = new Set();
	const rows = matrix.length;
	const columns = matrix[0].length;

	function dfs(i, j) {
		const isIncorrectIndex = i < 0 || j < 0 || i === rows || j === columns;

		if (isIncorrectIndex) {
			return 0;
		}

		const hashPoint = `${i}${j}`;
		const isClosedIsland = matrix[i][j] === 1 || visited.has(hashPoint);
		if (isClosedIsland) {
			return 1;
		}

		visited.add(hashPoint);
		return Math.min(
			dfs(i + 1, j),
			dfs(i - 1, j),
			dfs(i, j - 1),
			dfs(i, j + 1)
		);
	}

	for (let i = 0; i < rows; i += 1) {
		for (let j = 0; j < columns; j += 1) {
			const hashPoint = `${i}${j}`;
			if (matrix[i][j] === 0 && !visited.has(hashPoint)) {
				result += dfs(i, j);
			}
		}
	}

	return result;
}

const matrix = [
	[0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1],
	[0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
	[1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0],
	[0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0],
	[1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1],
	[1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1],
	[1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0],
	[1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0],
	[1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1],
	[1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0],
	[1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1],
	[0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
	[1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
];
console.log(closedIsland(matrix));
