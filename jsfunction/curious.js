// let userName= "my na\tme is r\vita"

// console.log(userName);


// Recursion concept code

// let anum = 1
// function revive(num){

//     if(anum > num){
//         return
//     }                  // condition to set recurtion end limit and it is our logic

//     console.log("Recursion working to call it self" +anum);
//     anum++;
//     // revive();      //Here recursion calling function it self again and again and it will run untill stack will be full.
//                      // so we need a point to stop and we use logics to done
//      revive(num);   // THIS IS OUT RECURSION WORKING
// }

// revive(10);  // will call 10 times

/* There are inbuilt recursive fucntions in javascript */


// IIFE concept code

// (function (){
//     window.alert("We use immidiatly invoked fucntion to run it as it is created");
// }()); // We use last brackets to invoke this anonymous fucntion and whole fucntion will bind under the round brackets.

// (function(){

// let val = "The is general value to call";

// function func(){
//    console.log(val);
// }

// func();
// })();   // We can bind any fucntion to with help of IIFE to run and done.

/* 
1. The IIFE we use to free the occupied memory after fucntion execution in some of cases. normally in global and local 
fucntions... those occupy the space in the memory or they took the space. So Immidiately invoke functions solve the issue
where we need fucntion for small time.
2. Solve the confliction issues.
*/

// Hoistion

/* 1. This is automaric work by javascript while read the code to re arrange some code flow and declarations when use with var
   2. Best for the debugging 
   3. manage declation globaly and locally
   4. will not initialize with let and const.
   */

//    "use strict"

//    var x 
   
   // Hoisting will automaticly define it as "Undefined"

//    console.log(x);

   // Currying fucntion in JS



// while   

/*
let lop = 1;

while(lop <= 5){
    console.log("This is the loop :" + lop);
    lop++;
}
*/

// do while

/*
let a = 10;

do{
    console.log("do while:" + a);
    a--
} while(a > 5);

for

for(let i= 100; i>= 20; i--){
    console.log("this is for" + i);
}
*/

// odd no

/*
for(let dev=1; dev <= 100; dev++){
    if(dev%3===0){
        console.log("The odd value:" + dev)
    }
}
*/

// even 

/*
for(let eve = 1; eve<= 100; eve++){
    if(eve%2===0){
        console.log("The value is even:" + eve);
    }
}
*/



//  object building


/*
let myself = {
    name: 'rita', 
    num: 5,
    designation: {
        des1 : 'abc',
        des2: 'bcs',
        des3: 'def'
    }
 }

 console.log(myself.designation['des2']);
*/
/*
for(let key in myself,myself.designation){
    console.log(key)
}

let myfunc = function(a, b){
    return a + b;
}

let sum = myfunc(5, 6);
console.log(sum);
*/


// object comaprison using this



let person1 = {
    name: "Rita",
    des: "Coder",
    number: 5,
    compare: 
        function(other){
            if(this.number > other.number){
               console.log(this)
            }else{
                console.log(other)
            }
              
        }
    }

let person2 = {
    name: "sam",
    des: "Fixer",
    number: 7,
    configs: {
        test_unit: "Demo2",
        call: 4,
        board: "pare"
    }
}

person1.compare(person2);








