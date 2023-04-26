function partitionString(string) {
	let partitions = 0;
	const collection = new Set();

	for (let i = 0; i < string.length; i += 1) {
		const char = string[i];
		if (collection.has(char)) {
			partitions += 1;
			collection.clear();
		}

		collection.add(char);
	}

	return partitions + 1;
}

const string = 'ssssss';
console.log(partitionString(string));
