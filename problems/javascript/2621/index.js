/**
 * Promises
 * Задача не вызвала каких-либо затруднений.
 */

// Speed O(1), Space O(1)
const sleep = async function (milliseconds) {
	return new Promise((resolve, reject) => {
		const timeoutId = setTimeout(function () {
			clearInterval(timeoutId);
			resolve();
		}, milliseconds);
	});
};
