// let userName= "my na\tme is r\vita"

// console.log(userName);


// Recursion concept code

let anum = 1
function revive(num){

    if(anum > num){
        return
    }                  // condition to set recurtion end limit and it is our logic

    console.log("Recursion working to call it self" +anum);
    anum++;
    // revive();      //Here recursion calling function it self again and again and it will run untill stack will be full.
                     // so we need a point to stop and we use logics to done
     revive(num);   // THIS IS OUT RECURSION WORKING
}

revive(10);  // will call 10 times

/* There are inbuilt recursive fucntions in javascript */


// IIFE concept code

(function (){
    window.alert("We use immidiatly invoked fucntion to run it as it is created");
}()); // We use last brackets to invoke this anonymous fucntion and whole fucntion will bind under the round brackets.

(function(){

let val = "The is general value to call";

function func(){
   console.log(val);
}

func();
})();   // We can bind any fucntion to with help of IIFE to run and done.

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

   "use strict"

   var x // Hoisting will automaticly define it as "Undefined"

   console.log(x);


