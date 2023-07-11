// Medium | Binary Search Tree + DFS + BFS
// Идея задачи достаточно очевидная, но сам я до нее не догадался. Возникли проблемы при реализации bfs.

// Speed O(n^2), Space O(n^2)
// Done | Beats Speed=18, Space=28
const distanceK = function (root, target, k) {
	const parentNodes = Object.create(null);
	const nodes = [];

	const fillParentNodes = function (node, parent) {
		if (parent !== null) {
			parentNodes[node.val] = parent;
		}

		if (node.left !== null) {
			fillParentNodes(node.left, node);
		}

		if (node.right !== null) {
			fillParentNodes(node.right, node);
		}
	};

	fillParentNodes(root, null);

	const bfs = function () {
		const queue = [target];
		const visited = new Set();
		visited.add(target.val);

		let currentDepth = 0;

		while (queue.length) {
			const size = queue.length;
			for (let i = 0; i < size; i++) {
				const node = queue.shift();
				const childrenNodes = [
					node.left,
					node.right,
					parentNodes[node.val],
				].filter(Boolean);

				if (currentDepth === k) {
					nodes.push(node.val);
					continue;
				}

				for (const child of childrenNodes) {
					if (!child || visited.has(child.val)) {
						continue;
					}

					visited.add(child.val);
					queue.push(child);
				}
			}

			currentDepth += 1;
		}
	};

	bfs();
	return nodes;
};
