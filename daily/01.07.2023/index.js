// TL | 28
// Speed O(n * 8), Space O(8), n = cookies.length
function distributeCookies(cookies, k) {
	let result = Number.MAX_SAFE_INTEGER;

	function backtracking(cookieIndex, dp) {
		if (cookieIndex === cookies.length) {
			const currentResult = Math.max(...Object.values(dp));
			result = Math.min(result, currentResult);

			return;
		}

		for (let childIndex = 0; childIndex < k; childIndex++) {
			const cookie = cookies[cookieIndex];

			if (!Object.hasOwn(dp, childIndex)) {
				dp[childIndex] = 0;
			}

			dp[childIndex] += cookie;
			backtracking(cookieIndex + 1, dp);
			dp[childIndex] -= cookie;
		}
	}

	backtracking(0, Object.create(null));
	return result;
}
