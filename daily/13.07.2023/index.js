// Medium | Graph + Cycle + DFS.
// Идея задачи несложная, возникла проблема с реализацией функции по нахождению циклов в графе.

// Speed (V + E), Space (V + E)
// Done | Beast Speed=93, Space=60
const canFinish = function (numCourses, prerequisites) {
	const graph = createGraph(numCourses, prerequisites);
	const visited = new Set();

	for (const node in graph) {
		if (detectedCycle(graph, node, visited)) {
			return false;
		}
	}

	return true;
};

const createGraph = function (nodeCount, prerequisites) {
	const graph = Object.create(null);

	for (let i = 0; i < nodeCount; i++) {
		graph[i] = [];
	}

	for (const [from, to] of prerequisites) {
		graph[from].push(to);
	}

	return graph;
};

const detectedCycle = function (graph, node, visited, visiting = new Set()) {
	if (visited.has(node)) {
		return false;
	}

	if (visiting.has(node)) {
		return true;
	}

	visiting.add(node);
	for (const neighbor of graph[node]) {
		if (detectedCycle(graph, neighbor, visited, visiting)) {
			return true;
		}
	}

	visited.add(node);
	return false;
};
