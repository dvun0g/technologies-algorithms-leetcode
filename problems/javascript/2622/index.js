/**
 * Timeout | Classes | HashMap
 * Посмотрел решение задачи, потому что описание написано очень плохо.
 */

// Speed O(1), Space O(n)
class TimeLimitedCache {
	collection = new Map();

	set = function (key, value, duration) {
		const valueOfCollection = this.collection.get(key);

		if (valueOfCollection) {
			clearInterval(valueOfCollection.timeoutId);
		}

		const timeoutId = setTimeout(() => {
			this.collection.delete(key);
			clearInterval(timeoutId);
		}, duration);

		this.collection.set(key, { value, timeoutId });
		return Boolean(valueOfCollection);
	};

	get = function (key) {
		if (!this.collection.has(key)) {
			return -1;
		}

		return this.collection.get(key).value;
	};

	count = function () {
		return this.collection.size;
	};
}
