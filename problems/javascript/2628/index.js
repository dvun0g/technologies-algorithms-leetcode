/**
 * Algorithms | Recursive
 * При выполнение задачи не учел случай с массивом
 * К сожалению из описания было непонятно, что на вход могут принимать не только объекты
 * Так при решение задач проблем не возникло.
 */

// Speed O(n), Space O(1), n - количество свойств объекта | количество элементов массива
const areDeeplyEqual = function (object1, object2) {
	const helper = function (object) {
		return [...JSON.stringify(object)].sort().join('');
	};

	if (Array.isArray(object1) || Array.isArray(object2)) {
		if (!Array.isArray(object1) || !Array.isArray(object2)) {
			return false;
		}

		if (object1.length !== object2.length) {
			return false;
		}

		for (let i = 0; i < object1.length; ++i) {
			if (!areDeeplyEqual(object1[i], object2[i])) {
				return false;
			}
		}

		return true;
	}

	return helper(object1) === helper(object2);
};
