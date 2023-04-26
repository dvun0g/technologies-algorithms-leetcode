// Time Limit

const minInsertions = function (string) {
	const longestPalindromeSubstring = function (i, j) {
		if (i > j) return 0;
		else if (i == j) return 1;
		else if (string[i] == string[j])
			return 2 + longestPalindromeSubstring(i + 1, j - 1);
		else
			return Math.max(
				longestPalindromeSubstring(i + 1, j),
				longestPalindromeSubstring(i, j - 1)
			);
	};

	const n = string.length;
	const result = n - longestPalindromeSubstring(0, n - 1);
	return result;
};

const string = 'tldjbqjdogipebqsohdypcxjqkrqltpgviqtqz';
console.log(minInsertions(string));
