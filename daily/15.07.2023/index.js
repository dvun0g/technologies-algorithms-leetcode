// Hard | DFS + Binary Search + Memoization
// Идея задачи достаточно сложная, смог решить ее за неоптимальное время.
// После просмотра видео разбора реализация не составила проблем.

// TL | 64 / 67
const maxValue = function (events, k) {
    let result = 0;
    events.sort((event1, event2) => {
        const [startDay1] = event1;
        const [startDay2] = event2;

        return startDay1 - startDay2;
    })
    const dfs = function (index, day, count, k) {
        if (index === events.length || k === 0) {
            result = Math.max(result, count);
            return;
        }

        const [startDay, endDay, value] = events[index];


        if (startDay > day) {
            dfs(index + 1, endDay, count + value, k - 1);
        }
        dfs(index + 1, day, count, k);
    }

    dfs(0, 0, 0, k)
    return result;
}

// Speed O(2n * logn), Space O(n), n = events.length
// Done | Beats Speed=20, Space=20
const maxValue = function (events, k) {
    const collection = Object.create(null)
    events.sort((event1, event2) => {
        return event1[0] - event2[0];
    })

    const dfs = function (index, count) {
        if (index === events.length || count === 0) {
            return 0;
        }

        const key = `${index} | ${count}`;
        if (Object.hasOwn(collection, key)) {
            return collection[key]
        }

        const [_, endDay, value] = events[index];
        const nextIndex = binarySearch(events, endDay)
        collection[key] = Math.max(dfs(index + 1, count), dfs(nextIndex, count - 1) + value)

        return collection[key];
    }

    return dfs(0, k)
}

const binarySearch = function (events, endDay) {
    let left = 0;
    let right = events.length;

    while (left < right) {
        const middle = Math.floor((right + left) / 2);
        const [startDay] = events[middle];

        if (startDay <= endDay) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }

    return left;
}
