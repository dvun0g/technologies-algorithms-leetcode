// Medium | Graph + DFS
// Достаточно стандартная идея на циклические графы, однако мне не удалось ее реализовать. Нужно запомнить прием сохранения состояния ноды (не посещенная, посещенная, цикличная).

// Speed O(V + E),. Space (V)
// Done | Beats Speed=65, Space=88
const eventualSafeNodes = function (graph) {
	const n = graph.length;
	const result = new Array(n).fill(0);

	const dfs = (node) => {
		if (result[node] !== 0) {
			return result[node] === 2;
		}

		result[node] = 1;

		for (let neighbor of graph[node]) {
			if (result[neighbor] === 1 || !dfs(neighbor)) {
				return false;
			}
		}
		result[node] = 2;
		return true;
	};

	const safeNodes = [];
	for (let node = 0; node < n; node++) {
		if (dfs(node)) {
			safeNodes.push(node);
		}
	}
	return safeNodes;
};
