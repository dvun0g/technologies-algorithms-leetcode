const throttle = function (fn, time) {
	let isThrottle = false;
	let nextArguments = null;

	const helper = function () {
		if (nextArguments) {
			fn(...nextArguments);
			isThrottle = true;
			nextArguments = null;
			setTimeout(helper, time);
		} else {
			isThrottle = false;
		}
	};

	return function (...args) {
		if (isThrottle) {
			nextArguments = args;
		} else {
			fn(...args);
			isThrottle = true;
			setTimeout(helper, time);
		}
	};
};
