// Medium | DFS + Memoization + Dynamic Programming + Greedy
// Идея с dfs была легкая, но не прошла по времени (удивительно для medium задачи), решение с dynamic programming подсмотрел, есть явные проблемы с восприятием чистого dynamic programming

// Speed O(n^2), Space O(n^2), n = prices.length
// DFS + Memoization + Greedy | TL (Max Call Stack) 34
const maxProfitWithDFS = function (prices, fee) {
	const hash = Object.create(null);

	const dfs = function (index, priceBuying = null) {
		if (index === prices.length) {
			return 0;
		}
		const key = `${index} | ${priceBuying}`;

		if (Object.hasOwn(hash, key)) {
			return hash[key];
		}

		let profit = 0;
		const currentPrice = prices[index];

		if (priceBuying === null) {
			profit += Math.max(
				dfs(index + 1, currentPrice),
				dfs(index + 1, null)
			);
		} else {
			profit += Math.max(
				currentPrice - fee - priceBuying + dfs(index + 1, null),
				dfs(index + 1, priceBuying)
			);
		}

		hash[key] = profit;
		return hash[key];
	};

	return dfs(0);
};

// Speed O(n), Space O(n), n = prices.length
// Dynamic Programming | Done
const maxProfit = function (prices, fee, hold = -prices[0], free = 0) {
	return (
		prices.forEach(
			(price) =>
				([hold, free] = [
					Math.max(hold, free - price),
					Math.max(free, hold + price - fee),
				])
		) || free
	);
};
