const reduce = function (array, fn, initial) {
	let result = initial;

	for (const value of array) {
		result = fn(result, value);
	}

	return result;
};

const array = [1, 2, 3, 4];
const fn = (acc, value) => acc + value;
const initial = 0;
console.log(reduce(array, fn, initial));
