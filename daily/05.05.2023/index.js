const helper = function (string, k, collectionVowels) {
	let currentResult = 0;
	const arrayCharacters = new Array(string.length).fill(false);

	for (let i = 0; i < k; ++i) {
		const char = string[i];
		if (Object.hasOwn(collectionVowels, char)) {
			currentResult += 1;
			arrayCharacters[i] = true;
		}
	}

	return {
		currentResult,
		arrayCharacters,
	};
};

const maxVowels = function (string, k) {
	if (string.length < k) {
		return 0;
	}

	const collectionVowels = { a: 1, e: 1, i: 1, o: 1, u: 1 };
	let { currentResult, arrayCharacters } = helper(
		string,
		k,
		collectionVowels
	);
	let result = currentResult;

	for (let i = k, n = string.length; i < n; ++i) {
		const char = string[i];
		if (Object.hasOwn(collectionVowels, char)) {
			currentResult += 1;
			arrayCharacters[i] = true;
		}

		if (arrayCharacters[i - k]) {
			currentResult -= 1;
		}

		result = Math.max(result, currentResult);
	}

	return result;
};

const string = 'leetcode';
const k = 3;
console.log(maxVowels(string, k));
