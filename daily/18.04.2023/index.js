const mergeAlternately = function (string1, string2) {
	let result = '';

	for (let i = 0; i < Math.max(string1.length, string2.length); i += 1) {
		result += (string1[i] || '') + (string2[i] || '');
	}

	return result;
};
