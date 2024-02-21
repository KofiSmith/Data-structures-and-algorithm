function Stack(){
    this.dataStore= [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
    this.total = total
    this.display = display
}

//adds an element tocthe top of the stack
function push(arr){
    for(let i = 0; i<arr.length;++i){
        if(arr[i]=='+'){
           arr[i]=this.dataStore[this.dataStore.length-2]+this.peek()
           this.dataStore[this.top++]=arr[i]
        }
        else if(arr[i]=='D'){
            arr[i]=this.peek()*2
            this.dataStore[this.top++]=arr[i]
        }
        else if(arr[i]=='C'){

            delete arr[i] 
             this.dataStore.pop()
           this.dataStore[--this.top]
        }
        else{
            this.dataStore[this.top++]=arr[i]
        }
    }
    
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

function display(){
    for(let i=0;i<this.dataStore.length;++i){
        console.log(this.dataStore[i])
    }
}
function total(){
    var sum = 0;
    for(let i=0;i<this.dataStore.length;++i){
        sum += this.dataStore[i]
    }
    return sum
}
var stack = new Stack()
stack.push([5,2,"C","D","+"])

console.log(stack.total())
console.log("elements")
stack.display()
