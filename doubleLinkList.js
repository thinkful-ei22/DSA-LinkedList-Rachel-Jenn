class _Node {
  constructor(value, next, previous) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

class DoubleList {
  constructor() {
    this.head = null;
  }
  //O(1)
  insertFirst(item) {
    this.head = new _Node(item, this.head, null);
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
      tempNode.next = new _Node(item, null, tempNode);
      console.log("this is temp node", tempNode);
      console.log("this is temp node.next", tempNode.next);
    }
  }

  insertBefore(newItem, currentItem){
    if (!this.head) {
      return null;
    }

    let itemBefore = currentItem.previous;
    let itemAfter = currentItem;

    itemBefore.next = new _Node(newItem, itemAfter);
    itemAfter.previous = itemBefore.next;
    
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

  insertAt(position, item) {
    if (position < 0) {
      throw new Error('Position error');
    } 
    if (position === 0) {
      this.insertFirst(item); 
    } else {
      const node = this._findNthElement(position - 1);
      const newNode = new _Node(item, null);
      
      newNode.next = node.next;
      node.next = newNode;
    }
  }

  _findNthElement(position) {
    let node = this.head;
    for (let i=0; i < position; i++) {
      node = node.next;
    }
    return node;
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

}

module.exports = DoubleList;