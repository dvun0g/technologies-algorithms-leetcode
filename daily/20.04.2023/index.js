// My Solution - Time Limit 71 Test case.
class TreeNode {
	constructor(val, left, right) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

const widthOfBinaryTree = function (root) {
	const helper = function (array) {
		if (array.length === 1 && array[0] !== null) {
			return 1;
		}

		let start = null;
		let end = null;
		for (let i = 0; i < array.length; ++i) {
			const node = array[i];

			if (node !== null) {
				if (start === null) {
					start = i;
				} else {
					end = i + 1;
				}
			}
		}

		if (end === null || start === null) {
			return 0;
		}

		return end - start;
	};

	const bfs = function (root) {
		const queue = [root];
		let result = 0;

		while (queue.length) {
			const size = queue.length;
			let isAllNodesEqualNull = true;
			result = Math.max(result, helper(queue));

			for (let i = 0; i < size; ++i) {
				const node = queue.shift();

				if (node === null) {
					queue.push(null);
					queue.push(null);
					continue;
				}

				isAllNodesEqualNull = false;
				queue.push(node.left);
				queue.push(node.right);
			}

			if (isAllNodesEqualNull) {
				break;
			}
		}

		return result;
	};

	return bfs(root);
};

// DFS
const widthOfBinaryTree1 = function (root) {
	const minimumPosition = [0];
	let result = 0;

	const dfs = function (node, level, position) {
		if (node === null) {
			return;
		}
		if (minimumPosition[level] === undefined) {
			minimumPosition.push(position);
		}

		const diff = position - minimumPosition[level];
		result = Math.max(result, diff + 1);

		dfs(node.left, level + 1, diff * 2);
		dfs(node.right, level + 1, diff * 2 + 1);
	};

	dfs(root, 0, 0);
	return result;
};
