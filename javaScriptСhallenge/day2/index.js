const createCounter = function (initialCounter) {
	let counter = initialCounter;
	return function () {
		return counter++;
	};
};
