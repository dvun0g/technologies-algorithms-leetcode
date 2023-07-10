// Easy | BST + DFS
// Идея задачи несложная, реализация тоже.

// Speed O(n^2), Space O(n^2)
// Done | Beats Speed=68, Space=21
const minDepth = function (root) {
	let result = Number.MAX_SAFE_INTEGER;
	const dfs = function (node, depth) {
		if (node === null) {
			return;
		}

		if (node.left === null && node.right === null) {
			result = Math.min(result, depth + 1);
			return;
		}

		dfs(node.left, depth + 1);
		dfs(node.right, depth + 1);
	};

	dfs(root, 0);

	if (result === Number.MAX_SAFE_INTEGER) {
		return 0;
	}

	return result;
};
