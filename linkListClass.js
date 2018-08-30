class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  //O(1)
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  //O(n)
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  //Implement a function called insertBefore() in the class that inserts a new node before a given node containing a key
  insertBefore(newItem, currentItem){
    if (!this.head) {
      return null;
    }
    let currNode = this.head;
    let previousNode = this.head;
    
    //find the node before location (insert point)
    while ((currNode !== null) && (currNode.value !== currentItem)){
      previousNode = currNode;
      currNode = currNode.next;
    }
    //change that node's "next" to our new node
    //set new nodes "next" to the (insert point's) old next.
    previousNode.next = new _Node(newItem, currNode);   
  }

  insertAfter(newItem, currentItem) {
    if (!this.head) {
      return null;
    }
    let currNode = this.head;

    while ((currNode !== null) && (currNode.value !== currentItem)) {
      currNode = currNode.next;
    }
    let newNext = currNode.next;
    currNode.next = new _Node(newItem, newNext);

  }

  // go to the third position by travelling 2 nodes down and then insert using insertAfter
  // traverse by going to Next node .. so traverse twice. 


  insertAt(position, item) {
    if (position < 0) {
      throw new Error('Position error');
    } 
    if (position === 0) {
      this.insertFirst(item) 
    } else {
      const node = this._findNthElement(position - 1);
      const newNode = new _Node(item, null);
      
      newNode.next = node.next;
      node.next = newNode;
    }
  }

  //finds by position not by item name
  _findNthElement(position) {
    let node = this.head;
    for (let i=0; i < position; i++) {
      node = node.next;
    };
    return node;
  };

  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      }
      else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }
  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}


module.exports = LinkedList;



