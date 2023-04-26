function minScore(number, array) {
	const graph = {};
	const visited = new Set();
	let result = Infinity;

	for (const [startNode, endNode, distance] of array) {
		if (!Object.hasOwn(graph, startNode)) {
			graph[startNode] = [];
		}

		if (!Object.hasOwn(graph, endNode)) {
			graph[endNode] = [];
		}

		graph[startNode].push([endNode, distance]);
		graph[endNode].push([startNode, distance]);
	}

	function dfs(node) {
		if (visited.has(node) || result === 1) {
			return;
		}

		visited.add(node);
		for (const [nodeEnd, distance] of graph[node]) {
			result = Math.min(distance, result);
			dfs(nodeEnd);
		}
	}

	dfs(1);

	return result;
}
