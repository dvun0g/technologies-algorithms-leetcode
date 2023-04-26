const createCounter = function (initialValue = 0) {
	let counter = initialValue - 1;

	return function () {
		counter += 1;
		return counter;
	};
};
