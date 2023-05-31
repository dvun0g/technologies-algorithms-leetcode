// Medium | Design | HashMap
// При решение задачи не возникло проблем

// Speed O(1), Space O(n + m), n - количество одновременно выехавший пользователей, m - количество станций.
class UndergroundSystem {
	collection = Object.create(null);
	collectionSum = Object.create(null);

	checkIn = function (id, startStationName, time) {
		this.collection[id] = [startStationName, time];
	};
	checkOut = function (id, endStationName, endTime) {
		const [startStationName, startTime] = this.collection[id];
		delete this.collection[id];

		const key = `${startStationName} | ${endStationName}`;
		const currentTime = endTime - startTime;

		if (!Object.hasOwn(this.collectionSum, key)) {
			this.collectionSum[key] = [0, 0];
		}

		const [sum, counter] = this.collectionSum[key];
		this.collectionSum[key] = [sum + currentTime, counter + 1];
	};
	getAverageTime = function (startStationName, endStationName) {
		const key = `${startStationName} | ${endStationName}`;

		if (!Object.hasOwn(this.collectionSum, key)) {
			return 0;
		}

		const [sum, counter] = this.collectionSum[key];
		return sum / counter;
	};
}
