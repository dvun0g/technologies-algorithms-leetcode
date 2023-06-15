// Medium | Tree + BFS
// Стандартная задача на BFS, можно решить и с помощью DFS, но это сложнее в реализации

// Tree + BFS | Done
const maxLevelSum = function (root) {
	let result = 0;

	const isEmptyTree = root === null;
	if (isEmptyTree) {
		return result;
	}

	const queue = [root];
	let maximumSum = -Infinity;
	let currentLevel = 0;

	while (queue.length) {
		let sumCurrentLevel = 0;
		const sizeCurrentLevel = queue.length;
		currentLevel += 1;

		for (let i = 0; i < sizeCurrentLevel; ++i) {
			const node = queue.shift();
			sumCurrentLevel += node.val || 0;

			if (node.left !== null) {
				queue.push(node.left);
			}
			if (node.right !== null) {
				queue.push(node.right);
			}
		}

		if (sumCurrentLevel > maximumSum) {
			maximumSum = sumCurrentLevel;
			result = currentLevel;
		}
	}

	return result;
};
