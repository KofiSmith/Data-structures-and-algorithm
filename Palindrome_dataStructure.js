//PALINDROME WITH STACK DATA STRUCTURE
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
    return this.dataStore[this.top-1];
}

//length returns the nujber of items in the stack
function length(){
    return this.top;
}

//this makes the stack empty by setting the current capacity of the stack to zero
function clear(){
    this.top = 0;
}



function isPalindrome(word){
    var s = new Stack()
    for(var i = 0; i<word.length; ++i){
        s.push(word[i]);
    }
    var rWord = "";
    while(s.length()>0){
        rWord += s.peek();
        s.pop();
    }
    
    if(word == rWord){
        return true;
    } else{
        return false;
    }
}

console.log(isPalindrome("racecar")
