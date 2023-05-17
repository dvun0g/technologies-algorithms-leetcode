const ListNode = function (val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
};

const convertLinkedListToArray = function (head) {
	const array = [];

	while (head) {
		array.push(head.val);
		head = head.next;
	}

	return array;
};

const convertLinkedListToArrayRecursive = function (head, result = []) {
	if (!head) {
		return result;
	}

	result.push(head.val);
	return convertLinkedListToArrayRecursive(head.next, result);
};

// Solution 1 | Convert Array + Recursive | Speed O(n) | Space O(n), n - количество узлов linked list
const pairSumSolutionWithArray = function (head) {
	const array = convertLinkedListToArrayRecursive(head);
	const arrayLength = array.length;
	let result = 0;

	for (let i = 0; i < arrayLength / 2; i += 1) {
		result = Math.max(result, array[i] + array[arrayLength - 1 - i]);
	}

	return result;
};

// Solution 2 | Slow + Fast Pointers | Two Pointers | Speed O(n), Space O(1), n - количество узлов linked list
const pairSum = function (head) {
	let result = 0;
	let slow = head;
	let fast = head;
	let prev = null;

	while (fast && fast.next) {
		fast = fast.next.next;

		const temp = slow.next;
		slow.next = prev;
		prev = slow;
		slow = temp;
	}

	while (slow) {
		result = Math.max(result, slow.val + prev.val);
		slow = slow.next;
		prev = prev.next;
	}

	return result;
};
