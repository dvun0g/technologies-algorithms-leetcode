package main

import (
	"fmt"
	"strconv"
)

func uint32BinaryToString(number uint32) string {
	return strconv.FormatUint(uint64(number), 2)
}

func hammingWeight(number uint32) int {
	result := 0
	str := uint32BinaryToString(number)
	for _, char := range str {
		if string(char) == "1" {
			result += 1
		}
	}

	return result
}

func main() {
	var number uint32 = 00000000000000000000000000001011
	fmt.Println(hammingWeight(number))
}