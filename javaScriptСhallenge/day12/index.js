// Brute Force
const timeLimitSolutionWithBruteForce = function (fn, time) {
	return async function (...args) {
		return new Promise((res, rej) => {
			const timeout = setTimeout(() => {
				clearInterval(timeout);
				rej('Time Limit Exceeded');
			}, time);

			fn(...args)
				.then((result) => {
					clearInterval(timeout);
					res(result);
				})
				.catch((result) => {
					clearInterval(timeout);
					rej(result);
				});
		});
	};
};

// Promise.race
const timeLimitSolutionWithPromiseRace = function (fn, time) {
	return async function (...args) {
		const originalPromise = fn(...args);
		const timeoutPromise = new Promise((_, reject) =>
			setTimeout(() => {
				reject('Time Limit Exceeded');
			}, time)
		);

		return Promise.race([originalPromise, timeoutPromise])
	};
};
