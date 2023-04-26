const memoize = function (func) {
	const hash = Object.create(null);
	const nameFunction = func.name;

	if (!Object.hasOwn(hash, nameFunction)) {
		hash[nameFunction] = {};
	}

	return function (...args) {
		const key = args.toString();
		if (hash[nameFunction][key] !== undefined) {
			return hash[nameFunction][key];
		}

		hash[nameFunction][key] = func(...args);
		return hash[nameFunction][key];
	};
};

const sum = function (a, b) {
	return a + b;
};
const memoizeFunction = memoize(sum);
