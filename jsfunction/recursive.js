function factor(n){
  if(n==0)
    return 1;
  else
    return n * factor(n-1);
    
}

let num = 5;
let result = factor(num);

console.log(result);