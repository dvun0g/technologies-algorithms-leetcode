class TreeNode {
	constructor(val, left, right) {
		this.val = val;
		this.left = left !== undefined ? left : null;
		this.right = right !== undefined ? right : null;
	}
}

function isSymmetric(root) {
	let result = true;

	function dfs(root1, root2) {
		if (root1 === null && root2 === null) {
			return;
		}

		if (root1 === null || root2 === null) {
			result = false;
			return;
		}

		if (root1.val !== root2.val) {
			result = false;
			return;
		}

		dfs(root1.left, root2.right);
		dfs(root1.right, root2.left);
	}

	dfs(root.left, root.right);

	return result;
}
