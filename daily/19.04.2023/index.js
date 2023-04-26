class TreeNode {
	constructor(val, right, left) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

const longestZigZag = function (root) {
	let result = 0;

	const dfs = function (node, count, side) {
		if (node === null) {
			return;
		}

		result = Math.max(result, count);
		dfs(node.left, side === 'left' ? 1 : count + 1, 'left');
		dfs(node.right, side === 'right' ? 1 : count + 1, 'right');
	};

	dfs(root, 0, '');
	return result;
};
