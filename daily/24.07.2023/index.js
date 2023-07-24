// Medium | Math
// Идея задачи сугубо математическая, сначала решил за линейную сложность
// получил TL. После просмотра решения не составила проблем сделать
// реализация за log n.

// Speed O(log n), Space (log n)
// Done | Beast Speed=87, Space=78
const myPow = function (number, degree) {
    function helper(number, degree) {
        if (number === 0) {
            return 0;
        }
        if (degree === 0) {
            return 1;
        }

        const half = helper(number, Math.floor(degree / 2));
        let result = half * half;

        if (degree % 2 === 1) {
            result *= number;
        }

        return result;
    }

    const result = helper(number, Math.abs(degree))
    if (degree < 0) {
        return 1 / result;
    }

    return result;
}