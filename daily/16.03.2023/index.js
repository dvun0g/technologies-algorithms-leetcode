class TreeNode {
	constructor(val, left, right) {
		this.val = val;
		this.left = left !== undefined ? left : null;
		this.right = right !== undefined ? right : null;
	}
}

function buildTree(inorder, postorder) {
    if (!inorder.length || !postorder.length) {
        return null;
    }

	const rootVal = postorder.at(-1);
	const rootIndex = inorder.indexOf(rootVal);
	const result = new TreeNode(rootVal);

	const leftInorder = inorder.slice(0, rootIndex);
	const rightInorder = inorder.slice(rootIndex + 1);

	const leftPostorder = postorder.slice(0, leftInorder.length);
	const rightPostorder = postorder.slice(
		leftInorder.length,
		postorder.length - 1
	);

	result.left = buildTree(leftInorder, leftPostorder);
	result.right = buildTree(rightInorder, rightPostorder);

	return result;
}
