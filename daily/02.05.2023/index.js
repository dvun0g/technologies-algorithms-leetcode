const arraySign = function (array) {
	let negativeNumbers = 0;

	for (const value of array) {
		if (value === 0) {
			return 0;
		}

		if (value < 0) {
			negativeNumbers += 1;
		}
	}

	return negativeNumbers % 2 === 0 ? 1 : -1;
};
