// Easy | Math + Array
// Задача достаточно легкая, если знать формулу наклона (y2 - y1) / (x2 - x1)
// Сам решить я ее не смог, по скольку не догадался до этой формулы

// Math + Array | Wrong Answer - 46
// Speed O(n), Space O(1), n = coordinates.length
const checkStraightLine = function (coordinates) {
	const differentX = coordinates[1][0] - coordinates[0][0];
	const differentY = coordinates[1][1] - coordinates[0][1];

	for (let i = 1, n = coordinates.length; i < n; ++i) {
		const currentCoordinate = coordinates[i];
		const prevCoordinate = coordinates[i - 1];

		if (currentCoordinate[0] - prevCoordinate[0] !== differentX) {
			return false;
		}

		if (currentCoordinate[1] - prevCoordinate[1] !== differentY) {
			return false;
		}
	}

	return true;
};

// Math + Array | Done
// Speed O(n), Space O(1), n = coordinates.length
const checkStraightLineSolutionWithSlopeFormula = function (coordinates) {
	if (coordinates.length <= 2) {
		return true;
	}

	const helperCalculateSlope = function (x1, y1, x2, y2, x, y) {
		return (y2 - y1) * (x - x1) - (y - y1) * (x2 - x1);
	};

	const [x1, y1] = coordinates[0];
	const [x2, y2] = coordinates[1];

	for (let i = 2, n = coordinates.length; i < n; ++i) {
		const [x, y] = coordinates[i];

		if (helperCalculateSlope(x1, y1, x2, y2, x, y) !== 0) {
			return false;
		}
	}

	return true;
};
