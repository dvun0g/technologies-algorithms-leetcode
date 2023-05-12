const questions = [
	[3, 2],
	[4, 3],
	[4, 4],
	[2, 5],
];

// DFS + Memoization Solution O(n)
const mostPointsDFSMemoizationSolution = function (questions) {
	const cacheCollectionHashMap = Object.create(null);
	const questionsLength = questions.length;

	const dfs = function (index) {
		if (index > questionsLength - 1) {
			return 0;
		}

		if (Object.hasOwn(cacheCollectionHashMap, index)) {
			return cacheCollectionHashMap[index];
		}

		const currentPoints = questions[index][0];
		const skipQuestions = questions[index][1];

		cacheCollectionHashMap[index] = Math.max(
			dfs(index + 1),
			currentPoints + dfs(index + skipQuestions + 1)
		);

		return cacheCollectionHashMap[index];
	};

	return dfs(0);
};

console.log(mostPointsDFSMemoizationSolution(questions));
