// PROMISE

// the constructor syntax for the promise obj is
// let promise = new Promise( function //this func is called the executor(resolve, reject) {
  // executor (the producing code, "singer")
// })

// Its arguments resolve and reject are callbacks provided by JavaScript itself.
//  Our code is only inside the executor.



// promise obj returned by new promise has internals properties

// state — initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.
// result — initially undefined, then changes to value when resolve(value) is called or error when reject(error) is called.




//CONSUMERS / THEN, CATCH


// A Promise object serves as a link between the executor (the “producing code” or “singer”) and the consuming functions (the “fans”), which will receive the result or error. Consuming functions can be registered (subscribed) using the methods .then and .catch.

// promise.then(
    // function(result) { /* handle a successful result */ },
    // function(error) { /* handle an error */ }
//   );




// If we’re interested only in successful completions, then we can provide only one function argument to .then:

// let promise = new Promise(resolve => {
//   setTimeout(() => resolve("done!"), 1000);
// });

// promise.then(alert); // shows "done!" after 1 second





// If we’re interested only in errors, then we can use null as the first argument: .then(null, errorHandlingFunction). Or we can use .catch(errorHandlingFunction), which is exactly the same:

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => reject(new Error("Whoops!")), 1000);
// });

// // .catch(f) is the same as promise.then(null, f)
// promise.catch(alert); // shows "Error: Whoops!" after 1 second


//CONSUMERS / THEN, CATCH



//FFINALLY


//EX
// 1 .finally(() => stop loading indicator)

// 2 A finally handler has no arguments. In finally we don’t know whether the promise is successful or not. 
// That’s all right, as our task is usually to perform “general” finalizing procedures.


// A finally handler “passes through” the result or error to the next suitable handler.


// new Promise((resolve, reject) => {
//     setTimeout(() => resolve("value"), 2000);
//   })
//     .finally(() => alert("Promise ready")) // triggers first
//     .then(result => alert(result)); // <-- .then shows "value"




// 3  A finally handler also shouldn’t return anything. If it does, the returned value is silently ignored.

// The only exception to this rule is when a finally handler throws an error. Then this error goes to the next handler, instead of any previous outcome.


//FFINALLY

// PROMISE




















//PROMISES CHAINING

// .then .then .ten

//not promise.then promise.then
//PROMISES CHAINING












//PROMISE API

//promise.all

// Let’s say we want many promises to execute in parallel and wait until all of them are ready.
// it takes an iterable usually an array of promises and return a new promise
// The new promise resolves when all listed promises are resolved, and the array of their results becomes its result.

//syntax
// let promise = Promise.all(iterable);
//syntax



//EX

// Promise.all([
//   new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
//   new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
//   new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
// ]).then(alert); 

//EX



//another EX

// let urls = [
//   'https://api.github.com/users/iliakan',
//   'https://api.github.com/users/remy',
//   'https://api.github.com/users/jeresig'
// ];

// // map every url to the promise of the fetch
// let requests = urls.map(url => fetch(url));

// // Promise.all waits until all jobs are resolved
// Promise.all(requests)
//   .then(responses => responses.forEach(
//     response => alert(`${response.url}: ${response.status}`)
//   ));


// in case of an error all promises are ignored
//rejects as a whole if any promise rejects. 
 
//another EX

//promise.all





  







//promise.allsettled

// Promise.allSettled just waits for all promises to settle, regardless of the result. The resulting array has:

//     {status:"fulfilled", value:result} for successful responses,
//     {status:"rejected", reason:error} for errors.




//EX

// let urls = [
//   'https://api.github.com/users/iliakan',
//   'https://api.github.com/users/remy',
//   'https://no-such-url'
// ];

// Promise.allSettled(urls.map(url => fetch(url)))
//   .then(results => { // (*)
//     results.forEach((result, num) => {
//       if (result.status == "fulfilled") {
//         alert(`${urls[num]}: ${result.value.status}`);
//       }
//       if (result.status == "rejected") {
//         alert(`${urls[num]}: ${result.reason}`);
//       }
//     });
//   });

//EX


//promise.allsettled
  









//promise.race

//Similar to Promise.all,
//  but waits only for the first settled promise and gets its result (or error).


// Promise.race([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)), //this will work bc it is the fastest one
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)), 
// ]).then(alert); // 1



//promise.race




//promise.any

// Similar to Promise.race, but waits only for the first fulfilled promise and gets its result.
//  If all of the given promises are rejected, 
// then the returned promise is rejected with AggregateError – a special error object that stores all promise errors in its errors property.

//EX

// Promise.any([
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ]).then(alert); // 1

//EX
//promise.any














//Promisification

// “Promisification” is a long word for a simple transformation.
// It’s the conversion of a func that accepts a callback into a func that returns a promise.


//Promisification
















//MICROTASKS


// Asynchronous tasks need proper management. For that,
// the ECMA standard specifies an internal queue PromiseJobs, 
// more often referred to as the “microtask queue” (V8 term).


//EX

// let promise = Promise.resolve();

// promise.then(() => alert("promise done!"));

// alert("code finished"); // this alert shows first

//EX

//MICROTASKS













//Async/await


// There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”.
// It’s surprisingly easy to understand and use.

// u can  also use it with class

//async


// it can be placed before a func like this

// async function asy(){
//   console.log("async")
// }

// it means a function always returns a promise. 
//Other values are wrapped in a resolved promise automatically.



//EX
// async function f(){
  //   return 1 ;
  //   // return Promise.resolve(1) ;     // the same
  //   // return Promise.reject( new Error("error"))
  // }
  
  // f().then(alert)
//EX















//await

// works only inside async functions
// let value = await promise;

// it makes js wait until that promise settles and returns its result.



//EX

// in this example 
//if we remove  *  the alert(1) goes first 
// if not we wait for "done" to alert an the we alert(1)



// async function f() {

//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 5000)
//   });


  
//   let result = await promise;  * 
//   alert(1); 

//   alert(result); 

// }

// f();


//EX










// That doesn’t cost any CPU resources, 
// because the JavaScript engine can do other jobs in the meantime: execute other scripts,
// handle events, etc.


// like in  this example
//  we get "aaa" 
//than  1 
// than "done"



// async function f() {

//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 5000)
//   });


  
//   let result = await promise;
//   alert(1); 

//   alert(result); 

// }

// f();



// alert("aaa")





//Async/await

//PROMISE API