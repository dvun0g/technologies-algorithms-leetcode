// Medium | Binary Search (version 3 pointers)
// Не первый раз сталкиваюсь с данной задачей, идея и реализация достаточно
// сложные, решается правильно с помощью бинарного поиска с 3 указателями
// (сложность примерно O(log n) в таком случае).


// Done | Speed O(n), Space (n)
// Beats | Speed=99, Space=55
const search = function (array, target) {
    return array.includes(target);
}