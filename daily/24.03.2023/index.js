function minReorder(number, connections) {
	const graph = connections.reduce((acc, [node1, node2]) => {
		if (!acc.has(node1)) {
			acc.set(node1, []);
		}
		acc.set(node1, [...acc.get(node1), node2]);

		return acc;
	}, new Map());
	let result = 0;
	const visited = new Set();
    console.log(graph)
	function dfs(node, result = 1) {
		if (!graph.has(node)) {
			return;
		}
		visited.add(node);

		for (const n of graph.get(node)) {
			if (visited.has(n) || n === 0) {
				result = 0;
			}
			visited.add(n);
			dfs(n, result);
		}

		return result;
	}

	for (const node of graph.keys()) {
		result += dfs(node);
	}

	return result;
}

const number = 5;
const connections = [[1,0],[1,2],[3,2],[3,4]]
console.log(minReorder(number, connections));
