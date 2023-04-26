// Merge K Sorted Arrays
function mergeTwoSortedArrays(array1, array2) {
	const result = [];
	let index1 = 0;
	let index2 = 0;

	while (index1 < array1.length && index2 < array2.length) {
		const value1 = array1[index1];
		const value2 = array2[index2];

		if (value1 >= value2) {
			result.push(value2);
			index2 += 1;
		} else {
			result.push(value1);
			index1 += 1;
		}
	}

	if (index1 < array1.length) {
		result.push(...array1.slice(index1));
	}

	if (index2 < array2.length) {
		result.push(...array2.slice(index2));
	}

	return result;
}

function mergeKArray(array) {
    if (!array.length) return [];
    if (array.length === 1) return array[0];

    let index = 1;
    while (array.length !== 1) {
        const prevArray = array[index - 1];
        const currentArray = array[index];

        array[index - 1] = mergeTwoSortedArrays(prevArray, currentArray);
        array.splice(index, 1);
    }

    return array[0];
}

const arrays = [
    [1, 2, 4, 5, 10, 123],
    [5, 19, 128],
    [12, 34, 285],
    [12, 53, 100],
    [1, 2, 3, 4, 5, 6],
]

// console.log(mergeKArray(arrays))

// Merge K Sorted LinkedList

class ListNode {
	constructor(val, next) {
		this.val = val;
		this.next = next !== undefined ? next : null;
	}
}

function arrayFromLinkedList(head, result = []) {
    if (head === null) return result;

    result.push(head.val);
    return arrayFromLinkedList(head.next, result);
}

function arrayToLinkedList(array) {
    if (!array.length) return null;
    const result = new ListNode(array[0]);
    let temp = result;

    for (let i = 1; i < array.length; i++) {
        temp.next = new ListNode(array[i]);
        temp = temp.next;
    }

    return result;
}

function mergeTwoSortedLinkedList(head1, head2) {
    if (head1 === null && head2 === null) return null;
    if (head1 === null) return head2;
    if (head2 === null) return head1;

    const result = new ListNode()

    if (head1.val >= head2.val) {
        result.val = head2.val;
        head2 = head2.next;
    } else {
        result.val = head1.val;
        head1 = head1.next;
    }

    let temp = result;

    while (head1 !== null && head2 !== null) {
        if (head1.val >= head2.val) {
            temp.next = new ListNode(head2.val);
            temp = temp.next;
            head2 = head2.next;
        } else {
            temp.next = new ListNode(head1.val);
            temp = temp.next;
            head1 = head1.next;
        }
    }

    if (head1 !== null) temp.next = head1;
    if (head2 !== null) temp.next = head2;

    return result;
}

function mergeKLists(array) {
    if (!array.length) return null;
    if (array.length === 1) return array[0];
    
    let index = 1;
    while (array.length !== 1) {
        const prevLinkedList = array[index - 1];
        const currentLinkedList = array[index];

        array[index - 1] = mergeTwoSortedLinkedList(prevLinkedList, currentLinkedList);
        array.splice(index, 1);
    }

    return array[0];
}
