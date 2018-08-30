/* 


Mystery program
Analyze the following function (without running it in an IDE) to determine what problem it is trying to solve. What is the runtime of this algorithm?

function WhatDoesThisProgramDo(lst){
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
Reverse a list
Write an algorithm to reverse a linked list. The runtime complexity of your algorithm should be linear O(n). For this exercise, notice, we are not asking you just to print the linked list in reverse or use another linked list to store the value in reverse order. Your program should reverse the direction of a given singly-linked list. In other words, all pointers should point backward. BONUS: Solve this problem using recursive algorithm (and vice versa).

Third from the end
Write an algorithm to find the third element from the end of a linked list. Note You may be tempted to add a length property to your Linked List class. The length property is not a typical property of linked list, therefore don't make any modification to the Linked list class that is provided to you.

Middle of a list
Write an algorithm to find the middle element of a linked list. Note You may be tempted to add a length property to your Linked List class. The length property is not a typical property of linked list, therefore don't make any modification to the Linked list class that is provided to you. Also, finding the size of the linked list using the size() function and dividing it by half will not find the correct middle of the linked list. So, don't use either of these approaches.

Cycle in a list
Write an algorithm to find whether a linked list has a cycle (i.e. whether a node in the list has its next value pointing to an earlier node in the list). For this exercise, create a Linked list called CycleList. Be sure to insert nodes in the list so that it has a cycle. Then test your program with your cycleList.

Doubly linked list
Implement a doubly linked list. The primary functions of the doubly linked list would be insert (First, Last, Before, After, and insertAt), remove, and find. Write a function mainDLL. Within the function create a doubly linked list called DLL and add the following items in your doubly linked list. Aquaria, Caprica, Gemenon, Picon, Sagittaron

Add Tauron to the list
Remove Picon from the list
Reverse a DLL
Given the doubly linked list above, write a program that reverses the doubly linked list. How is this implementation different than reversing the singly linked list?

*/