const findRedundantConnection = function (edges) {
	const parents = new Array(edges.length + 1).fill(0).map((_, i) => i);
	const ranks = new Array(edges.length + 1).fill(1);

	const find = function (node) {
		let parent = parents[node];
		while (parent !== parents[parent]) {
			parents[parents] = parents[parents[parent]];
			parent = parents[parent];
		}

		return parent;
	};

	const union = function (node1, node2) {
		const parent1 = find(node1);
		const parent2 = find(node2);

		if (parent1 === parent2) {
			return false;
		}

		if (ranks[parent1] > ranks[parent2]) {
			parents[parent2] = parent1;
			ranks[parent1] += 1;
		} else {
			parents[parent1] = parent2;
			ranks[parent2] += 1;
		}

		return true;
	};

	for (const [node1, node2] of edges) {
		if (!union(node1, node2)) {
			return [node1, node2];
		}
	}

	return null;
};
