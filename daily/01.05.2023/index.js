const average = function (salary) {
	return (
		salary.reduce(
			(acc, v, i) => {
				acc.max = Math.max(v, acc.max);
				acc.min = Math.min(v, acc.min);
				acc.result += v;

				if (i === salary.length - 1) {
					acc.result -= acc.max;
					acc.result -= acc.min;
				}

				return acc;
			},
			{
				result: 0,
				min: Infinity,
				max: -Infinity,
			}
		).result /
		(salary.length - 2)
	);
};
