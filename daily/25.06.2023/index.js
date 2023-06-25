// Hard | Dynamic Programming + Recursive + Memoization
// Идея задачи была не очень сложная, запутался в реализации dfs. Если подвести итог, то я бы оценил эту задачу на уровень medium (стандартный dfs).

// Speed O(n^2), Space O(n^2), n = locations.length | Beats Speed=14, Space=35
const countRoutes = function (locations, start, finish, fuel) {
	const mod = 1e9 + 7;
	const hash = Object.create(null);

	const dfs = function (index, fuel) {
		if (fuel < 0) {
			return 0;
		}

		const key = `${index} | ${fuel}`;
		if (Object.hasOwn(hash, key)) {
			return hash[key];
		}

		let totalRoutes = 0;

		if (index === finish) {
			totalRoutes += 1;
		}

		for (let i = 0, n = locations.length; i < n; ++i) {
			if (i === index) {
				continue;
			}

			const costFuel = Math.abs(locations[i] - locations[index]);
			totalRoutes = (totalRoutes + dfs(i, fuel - costFuel)) % mod;
		}

		hash[key] = totalRoutes;
		return hash[key];
	};

	return dfs(start, fuel);
};
