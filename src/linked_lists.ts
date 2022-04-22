{
	class Node<T> {
		value: T;
		next: Node<T>;

		constructor(value: T, next: Node<T> = null) {
			this.value = value;
			this.next = next;
		}
	}

	class LinkedList<T> {
		head: Node<T>;
		size: number;

		constructor() {
			this.size = 0;
			this.head = null;
		}

		pushNodeAtStart(value: T) {
			this.head = new Node<T>(value, this.head);
			this.size++;
			return this;
		}

		pushNodeAtEnd(value: T) {
			if (this.head.next === null) {
				return this.pushNodeAtStart(value);
			}

			let currentNode = this.head;
			while(currentNode && currentNode.next !== null) {
				
			}
		}

		printList() {
			console.log(JSON.stringify(this.head));
		}
	}

	const list = new LinkedList<number>();
	list
		.pushNodeAtStart(100)
		.pushNodeAtStart(200)
		.pushNodeAtStart(300)
		.printList();
}