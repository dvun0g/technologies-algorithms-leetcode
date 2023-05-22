/**
 * Promises | Recursive
 * Возникли явные трудоности в этой задаче, посмотрел решение
 * TODO: Углубленно изучить тему промисов и 
 * так же потренироваться реализовывать такую функциональность
 */

// Speed O(n), Space O(n), n = functionsArray.length
const promisePool = async function (functionsArray, n) {
	const array = [...functionsArray];

	const call = async function (fn) {
		const promise = fn();
		await promise;

		if (array.length) {
			await call(array.shift());
		}
	};

	await Promise.all(array.splice(0, n).map((fn) => call(fn)));
};
