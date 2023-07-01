// Easy | BFS + Inorder Traversal
// Задача достаточно простая, но не сразу понял что нужно использовать Inorder Traversal

// BFS + Inorder Traversal | Done
const getMinimumDifference = function (root) {
	let prev = -Infinity;
	let result = Number.MAX_SAFE_INTEGER;

	const dfs = function (node) {
		if (node === null) {
			return;
		}

		dfs(node.left);
		result = Math.min(result, node.val - prev);
		prev = node.val;
		dfs(node.right);
	};

	dfs(root);
	return result;
};
