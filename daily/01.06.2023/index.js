// Medium | BFS | DFS | Matrix
// При решение задачи возникли трудности, я неправильно выбрал алгоритм.
// Решение с помощью bfs в данном случае гораздо проще и эффективнее, чем dfs.

// DFS + Memoization + Matrix | Time Limit
// Speed O(n), Space O(n), n - количество значений матрицы. (matrix.length * matrix[0].length)
const shortestPathBinaryMatrixSolutionDFS = function (matrix) {
	const columnLength = matrix.length;
	const rowLength = matrix[0].length;
	const visited = new Set();
	let minPath = Infinity;

	const dfs = function (i, j) {
		if (i < 0 || j < 0 || i >= columnLength || j >= rowLength) {
			return Infinity;
		}

		if (matrix[i][j] === 1) {
			return Infinity;
		}

		const key = `${i} | ${j}`;
		if (visited.has(key)) {
			return Infinity;
		}

		if (i === columnLength - 1 && j === rowLength - 1) {
			return 1;
		}

		visited.add(key);

		const result =
			Math.min(
				dfs(i + 1, j),
				dfs(i - 1, j),
				dfs(i, j + 1),
				dfs(i, j - 1),
				dfs(i + 1, j + 1),
				dfs(i - 1, j - 1),
				dfs(i + 1, j - 1),
				dfs(i - 1, j + 1)
			) + 1;

		visited.delete(key);
		return result;
	};

	minPath = dfs(0, 0);

	const isNoMinimumPath = minPath === Infinity;
	if (isNoMinimumPath) {
		return -1;
	}

	return minPath;
};

const generateNextIndexes = function (i, j) {
	return [
		[i + 1, j],
		[i - 1, j],
		[i, j + 1],
		[i, j - 1],
		[i + 1, j + 1],
		[i + 1, j - 1],
		[i - 1, j + 1],
		[i - 1, j - 1],
	];
};

// BFS + Matrix | Done
// Speed O(n), Space O(n), n - количество значений матрицы, matrix.length * matrix[0].length, в среднем работает быстрее, чем dfs.
const shortestPathBinaryMatrix = function (matrix) {
	const queue = [[0, 0]];
	const columnLength = matrix.length;
	const rowLength = matrix[0].length;
	let minPath = 1;

	while (queue.length) {
		const size = queue.length;

		for (let index = 0; index < size; ++index) {
			const [i, j] = queue.shift();
			const isIncorrectIndex =
				i < 0 ||
				j < 0 ||
				i >= columnLength ||
				j >= rowLength ||
				matrix[i][j] === 1;

			if (isIncorrectIndex) {
				continue;
			}

			const isResultIndex = i === columnLength - 1 && j === rowLength - 1;
			if (isResultIndex) {
				return minPath;
			}

			matrix[i][j] = 1;

			queue.push(...generateNextIndexes(i, j));
		}
		minPath += 1;
	}

	return -1;
};
