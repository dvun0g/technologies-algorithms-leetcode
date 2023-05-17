const functionsArray = [
	() => new Promise((res) => setTimeout(res, 300)),
	() => new Promise((res) => setTimeout(res, 400)),
	() => new Promise((res) => setTimeout(res, 200)),
];
const n = 2;

// Solution 1 | Recursive | O(n + k), n = functionsArray.length, k = numberFunctionPerformedSimultaneously
const promisePoolSolutionWithRecursive = async function (
	functionsArray,
	numberFunctionPerformedSimultaneously
) {
	return new Promise((resolve) => {
		let isProgress = 0;
		let index = 0;

		const recursive = function () {
			if (index === functionsArray.length && isProgress === 0) {
				resolve();
			}

			while (
				index < functionsArray.length &&
				isProgress < numberFunctionPerformedSimultaneously
			) {
				functionsArray[index]().then(() => {
					isProgress -= 1;
					recursive();
				});

				isProgress += 1;
				index += 1;
			}
		};

		recursive();
	});
};

// Solution 2 | Promise.all + Recursive | O(n), n = functionsArray.length
const promisePoolSolutionWithPromiseAll = async function(functionsArray, n) {
    const callback = async function(v, i) {
        if (functionsArray.length === 0) {
            return;
        }

        const fn = functionsArray.shift();
        await fn();
        await callback();
    }

    const arrayPromises = new Array(n).fill().map(callback);
    await Promise.all(arrayPromises);
}

console.log(promisePoolSolutionWithPromiseAll(functionsArray, n))