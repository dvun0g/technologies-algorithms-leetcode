// Not Solution 

// Memoization + Pruning
function solution(string1, string2, hash = {}) {
	if (string1.length === 1) {
		return string1 === string2;
	}
	const key = string1 + string2;
	if (string1 === string2) {
		hash[key] = true;
		return true;
	}

	// Pruning
	const collection = {};
	for (const char of string1) {
		collection[char] = (collection[char] || 0) + 1;
	}
	for (const char of string2) {
		if (!Object.hasOwn(collection, char)) {
			hash[key] = false;
			return false;
		}

		collection[char] -= 1;
	}
	if (Object.values(collection).filter((v) => v).length) {
		hash[key] = false;
		return false;
	}

	for (let i = 1; i < string1.length; i += 1) {
		const isStringsScramble =
			(solution(string1.slice(0, i), string2.slice(0, i)) &&
				solution(string1.slice(i), string2.slice(i))) ||
			(solution(string1.slice(0, i), string2.slice(string1.length - i)) &&
				solution(
					string1.slice(i),
					string2.slice(0, string1.length - i)
				));

		hash[key] = isStringsScramble;
		return isStringsScramble;
	}

	hash[key] = false;
	return false;
}

function isScramble(string1, string2) {
	return solution(string1, string2);
}

const string1 = 'aa';
const string2 = 'aa';
console.log(isScramble(string1, string2));
