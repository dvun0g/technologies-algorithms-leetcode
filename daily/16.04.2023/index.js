const numWays = function (words, target) {
	const numberCharsInWords = words.reduce((acc, word) => {
		for (let i = 0; i < word.length; i += 1) {
			const char = word[i];
			const key = `${i} | ${char}`;
			if (!Object.hasOwn(acc, key)) {
				acc[key] = 0;
			}

			acc[key] += 1;
		}

		return acc;
	}, {});

	const dp = {};
	const mod = 10 ** 9 + 7;
	const dfs = function (indexTarget, indexWord) {
		if (indexTarget === target.length) {
			return 1;
		}

		if (indexWord === words[0].length) {
			return 0;
		}

		const key = `${indexTarget} | ${indexWord}`;
		if (Object.hasOwn(dp, key)) {
			return dp[key];
		}

		const keyNumberCharsInWords = `${indexWord} | ${target[indexTarget]}`;
		dp[key] = dfs(indexTarget, indexWord + 1);
		dp[key] +=
			(numberCharsInWords[keyNumberCharsInWords] || 0) *
			dfs(indexTarget + 1, indexWord + 1);

		return dp[key] % mod;
	};

	return dfs(0, 0);
};

const words = ['acca', 'bbbb', 'caca'];
const target = 'aba';
console.log(numWays(words, target));
