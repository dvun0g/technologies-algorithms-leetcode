const filter = function (array, fn) {
	const result = [];

	for (let i = 0, n = array.length; i < n; ++i) {
		fn(array[i], i) && result.push(array[i]);
	}

	return result;
};
