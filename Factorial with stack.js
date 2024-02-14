//STACK CLASS

function Stack(){
    this.dataStore= [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
}

//adds an element tocthe top of the stack
function push(element){
    this.dataStore[this.top++]=element;
}

//removes an element from the top of the stack
function pop(){
    this.dataStore[--this.top];
}

//helps to view the element on top of the stack
function peek(){
    return this.dataStore[this.top-1]
}

//length returns the nujber of items in the stack
function length(){
    return this.top
}

//this makes the stack empty by setting the current capacity of the stack to zero
function clear(){
    this.top = 0
}


//FACTORIAL IMPLEMENTATION WITH STACK CLASS
function fact(n){
  var stack = new Stack();
  while(n>0){
    stack.push(n-1);
  }
  var product = 0;
  while(stack.length()>0){
    product *= stack.pop()
  }
  return product
}
  
