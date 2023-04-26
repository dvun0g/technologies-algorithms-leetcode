// Space Error
const profitableSchemes = function (n, minProfit, group, profit) {
	const dp = {};
	const length = profit.length;

	const dfs = function (i, n, p) {
		if (i === length) {
			return p >= minProfit ? 1 : 0;
		}
		const key = `${i} | ${n} | ${p}`;
		if (Object.hasOwn(dp, key)) {
			return dp[key];
		}

		dp[key] = 0;
		dp[key] = dfs(i + 1, n, p);

		if (n - group[i] >= 0) {
			dp[key] += dfs(i + 1, n - group[i], p + profit[i]);
		}

		return dp[key];
	};

	return dfs(0, n, 0);
};

const n = 10;
const minProfit = 5;
const group = [2, 3, 5];
const profit = [6, 7, 8];

console.log(profitableSchemes(n, minProfit, group, profit));
