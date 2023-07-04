// Easy | String
// Идея задачи очень легкая, но нужно учесть все корнер кейсы.

// Speed O(n), Space O(1), n = string.length
// Done | Beats Speed=87, Space=18
const buddyStrings = function (string, goal) {
	if (
		string.length !== goal.length ||
		string.length === 1 ||
		goal.length === 1
	) {
		return false;
	}

	if (string === goal) {
		return new Set(string).size < string.length;
	}

	const diff = [];
	for (let i = 0, n = string.length; i < n; i++) {
		if (string[i] !== goal[i]) {
			diff.push(i);
		}

		if (diff.length > 2) {
			return false;
		}
	}

	if (
		diff.length === 2 &&
		string[diff[0]] === goal[diff[1]] &&
		string[diff[1]] === goal[diff[0]]
	) {
		return true;
	}

	return false;
};
