// Wrong Answer

// const numSubseq = function (array, target) {
// 	let result = 0;
// 	const module = 10 ** 9 + 7;

// 	const n = array.length;
// 	let right = n - 1;

// 	array.sort((v1, v2) => v1 - v2);

// 	for (let left = 0; left < n; left++) {
// 		while (array[left] + array[right] > target && left <= right) {
// 			right -= 1;
// 		}
// 		if (left <= right) {
// 			result += (2 ** (right - left)) % module;
// 		}
// 	}

// 	return result;
// };

const numSubseq = function (nums, target) {
	const pow = [1];

	nums.sort((v1, v2) => v1 - v2);

	const module = 10 ** 9 + 7;
	const n = nums.length;

	for (let i = 1; i < n; i++) {
		pow.push((pow.at(-1) * 2) % module);
	}

	let left = 0;
	let right = n - 1;
	let result = 0;

	while (left <= right) {
		if (nums[left] + nums[right] > target) {
			right -= 1;
		} else {
			result = (result + pow[right - left]) % module;
			left += 1;
		}
	}

	return result;
};
