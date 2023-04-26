const simplifyPath = function (path) {
	const stack = [];
	const pathArray = path.split('/').filter(Boolean);
	const collection = {
		'..': function (stack) {
			if (!stack.length) {
				return;
			}
			stack.pop();
		},
        '.': null,
		'/': null,
	};


	for (const directory of pathArray) {
		if (Object.hasOwn(collection, directory)) {
			typeof collection[directory] === 'function' &&
				collection[directory](stack);

			continue;
		}
		stack.push(directory);
	}

	return '/' + stack.join('/');
};

const path = '/a/./b/../../c/';
console.log(simplifyPath(path));
