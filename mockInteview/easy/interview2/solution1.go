package main

import "fmt"

func generate(numRows int) [][]int {
	result := [][]int{{1}, {1, 1}}
	if numRows <= 2 {
		return result[:numRows]
	}

	for i := 2; i < numRows; i += 1 {
		newRow := []int{}
		
		for index := 0; index <= i; index += 1 {
			if index == 0 || index == i {
				newRow = append(newRow, 1)
				continue
			}

			newRow = append(newRow, result[i - 1][index] + result[i - 1][index - 1])
		}


		result = append(result, newRow)
	}

	return result
}

func main() {
	numRows := 5
	fmt.Println(generate(numRows))
}