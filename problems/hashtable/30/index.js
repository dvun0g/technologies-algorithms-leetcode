const findSubstring = function (string, words) {
	const collectionWords = Object.create(null);
	const lengthWord = words[0].length;
	const lengthSubString = words.length * lengthWord;
	const result = [];

	for (const word of words) {
		collectionWords[word] = 1 + (collectionWords[word] || 0);
	}

	for (let i = 0; i < string.length; ++i) {
		const collectionCopy = { ...collectionWords };
		let wordsUsed = 0;

		for (let j = i; j < j + lengthSubString; j += lengthWord) {
			const substring = string.slice(j, j + lengthWord);
			if (
				Object.hasOwn(collectionCopy, substring) &&
				collectionCopy[substring]
			) {
				collectionCopy[substring] -= 1;
				wordsUsed += 1;
			} else {
				break;
			}
		}

		if (wordsUsed === words.length) {
			result.push(i);
		}
	}

	return result;
};
