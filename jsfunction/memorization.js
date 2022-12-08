let sum = 0;
const calc = (n) => {
    for(let i=0; i<=n; i++){
        sum+=1;
    }
    return sum;
}

const memo = (fun) => {
    let cache ={};
    console.log("our cache");
    return function(...args){
      let n = args[0];
      if(n in cache){
        return cache[n];
      }else{
        console.log("One time run:");
        let result = fun(n);
        cache[n] = result;
        return result;
      }
    }
}
console.time();
 const effec=memo(calc);
 console.log(effec(5));
 console.timeEnd();

