// Property flags and descriptors

//obj.getOwnpropertyDescriptor

// let user = {
//     name : "amine" ,
//     hi (){
//         console.log("hi")
//     }
// }

// let descriptor =  Object.getOwnPropertyDescriptor(user, "name")
// console.log(descriptor)


//to change the property

// let change =  Object.defineProperty(user, "name", {value : "aaa"})

// console.log(change)






//non writable 

// let nonWritable = Object.defineProperty(user, "name", {writable : false})

// user.name = 'aaa' // we can not xhenge the namz know            can’t be reassigned
// console.log(user.name)

//non writable







// Non-enumerable

// if u do not want something to show when u loop over your obj 

// let nonEnumerablle = Object.defineProperty(user, "hi" , {enumerable : false})
// for(let x in user){
//     console.log(x)
// }

// Non-enumerable






//nonConfigurable

//Please note: configurable: false prevents changes of property flags and its deletion, while allowing to change its value.


// let nonConfigurable = Object.defineProperty(user , "name", {configurable : false})

// user.name = "aaa"
// delete user.name
// console.log(user) // "aaa"

//nonConfigurable




// let all = Object.getOwnPropertyDescriptors(user)
// console.log(all)




// Normally when we clone an object, we use an assignment to copy properties, like this:

// for (let key in user) {
//   clone[key] = user[key]
// }



// …But that does not copy flags. So if we want a “better” clone then Object.defineProperties is preferred.

// Another difference is that for..in ignores symbolic and non-enumerable properties, but Object.getOwnPropertyDescriptors returns all property descriptors including symbolic and non-enumerable ones.









// Property flags and descriptors



















// Property getters and setters

//EX


// there are 2 kinds of obj property

// let user = {
//     name  :"txt" , // this is a data property
//     get / set  propName() {
    //the 2nd type of properties is  an accessor property. 
    // They arefunctions that execute on getting and setting a value,
    //  but look like regular properties to an external code.
//     }
// }






// let user = {
//     name: "John",
//     surname: "Smith",
  
//     get fullName() {
//       return `${this.name} ${this.surname}`;
//     }
//   };
  
//   user.fullName() // error
//   console.log(user.fullName) // John Smith

//   From the outside, 
//   an accessor property looks like a regular one.
//   That’s the idea of accessor properties. 
//   We don’t call user.fullName as a function,
//    we read it normally: the getter runs behind the scenes












// As of now, fullName has only a getter. If we attempt to assign user.fullName=, there will be an error:
// let user = {
//     get fullName() {
//       return `...`;
//     }
//   };
  
//   user.fullName = "Test"; 






//to fix it do this





//add a setter


// let user = {
//     name: "John",
//     surname: "Smith",
  
//     get fullName() {
//       return `${this.name} ${this.surname}`;
//     },
  
//     set fullName(value) {
//       [this.name, this.surname] = value.split(" ");
//     }
//   };
  
//   // set fullName is executed with the given value.
//   user.fullName = "Alice Cooper";
  
//   alert(user.name); // Alice
//   alert(user.surname); // Cooper

















//accessor  decriptors
// let user = {
//     name: "John",
//     surname: "Smith" ,

//     get fullName() {
//         return `${this.name} ${this.surname}`;
//       },
    
//       set fullName(value) {
//         return value
//       }




// u can also use // defineproperty


// Object.defineProperty(user, 'fullName', {
    //     get() {
        //       return `${this.name} ${this.surname}`;
        //     },
        
        //     set(value) {
            //       [this.name, this.surname] = value.split(" ");
            //     }
            //   });
            // u can also use // defineproperty
            

// };



// let p = Object.getOwnPropertyDescriptor(user , "name")
// let prop = Object.getOwnPropertyDescriptor(user , "fullName")

// console.log(p)
// console.log(prop)

//accessor  decriptors





//smarter getter and setter

// Getters/setters can be used as wrappers over “real” property values to gain more control over operations with them.

// For instance, if we want to forbid too short names for user, we can have a setter name and keep the value in a separate property _name:


// let user = {
//     get name() {
//       return this._name;
//     },
  
//     set name(value) {
//       if (value.length < 4) {
//         alert("Name is too short, need at least 4 characters");
//         return;
//       }
//       this._name = value;
//     }
//   };
  
//   user.name = "Pete";
//   alert(user.name); // Pete
  
//   user.name = ""; // Name is too short...






// So, the name is stored in _name property, and the access is done via getter and setter.

// Technically, external code is able to access the name directly by using user._name. But there is a widely known convention that properties starting with an underscore "_" are internal and should not be touched from outside the object.





//smarter getter and setter

// Property getters and setters