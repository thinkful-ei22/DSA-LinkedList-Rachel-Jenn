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
  console.log(JSON.stringify(SLL));
  
  //Display list
  function display(list) {
    console.log(JSON.stringify(list, null, 2));
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
      };
      console.log('the size is', counter + 1);
    }
  }
  size(SLL);
}

main();

