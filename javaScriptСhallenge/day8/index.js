const once = function (fn) {
	let isFirstCall = true;
	return function (...args) {
		if (isFirstCall) {
			isFirstCall = false;
			return fn(...args);
		}
	};
};
