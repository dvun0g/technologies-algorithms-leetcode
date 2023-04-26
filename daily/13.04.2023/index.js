const validateStackSequences = function (pushed, popped) {
	if (pushed.length !== popped.length) {
		return false;
	}

	const stack = [];
	let indexPushed = 0;
	let indexPopped = 0;

	while (indexPushed !== pushed.length || indexPopped !== popped.length) {
		if (!stack.length) {
			stack.push(pushed[indexPushed]);
			indexPushed += 1;
			continue;
		}

		if (stack.at(-1) === popped[indexPopped]) {
			stack.pop();
			indexPopped += 1;
		} else if (indexPushed < pushed.length) {
			stack.push(pushed[indexPushed]);
			indexPushed += 1;
		} else {
			return false;
		}
	}

	return true;
};

const pushed = [1, 2, 3, 4, 5];
const popped = [4, 3, 5, 1, 2];
console.log(validateStackSequences(pushed, popped));
