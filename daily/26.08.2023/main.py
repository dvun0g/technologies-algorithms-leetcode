# Medium | Greedy + Sorting + Recursive + Memoization
# Идея задачи достаточно легкая, после большого перерыва (долго не рашал
# алгоритмы) было достаточно сложно

from typing import List


# Speed O(n^2) Space O(n^2) TL | 101
class SolutionRecursive:
    def find_longest_chain(self, pairs: List[List[int]]) -> int:
        pairs.sort(key=lambda pair: pair[0])

        return self._recursive(pairs)

    def _recursive(self, pairs: List[List[int]]) -> int:

        cache: dict[str, int] = {}

        def dfs(
                index: int = 0, previous: List[int] = None, result: int = 0
        ) -> int:
            if index == len(pairs):
                return result

            key = f'{index} | {previous}'
            if key in cache:
                return cache[key]

            answer = 0
            answer = max(dfs(index + 1, previous, result), answer)

            if previous is None or previous[1] < pairs[index][0]:
                result += 1
            else:
                result = 0

            answer = max(dfs(index + 1, pairs[index], result), answer)
            return answer

        return dfs()


# Speed O(n logn), Space O(1)
# Beats Speed=90, Space=89
class Solution:
    def find_longest_chain(self, pairs: List[List[int]]) -> int:
        pairs.sort(key=lambda pair: pair[1])
        current, result = float('-inf'), 0

        for pair in pairs:
            if current < pair[0]:
                current = pair[1]
                result += 1

        return result
