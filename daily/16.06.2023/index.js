// Hard | Binary Search Tree + Math + BigInt
// Идея задачи достаточно сложная, мне не хватило знаний по построению BST из массива. Так же сложность добаляется использование BigInt и определние математической формулы, по которой мы можем узнать результат. Если разобраться с идеей задачи, то реализация не составляет особых проблем.

// Binary Search Tree + Math + BigInt | Done
// Speed O(n^2), Space O(n), n = nums.length
const numOfWays = function (nums) {
	const module = BigInt(1e9 + 7);
	const factorials = helperGetFactorials(nums.length);

	const ways = function (array) {
		if (array.length <= 2n) {
			return 1n;
		}

		const [left, right] = helperGetSubNodes(array);

		return (
			ways(left) *
			ways(right) *
			helperGetCombination(factorials, left.length, right.length)
		);
	};

	return (ways(nums) - 1n) % module;
};

const helperGetFactorials = function (length) {
	const factorials = [1n];

	for (let i = 1; i < length; ++i) {
		factorials[i] = factorials[i - 1] * BigInt(i);
	}

	return factorials;
};

const helperGetSubNodes = function (initialArray) {
	const left = [];
	const right = [];
	const rootValue = initialArray[0];

	for (const value of initialArray) {
		if (rootValue > value) {
			left.push(value);
		}

		if (rootValue < value) {
			right.push(value);
		}
	}

	return [left, right];
};

const helperGetCombination = function (factorials, leftLen, rightLen) {
	return (
		factorials[leftLen + rightLen] /
		factorials[leftLen] /
		factorials[rightLen]
	);
};
