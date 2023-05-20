/**
 * Generator
 * Посмотрел решение задачи.
 * TODO: Посмотреть работу с генераторами.
 */

// Speed O(1), Space O(1)
const fibGenerator = function* () {
	let firstNumber = 0;
	let secondNumber = 1;

	while (true) {
		yield firstNumber;
		[firstNumber, secondNumber] = [
			secondNumber,
			secondNumber + firstNumber,
		];
	}
};
