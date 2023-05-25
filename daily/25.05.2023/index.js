/**
 * Medium | Math | Dynamic Programming | Sliding Window
 * Задача была очень сложная, посмотрел разрабор решения,
 * но как решить проблему линейно с помощью dp не совсем понял.
 */

// Brute Force | DFS + Memoization | TL
// Speed O(maxPts * k), Space O(maxPts * k) | n^2
const new21GameSolutionWithDFSMemoization = function (n, k, maxPts) {
	const hashCollection = Object.create(null);

	const dfs = function (score) {
		if (score >= k) {
			return score <= n ? 1 : 0;
		}

		if (Object.hasOwn(hashCollection, score)) {
			return hashCollection[score];
		}

		let probability = 0;

		for (let i = 1; i <= maxPts; ++i) {
			probability += dfs(score + i);
		}

		hashCollection[score] = probability / maxPts;

		return hashCollection[score];
	};

	return dfs(0);
};

const new21GameSolutionWithDynamicProgramming = function(n, k, maxPts) {

}