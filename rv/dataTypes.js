//Methods of primitives        wok with primitives such string.... as an obj

// There are 7 primitive types: string, number, bigint, boolean, symbol, null and undefined.


// Here’s the paradox faced by the creator of JavaScript:

// There are many things one would want to do with a primitive, like a string or a number. 
// It would be great to access them using methods.
// Primitives must be as fast and lightweight as possible.






// The solution looks a little bit awkward, but here it is:


// Primitives are still primitive. A single value, as desired.
// The language allows access to methods and properties of strings, numbers, booleans and symbols.
// In order for that to work, a special “object wrapper” that provides the extra functionality is created, and then is destroyed.

// The “object wrappers” are different for each primitive type and are called: String, Number, Boolean, Symbol and BigInt. Thus, they provide different sets of methods.





//Methods of primitives        wok with primitives such string.... as an obj

















//number

// To write numbers with many zeroes:

// console.log(23e5)      //e              +
// console.log(23e-5)      //e    0.00023  -


// console.log( Number(10).toString())       //convert a numer to a string



//we want to round a number    1.234567               to 1.23

// let a = 1.234567;



// console.log(Math.round(a *100) / 100)
// also
// console.log(a.toFixed(2))

//we want to round a number




// console.log( isFinite(a)) convert the value to number and return true / false
// console.log(isNaN(a)) true/  false 


// let b = "10.33px";
// console.log(parseInt(b))  //10
// console.log(parseFloat(b))  //10.33



//number






























//string


// console.log("amine\\\n\"mani")

// let a = "amine" ;

// console.log(a[0]) // a
// console.log(a.at(0)) // a



// console.log(a[a.length -1]) //  e
// console.log(a.at(-1)) //  e



// console.log(a[-1])  //undefined
// console.log(a.at(-1))  // e


// for(let x of "amine"){
//     console.log(x)
// }





//getting a substring

// let i = "infinity" ;

//SUBSTRING

// console.log(i.substring(3,6)) //Returns the part of the string between start and end (not including end).
// no negative arg

//SUBSTR
//Returns the part of the string from start, with the given length.
// console.log(i.substr(3, 3))


//getting a substring





//string


























//array

//An array can store elements of any type.
// et arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];



// .at()

//push / pop / shif / unshift


// let ar = [1 ,2 ,3, 4, 5, 6 , 7, 8 , 9, 10 ]

// for(let x of ar){
//     console.log(x)
// }


// for array









//SPLICE

// splic(start removing ,how much to remove, replace what u removed with this)

// let a = [1, 2, 3]



// a.splice(0, 1, "amine")
// console.log(a)

// negative mumbers are alllowed

//SPLICE






//CONCAT
// let a = [1, 2,3 ]


// let user = {
//     0 :"amine", 
//     [Symbol.isConcatSpreadable] : true , // to make .contate read the obj as array
//     length : 1,
// }


//CONCAT



// .reduce
// let value = arr.reduce(function(accumulator, item, index, array) {
//     // ...
//   }, [initial]);


//   let arr = [1, 2, 3, 4, 5];

// let result = arr.reduce((sum, current) => sum + current, 0);

// alert(result); // 15
// .reduce
//array



































//ITERABLES

// Iterables are objects that implement the Symbol.iterator method, as described above.
// Array-likes are objects that have indexes and length, so they look like arrays.




// we can not  use (for of)  loop with obj
// iterables
// That’s a concept that allows us to make any object useable in a for..of loop.             we want to make th e obj an iterable


// EX
//To make the range object iterable (and thus let for..of work) we need to add a method to the object named Symbol.iterator (a special built-in symbol just for that).
//   range[Symbol.iterator]  is  a built in obj just to make the onj an iterable


// let range = {
//     from: 1,
//     to: 5
//   };
  
// //   for(let x of range){
// //     console.log(x)  //range is not iterable
// //   }


// // 1. call to for..of initially calls this
// range[Symbol.iterator] = function() {

//     // ...it returns the iterator object:
//     // 2. Onward, for..of works only with the iterator object below, asking it for next values
//     return {
//       current: this.from,
//       last: this.to,
  
//       // 3. next() is called on each iteration by the for..of loop
//       next() {
//         // 4. it should return the value as an object {done:.., value :...}
//         if (this.current <= this.last) {
//           return { done: false, value: this.current++ };
//         } else {
//           return { done: true };
//         }
//       }
//     };
// };


// for( let x of range){
//     console.log(x) //now it works
// }
// EX

//ITERABLES





























//MAP AND SET



// Map.get()
// Map.set()
// Map.has()
// Map.delete()
// Map.clear()
// Map.size()



// Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type./

// let mp = new Map() ;

// mp.set(1, 111)
// mp.set("1", 999)



// console.log(mp.get(1))
// console.log(mp.get("1")) // you can store any type of value in it






// let john = { name: "John" };

// let visitsCountMap = new Map();

// // john is the key for the map
// visitsCountMap.set(john, 123);

// alert( visitsCountMap.get(john) ); // 123

// // with map ... u can use an obj as a key  but in obj u can not use an obj as a key in 









//ITERATION OVER MAP

// let mp = new Map() ;

// mp.set(1, 111)
// mp.set("1", 999)


// console.log(mp.keys())  111, 999

//1
// for(let x of mp.keys()){
    //     console.log(x)       1 , "1"
    // }
//1


//2
// for(let x of mp.entries()){
    //     console.log(x)              // gives u key and value for each  one   
// }
//2
    
//3
// for(let x of mp.values()){
//         console.log(x)       111, 999 
// }
//3

//ITERATION OVER MAP








//Object.entries: Map from Object

// If we have a plain object, and we’d like to create a Map from it, then we can use built-in method Object.entries(obj) that returns an array of key/value pairs for an object exactly in that format.
// So we can create a map from an object like this:



// let obj = {
//     name: "John",
//     age: 30
//   };
  
//   let map = new Map(Object.entries(obj));
  
//   alert( map.get('name') ); // John

//Object.entries: Map from Object







//Object.fromEntries: Map from Object

// ::There’s Object.fromEntries method that does the reverse: given an array of [key, value] pairs, it creates an object from them:

// let prices = Object.fromEntries([
//     ['banana', 1],
//     ['orange', 2],
//     ['meat', 4]
//   ]);
  
//   // now prices = { banana: 1, orange: 2, meat: 4 }
  
//   alert(prices.orange); // 2
// //Object.fromEntries: Map from Object











//SET

// set.add()
// set.delete()
// set.clear()
// set.size()


// A Set is a special type collection – “set of values” (without keys), where each value may occur only once.


// let set = new Set();

// let a = 1;
// let ar = [2, 3,  4]
// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// // visits, some users come multiple times
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(a);
// set.add(ar);

// // set keeps only unique values
// console.log( set ); // 5





//We can loop over a set either with for..of or using forEach:
//The same methods Map has for iterators are also supported:

// set.keys() – returns an iterable object for values,
// set.values() – same as set.keys(), for compatibility with Map,
// set.entries() – returns an iterable object for entries [value, value], exists for compatibility with Map.

//SET

//MAP AND SET


















//WEAK MAP AND WEAK SET

// The first difference between Map and WeakMap is that keys must be objects, not primitive values:

//WeakMap does not support iteration and methods keys(), values(), entries(), so there’s no way to get all keys or values from it.


//weak map.get()
//weak map.set()
//weak map.has()
//weak map.delete()


//weakset
// It is analogous to Set, but we may only add objects to WeakSet (not primitives).
//WEAK MAP AND WEAK SET 






//OBJ .KEYS/ VALUES / ENTRIES

// let user = {

//     name :'amine', 
//     age:20
// }

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

//Just like a for..in loop, these methods ignore properties that use Symbol(...) as keys.



//OBJ .KEYS/ VALUES / ENTRIES




























//DESTRUCTURING ASSIGNMENT

//it works with any iterable

// let arr = ["John", "Smith"]

// let [firstName, surname] = arr;

// alert(firstName); // John
// alert(surname);  // Smith



// it's just a short way to write
// let firstName = arr[0];
// let surname = arr[1];



//  ignore e with ,
// second element is not needed
// let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// alert( title ); // Consul




// ...rest
// let [a = "911", b, ...rt]  = [1, 2, 3, 4, 5, 6, 7]

// console.log(a)
// console.log(b)
// console.log(rt[2])
// ...rest




//destructuring obj

// let user = {
//     name : "amine", 
//     age : 20 ,
//     city : "bouira" ,
// }

// let {age : a = 19, name : n = "mani", ...npm} = user ;

// console.log(n)
// console.log(a)
// console.log(npm) //onbj










// let options = {
//     title: "My menu",
//     items: ["Item1", "Item2"]
// };
  
//   function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
//     console.log( `${title} ${width} ${height}` ); 
//     console.log( items ); 
//   }
  
//   showMenu(options);


//destructuring obj


//DESTRUCTURING ASSIGNMENT




























//JSON




// JSON.stringify to convert objects into JSON.
// JSON.parse to convert JSON back into an object.


// let user = {
//     name :"amine", 
//     age :20,
// }


// let toJason = JSON.stringify(user) //JSON  string is called    a JSON-encoded or serialized or stringified or marshalled object

// console.log(toJason)
// console.log(JSON.stringify(true))








//JSON is data-only language-independent specification, so some JavaScript-specific object properties are skipped by JSON.stringify.

// Function properties (methods).
// Symbolic keys and values.
// Properties that store undefined.




// let user = {


//     sayHi() { // ignored
//       console.log("Hello");
//     },

//     [Symbol("id")]: 123,  // ignored
//     something: undefined , // ignored

//   };
  
//   console.log( JSON.stringify(user) ); // {} (empty object)

// let toObj = JSON.parse(toJason)
// console.log(toObj)












//Excluding and transforming: replacer

//we should avoid circular referenece

// let room = {
//     number: 23
//   };
  
//   let meetup = {
//     title: "Conference",
//     participants: ["john", "ann"]
//   };
  
//   meetup.place = room;       // meetup references room
//   room.occupiedBy = meetup; // room references meetup
  
//   JSON.stringify(meetup);










// to filter out  circular references we sould use    (replacer) 


// let room = {
//     number: 23 ,
// };
  
// let meetup = {
//     title: "Conference",
//     participants: [{name: "John"}, {name: "Alice"}],
//     place: room , // meetup references room
// };
  
//   room.occupiedBy = meetup; // room references meetup
  
//   console.log( JSON.stringify(meetup, ['title', 'participants']) );
//   // {"title":"Conference","participants":[{},{}]}














// now it is working but the list of properties is too long


// let room = {
//     number: 23
// };

// let meetup = {
//   title: "Conference",
//   participants: [{name: "John"}, {name: "Alice"}],
//   place: room // meetup references room
// };

// room.occupiedBy = meetup; // room references meetup

// alert( JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) );
/*
{
  "title":"Conference",
  "participants":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/












// let room = {
//     number: 23
//   };
  
//   let meetup = {
//     title: "Conference",
//     participants: [{name: "John"}, {name: "Alice"}],
//     place: room // meetup references room
//   };
  
//   room.occupiedBy = meetup; // room references meetup
  
//   alert( JSON.stringify(meetup, function replacer(key, value) {
//     alert(`${key}: ${value}`);
//     return (key == 'occupiedBy') ? undefined : value;
//   }));











// let user = {
//     name: "John",
//     age: 25,
//     roles: {
//       isAdmin: false,
//       isEditor: true
//     }
//   };
  
//   console.log(JSON.stringify(user, null, 1)); //add a spacer

//Excluding and transforming: replacer







// Custom “toJSON”

// let room = {
//     number: 23
//   };
  
//   let meetup = {
//     title: "Conference",
//     date: new Date(Date.UTC(2017, 0, 1)),
//     room
//   };
  
//   alert( JSON.stringify(meetup) );
  /*
    {
      "title":"Conference",
      "date":"2017-01-01T00:00:00.000Z",  // (1)
      "room": {"number":23}               // (2)
    }
  */
// /Here we can see that date (1) became a string. That’s because all dates have a built-in toJSON method which returns such kind of string.

// Custom “toJSON”











//JSON.parse

// we use .stringify to encode ......we use .parse to decode

// let pornHub = {
//     user1 : "angela white" ,
//     user2 : "julia ann" ,
//     user3 : "ava addams" ,
// }

// let j = JSON.stringify(pornHub, undefined, 1)
// console.log(j)



// let str = JSON.parse(j)
// console.log(str)
//JSON.parse



//USING REVIVER

//USING REVIVER

//JSON