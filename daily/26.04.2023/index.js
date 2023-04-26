const addDigits = function (number) {
	if (number < 10) {
		return number;
	}

	const currentNumber = [...String(number)].reduce(
		(acc, v) => acc + Number(v),
		0
	);
	return addDigits(currentNumber);
};
