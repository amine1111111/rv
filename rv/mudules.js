// INTRODUCTION

//A module is just a file. One script is one module. As simple as that.
//they can load each other and use special  export and import to interchange functionality .


//ex
// and we whould give the org script type = "module"

// import {h} from './new.js' ;
// h()

// INTRODUCTION








// CORE MODULE FEATURES


// modules alwasys work with "use strict" even if u didn't create it

//so this would give an error
// a = 5 ;






//module lvl scope

// top-level variables and functions from a module are not seen in other scripts.

//module lvl scope






//A module code is evaluated only the first time when imported


// If the same module is imported into multiple other modules,
//  its code is executed only once,
// upon the first import. 
//Then its exports are given to all further importers.


//A module code is evaluated only the first time when imported










//import.meta

//The object import.meta contains the information about the current module.

// Its content depends on the environment. In the browser, 
// it contains the URL of the script, or a current webpage URL if inside HTML:

//EX

// import {h} from "./new.js" ;
// console.log(import.meta)

// .this is the window obj but with modules we get undeefined 
// console.log(this)


// CORE MODULE FEATURES















//EXPORT  & IMPORTS

// these are called static imports & exports

// u can export many things at once

// import {h , a, User} from "./new.js" ;

// let userOne = new User("amine")

// h()
// console.log(a)

// console.log(userOne.name)










//import as
//change the name of the imported e

// import { User  as X} from "./new.js" ;

// let userOne = new X("amine")

// console.log(userOne.name)

//import as




//export as

//1
// let ps = "angela white" ;
// export {ps as r} ;
//2
// import {r} from "./new.js"
// console.log(r)

//export as




// export default

//there are 2 types of modules : 

//1 Modules that contain a library, pack of functions, like say.js above.

//EX
// import * as container from "./new.js"
//EX


//2
// Modules that declare a single entity,
//ex a module user.js exports only class User. and mostly this is preffered
// export default



// Naturally, that requires a lot of files,
// as everything wants its own module, but that’s not a problem. 
// Actually,
// code navigation becomes easier if files are well-named and structured into folders.


// Modules provide a special export default (“the default export”) syntax 
// to make the “one thing per module” way look better.



// import ps from "./new.js"   //do not use {} with ps....it looks better
// alert(ps)

// an d also 

//import needs curly braces for named exports and doesn’t need them for the default one.



// import n from "./new.js"
// console.log(n) // julia ann















//the default name

// import {default as d , a} from "./new.js"



// And, finally, if importing everything * as an object,
// then the default property is exactly the default export:


// import *  as user from "./new.js" ;
// console.log(user)
// console.log(user.default)


//the default name


















// re-export



// import login/logout and immediately export them  


// import {login, logout} from './helpers.js';
// export {login, logout};

// // import default as User and export it
// import User from './user.js';
// export {User};




// export {default as User} from './user.js';             //re-export default

// re-exported modules aren’t available in the current file


// re-export











// Re-exporting the default export


// Let’s say we have user.js with the export default class User and would like to re-export it:





// 1  export User from './user.js' won’t work. That would lead to a syntax error.

// To re-export the default export, 
//we have to write export {default as User}

// 2  export * from './user.js' re-exports only named exports, but ignores the default one.





//so do this 

// export * from './user.js'; // to re-export named exports
// export {default} from './user.js'; // to re-export the default export

// Re-exporting the default export



//EXPORT  & IMPORTS











//DYNAMIC IMPORTS

//get the module as a whole obj & return a promise

//EX
// import('./new.js').then(a =>  console.log(a))



// let {hi, bye} = await import('./new.js');  // looks like destructuring

// hi();
// bye();





// Or, if say.js has the default export:



// let obj = await import('./new.js');
// let say = obj.default;

// console.log(obj)
// say();



// or, in one line: let {default: say} = await import('./say.js');

// let {default : d} = await import("./new.js") // name the default

// d()

//DYNAMIC IMPORTS