class UnionFind {
	constructor(n) {
		this.n = n;
		this.parent = new Array(n + 1).fill().map((_, i) => i);
		this.ranks = new Array(n + 1).fill(1);
	}

	find = function (node) {
		while (this.parent[node] !== node) {
			this.parent[node] = this.parent[this.parent[node]];
			node = this.parent[node];
		}

		return node;
	};

	union = function (node1, node2) {
		const parent1 = this.find(node1);
		const parent2 = this.find(node2);

		if (parent1 === parent2) {
			return 0;
		}
		if (this.ranks[parent1] > this.ranks[parent2]) {
			this.ranks[parent1] += this.ranks[parent2];
			this.parent[parent2] = parent1;
		} else {
			this.ranks[parent2] += this.ranks[parent1];
			this.parent[parent1] = parent2;
		}
		this.n -= 1;
		return 1;
	};

	isConnected = function () {
		return this.n <= 1;
	};
}

const maxNumEdgesToRemove = function (n, edges) {
	const alice = new UnionFind(n);
	const bob = new UnionFind(n);
	let counter = 0;

	for (const [type, node1, node2] of edges) {
		if (type === 3) {
			counter += alice.union(node1, node2) | bob.union(node1, node2);
		}
	}

	for (const [type, node1, node2] of edges) {
		switch (type) {
			case 1:
				counter += alice.union(node1, node2);
				break;
			case 2:
				counter += bob.union(node1, node2);
				break;
		}
	}

	if (alice.isConnected() && bob.isConnected()) {
		return edges.length - counter;
	}

	return -1;
};
