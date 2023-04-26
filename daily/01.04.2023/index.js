function search(array, target) {
	let start = 0;
	let end = array.length - 1;

	while (start <= end) {
		const middle = start + Math.floor((end - start) / 2);

		if (array[middle] === target) {
			return middle;
		}

		if (array[middle] < target) {
			start = middle + 1;
		} else {
			end = middle - 1;
		}
	}

	return -1;
}

const array = [-1, 0, 3, 5, 9, 12];
const target = 9;

console.log(search(array, target));
