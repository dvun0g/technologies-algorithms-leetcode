function mincostTickets(days, coats) {
	const collection = {};
	const coastDays = [1, 7, 30];
	const collectionCoast = coats.reduce((acc, value, index) => {
		acc[coastDays[index]] = value;
		return acc;
	}, {});

	function dfs(index) {
		if (index === days.length) {
			return 0;
		}
		if (Object.hasOwn(collection, index)) {
			return collection[index];
		}

		collection[index] = Infinity;
		let index2 = index;
		Object.entries(collectionCoast).forEach(([countDay, coast]) => {
			while (
				index2 < days.length &&
				days[index2] < days[index] + Number(countDay)
			) {
				index2 += 1;
			}

			collection[index] = Math.min(
				collection[index],
				coast + dfs(index2)
			);
		});

		return collection[index];
	}

	return dfs(0);
}

const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31];
const coast = [2, 7, 15];
console.log(mincostTickets(days, coast));
