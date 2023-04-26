function longestCycle(edges) {
	const graph = edges.reduce((acc, node, index) => {
		acc[index] = node;

		return acc;
	}, {});
	let result = 0;
    const visited = new Set()

	function dfs(node, initialNode = node, count = 0) {
        console.log(node, initialNode, visited, result)
		if (count && node === initialNode) {
			result = Math.max(result, count);
			return;
		}
		if (node === undefined || visited.has(node)) {
			return;
		}

		visited.add(node);
		dfs(graph[node], initialNode, count + 1);
	}

	for (let i = 0; i < edges.length; i += 1) {
        dfs(i);
	}

	return result || -1;
}

const edges = [3, 3, 4, 2, 3];
console.log(longestCycle(edges));
