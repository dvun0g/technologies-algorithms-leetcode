function maxSatisfaction(array) {
	array.sort((value1, value2) => value1 - value2);

	let result = 0;
	let currentSum = 0;
	let countSatisfaction = 0;
	let counter = 1;

	for (let i = array.length - 1; i >= 0; i -= 1) {
		currentSum += array[i];

		if (currentSum < 0) {
			break;
		}

		countSatisfaction += 1;
	}

	while (countSatisfaction) {
		result += array.at(-countSatisfaction) * counter;
		counter += 1;
		countSatisfaction -= 1;
	}

	return result;
}

const array = [-1, -8, 0, 5, -7];
console.log(maxSatisfaction(array));
