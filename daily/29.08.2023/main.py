# Medium | Prefix Sum
# Идея задачи достаточно легкая, но я не смог реализовать ее с помощью prefix
# sum. А до другого решения сам не смог дойти.

# Speed O(n), Space O(1)
# Beats Speed=93, Space=74
class Solution:
    def best_closing_time(self, customers: str) -> int:
        score, max_score = 0, 0
        best_hour = -1

        for i, char in enumerate(customers):
            score += 1 if char == 'Y' else -1
            if score > max_score:
                max_score, best_hour = score, i

        return best_hour + 1
