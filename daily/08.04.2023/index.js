class Node {
	constructor(val, neighbors) {
		this.val = val === undefined ? 0 : val;
		this.neighbors = neighbors === undefined ? [] : neighbors;
	}
}

function cloneGraph(node) {
	const graph = [];

	function dfs(node) {}

	return graph;
}

// O(n)
function sum(index1, index2) {
	let result = 0;

	for (let i = index1; i <= index2; i += 1) {
		result += array[i];
	}

	return result;
}

// Изначальный массив.
const initialArray = [2, 13, 14, 8, -3, 42];

function sumArray(array) {
	return array.reduce((acc, v, index) => {
		if (index === 0) {
			acc.push(v);
			return acc;
		}

		acc.push(v + acc[index - 1]);
		return acc;
	}, []);
}

// Массив сум.
console.log(sumArray(initialArray)) // [2, 15, 29, 37, 34, 76]
