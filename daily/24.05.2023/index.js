/**
 *
 */

// DFS + Memoization
// Не до конца пониманию почему это решение не работает

// Speed O(n), Space O(1)
const maxScoreSolutionDFSMemoization = function (array1, array2, k) {
	const arrayLength = array1.length;
	let score = 0;

	const dfs = function (
		index,
		counter = k,
		currentSum = 0,
		minimumValue = Number.MAX_SAFE_INTEGER
	) {
		if (index === arrayLength || counter === 0) {
			return;
		}

		score = Math.max(score, currentSum * minimumValue);

		dfs(index + 1, counter, currentSum, minimumValue);
		dfs(
			index + 1,
			counter - 1,
			currentSum + array1[index],
			Math.min(minimumValue, array2[index])
		);
	};

	dfs(0);

	return score;
};

// MinHeap + Sorting + Greedy
// Speed O(n logn), Space O(n)
const maxScore = function(array1, array2, k) {
    return;
}

const array1 = [1, 3, 3, 2];
const array2 = [2, 1, 3, 4];
const k = 3;
console.log(maxScore(array1, array2, k));
