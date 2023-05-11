const array1 = [2, 5, 1, 2, 5];
const array2 = [10, 5, 2, 1, 5, 2];

// Brute Force Solution O(n * m) Recursive + Memoization With hashmap
const maxUncrossedLinesRecursiveMemoizationWithHashMapSolution = function (
	array1,
	array2
) {
	const cacheHashMap = Object.create(null);

	const lengthArray1 = array1.length;
	const lengthArray2 = array2.length;

	const recursive = function (index1, index2) {
		const key = `${index1}|${index2}`;

		if (index1 >= lengthArray1 || index2 >= lengthArray2) {
			return 0;
		}

		if (Object.hasOwn(cacheHashMap, key)) {
			return cacheHashMap[key];
		}

		const valueFromArray1 = array1[index1];
		const valueFromArray2 = array2[index2];

		if (valueFromArray1 === valueFromArray2) {
			cacheHashMap[key] = 1 + recursive(index1 + 1, index2 + 1);
		} else {
			cacheHashMap[key] = Math.max(
				recursive(index1 + 1, index2),
				recursive(index1, index2 + 1)
			);
		}

		return cacheHashMap[key];
	};

	return recursive(0, 0);
};

// console.log(
// 	maxUncrossedLinesRecursiveMemoizationWithHashMapSolution(array1, array2)
// );

// Brute Force Solution O(n * m) Recursive + Memoization With 2D Array
const maxUncrossedLinesRecursiveMemoizationWithTwodimensionalArraySolution =
	function (array1, array2) {
		const lengthArray1 = array1.length;
		const lengthArray2 = array2.length;

		const cacheTwodimensionalArray = new Array(lengthArray1)
			.fill()
			.map(() => new Array(lengthArray2).fill());

		const recursive = function (index1, index2) {
			if (index1 >= lengthArray1 || index2 >= lengthArray2) {
				return 0;
			}

			if (cacheTwodimensionalArray[index1][index2] !== undefined) {
				return cacheTwodimensionalArray[index1][index2];
			}

			const valueFromArray1 = array1[index1];
			const valueFromArray2 = array2[index2];

			if (valueFromArray1 === valueFromArray2) {
				cacheTwodimensionalArray[index1][index2] =
					1 + recursive(index1 + 1, index2 + 1);
			} else {
				cacheTwodimensionalArray[index1][index2] = Math.max(
					recursive(index1 + 1, index2),
					recursive(index1, index2 + 1)
				);
			}

			return cacheTwodimensionalArray[index1][index2];
		};

		return recursive(0, 0);
	};

// console.log(
// 	maxUncrossedLinesRecursiveMemoizationWithTwodimensionalArraySolution(
// 		array1,
// 		array2
// 	)
// );
