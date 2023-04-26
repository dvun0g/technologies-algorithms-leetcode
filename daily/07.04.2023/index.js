function numEnclaves(matrix) {
	const rows = matrix.length;
	const columns = matrix[0].length;
	let result = 0;

	function dfs(i, j) {
		let isIncorrectIndex =
			i < 0 || j < 0 || i >= rows || j >= columns || matrix[i][j] === 0;

		if (isIncorrectIndex) {
			return;
		}

		matrix[i][j] = 0;
		dfs(i + 1, j);
		dfs(i - 1, j);
		dfs(i, j + 1);
		dfs(i, j - 1);
	}

	for (let i = 0; i < rows; i += 1) {
		dfs(i, 0);
		dfs(i, columns - 1);
	}

	for (let i = 0; i < columns; i += 1) {
		dfs(0, i);
		dfs(rows - 1, i);
	}

	for (let i = 0; i < rows; i += 1) {
		for (let j = 0; j < columns; j += 1) {
			if (matrix[i][j] === 1) {
				result += 1;
			}
		}
	}

	return result;
}

const matrix = [
	[0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
	[1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0],
	[1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1],
	[1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
	[1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1],
	[1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1],
	[1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
	[0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0],
	[0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
	[0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1],
];
console.log(numEnclaves(matrix));
