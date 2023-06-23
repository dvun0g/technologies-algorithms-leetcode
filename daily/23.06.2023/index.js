// Medium | Dynamic Programming + Hash Table
// Идея задачи несложная, но опять же чувствуется недостаток опыта в dynamic programming.

// Speed O(n^2), Space O(n^2), n = array.length
// Dynamic Programming + Hash Table | Done
const longestArithSeqLength = function (array) {
	const { length: n } = array;
	const dp = new Array(n).fill().map(() => Object.create(null));

	let maxLengthSeq = 0;
	for (let i = 0; i < n; ++i) {
		for (let j = i + 1; j < n; j++) {
			const different = array[j] - array[i];

			if (Object.hasOwn(dp[i], different)) {
				dp[j][different] = dp[i][different] + 1;
			} else {
				dp[j][different] = 2;
			}

			maxLengthSeq = Math.max(dp[j][different] || 0, maxLengthSeq);
		}
	}

	return maxLengthSeq;
};
