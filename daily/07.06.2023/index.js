// Medium | Bit Manipulation | String
// Идея задачи простая, но вот реализация выглядит довольно некрасиво.

const helperFillZerosString = function (string, length) {
	let resultString = '';
	while (string.length + resultString.length !== length) {
		resultString += '0';
	}

	return resultString + string;
};

const helperConvertNumberToBinaryString = function (...numbersArray) {
	const binaryStringArray = [];
	let maxLength = 0;

	for (const number of numbersArray) {
		const binaryString = number.toString(2);
		maxLength = Math.max(binaryString.length, maxLength);
		binaryStringArray.push(binaryString);
	}

	for (let i = 0, n = binaryStringArray.length; i < n; ++i) {
		const binaryString = binaryStringArray[i];
		binaryStringArray[i] = helperFillZerosString(binaryString, maxLength);
	}

	return {
		binaryStringArray,
		maxLength,
	};
};

// String | Bit Manipulation | Done
// Speed O(n), Space O(n), n = Math.max(number1.length, number2.length, resultNumber.length)
const minFlips = function (number1, number2, resultNumber) {
	const { binaryStringArray, maxLength } = helperConvertNumberToBinaryString(
		number1,
		number2,
		resultNumber
	);
	const [binaryString1, binaryString2, binaryStringResult] =
		binaryStringArray;

	let flips = 0;

	for (let i = 0; i < maxLength; ++i) {
		if (
			binaryStringResult[i] === '1' &&
			binaryString1[i] === '0' &&
			binaryString2[i] === '0'
		) {
			flips += 1;
		}

		if (binaryStringResult[i] === '0' && binaryString1[i] === '1') {
			flips += 1;
		}

		if (binaryStringResult[i] === '0' && binaryString2[i] === '1') {
			flips += 1;
		}
	}

	return flips;
};
