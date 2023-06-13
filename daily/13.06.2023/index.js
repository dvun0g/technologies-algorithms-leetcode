// Medium | Matrix + HashMap
// Идея достаточно легкая, при реализации проблем не возникло.

// Matrix + HashMap | Done
// Speed O(n^2), Space O(n^2), n = matrix.length
const equalPairs = function (matrix) {
	let counterPairs = 0;
	const columnsCollection = Object.create(null);

	for (let i = 0, n = matrix.length; i < n; ++i) {
		const currentColumn = [];

		for (let j = 0, m = matrix[i].length; j < m; j++) {
			currentColumn.push(matrix[i][j]);
		}

		const key = currentColumn.join('|');
		if (!Object.hasOwn(columnsCollection, key)) {
			columnsCollection[key] = 0;
		}

		columnsCollection[key] += 1;
	}

	for (let i = 0, n = matrix.length; i < n; ++i) {
		const currentRow = [];

		for (let j = 0, m = matrix[i].length; j < m; j++) {
			currentRow.push(matrix[j][i]);
		}

		const key = currentRow.join('|');
		if (Object.hasOwn(columnsCollection, key)) {
			counterPairs += columnsCollection[key];
		}
	}

	return counterPairs;
};
