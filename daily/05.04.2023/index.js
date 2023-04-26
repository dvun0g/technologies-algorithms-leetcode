function minimizeArrayValue(array) {
	return array.reduce(
		(acc, value, index) => {
			if (!index) {
				return acc;
			}

			acc.sum += value;
			acc.result = Math.max(acc.result, Math.ceil(acc.sum / (index + 1)));

			return acc;
		},
		{
			sum: array[0],
			result: array[0],
		}
	).result;
}

const array = [13, 13, 20, 0, 8, 9, 9];
console.log(minimizeArrayValue(array));
