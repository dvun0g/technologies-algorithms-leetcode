const longestPalindromeSubseq = function (string) {
	const collection = Object.create(null);
	let maximumLength = 0;

	const dfs = function (left, right) {
		if (left < 0 || right > string.length - 1) {
			return 0;
		}

		const key = `${left}|${right}`;
		if (Object.hasOwn(collection, key)) {
			return collection[key];
		}

		if (string[left] === string[right]) {
			const currentLength = left === right ? 1 : 2;
			collection[key] = currentLength + dfs(left - 1, right + 1);
		} else {
			collection[key] = Math.max(
				dfs(left - 1, right),
				dfs(left, right + 1)
			);
		}

		maximumLength = Math.max(maximumLength, collection[key]);

		return collection[key];
	};

	for (let i = 0; i < string.length; i += 1) {
		dfs(i, i);
		dfs(i, i + 1);
	}

	return maximumLength;
};

const string =
	'vckpzcfezppubykyxvwhbwvgezvannjnnxgaqvesrhdsgngcbbdpqeodzmqbkrwekakrukwxhqjeacxhkixruwshgwkjthmtqumvqcvhhoavarlwhpzbbniqrswvyhtfquioooejsbnxdnjrfhzpdrljcuenzjpzkyrgpxrbtchnzmdkekhmuqpoljvrpndzmogeuxjotdsyrrudligpgwcblaimqdqsgmjrbvyonugzsbkdhawmewiaccuvfnpftcjdjuljekiaipknorknwyx';
console.log(longestPalindromeSubseq(string));
