// Easy | Binary Search + String
// Идея задачи максимально простая, проблем с реализацией бинарного поиска не возникло.

// Binary Search + String | Done
// Speed O(logn), Space O(1), n = letters.length
const nextGreatestLetter = function (letters, target) {
	let start = 0;
	let end = letters.length - 1;

	while (start <= end) {
		const middle = Math.floor((start + end) / 2);
		if (letters[middle].codePointAt() <= target.codePointAt()) {
			start = middle + 1;
		} else {
			end = middle - 1;
		}
	}

	return letters[start] !== undefined ? letters[start] : letters[0];
};
