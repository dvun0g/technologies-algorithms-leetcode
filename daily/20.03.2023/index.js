function canPlaceFlowers(array, number) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === 1) continue;

		if (
			(i === 0 || array[i - 1] === 0) &&
			(i === array.length - 1 || array[i + 1] === 0)
		) {
			array[i] = 1;
			number--;
		}
	}

	return number <= 0;
}

const array = [1, 0, 0, 0, 0, 1];
const number = 2;
console.log(canPlaceFlowers(array, number));
