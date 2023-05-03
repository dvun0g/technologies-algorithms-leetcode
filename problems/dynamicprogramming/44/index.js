// Time Limit
// const isMatch = function (string, pattern) {
// 	const n = string.length;
// 	const m = pattern.length;
// 	const memo = Object.create(null);

// 	const dfs = function (i, j) {
// 		const key = `${i} | ${j}`;
// 		if (Object.hasOwn(memo, key)) {
// 			return memo[key];
// 		}

// 		if (i >= n && j >= m) {
// 			memo[key] = true;
// 			return memo[key];
// 		}

// 		if (j >= m) {
// 			memo[key] = false;
// 			return memo[key];
// 		}

// 		if (i < n && (string[i] === pattern[j] || pattern[j] === '?')) {
// 			return dfs(i + 1, j + 1);
// 		}

// 		if (pattern[j] === '*') {
// 			return (i < n && dfs(i + 1, j)) || dfs(i, j + 1);
// 		}

// 		memo[key] = false;
// 		return memo[key];
// 	};

// 	return dfs(0, 0);
// };

// Solve
const isMatch = function (string, pattern) {
	const n = string.length;
	const m = pattern.length;

	const getKey = (i, j) => `${i} | ${j}`;
	const memo = {};

	const dfs = (i = 0, j = 0) => {
		const key = getKey(i, j);
		if (Object.hasOwn(memo, key)) {
			return memo[key];
		}

		if (i < n && j >= m) {
			return false;
		}

		if (i >= n && j < m) {
			if (pattern[j] === '*') {
				memo[key] = dfs(i, j + 1);
				return memo[key];
			}

			return false;
		}

		if (i >= n && j >= m) {
			return true;
		}

		if (pattern[j] === '*') {
			memo[key] = dfs(i + 1, j + 1) || dfs(i + 1, j) || dfs(i, j + 1);
			return memo[key];
		}

		if (pattern[j] === '?' || string[i] === pattern[j]) {
			memo[key] = dfs(i + 1, j + 1);
			return memo[key];
		}

		return false;
	};

	return dfs();
};

const string = 'aa';
const pattern = '*';
console.log(isMatch(string, pattern));
