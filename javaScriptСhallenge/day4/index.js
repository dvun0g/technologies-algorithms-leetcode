const map = function (array, fn) {
	const result = [];

	for (let i = 0, n = array.length; i < n; ++i) {
		result.push(fn(array[i], i));
	}

	return result;
};
