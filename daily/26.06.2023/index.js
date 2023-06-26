// Medium | Priority Queue
// Идею задачи вообще не понял, даже после просмотра решения, нужно явно уделить время Priority Queue и разобраться как она работает.

// Интересный момент, видимо в окружение LeetCode предоставляет некоторые структуры данных, который стандартно нет в JavaScript.

// Speed O(k * logn), Space O(n), n = costs.length | Beats Speed=65, Space=75
const totalCost = function (costs, k, candidates) {
	const minPq = new MinPriorityQueue({
		compare: (v1, v2) => {
			if (v1.cost === v2.cost) {
				return v1.index - v2.index;
			}

			return v1.cost - v2.cost;
		},
	});

	let totalCost = 0;
	let nextHead = candidates;
	let nextTail = costs.length - candidates - 1;

	for (let i = 0; i < candidates; i++) {
		minPq.enqueue({ cost: costs[i], index: i });
	}

	for (
		let i = Math.max(candidates, costs.length - candidates);
		i < costs.length;
		i++
	) {
		minPq.enqueue({ cost: costs[i], index: i });
	}

	while (k--) {
		const element = minPq.dequeue();
		totalCost += element.cost;
		if (nextHead > nextTail) continue;

		minPq.enqueue(
			element.index < nextHead
				? { index: nextHead, cost: costs[nextHead++] }
				: { index: nextTail, cost: costs[nextTail--] }
		);
	}

	return totalCost;
};
