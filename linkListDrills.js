const LinkedList = require('./linkListClass');

function main(){
//create a linked list called SLL
  const SLL = new LinkedList();
  //and add the following items in your linked list
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  //Add Tauhida to the list
  SLL.insertLast('Tauhida');
  //Remove squirrel (?) from the list
  SLL.remove('Starbuck');
  //insert before
  SLL.insertBefore('Athena', 'Boomer');
  //insert after
  SLL.insertAfter('Hotdog', 'Helo');
  //insert at
  SLL.insertAt(3,'Kat');
  //remove
  SLL.remove('Tauhida');

  SLL.insertLast('Dup');
  SLL.insertLast('Dup');
  SLL.insertLast('Dup');

  console.log(JSON.stringify(SLL, null, 2));
 
  
  //Display list
  function display(list) {
    return JSON.stringify(list, null, 2);
  }
  display(SLL);

  //Return size of linked list
  function size(list) {
    if (list.head === null) {
      return 0;
    } else {
      let tempNode = list.head;
      let counter = 0;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
        counter++;
      }
      return `the size is ${counter + 1}`;
    }
  }
  size(SLL);
  function isEmpty(list){
    if(!list.head){
      return true;
    }
    return false;
  }
  // console.log(isEmpty(SLL));

  function findPrevious(list, item){
    if(list.head.value===item){
      return null;
    }
    let current = list.head;
    let previous = list.head;

    while((current !== null) && (current.value !== item)){
      previous = current;
      current = current.next;
    }
    return previous.value;
  }

  // console.log(findPrevious(SLL, 'Hotdog'));

  function findLast(list){
    let item = list.head;
    while(item.next !== null){
      item = item.next;
    }
    return item.value;
  }

  // console.log(findLast(SLL));
  // Mystery program
  // Analyze the following function (without running it in an IDE) to determine what problem it is trying to solve. What is the runtime of this algorithm?
  function WhatDoesThisProgramDo(lst){ //this program deletes duplicates that are next to each other.  it is O(n^2)
    let current = lst.head;  //start at the head
    while(current !== null){ //current exists
      let newNode = current; 
      while (newNode.next !== null) { //new node isnt the last node
        if (newNode.next.value === current.value) { //if the node after new Node's value has the same value...
          newNode.next = newNode.next.next; //delete it
        }
        else{
          newNode = newNode.next; //go to next one
        }
      }
      current = current.next;
    }
  }
  // console.log(WhatDoesThisProgramDo(SLL));
}

main();

