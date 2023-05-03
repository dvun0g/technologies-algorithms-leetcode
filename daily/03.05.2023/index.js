const helper = function (array1, array2, options = 'array1') {
	const result = new Set();
	const set = new Set(options === 'array1' ? array2 : array1);
	const initialArray = options === 'array1' ? array1 : array2;

	for (const value of initialArray) {
		if (!set.has(value)) {
			result.add(value);
		}
	}

	return [...result];
};

const findDifference = function (array1, array2) {
	return [helper(array1, array2, 'array1'), helper(array1, array2, 'array2')];
};

const array1 = [1, 2, 3, 3];
const array2 = [1, 1, 2, 2];
console.log(findDifference(array1, array2));
