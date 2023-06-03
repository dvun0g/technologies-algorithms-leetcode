// Medium | BFS + DFS + Prepare
// Возникла сложность с пониманием формулировки задачи
// Сама идея решения достаточно легкая, простой BFS.
// Так же стоит побольше времени уделить реализации именно BFS,
// в этом алгоритме я еще немного "плаваю".

// BFS + Prepare | Done
// Speed O(n), Space O(n), n = n (first arguments);
const numOfMinutes = function (n, headID, managers, informTime) {
	const adj = Object.create(null);

	for (let i = 0; i < n; ++i) {
		if (!Object.hasOwn(adj, managers[i])) {
			adj[managers[i]] = [];
		}

		adj[managers[i]].push(i);
	}

	let time = 0;
	const queue = [[headID, 0]];

	while (queue.length) {
		const [i, currentTime] = queue.shift();
		time = Math.max(time, currentTime);

		for (const neighbor of adj[i] || []) {
			queue.push([neighbor, currentTime + informTime[i]]);
		}
	}

	return time;
};

const n = 7;
const headId = 6;
const managers = [1, 2, 3, 4, 5, 6, -1];
const informTime = [0, 6, 5, 4, 3, 2, 1];

console.log(numOfMinutes(n, headId, managers, informTime));
