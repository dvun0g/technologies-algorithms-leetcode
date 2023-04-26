function numRescueBoats(people, limit) {
	let result = 0;
	let start = 0;
	let end = people.length - 1;

	people.sort((value1, value2) => value1 - value2);

	while (start <= end) {
		if (people[start] + people[end] <= limit) {
			start += 1;
		}

		end -= 1;
		result += 1;
	}

	return result;
}

const people = [3, 5, 3, 4];
const limit = 5;

console.log(numRescueBoats(people, limit));
