package main

import (
	"math"
)

// Done
// Speed O(n * 8), Space O(8), n = cookies.length
func distributeCookies(cookies []int, k int) int {
	result := math.MaxInt64

	var backtracking func(int, map[int]int)
	backtracking = func(cookieIndex int, dp map[int]int) {
		if cookieIndex == len(cookies) {
			currentResult := math.MinInt64

			for _, value := range dp {
				if value > currentResult {
					currentResult = value
				}
			}

			if result > currentResult {
				result = currentResult
			}

			return
		}

		for childIndex := 0; childIndex < k; childIndex += 1 {
			cookie := cookies[cookieIndex]
			dp[childIndex] += cookie
			backtracking(cookieIndex+1, dp)
			dp[childIndex] -= cookie
		}

		return
	}

	backtracking(0, make(map[int]int))
	return result
}
