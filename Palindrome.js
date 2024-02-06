var word = "racecar"

var rword = "";

//put letters of word into stack
for(var i = 0; i<word.length; i++){
    letters.push(word[i])
}

//pop off letters from stack in reverse 
for(var i = 0; i<word.length; i++){
    rword += letters.pop();
}

if(rword===word){
    console.log(word,"is palindrome");
}else{console.log(word,"is not palindrome")}
*/
