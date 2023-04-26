function binarySearch(spell, potions, success) {
	let start = 0;
	let end = potions.length - 1;

	while (start <= end) {
		const middle = start + Math.floor((end - start) / 2);
		const isIndexGood =
			(potions[middle] * spell >= success &&
				potions[middle - 1] * spell < success) ||
			(potions[middle] * spell >= success && middle === 0);

		if (isIndexGood) {
			return potions.length - middle;
		}

		if (potions[middle] * spell < success) {
			start = middle + 1;
		} else {
			end = middle - 1;
		}
	}

	return 0;
}

function successfulPairs(spells, potions, success) {
	const result = [];
	potions.sort((value1, value2) => value1 - value2);

	for (const spell of spells) {
		result.push(binarySearch(spell, potions, success));
	}

	return result;
}

const spells = [5, 1, 3];
const potions = [1, 2, 3, 4, 5];
const success = 7;

console.log(successfulPairs(spells, potions, success));
