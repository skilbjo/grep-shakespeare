

var Node = function(data){
	this.data = data;
	this.next = null;
};

var singleLinkedList = function(){
	this._length = 0;
	this.head = null;
};

singleLinkedList.prototype.add = function(val){
	var node = new Node(val),
		currentNode = this.head;

	// base case
	if(!currentNode){
		this.head = node;
		this._length++;

		return node;
	}

	// regular usage pattern
	while(currentNode.next){
		currentNode = currentNode.next;
	}
	currentNode.next = node;
	this._length++;

	return node;
}

singleLinkedList.prototype.searchNodeAt = function(position) {
	var currentNode = this.head,
		length = this._length,
		count = 1,
		message = { failure: 'Failure, non-existent node in this list' }
		;

	if(length === 0){
		throw new Error(message.failure);
	}
	while(count < position){
		currentNode = currentNode.next;
		count++
	}

	return currentNode;
};

var list = new singleLinkedList();

list.add('first');
list.add('second');
list.add('third');

var search = list.searchNodeAt(3);

console.log(list);

console.log(search);
