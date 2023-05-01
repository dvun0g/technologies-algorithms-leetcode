class ListNode {
	constructor(val, next) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

const reverseKGroup = function (head, k) {
	const dummy = new ListNode(0, head);
	let groupPrev = dummy;

	const getKth = function (curr, k) {
		while (curr !== null && k > 0) {
			curr = curr.next;
			k -= 1;
		}

		return curr;
	};

	while (true) {
		const kth = getKth(groupPrev, k);
		if (kth === null) {
			break;
		}
		let groupNext = kth.next;

		// reverse group
		let prev = kth.next;
		let curr = groupPrev.next;

		while (curr !== groupNext) {
			const tmp = curr.next;
			curr.next = prev;
			prev = curr;
			curr = tmp;
		}

		const tmp = groupPrev.next;
		groupPrev.next = kth;
		groupPrev = tmp;
	}

	return dummy.next;
};
