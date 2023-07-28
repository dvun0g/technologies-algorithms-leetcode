// Medium | Recursive + Dynamic Programming + Game Theory
// Идея задачи достаточно сложная. Плохо понял ее даже после разрабора
// решения. Для реализации решения требуется знать dfs.

// Speed O(n), Space O(n), n = array.length
// Done | Beats Speed=15, Space=100
const predictTheWinner = function (array) {
    const recursive = function (left, right) {
        if (left === right) {
            return array[left];
        }

        const leftDiff = array[left] - recursive(left + 1, right);
        const rightDiff = array[right] - recursive(left, right - 1);

        return Math.max(leftDiff, rightDiff);
    }

    return recursive(0, array.length - 1) >= 0;
}