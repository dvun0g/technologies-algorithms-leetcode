class TreeNode {
	constructor(val, left, right) {
		this.val = val;
		this.left = left !== undefined ? left : null;
		this.right = right !== undefined ? right : null;
	}
}

function maxDepthTree(node, maxDepth = 0) {
	if (node === null) {
		return maxDepth;
	}

	maxDepth += 1;

	return Math.max(
		maxDepthTree(node.left, maxDepth),
		maxDepthTree(node.right, maxDepth)
	);
}

function bfs(root) {
	if (root === null) return true;

	const maxDepth = maxDepthTree(root);
	let queue = [root];
	let currentDepth = 0;
	let nullOnLastLevelDepth = false;

	while (currentDepth < maxDepth) {
		const size = queue.length;
		currentDepth += 1;

		for (let i = 0; i < size; i++) {
			const node = queue[i];

			if (node === null && currentDepth !== maxDepth) return false;

			if (currentDepth === maxDepth) {
				if (nullOnLastLevelDepth && node !== null) return false;
				if (node === null) nullOnLastLevelDepth = true;
			}

			if (node) {
				queue.push(node.left);
				queue.push(node.right);
			}
		}

		queue = queue.slice(size);
	}

	return true;
}

function isCompleteTree(root) {
	return bfs(root);
}
