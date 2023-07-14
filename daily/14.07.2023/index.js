// Medium | Array + Dynamic Programming + HashTable
// Идея решения с помощью hashtable была не очевидная для меня. Вариант решения с помощью dfs упал с time limit.

// TL
const longestSubsequence = function (array, diff) {
	let result = 0;

	const hash = Object.create(null);
	const dfs = function (index, prevValue = null, count = 0) {
		if (index === array.length) {
			result = Math.max(result, count);
			return;
		}

		const currentValue = array[index];
		const key = `${index} | ${prevValue}`;
		if (Object.hasOwn(hash, key)) {
			return;
		}

		hash[key] = count;
		if (prevValue === null) {
			dfs(index + 1, currentValue, count + 1);
			dfs(index + 1, null, count);
			return;
		}

		if (prevValue + diff === currentValue) {
			dfs(index + 1, prevValue, count);
			dfs(index + 1, currentValue, count + 1);
			return;
		}

		dfs(index + 1, prevValue, count);
	};

	dfs(0, null, 0);

	return result;
};

// Speed O(n), Space O(n), n = array.length
// Done | Beats Speed=99, Space=53
const longestSubsequenceWithHashTable = function (array, diff) {
	const collection = new Map();
	collection.set(array.at(-1), 0);

	let result = 0;

	for (let i = array.length - 2; i >= 0; i--) {
		const nextValue = array[i] + diff;
		const currentValue = array[i];

		if (collection.has(nextValue)) {
			collection.set(currentValue, collection.get(nextValue) + 1);
			result = Math.max(result, collection.get(currentValue));
		} else {
			collection.set(currentValue, 0);
		}
	}

	return result + 1;
};
