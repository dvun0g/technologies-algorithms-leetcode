/**
 * Standard Library Methods | Algorithms | Recursive
 * Тяжелая задачка, но решил без подсказов ввиде готовых решений
 */

// Speed O(n), Space O(1), n - количество элементов в объекте | массиве
const jsonStringify = function (object) {
	let string = '';

	if (typeof object !== 'object') {
		if (typeof object === 'string') {
			return `${string}"${object}"`;
		}

		return string + object;
	}

	if (object === null) {
		return string + object;
	}

	if (Array.isArray(object)) {
		string += '[';
		for (let i = 0; i < object.length; ++i) {
			const value = object[i];
			string += jsonStringify(value);

			if (i !== object.length - 1) {
				string += ',';
			}
		}
		string += ']';

		return string;
	}

	string += '{';
	for (const [key, value] of Object.entries(object)) {
		string += `"${key}":${jsonStringify(value)},`;
	}

	if (string.at(-1) === ',') {
		string = string.slice(0, string.length - 1);
	}

	string += '}';

	return string;
};
