function zeroFilledSubarray(array) {
	return array.reduce(
		(acc, value, index) => {
			if (value === 0) {
				acc.counter += 1;
			} else {
				acc.result += ((acc.counter + 1) * acc.counter) / 2;
				acc.counter = 0;
			}

			if (index === array.length - 1 && acc.counter) {
				acc.result += ((acc.counter + 1) * acc.counter) / 2;
			}

			return acc;
		},
		{
			counter: 0,
			result: 0,
		}
	).result;
}
