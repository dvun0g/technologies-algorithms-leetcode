# Hard | Recursive + Memoization | DP
# Идея задачи очень простая. Самостоятельно не смог реализовать мемоизацию.

import typing as tp
import functools


# TL 15 / 51, Speed O(n), Space O(n)
class SolutionRecursive:
    def can_cross(self, stones: tp.List[int]) -> bool:
        if self._is_incorrect_stones_sequence(stones):
            return False

        return self._recursive(stones)

    def _is_incorrect_stones_sequence(self, stones: tp.List[int]) -> bool:
        if len(stones) < 2:
            return False

        if stones[1] - stones[0] != 1:
            return True

        return False

    def _recursive(self, stones: tp.List[int]) -> bool:
        result = False
        collection = {
            stone: index
            for index, stone in enumerate(stones)
        }

        def dfs(index: int, step: int):
            if len(stones) == index + 1:
                nonlocal result
                result = True
                return

            next_steps = (step - 1, step, step + 1)
            values = (
                stones[index] + next_step if next_step > 0 else None
                for next_step in next_steps
            )

            for value in values:
                if value not in collection:
                    continue

                next_index = collection[value]
                dfs(index=next_index, step=stones[next_index] - stones[index])

        dfs(index=1, step=1)
        return result


# Speed O(n), Space O(n)
# Beats Speed=74, Space=27
class Solution:
    def can_cross(self, stones: tp.List[int]) -> bool:
        goal = stones[-1]
        stones = set(stones)

        @functools.cache
        def recursive(stone: int, step: int) -> bool:
            if stone == goal:
                return True

            return any(
                recursive(stone=stone + next_step, step=next_step)
                for next_step in (step - 1, step, step + 1)
                if next_step > 0 and stone + next_step in stones
            )

        return recursive(stone=0, step=0)
