// Hard | Binary Search + Greedy + DFS + Sorting + Memoization
// Идея задачи достаточно сложная, сам смог до нее дойти, при реализации не уделил достаточное количество времени и посмотрел решение, так же можно оптимизировать данное решение с помощью dynamic programming.

// Speed O(n^2 * logn), Space O(n^2), n = array.length | Beats=9.9% + Done
const makeArrayIncreasing = function (array, values) {
	values.sort((v1, v2) => v1 - v2);

	const hashCollection = Object.create(null);
	const dfs = function (index, previousValue) {
		if (index === array.length) {
			return 0;
		}

		const key = `${index} | ${previousValue}`;
		if (Object.hasOwn(hashCollection, key)) {
			return hashCollection[key];
		}

		let cost = Number.MAX_SAFE_INTEGER;
		const currentValue = array[index];

		const isIncreasedArray = currentValue > previousValue;
		if (isIncreasedArray) {
			cost = dfs(index + 1, array[index]);
		}

		const indexMinimumValue = binarySearch(values, previousValue);

		const minimumValueExists = indexMinimumValue < values.length;
		if (minimumValueExists) {
			cost = Math.min(
				cost,
				1 + dfs(index + 1, values[indexMinimumValue])
			);
		}

		hashCollection[key] = cost;
		return hashCollection[key];
	};

	const counterReplace = dfs(0, Number.MIN_SAFE_INTEGER);

	const arrayCannotStrictlyIncreased =
		counterReplace === Number.MAX_SAFE_INTEGER;
	if (arrayCannotStrictlyIncreased) {
		return -1;
	}

	return counterReplace;
};

const binarySearch = function (array, target) {
	let left = 0;
	let right = array.length;

	while (left < right) {
		const middle = Math.floor((left + right) / 2);
		if (array[middle] <= target) {
			left = middle + 1;
		} else {
			right = middle;
		}
	}

	return left;
};

const array = [1, 5, 3, 6, 7];
const values = [1, 3, 2, 4];
console.log(makeArrayIncreasing(array, values));
