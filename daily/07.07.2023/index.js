// Medium | Sliding Window + Two Pointers
// Идея задачи для меня была непонятна, но после просмотра видео разбора стала очевидна. Реализация не составила проблем.

// Speed O(n), Space O(1), n = answers.length
// Done | Beats Speed=66, Space=86
const maxConsecutiveAnswers = function (answers, k) {
	let countTrue = 0;
	let countFalse = 0;

	let result = 0;

	for (let left = 0, right = 0, n = answers.length; right <= n; ) {
		const minCount = Math.min(countFalse, countTrue);

		if (minCount > k) {
			switch (answers[left]) {
				case 'T':
					countTrue -= 1;
					break;
				case 'F':
					countFalse -= 1;
					break;
			}

			left += 1;
			continue;
		}

		result = Math.max(result, right - left);
		switch (answers[right]) {
			case 'T':
				countTrue += 1;
				break;
			case 'F':
				countFalse += 1;
				break;
		}

		right += 1;
	}

	return result;
};
