const removeStars = function (string) {
	const stack = [];

	for (const char of string) {
		if (char === '*') {
			stack.pop();
			continue;
		}

		stack.push(char);
	}

	return stack.join('');
};
