// Medium | DFS + Memoization + Prepare
// Идея задачи очень простая, но реализация немного подкачала
// Все было гораздо проще, чем я думал)

// DFS + Memoization + HashTable | Wrong Answer 135 / 160
// Speed O(n^3), Space O(n^2), n = bombsArray.length
const maximumDetonationSolutionWrongAnswer = function (bombsArray) {
	const collectionDetonatedBombs = Object.create(null);

	for (const bomb of bombsArray) {
		const [x1, y1, r1] = bomb;
		const detonatedBombs = [];
		let countSameBomb = 0;

		for (const bomb of bombsArray) {
			const [x2, y2, r2] = bomb;
			const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

			if (x1 === x2 && y1 === y2 && r1 === r2) {
				countSameBomb += 1;
				continue;
			}

			if (distance <= r1) {
				detonatedBombs.push(bomb);
			}
		}

		const key = `${x1} | ${y1}`;
		if (!Object.hasOwn(collectionDetonatedBombs, key)) {
			collectionDetonatedBombs[key] = {
				countSameBomb,
				detonatedBombs: [],
			};
		}

		collectionDetonatedBombs[key].detonatedBombs.push(...detonatedBombs);
	}

	const collectionHash = Object.create(null);
	const visited = new Set();
	let result = 0;

	const dfs = function (bomb) {
		const [x1, y1] = bomb;
		const key = `${x1} | ${y1}`;

		if (Object.hasOwn(collectionHash, key)) {
			return collectionHash[key];
		}

		collectionHash[key] = collectionDetonatedBombs[key].countSameBomb;
		visited.add(key);

		for (const bomb of collectionDetonatedBombs[key].detonatedBombs) {
			const [x2, y2] = bomb;
			const childKey = `${x2} | ${y2}`;

			if (!visited.has(childKey)) {
				collectionHash[key] += dfs(bomb);
			}
		}

		return collectionHash[key];
	};

	for (const bomb of bombsArray) {
		visited.clear();
		result = Math.max(result, dfs(bomb));
	}

	return result;
};

// DFS + Memoization + ADJ + HashTable | Wrong Answer
// Speed O(n^3), Space O(n^2), n = bombsArray.length
const maximumDetonation = function (bombs) {
	const adj = Object.create(null);

	for (let i = 0, n = bombs.length; i < n; ++i) {
		for (let j = i + 1; j < n; ++j) {
			adj[i] || (adj[i] = []);
			adj[j] || (adj[j] = []);

			const [x1, y1, r1] = bombs[i];
			const [x2, y2, r2] = bombs[j];
			const distance = Math.sqrt(
				Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)
			);

			if (r1 >= distance) {
				adj[i].push(j);
			}

			if (r2 >= distance) {
				adj[j].push(i);
			}
		}
	}

	const dfs = function (index, visited) {
		if (visited.has(index)) {
			return 0;
		}

		visited.add(index);
		const neighbors = adj[index] || [];
		for (const neighbor of neighbors) {
			dfs(neighbor, visited);
		}

		return visited.size;
	};

	let result = 0;

	for (let i = 0, n = bombs.length; i < n; ++i) {
		result = Math.max(result, dfs(i, new Set()));
	}

	return result;
};
