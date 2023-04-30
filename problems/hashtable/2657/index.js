const findThePrefixCommonArray = function (arr1, arr2) {
	const result = [];
	const collection1 = {};
	const collection2 = {};
	const set = new Set();

	for (let i = 0; i < arr1.length; ++i) {
		const value1 = arr1[i];
		const value2 = arr2[i];

		collection1[value1] = true;
		collection2[value2] = true;

		collection1[value2] && set.add(value2);
		collection2[value1] && set.add(value1);
		result.push(set.size);
	}

	return result;
};

const arr1 = [1, 3, 2, 4];
const arr2 = [3, 1, 2, 4];
console.log(findThePrefixCommonArray(arr1, arr2));
