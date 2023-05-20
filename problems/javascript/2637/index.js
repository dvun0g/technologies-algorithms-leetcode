/**
 * Promises
 * Задача не вызвала трудностей.
 */

// Speed O(1), Space O(1)
const timeLimit = function (fn, time) {
	return async function (...args) {
		return new Promise((resolve, reject) => {
			const timeoutId = setTimeout(function () {
				clearInterval(timeoutId);
				reject('Time Limit Exceeded');
			}, time);

			fn(...args)
				.then(resolve)
				.catch(reject)
				.finally(function () {
					clearInterval(timeoutId);
				});
		});
	};
};
