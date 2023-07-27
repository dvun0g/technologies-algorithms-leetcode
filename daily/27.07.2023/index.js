// Hard | Binary Search + Greedy + Sorting
// Идея задача достаточно сложная. Даже после видеоразбора сложно
// воспринимать ее в коде. Сама реализация требует знаний только binary search.

// Speed O(n log n), Space O(1), n = batteries.length
// Done | Beats Speed=10, Space=20
const maxRunTime = function (n, batteries) {
    batteries.sort((b1, b2) => b1 - b2);
    return binarySearch(n, batteries);
}

const binarySearch = function (n, batteries) {
    const sumBatteries = batteries.reduce((acc, b) => acc + b, 0);

    let left = 1;
    let right = Math.floor(sumBatteries / n);

    while (left < right) {
        const time = right - Math.floor((right - left) / 2);

        if (isAvailableTime(n, batteries, time)) {
            left = time;
        } else {
            right = time - 1;
        }
    }


    return left;
}

const isAvailableTime = function (n, batteries, time) {
    return n * time <= batteries.reduce((acc, b) => acc + Math.min(b, time), 0);
}
