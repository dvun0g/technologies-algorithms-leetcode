function ListNode(val) {
	this.val = val;
	this.next = null;
}

function arrayFromLinkedList(node, result = []) {
	if (node === null) return result;

	result.push(node.val);
	return arrayFromLinkedList(node.next, result);
}

function arrayToLinkedList(array) {
	if (!array.length) return null;

	return array.reduce(
		(acc, value, index) => {
			if (!index) {
				acc.temp = acc.result;
				return acc;
			}

			acc.temp.next = new ListNode(value);
			acc.temp = acc.temp.next;

			return acc;
		},
		{
			result: new ListNode(array[0]),
			temp: null,
		}
	).result;
}

function detectCycle(node, collection = Object.create(null), index = 0) {
	if (node === null) return node;
	if (Object.hasOwn(collection, node.val)) {
		return node;
	}
2
	collection[node.val] = index;
	return detectCycle(node.next, collection, index + 1);
}

const node = new ListNode(-1)
const a = new ListNode(-7)
const b = new ListNode(7)
const c = new ListNode(-4)

node.next = a;
a.next = b;
b.next = c;
c.next = a;

console.log(detectCycle(node))
