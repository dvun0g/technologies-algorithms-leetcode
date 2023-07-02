// Hard | Backtracking + Array
// Идея задачи достаточно неочивидная, особенно если не знать что это backtracking. При реализации возникла проблема с порядком вызыва рекурсии.

// Speed O(2^n), Speed O(2^n), n < 20 | Done
// Beats Speed=38, Space=38
const maximumRequests = function (n, requests) {
	let result = 0;
	const buildings = Object.fromEntries(
		new Array(n).fill(0).map((_, i) => [i, 0])
	);

	const backtracking = function (
		indexRequest,
		buildings,
		successRequests = 0
	) {
		if (indexRequest === requests.length) {
			if (!Object.values(buildings).every((v) => v === 0)) {
				return;
			}

			result = Math.max(result, successRequests);
			return;
		}

		const [from, to] = requests[indexRequest];
		buildings[from] -= 1;
		buildings[to] += 1;
		backtracking(indexRequest + 1, buildings, successRequests + 1);

		buildings[from] += 1;
		buildings[to] -= 1;
		backtracking(indexRequest + 1, buildings, successRequests);

		return;
	};

	backtracking(0, buildings);
	return result;
};
