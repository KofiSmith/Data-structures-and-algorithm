//STACK OBJECT

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


//CONVERTING NUMBERS TO A BASE USING STACK

function mulBase(num,base){
    var s = new Stack()
    do{
        s.push(num%base)
        num = Math.floor(num/=base)
    } while(num >0);
        var converted = ""
        while(s.length()>0){
            converted += s.peek()
            s.pop()
        }
        return converted
    
}
