//Doubly Linked List 

//A node object that stores an element and has pointers to next and previous nodes
function Node(element){
    this.element = element
    this.next = null
    this.previous = null
}


// A linked list class with all methods
function Linked_List(){
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.displayForward = displayForward
    this.findPrevious = findPrevious;
    this.findLast = findLast;
    this.displayReverse = displayReverse
}

// Find method that takes the name of item and returns the node that matches the item
function find(item){
    var currNode = this.head
    while(currNode.element != item){
        currNode = currNode.next;
    }
    return  currNode;
}

//insert method, takes an element to insert and name of the item in the list to insert after
function insert(newElement, item){
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current
    current.next = newNode;
}


//This takes an item and return the node that comes before the item's node
function findPrevious(item){
    var currNode = this.head
    while(!(currNode.next==null)&&(currNode.next.element !=item)){
        currNode = currNode.next;
    }
    return currNode
}

//This finds a node and sets its next and previous pointers to null, 
function remove(item){
    var currNode = this.find(item)
    if(!(currNode.next==null)){
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
    }
}



function displayForward(){
    var currentNode = this.head;
    while(!(currentNode.next==null)){
        console.log(currentNode.next.element);
        currentNode = currentNode.next;
    }
}

function findLast(){
    var currNode = this.head
    while(!(currNode.next==null)){
        currNode = currNode.next
    }
    return currNode
}

function displayReverse(){
    var currNode=this.head;
    currNode = this.findLast()
    while(!(currNode.previous==null)){
        console.log(currNode.element)
        currNode = currNode.previous
    }
}
var cities = new Linked_List()
cities.insert("Conway","head")
cities.insert("Nevada","Conway")
cities.insert("Alma","Nevada")
cities.insert("Carlisle","Alma")
cities.displayForward()
console.log(" ")
cities.remove("Alma")
cities.displayForward()
console.log("")
cities.displayReverse()

