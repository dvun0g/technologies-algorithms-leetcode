const checkRecord = (string) => {
	const collection = {
		A: 0,
		L: 0,
	};

	for (const char of string) {
		if (Object.hasOwn(collection, char)) {
			if (char === 'A') {
				collection['L'] = 0;
			}
			collection[char] += 1;
		} else {
			collection['L'] = 0;
		}

		if (collection['A'] === 2 || collection['L'] === 3) {
			return false;
		}
	}

	return true;
};
