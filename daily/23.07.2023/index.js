// Medium | Backtracking + Trees
// Идея задачи достаточно сложная. После просмотра видеоразбора было
// несложно реализовать решение. Но все же чувствуются проблемы с backtracking.

class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

// Speed O(2^n), Space O(2^n)
// Done | Beast Speed=51, Space=53
const allPossibleFBT = function (n) {
    return backtracking(n);
}

const backtracking = function (n, visited = {0: [], 1: [new TreeNode()]}) {
    if (Object.hasOwn(visited, n)) {
        return visited[n];
    }

    const res = [];
    for (let left = 0; left < n; left += 1) {
        const right = n - left - 1;
        const [leftTrees, rightTrees] = [backtracking(left, visited), backtracking(right, visited)];

        for (const leftTree of leftTrees) {
            for (const rightTree of rightTrees) {
                res.push(new TreeNode(0, leftTree, rightTree));
            }
        }
    }
    visited[n] = res;

    return res;
}