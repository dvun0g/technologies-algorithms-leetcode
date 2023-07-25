// Medium | Binary Search
// Прийти к идея что нужно использовать бинарный поиск достаточно легко.
// Однако, при реализации возникли небольшие сложности, по сколько бинарный
// поиск не совсем стандартный для меня.

// Speed O(log n), Space (1), n = array.length
// Done | Beats Speed=92, Space=90
const peakIndexInMountainArray = function (array) {
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        const middle = left + Math.floor((right - left) / 2);
        if (array[middle] < array[middle + 1]) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }

    return right;
}