class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next !== undefined ? next : null;
    }
}

class TreeNode {
    constructor(val, left, right) {
        this.val = val !== undefined ? val : 0;
        this.right = right !== undefined ? right : null;
        this.left = left !== undefined ? left : null;
    }
}

function arrayToLinkedList(array) {
    if (!array.length) return null
    return array.reduce((acc, value, index) => {
        if (!index) {
            acc.result = new ListNode(value);
            acc.temp = acc.result;
            return acc;
        }

        acc.temp.next = new ListNode(value);
        acc.temp = acc.temp.next;

        return acc;
    }, {
        result: null,
        temp: null,
    }).result;
}

function arrayFromLinkedList(head, result = []) {
    if (head === null) return result;
    result.push(head.val);
    return arrayFromLinkedList(head.next, result);
}

function arrayToBalancedBinaryTree(array, start, end) {
    if (start > end) {
        return null;
    }

    const middle = start + Math.floor((end - start) / 2);
    const root = new TreeNode(array[middle])
    root.left = arrayToBalancedBinaryTree(array, start, middle - 1);
    root.right = arrayToBalancedBinaryTree(array, middle + 1, end);

    return root;
}

function sortedListToBST(head) {
    const array = arrayFromLinkedList(head);
    if (!array.length) return null;
    console.log(array)
    return arrayToBalancedBinaryTree(array, 0, array.length - 1);
}

const array = [-10,-3,0,5,9];
console.log(sortedListToBST(arrayToLinkedList(array)))
