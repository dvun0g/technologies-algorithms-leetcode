class TreeNode {
	constructor(val, left, right) {
		this.val = val;
		this.left = left !== undefined ? left : null;
		this.right = right !== undefined ? right : null;
	}
}

function sumNumbers(root) {
	let currentSum = 0;
	function dfs(node, currentPath = '') {
		if (node === null) {
			return;
		}

		currentPath += node.val;

		if (node.left === null && node.right === null) {
			currentSum += Number(currentPath);
			return;
		}

		dfs(node.left, currentPath);
		dfs(node.right, currentPath);
	}

	dfs(root);
	return currentSum;
}
