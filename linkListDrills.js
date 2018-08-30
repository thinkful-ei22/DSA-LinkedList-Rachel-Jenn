const LinkedList = require('./linkListClass');

function main() {
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
  SLL.insertAt(3, 'Kat');
  //remove
  SLL.remove('Tauhida');

  SLL.insertLast('Dup');
  SLL.insertLast('Dup');
  SLL.insertLast('Dup');
  SLL.insertLast('Eleven');
  SLL.insertLast('Twelve');



  const cycleList = new LinkedList();
  cycleList.insertFirst('Apollo');
  cycleList.insertLast('Boomer');
  cycleList.insertLast('Helo');
  function makeCycle(list) {
    let item = list.head;
    while (item.next !== null) {
      item = item.next;
    }
    item.next = list.head;
  }
  makeCycle(cycleList);
  // console.log(JSON.stringify(cycleList, null, 2));


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
  function isEmpty(list) {
    if (!list.head) {
      return true;
    }
    return false;
  }
  // console.log(isEmpty(SLL));

  function findPrevious(list, item) {
    if (list.head.value === item) {
      return null;
    }
    let current = list.head;
    let previous = list.head;

    while ((current !== null) && (current.value !== item)) {
      previous = current;
      current = current.next;
    }
    return previous.value;
  }

  // console.log(findPrevious(SLL, 'Hotdog'));

  function findLast(list) {
    let item = list.head;
    while (item.next !== null) {
      item = item.next;
    }
    return item.value;
  }

  // console.log(findLast(SLL));
  // Mystery program
  // Analyze the following function (without running it in an IDE) to determine what problem it is trying to solve. What is the runtime of this algorithm?
  function WhatDoesThisProgramDo(lst) { //this program deletes duplicates that are next to each other.  it is O(n^2)
    let current = lst.head;  //start at the head
    while (current !== null) { //current exists
      let newNode = current;
      while (newNode.next !== null) { //new node isnt the last node
        if (newNode.next.value === current.value) { //if the node after new Node's value has the same value...
          newNode.next = newNode.next.next; //delete it
        }
        else {
          newNode = newNode.next; //go to next one
        }
      }
      current = current.next;
    }
  }
  // console.log(WhatDoesThisProgramDo(SLL));

  /* 
  keep track of current
  keep track of previous
  every time we move through, we set the current pointer to the previous node
  
  newPointer -> current.next -> reverseSoFar -> current -> newPointer

  A B C D
  We start at A, which is current. then set newPointer to B, then set current.Next to null. 
  Current is A, so now A is the last one, B is the new current.
 
  B C D A
  Start at B, which is current, set newPointer to C, then set current.Next to A. 
  Current is currently B, so now B is the last one, next to A. reverse so far is A. 

  C D B A
  ReverseSoFar is B. C is current. set newPointer to D, then current.Next is B.
  current (C) so now C is next to B. Reverse so far now becomes C.

  D C B A

  */
  function reverseList(list) {
    let current = list.head;
    let reverseSoFar = null;
    
    while (current !== null) {
      let newPointer = current.next;
      current.next = reverseSoFar;
      reverseSoFar = current;
      current = newPointer;

    }
    list.head = reverseSoFar;
    return JSON.stringify(list, null, 2);

  }
  // console.log(reverseList(SLL));

  //Third from the end
  function thirdFromEnd(list){
    let current = list.head;
    let twoBefore ={};
    let threeBefore ={};
    let oneBefore={};
    while (current.next !== null) {
      threeBefore = twoBefore;
      twoBefore = oneBefore;
      oneBefore = current;
      current = current.next;
    }

    return threeBefore.value;
  }
  // console.log(thirdFromEnd(SLL));

  //Middle of a list
  function middleOfList(list){
    let forwardItem = list.head;
    let count=0;
    while(forwardItem.next !== null){
      forwardItem =forwardItem.next;
      count++;
    }
    const middlePosition = Math.round((count)/2);
    let middleItem = list.head;
    if(middlePosition%2 === 0){
      return 'The list is even, there is no middle.';
    }
    else{
      for(let i=0; i< middlePosition; i++){
        middleItem = middleItem.next;
      }
      return middleItem.value;
    }
    
    
  }
  // console.log(middleOfList(SLL));

  //Cycle in a list

  //A -> B -> C -> D -> B

  //if we hit an item more than once its a cycle

  function cycle(list){
    let current = list.head;
    let visited =[];

    while(current.next !== null){
      visited.push(current);
      current = current.next;
      if(current.next===null){
        return false;
      }
      else if(visited.includes(current.next)){
        return true;
      }
    }    
  }
  console.log(cycle(SLL));
}

main();

