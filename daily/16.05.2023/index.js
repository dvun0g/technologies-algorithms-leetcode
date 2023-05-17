function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

const reverseLinkedList = function (head) {
	let reversedLinkedList = null;

	while (head) {
		const nodeNext = head.next;
		head.next = reversedLinkedList;
		reversedLinkedList = head;
		head = nodeNext;
	}

	return reversedLinkedList;
};

const arrayConvertToLinkedList = function (array) {
	const isEmptyArray = array.length === 0;

	if (isEmptyArray) {
		return null;
	}

	const linkedList = new ListNode(array[0]);
	let pointerToLinkedList = linkedList;

	for (let i = 1, n = array.length; i < n; ++i) {
		const value = array[i];
		pointerToLinkedList.next = new ListNode(value);
		pointerToLinkedList = pointerToLinkedList.next;
	}

	return linkedList;
};

const linkedListConvertToArray = function (head) {
	const array = [];

	while (head) {
		array.push(head.val);
		head = head.next;
	}

	return array;
};

// Solution with changing value O(n) immutable
const swapPairsSolutionWithChangingValues = function (head) {
	let pointerToLinkedList = head;
	let counterNodes = 0;

	while (pointerToLinkedList) {
		const isEvenNode = counterNodes === 0 || counterNodes % 2 === 0;
		const isExistNextNodeValue =
			pointerToLinkedList?.next?.val !== undefined;

		if (isEvenNode && isExistNextNodeValue) {
			const currentNodeValue = pointerToLinkedList.val;
			const nextNodeValue = pointerToLinkedList.next.val;

			pointerToLinkedList.val = nextNodeValue;
			pointerToLinkedList.next.val = currentNodeValue;
		}

		pointerToLinkedList = pointerToLinkedList.next;
		counterNodes += 1;
	}

	return head;
};
