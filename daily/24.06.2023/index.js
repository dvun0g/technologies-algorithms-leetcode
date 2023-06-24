// Hard | Dynamic Programming
// Идею задачи вообще не понял, решение посмотрел, наверное одна из самых сложных для меня задач. Нужно явно уделить время dynamic programming.

// Speed O(n*m), Space O(m), n = rods.length, m = combination sums
// Dynamic Programming | Done
const tallestBillboard = function (rods) {
	const dp = Object.create(null);
	dp[0] = 0;

	for (const rod of rods) {
		const dpCopy = Object.assign({}, dp);

		for (const heightString of Object.keys(dpCopy)) {
			const height = Number(heightString);

			dp[height + rod] = Math.max(dp[height + rod] || 0, dpCopy[height]);
			dp[Math.abs(height - rod)] = Math.max(
				dp[Math.abs(height - rod)] || 0,
				dpCopy[height] + Math.min(height, rod)
			);
		}
	}
	return dp[0];
};
