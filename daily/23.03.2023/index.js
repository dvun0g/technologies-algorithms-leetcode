function makeConnected(n, connections) {
	const edges = connections.length;
	if (edges < n - 1) return -1;

	const graph = [];
	const visited = new Array(n).fill(false);
	let result = 0;

	for (let i = 0; i < n; i++) {
		graph[i] = [];
	}

	for (let i = 0; i < edges; i++) {
		graph[connections[i][0]].push(connections[i][1]);
		graph[connections[i][1]].push(connections[i][0]);
	}

	function dfs(node, visited) {
		visited[node] = true;
		for (let n of graph[node]) {
			if (!visited[n]) {
				dfs(n, visited);
			}
		}
	}

	for (let i = 0; i < n; i++) {
		if (!visited[i]) {
			result++;
			dfs(i, visited);
		}
	}

	return result - 1;
}
