// A factorial function with recursive call
function factorial(n){
  if(n===0){
    return 1;
  }
  else{
    return n * factorial(n-1);
  }
}
