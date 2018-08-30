/* 

Create a Linked list class
Walk through the Linked list code in the curriculum and understand it well. Then write a linked list class and with its core functions (insertFirst, insertLast, remove, find) from scratch.

Creating a singly linked list
Write a function main. Within the function, using the linked list class above, create a linked list called SLL and add the following items in your linked list. Apollo, Boomer, Helo, Husker, Starbuck
Add Tauhida to the list
Remove squirrel from the list
Implement a function called insertBefore() in the class that inserts a new node before a given node containing a key
Implement a function called insertAfter() in the class that inserts a new node after a node containing the key
Implement a function called insertAt() that inserts an item at a specific position in the linked list
Add Athena before Boomer using your insertBefore() function
Add Hotdog after Helo using the insertAfter() method
Using the insertAt() method insert Kat in the 3rd position of the list
Remove Tauhida from the list
Supplemental functions for linked list
Implement the following functions that operate on your linked list class. Note that these should be free functions instead of methods of the linked list class, so implement them outside the linked list class. Test each function using the list created in exercise 1

display: displays the linked list.
size: returns the size of the linked list.
isEmpty: finds if the list is empty or not (without using the size() function)
findPrevious: finds the node before the item you are looking for
findLast: returns the last node in the linked list
Mystery program
Analyze the following function (without running it in an IDE) to determine what problem it is trying to solve. What is the runtime of this algorithm?

function WhatDoesThisProgramDo(lst){
    let current = lst.head;
    while(current !== null){
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else{
                newNode = newNode.next;
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