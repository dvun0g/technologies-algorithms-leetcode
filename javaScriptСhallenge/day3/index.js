const createCounter = function (initial) {
	let counter = initial;

	return {
		increment: function () {
			counter += 1;
			return counter;
		},
		decrement: function () {
			counter -= 1;
			return counter;
		},
		reset: function () {
			counter = initial;
			return counter;
		},
	};
};
