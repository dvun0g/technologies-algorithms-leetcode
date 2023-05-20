/**
 * Впечатления
 * Достаточно нестандартная задача, дойти самому,
 * что нужно именно представить данные в виде графа очень сложно.
 *
 * В результате посмотрел видео разобор от NeetCode.
 */

// Brute Force | DFS + Memoization
const calcEquation = function (equations, values, queries) {
	const graphCollection = equations.reduce(
		(acc, [equation1, equation2], index) => {
			if (!Object.hasOwn(acc, equation1)) {
				acc[equation1] = [];
			}

			if (!Object.hasOwn(acc, equation2)) {
				acc[equation2] = [];
			}

			acc[equation1].push([equation2, values[index]]);
			acc[equation2].push([equation1, 1 / values[index]]);

			return acc;
		},
		Object.create(null)
	);
	const resultQueries = [];

	const dfs = function (startNode, endNode, visited = new Set(), result = 1) {
		if (
			!Object.hasOwn(graphCollection, startNode) ||
			!Object.hasOwn(graphCollection, endNode)
		) {
			return -1;
		}

		if (startNode === endNode) {
			return result;
		}

		visited.add(startNode);

		for (const [nextStartNode, value] of graphCollection[startNode]) {
			if (visited.has(nextStartNode)) {
				continue;
			}

			result = dfs(nextStartNode, endNode, visited, result * value);

			if (result !== null) {
				return result;
			}
		}

		return null;
	};

	for (const query of queries) {
		const [startQuery, endQuery] = query;

		resultQueries.push(dfs(startQuery, endQuery));
	}

	return resultQueries;
};

const equations = [
	['a', 'b'],
	['b', 'c'],
];
const values = [2.0, 3.0];
const queries = [
	['a', 'c'],
	['b', 'a'],
	['a', 'e'],
	['a', 'a'],
	['x', 'x'],
];

console.log(calcEquation(equations, values, queries));
