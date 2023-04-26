const kidsWithCandies = function (babes, candies) {
	return babes.reduce(
		(acc, v) => {
			if (v + candies >= acc.maximum) {
				acc.result.push(true);
            } else {
				acc.result.push(false);
			}

			return acc;
		},
		{
			maximum: Math.max(...babes),
			result: [],
		}
	).result;
};
