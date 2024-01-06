//1 obj

// let user = {
//     name : "amine"             name = property , name ,key , identifier

// }

// delete  user.name



// let a = {
//     "aaa bbb": "aaa bbb ccc " , 
// }
// console.log(a["aaa bbb"])

// a["ps"] = "angela white" 

// console.log(a)
// console.log(a["ps"])





// let user = {
//     name: "John",
//     age: 30
//   };
  
//   let key = prompt("What do you want to know about the user?", "name");
  
//   // access by variable
//   alert( user[key] ); // John (if enter "name") //30 if enter age



////computed properties 

// let fruit = prompt("Which fruit to buy?", "apple");

// let bag = {
//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };

// alert( bag.apple ); // 5 if fruit="apple"







// let fruit = 'apple';
// let bag = {
//   [fruit + 'Computers']: 5       // bag.appleComputers = 5
// };





// let a = {
  
// }

// console.log(a.a) // undefined
// console.group("a" in  a) //false





//for in loooooooooooooooooop


// let user ={
//     name : "amine" ,
//     age : 20,
// }

// for( let pro in user){
//     console.log(pro) // name , age
//     console.log(user[pro]) // amine  ,   20
// }

//1






















// obj reference and copying


// let user = { name: 'John' };

// let admin = user;

// admin.name = 'Pete'; // changed by the "admin" reference

// alert(user.name); // 'Pete', changes are seen from the "user" reference




// obj reference and copying
















//obj cloning and mergin 

// But what if we need to duplicate an object?

// We can create a new object and replicate the structure of the existing one, 
//by iterating over its properties and copying them on the primitive level




// let user = {
//     name: "John",
//     age: 30
//   };
  
//   let clone = {}; // the new empty object
  
//   // let's copy all user properties into it
//   for (let key in user) {
//     clone[key] = user[key];
//   }
  
//   // now clone is a fully independent object with the same content
//   clone.name = "Pete"; // changed the data in it
  
//   alert( user.name ); // still John in the original object




//also

// Object.assign(dest, ...sources)



// let user = { name: "John" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// // copies all properties from permissions1 and permissions2 into user
// Object.assign(user, permissions1, permissions2);

// // now user = { name: "John", canView: true, canEdit: true }
// alert(user.name); // John
// alert(user.canView); // true
// alert(user.canEdit); // true









// We also can use Object.assign to perform a simple object cloning:

// let user = {
//     name: "John",
//     age: 30
//   };
  
//   let clone = Object.assign({}, user);
  
//   alert(clone.name); // John
//   alert(clone.age); // 30


//obj cloning and mergin












//nested cloning

//structured clone



// let user = {
//     name: "John",
//     sizes: {
//       height: 182,
//       width: 50
//     }
//   };
  
//   let clone = structuredClone(user);
  
//   alert( user.sizes === clone.sizes ); // false, different objects
  
//   // user and clone are totally unrelated now
//   user.sizes.width = 60;    // change a property from one place
//   alert(clone.sizes.width); // 50, not related



//structured clone


//nested cloning





















//object method , this

//method



// function by(){
//     console.log("by")
// }

// let user = {
//     name : "amine" ,
//     age : 20 ,
// sayA :function  (){
//     console.log("aaaa")
// } ,

// sayB (){
//     console.log("bbbb")
// } ,


// }


// user.hi = function (){
//     console.log("hi")
// }

// user.hi()
// user.sayBy = by
// user.sayBy()







//this in methods


//     function hi(){
//         console.log(this)
//     }

//  hi() // window   when we use use strict it becomes undefined



//this in methods

//object method , this
























//constructor , operator "new"



//CONSTRUCOT FUNCTION


// constructor functions technically are regular functions. There are two conventions though:

//     They are named with capital letter first.
//     They should be executed only with "new" operator.



//EX

// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
//   }
  
//   let user = new User("Jack");
  
//   alert(user.name); // Jack
//   alert(user.isAdmin); // false

//EX


// EXPLAIN

// function User(name) {
//     // this = {};  (implicitly)
  
//     // add properties to this
//     this.name = name;
//     this.isAdmin = false;
  
//     // return this;  (implicitly)
//   }


// EXPLAIN

//CONSTRUCOT FUNCTION








//constructor , operator "new"




















//Optional chaining '?.'


// The optional chaining ?. stops the evaluation if the value before ?. is undefined or null and returns undefined.



// let user = {}; // user has no address

// alert( user?.address?.street ); // undefined (no error)




//if there is not variable 
// console.log(user?.name) // err user is not defined





//The optional chaining ?. is not an operator, but a special syntax construct, that also works with functions and square brackets.




// let userAdmin = {
//     admin() {
//       alert("I am admin");
//     }
//   };
  
//   let userGuest = {};
  
//   userAdmin.admin?.(); // I am admin
  
//   userGuest.admin?.(); // nothing happens (no such method)





//The optional chaining ?. has no use on the left side of an assignment.

// let user = null;

// user?.name = "John"; // Error, doesn't work
//  because it evaluates to: undefined = "John"

//Optional chaining '?.'



























//Symbol type



// id is a symbol with the description "id" //symbol name ("id") used mostly for debugging purposes

// let f = Symbol("id");
// let s = Symbol("id");

// console.log(f == s) // FALSE even they are with the same name / description

//  alert(f) //can not be converted to a string

// console.log(f.toString()) //symbol(id)
// console.log(f.description) //id












// “Hidden” properties



// let user = { // belongs to another code
//     name: "John"
// };
  
// let id = Symbol("id");
  
// user[id] = 1;
  
// console.log( user[id] ); // we can access the data using the symbol as the key       1

// “Hidden” properties







// let sy = Symbol("aaaa")
// let user = {
//     1: 1, 
//     [sy] : 911 ,
// }


// for(let x in user){
//     console.log(user[x]) // symbols are skipped in (for in loop) 1
// }

// //also here
// console.log(Object.keys(user)) 1


// // symbols are not skipped in (for in loop)
// let clone = Object.assign({}, user)
// console.log(clone)








//global symbol

// usually all symbols are different, even if they have the same name. But sometimes we want same-named symbols to be same entities. For instance, different parts of our application want to access symbol "id" meaning exactly the same property.
// use symbol.for()
// // read from the global registry
// let id = Symbol.for("id"); // if the symbol did not exist, it is created

// // read it again (maybe from another part of the code)
// let idAgain = Symbol.for("id");

// // the same symbol
// alert( id === idAgain ); // true

//global symbol




//get a name by a global symbol

// let a = Symbol.for('x')

// console.log(Symbol.keyFor(a))   //x
//get a name by a global symbol









//Symbol type





