//  Medium | Graph + DFS
// Задача максимально стандартная, решил очень быстро.

// Prepare + DFS | Done
// Speed O(n^2), Space O(n), n - количество нод.
const findCircleNum = function (isConnected) {
	const graphCollection = isConnected.reduce((acc, arr, index) => {
		const connectedNodes = [];

		for (let i = 0, n = arr.length; i < n; ++i) {
			const isConnect = arr[i] === 1 && i !== index;
			if (isConnect) {
				connectedNodes.push(i);
			}
		}

		acc[index] = connectedNodes;

		return acc;
	}, {});

	const visited = new Set();
	let result = 0;

	const dfs = function (i) {
		if (visited.has(i)) {
			return 0;
		}

		visited.add(i);
		const neighbors = graphCollection[i];
		for (const neighbor of neighbors) {
			dfs(neighbor);
		}

		return 1;
	};

	for (let i = 0, n = isConnected.length; i < n; ++i) {
		result += dfs(i);
	}

	return result;
};
