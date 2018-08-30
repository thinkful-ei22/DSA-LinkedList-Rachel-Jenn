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



