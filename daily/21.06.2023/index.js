// Hard | Sorting + Prefix Sum + Suffix Sum + Greedy
// Идея задачи сложная, мне явно не хватило практического использования Suffix Sum.

// Sorting + Prefix Sum + Suffix Sum + Greedy | Done
// Speed O(n logn), Space (n), n = numberArray.length
const minCost = function (numberArray, costArray) {
	const n = numberArray.length;
	const isEmptyOrOneElementArray = n < 2;

	if (isEmptyOrOneElementArray) {
		return 0;
	}

	const entriesNumberCost = [];
	for (let i = 0; i < n; ++i) {
		const number = numberArray[i];
		const cost = costArray[i];
		entriesNumberCost.push([number, cost]);
	}

	entriesNumberCost.sort((v1, v2) => v1[0] - v2[0]);

	const sortedEntriesFirstNumberElement = entriesNumberCost[0][1];
	const prefixSumArray = [sortedEntriesFirstNumberElement];
	for (let i = 1; i < n; ++i) {
		const cost = entriesNumberCost[i][1];
		const previousPrefixSum = prefixSumArray[i - 1];
		prefixSumArray.push(previousPrefixSum + cost);
	}

	const prefixSumArrayLastElement = prefixSumArray.at(-1);
	const suffixSumArray = [prefixSumArrayLastElement];
	for (let i = 1; i < n; ++i) {
		const previousSuffixSum = suffixSumArray[i - 1];
		const previousCost = entriesNumberCost[i - 1][1];
		suffixSumArray.push(previousSuffixSum - previousCost);
	}

	let previousMinimumCost = 0;
	const currentNumberElement = entriesNumberCost[0][0];
	for (let i = 1; i < n; ++i) {
		const [number, cost] = entriesNumberCost[i];
		previousMinimumCost += (number - currentNumberElement) * cost;
	}

	let resultMinimumCost = previousMinimumCost;

	for (let i = 1; i < n; ++i) {
		const differentNumbers =
			entriesNumberCost[i][0] - entriesNumberCost[i - 1][0];
		const currentElementCost =
			differentNumbers * (prefixSumArray[i - 1] - suffixSumArray[i]);
		const minimumCost = Math.abs(currentElementCost + previousMinimumCost);

		resultMinimumCost = Math.min(resultMinimumCost, minimumCost);
		previousMinimumCost = minimumCost;
	}

	return resultMinimumCost;
};

const numbers = [1, 2];
const costs = [1, 100];

console.log(minCost(numbers, costs));
