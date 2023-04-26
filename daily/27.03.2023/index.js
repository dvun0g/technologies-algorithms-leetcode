function minPathSum(matrix) {
	for (let i = 0; i < matrix.length; i += 1) {
		for (let j = 0; j < matrix[i].length; j += 1) {
			if (i === 0 && j === 0) {
				continue;
			}
			if (i === 0) {
				matrix[i][j] += matrix[i][j - 1];
				continue;
			}
			if (j === 0) {
				matrix[i][j] += matrix[i - 1][j];
				continue;
			}

			matrix[i][j] += Math.min(matrix[i][j - 1], matrix[i - 1][j]);
		}
	}

	return matrix.at(-1).at(-1);
}

const matrix = [
	[1, 3, 1],
	[1, 5, 1],
	[4, 2, 1],
];
console.log(minPathSum(matrix));
