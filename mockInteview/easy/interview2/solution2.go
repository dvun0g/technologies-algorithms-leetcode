// Не решил, в решение явно стоит использовать bfs, но есть проблема - 
// не особо понятно как считать null ноды.

package main

type TreeNode struct {
	Val int
	Left *TreeNode
	Right *TreeNode
}

func widthOfBinaryTree(root *TreeNode) int {
	queue := []*TreeNode{root}
	result := 0

	for len(queue) != 0 {
		size := len(queue)
		currentWidth := 0 
		for i := 0; i < size; i += 1 {
			currentWidth += 1
			node := queue[0];
			queue = queue[1:];

			if node.Left != nil {
				queue = append(queue, node.Left)
			}
			if node.Right != nil {
				queue = append(queue, node.Right)
			}
		}

		if currentWidth > result {
			result = currentWidth
		}
	}

	return result
}

func main() {

}