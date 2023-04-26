const maxValueOfCoins = function (piles, coins) {
	// const dp = new Array(piles.length).fill(new Array(coins + 1).fill(-1));
	const len = piles.length;
	const collection = Object.create(null);

	const dfs = function (i, coins) {
		if (i === len) {
			return 0;
		}
		const key = `${i} | ${coins}`;
		if (Object.hasOwn(collection, key)) {
			return collection[key];
		}
		// if (dp[i][coins] !== -1) {
		// 	return dp[i][coins];
		// }

		collection[key] = dfs(i + 1, coins);
		// dp[i][coins] = dfs(i + 1, coins);

		let currentPileSum = 0;
		for (let j = 0; j < Math.min(piles[i].length, coins); j += 1) {
			currentPileSum += piles[i][j];
			collection[key] = Math.max(
				collection[key],
				currentPileSum + dfs(i + 1, coins - j - 1)
			);

			// dp[i][coins] = Math.max(
			// 	dp[i][coins],
			// 	currentPileSum + dfs(i + 1, coins - j - 1)
			// );
		}

		// return dp[i][coins];
		return collection[key];
	};

	return dfs(0, coins);
};

const piles = [[37, 88], [51, 64, 65, 20, 95, 30, 26], [9, 62, 20], [44]];
const value = 9;
console.log(maxValueOfCoins(piles, value));
