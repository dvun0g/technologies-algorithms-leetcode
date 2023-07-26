// Medium | Binary Search
// Идея задачи легкая. При реализации возникли сложно с реализацией функции
// isAvailableSpeed из-за того что невнимательно прочитал условие задачи.


// Speed O(n log n) | Space O(1), n = distance.length
// Done | Beats Speed=5, Space=5
const minSpeedOnTime = function (distances, time) {
    let left = 0;
    let right = 10e7;

    while (left < right) {
        const speed = left + Math.floor((right - left) / 2);

        if (isAvailableSpeed(speed, distances, time)) {
            right = speed;
        } else {
            left = speed + 1;
        }
    }

    if (isAvailableSpeed(left, distances, time)) {
        return left;
    }

    return -1;
}

const isAvailableSpeed = function (speed, distances, time) {
    const hours = distances.slice(0, -1).reduce((acc, dist) => acc + Math.ceil(dist / speed), 0) + distances.at(-1) / speed;
    return hours <= time;
}