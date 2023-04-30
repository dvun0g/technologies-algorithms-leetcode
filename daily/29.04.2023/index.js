const distanceLimitedPathsExist = function (n, edgeList, queries) {
	const result = [];

	const parents = new Array(n).fill(0).map((_, i) => i);
	const union = function (node1, node2) {
		parents[find(node2)] = find(node1);
	};
	const find = function (node) {
		if (parents[node] !== node) {
			parents[node] = find(node);
		}

		return parents[node];
	};

	const orders = new Array(queries.length).fill().map((_, i) => i);
	orders.sort((index1, index2) => queries[index1][2] - queries[index2][2]);
	edgeList.sort((edge1, edge2) => edge1[2] - edge2[2]);

	let index = 0;
	for (const i of orders) {
		const [node1, node2, limit] = queries[i];
		while (edgeList[index]?.[2] < limit) {
			union(edgeList[index][0], edgeList[index][1]);
			index++;
		}

		result.push(find(node2) === find(node1));
	}

	return result;
};

const n = 3,
	edgeList = [
		[0, 1, 2],
		[1, 2, 4],
		[2, 0, 8],
		[1, 0, 16],
	],
	queries = [
		[0, 1, 2],
		[0, 2, 5],
	];

console.log(distanceLimitedPathsExist(n, edgeList, queries));
