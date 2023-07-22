// Medium | Math + Recursive + Memoization
// Идея задачи средняя по сложности. Реализация не составила проблем. С
// математической точки зрения я не сразу понял, что вероятность следует
// умножать на 1/8.

const knightProbability = (n, k, row, col) => {
    const [correctMoves, incorrectMoves] = recursive(n, k, row, col);
    return correctMoves / (correctMoves + incorrectMoves);
}

const getKnightMoves = function (row, col) {
    return [[row + 2, col + 1], [row - 2, col - 1], [row - 2, col + 1], [row + 2, col - 1], [row - 1, col - 2], [row + 1, col + 2], [row + 1, col - 2], [row - 1, col + 2],];
}

const recursive = function (n, k, row, col, visited = Object.create(null)) {
    if (row >= n || col >= n || row < 0 || col < 0) {
        return [0, 1];
    }

    if (k === 0) {
        return [1, 0];
    }

    const key = `${row} | ${col} | ${k}`;
    if (Object.hasOwn(visited, key)) {
        return visited[key];
    }

    visited[key] = [0, 0];
    const availableMoves = getKnightMoves(row, col);
    for (const move of availableMoves) {
        const [correctMoves, incorrectMoves] = recursive(n, k - 1, move[0], move[1], visited);

        visited[key][0] += correctMoves * 0.125;
        visited[key][1] += incorrectMoves * 0.125;
    }

    return visited[key];
}
