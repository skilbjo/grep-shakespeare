// var node = {
// 		value: val,
// 		next: null,
// 		previous: null
// 	};

var double_linked = function(){
	this.head = null;
};

double_linked.prototype.push = function(val){
	var head = this.head,
		current = head,
		previous = head;
	if(!head){
		this.head = {value: val, previous: null, next: null};
	} else {
		while(current && current.next){
			previous = current;
			current = current.next;
		}
		current.next = {value: val, previous: current, next: null };
	}
};

var dbl = new double_linked();

dbl.push(1);
dbl.push(2);
dbl.push(3);
dbl.push(4);
dbl.push(5);

// console.log( dbl.head ); 
// console.log( dbl.head.next.previous );  // same as above line

var reverse_double = function(dll){
	var head = dll.head,
		current = dll.head,
		tmp;

	while(current){
		tmp = current.next;
		current.next = current.previous;
		current.previous = tmp;

		if(!tmp){
			dll.head = current;
		}
		current = tmp;
	}
	return dll;
};

console.log( reverse_double(dbl) );
