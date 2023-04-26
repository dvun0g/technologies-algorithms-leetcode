// Not Solution

const networkDelayTime = function (times, n, node) {
	const collection = times.reduce((acc, [node1, node2, time]) => {
		if (!Object.hasOwn(acc, node1)) {
			acc[node1] = [];
		}

		acc[node1].push([node2, time]);

		return acc;
	}, {});

	console.log(collection);
	const used = {};
	const dfs = (node) => {
		if (!Object.hasOwn(collection, node)) {
			return 0;
		}

		if (Object.hasOwn(used, node)) {
			return 0;
		}

		let result = 0;
		let currentTime = 0;
		used[node] = 0;

		for (const [node1, time] of collection[node]) {
			if (Object.hasOwn(used, node1)) {
				continue;
			}

			currentTime = Math.max(currentTime, time);
			result += dfs(node1);
		}

		return result + currentTime;
	};

	return dfs(node) || -1;
};

const times = [
	[1, 2, 1],
	[2, 3, 2],
	[1, 3, 4],
];
const n = 3;
const node = 1;
console.log(networkDelayTime(times, n, node));
