// REST PARAMETERS AND SPREAD SYNTAX


// RESTPARAMETERS
// the  (rest parameters ...) must be at the end

// function showName(firstName, lastName, ...titles) {
//     alert( firstName + ' ' + lastName ); // Julius Caesar
//     // the rest go into titles array
//     alert( titles[0] ); // Consul
//     alert( titles[1] ); // Imperator
// }
//   showName("Julius", "Caesar", "Consul", "Imperator");
// RESTPARAMETERS






// THE ARGUMENTS VARIABLE
// There is also a special array-like object named arguments that contains all arguments by their index.

// function showName() {
//     // console.log( arguments );
//     // it's iterable
//     // for(let arg of arguments) console.log(arg);
//   }
  
//   showName("Julius", "Caesar");



// let f = _ => {console.log(arguments)}  //arow func does not have arguments
// THE ARGUMENTS VARIABLE





//SPREAD SYNTAX
// We’ve just seen how to get an array from the list of parameters.

// But sometimes we need to do exactly the reverse.

// let arr = [3, 5, 1];



// alert( Math.max(...arr, ...arrtwo) ); 

// let a = [1, 2, 3]
// let b = ["viva lalgeri"]
// let c = [...a, ...b]





// let word = "word" ;
// console.log(...word) // w o r d 
// console.log([...word]) // w o r d    array

//SPREAD SYNTAX








// COPY AN ARRAY/OBJ

// Remember when we talked about Object.assign() in the past?
// It is possible to do the same thing with the spread syntax.

// let arr = [1, 2, 3];

// let arrCopy = [...arr]; // spread the array into a list of parameters
//                         // then put the result into a new array

// // do the arrays have the same contents?
// alert(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true

// // are the arrays equal?
// alert(arr === arrCopy); // false (not same reference)

// // modifying our initial array does not modify the copy:
// arr.push(4);
// alert(arr); // 1, 2, 3, 4
// alert(arrCopy); // 1, 2, 3



// Note that it is possible to do the same thing to make a copy of an object:

// COPY AN ARRAY/OBJ




// REST PARAMETERS AND SPREAD SYNTAX
























// LEXICAL ENVIRONMENT





// STEP1 VARIABLES                           IS  A  HIDDEN OBJ   

// In JavaScript, every running function, code block {...}, and the script as a whole have an internal (hidden) associated object known as the Lexical Environment.



// AND IT HAS 2 PARTS

//1 Environment Record – an object that stores all local variables as its properties (and some other information like the value of this).
//2 A reference to the outer lexical environment, the one associated with the outer code.


// LEXICAL ENVIRONMENT







//THE OLD VAR

//it has no block scope

// if (true) {
//     var test = true; 
// }
  
// alert(test); // true, the variable lives after if          with let u get an error





// If a code block is inside a function, then var becomes a function-level variable:
// function sayHi() {
//     if (true) {
//       var phrase = "Hello";
//     }
//     alert(phrase); // works
// }
// alert(phrase); // ReferenceError: phrase is not defined








//“var” tolerates redeclarations

// we  can redeclare var  and override the first one
// var user = "Pete";
// var user = "John"; // this "var" does nothing (already declared)
// // ...it doesn't trigger an error

// alert(user); // John

//“var” tolerates redeclarations






// “var” variables can be declared below their use

// var declarations are processed when the function starts (or script starts for globals).


// function sayHi() {
    //IT IS LIKE var phrase;     we call it hoisting  becuase all vars are raides to the top of the func
//     phrase = "Hello";
  
//     alert(phrase);
  
//     var phrase;
//   }
//   sayHi();


// “var” variables can be declared below their use







//IIFE
// In the past, as there was only var, and it has no block-level visibility, programmers invented a way to emulate it. What they did was called “immediately-invoked function expressions” (abbreviated as IIFE).


// (function() {

//     var message = "Hello";
  
//     console.log(message); // Hello
  
//   })();

// console.log(message) error      so the var would have a code block
  

//Here, a Function Expression is created and immediately called. So the code executes right away and has its own private variables.



//other ways to do it 
// +function () {} ()
// !function () {} ()
// (function () {} ())
// (function () {})  ()
//IIFE

//THE OLD VAR











// var aaa = "aaa"








//GLOBAL OBJ

//The global object provides variables and functions that are available anywhere. By default, those that are built into the language or the environment.
// In a browser it is named window, for Node.js it is global, for other environments it may have another name.



// In a browser, global functions and variables declared with var only (not let/const!) become the property of the global object:    also  func declarations
//EX
// var n = 5 ;
// console.log(window.n)

//GLOBAL OBJ








// FUNCTION OBJECT , NFE

// There is another built-in property “length” that returns the number of function parameters, for instance:

// function sum (a, b, ...r){
//     console.log(a + b)  ; 
// }

// sum(1, 2, 10, 111,911)

// console.log(sum.length) //2  rest parametre is not counted

// sum.start = 0 ;





// let a = function hiii() {
//     console.log("hi")
// }



// It allows the function to reference itself internally.               the func name 
// It is not visible outside of the function.


//NAMED FUNC EXPRESSION

// FUNCTION OBJECT , NFE




















//THE NEW FUNC SYNTAX

// let fn = new Function('a', "b", "  console.log(a + b)  ")
// fn(1, 2, 3, 7)


// The difference from other ways we’ve seen is that the func is created literally from a string, that is passed at run time.
// All previous declarations required us, programmers, to write the function code in the script.



// But new Function allows to turn any string into a function. For example, we can receive a new function from a server and then execute it:

// let str = ... receive the code from a server dynamically ...

// let func = new Function(str);
// func();






//closure

// Usually, a function remembers where it was born in the special property [[Environment]]. It references the Lexical Environment from where it’s created (we covered that in the chapter Variable scope, closure).

// But when a function is created using new Function, its [[Environment]] is set to reference not the current Lexical Environment, but the global one.

// So, such function doesn’t have access to outer variables, only to the global ones.


// function getFunc() {
//     let value = "test";
  
//     let func = new Function('alert(value)');
  
//     return func;
//   }
  
//   getFunc()(); // error: value is not defined

//THE NEW FUNC SYNTAX







//SET TIMEOUT
let hi =  name => console.log(`hi ${name}`)

setTimeout(hi, 3000, "amine")
//SET TIMEOUT













//DECORATORS AND FORWARDING CALL/APPLY
//DECORATORS AND FORWARDING CALL/APPLY







//ARROW FUNC REVISITED
// let arrow = _ => console.log(this)
// arrow() // it has no this

// Do not have this
// Do not have arguments
// Can’t be called with new
// They also don’t have super, 

//ARROW FUNC REVISITED