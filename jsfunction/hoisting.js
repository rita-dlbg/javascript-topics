



console.log(`Sum with function : ${sumfun(5,10)}` );
console.log(`Sum with const : ${sumConst(5,10)}` );
console.log(`Sum with let : ${sumLet(5,10)}` );

let sumLet = (c, d) => c * d;

const sumConst = (a, b) => a - b;


function sumfun(a,b){
    return a + b
}