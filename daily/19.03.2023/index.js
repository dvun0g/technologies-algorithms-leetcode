class WordDictionary {
	constructor() {
		this.array = [];
	}

	addWord(word) {
		this.array.push(word);
	}

	isCorrectWord(correct, word) {
		if (correct.length !== word.length) {
			return false;
		}

		for (let i = 0; i < correct.length; i += 1) {
			const correctChar = correct[i];
			const wordChar = word[i];

			if (wordChar === '.') {
				continue;
			}

			if (correctChar !== wordChar) {
				return false;
			}
		}

		return true;
	}

	search(word) {
		for (const correctWord of this.array) {
			if (this.isCorrectWord(correctWord, word)) {
				return true;
			}
		}

		return false;
	}
}
