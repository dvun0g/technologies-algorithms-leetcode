// Easy | Design | HashSet
// Если использовать встроенную коллекцию Object проблем при решение задачи не возникает, однако если постараться решить данную проблему с помощью Array + LinkedList, то все становиться не так однозначно)

// Speed O(1), Space O(n)
class MyHashSetWithObject {
	collection = Object.create(null);

	add = function (value) {
		this.collection[value] = 'exist';
	};

	remove = function (value) {
		delete this.collection[value];
	};

	contains = function (value) {
		return Object.hasOwn(this.collection, value);
	};
}

class LinkedList {
	val = null;
	next = null;

	constructor(val, next) {
		this.val = val !== undefined ? val : null;
		this.next = next !== undefined ? next : null;
	}

	static toArray = function (head) {
		const result = [];

		while (head !== null) {
			result.push(head.val);
			head = head.next;
		}

		return result;
	};

	static fromArray = function (array) {
		const isEmptyArray = array.length === 0;

		if (isEmptyArray) {
			return new LinkedList();
		}

		const head = new LinkedList(array[0]);
		let temp = head;

		for (let i = 1, n = array.length; i < n; ++i) {
			const value = array[i];
			temp.next = new LinkedList(value);
			temp = temp.next;
		}

		return head;
	};

	static insertAtTheEnd = function (head, value) {
		let temp = head;
		while (temp !== null) {
			if (temp.next === null) {
				temp.next = new LinkedList(value);
				return;
			}

			temp = temp.next;
		}
	};

	static removeValue = function (head, value) {
		let temp = head;
		let prev = head;

		let isFirstIteration = true;

		while (temp !== null) {
			const isCorrectValue = temp.val === value;

			if (isFirstIteration && isCorrectValue) {
				head = head.next;
				return head;
			}

			if (isFirstIteration) {
				isFirstIteration = false;
				temp = temp.next;
				continue;
			}

			if (isCorrectValue) {
				prev.next = temp.next;
				return head;
			}

			temp = temp.next;
			prev = prev.next;
		}

		return head;
	};

	static isExistsValue = function (head, value) {
		while (head !== null) {
			const isCorrectValue = head.val === value;

			if (isCorrectValue) {
				return true;
			}

			head = head.next;
		}

		return false;
	};

	static print = function (head) {
		while (head !== null) {
			console.log('Value: ', head.val);
			head = head.next;
		}
	};
}

let head = LinkedList.fromArray([1, 2, 2, 3])

// Avg. Speed O(1), Space O(n)
class MyHashSet {
	// private variables

	maxSizeCollection = 10000;
	collection = new Array(this.maxSizeCollection);

	// private methods

	getKey = function (value) {
		return value % this.maxSizeCollection;
	};

	// public methods

	add = function (value) {
		const key = this.getKey(value);
		const isNotExistsKey = this.collection[key] === undefined;

		if (isNotExistsKey) {
			this.collection[key] = new LinkedList(value);
			return;
		}

		const currentLinkedList = this.collection[key];

        if (LinkedList.isExistsValue(currentLinkedList, value)) {
            return;
        }

		LinkedList.insertAtTheEnd(currentLinkedList, value);
	};

	remove = function (value) {
		const key = this.getKey(value);
		const isNotExistsKey = this.collection[key] === undefined;
		const currentLinkedList = this.collection[key];

		if (isNotExistsKey) {
			return;
		}

		this.collection[key] = LinkedList.removeValue(currentLinkedList, value);
	};

	contains = function (value) {
		const key = this.getKey(value);
		const isNotExistsKey = this.collection[key] === undefined;
		const currentLinkedList = this.collection[key];

		if (isNotExistsKey) {
			return false;
		}

		return LinkedList.isExistsValue(currentLinkedList, value);
	};
}
