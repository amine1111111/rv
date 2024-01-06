/////// BASIC SYNTAX

// "CLASS SYNTAX"
// class User {
//     // The constructor() method is called automatically by new, to initialize the object there.
//     constructor(){}
//     method(){}
// }







// class User {
//     constructor(name) {
//       this.name = name;
//     }
//     // sayHi() {console.log(this.name)} // , do not us , between class methods
//     sayF() {console.log("F***")} // methods are stored in User prototype
// }
  
//   // Usage:
//   let user = new User("text");
//   user.sayHi();
//   user.sayF();

// console.log(User)
//   console.log(typeof(User)) // the class is a function














// rewriting class User in pure functions

// 1. Create constructor function
// function User(name) {
//     this.name = name;
//   // a function prototype has "constructor" property by default,
//   // so we don't need to create it
//   }

    
//   // 2. Add the method to prototype
//   User.prototype.sayHi = function() {
//     console.log(this.name);
//   };
 
 //   // Usage:
 //   let user = new User("John");
 //   user.sayHi();
        
// rewriting class User in pure functions



// "CLASS SYNTAX"




//DIFFERENCE

// a function created by class is labelled by a special internal property
//  [[IsClassConstructor]]: true

// The language checks for that property in a variety of places.
// For example, unlike a regular function, it must be called with new:

//if we try this User () we get an error


// but if  we create a func  not created by class we can call it withour new like this

// function Hi() {console.log('hi')}
// Hi()






// class User {
//     constructor(name){
//         this.name = name
//     }
//     hi (){
//         console.log(`hi ${this.name}`)
//     }



//we can also add getter and setter

// get name() {
//     return this._name;
//   }

//   set name(value) {
//     if (value.length < 4) {
//       console.log("Name is too short.");
//       return;
//     }
//     this._name = value;
//   }

// }


// let one = new User("amine")

// console.log(one)
// console.log(Object.getOwnPropertyDescriptor(one, "hi"))
// console.log(Object.getOwnPropertyDescriptor(one, "name"))

//Class methods are non-enumerable.
// A class definition sets enumerable flag to false for all methods in the "prototype".

// Classes always use strict. All code inside the class construct is automatically in strict mode.

// console.log(Object.getOwnPropertyDescriptor(one, "hi"))   undefined

//DIFFERENCE








// We can even make classes dynamically “on-demand”, like this:

// function makeClass(phrase) {
//   // declare a class and return it
//   return class {
//     sayHi() {
//       console.log(phrase);
//     }
//   };
// }
// // Create a new class
// let User = makeClass("Hello");

// new User().sayHi(); // Hello








//CLASS FIELDS

//previously we saw that classes can hav methods ,they also can have properties

//EX
// class User {
//     age = 20 ;
//    hi(){
//     console.log(`hi ${this.age}`)
//    }
// }

// new User().hi()




 // class fields are not set in User.prototype


// class User {
//   name = "John";
// }

// let user = new User();
// console.log(user.name); // John
// console.log(User.prototype.name); // undefined
//CLASS FIELDS
















// As demonstrated in the chapter Function binding functions in JavaScript have a dynamic this. It depends on the context of the call.

// So if an object method is passed around and called in another context, this won’t be a reference to its object any more.

// For instance, this code will show undefined:



// class Button {
//     constructor(value) {
//       this.value = value;
//     }
  
//     click() {
//       console.log(this.value);
//     }
//   }
  
//   let button = new Button("hello");
  
//   setTimeout(button.click, 1000); // undefined




// the solution



// class Button {
//     constructor(value) {
//       this.value = value;
//     }
//     click = () => {
//       console.log(this.value);
//     }
//   }
  
//   let button = new Button("hello");
  
//   setTimeout(button.click, 1000); // hello
/////// BASIC SYNTAX
















//// CLASS INHERITANCE

// the "EXNTEND" keyword

//EX
// class Animal {
//     constructor(name) {
//       this.speed = 0;
//       this.name = name;
//     }
//     run(speed) {
//       this.speed = speed;
//       console.log(`${this.name} runs with speed ${this.speed}.`);
//     }
//     stop() {
//       this.speed = 0;
//       console.log(`${this.name} stands still.`);
//     }
//   }
  
//   let animal = new Animal("My animal");



//know rabbit has all animal func  +  his hide func

//   class Rabbit extends Animal {
//     hide() {
//       console.log(`${this.name} hides!`);
//     }
//   }
  
//   let rabbit = new Rabbit("White Rabbit");
  
//   rabbit.run(5); // White Rabbit runs with speed 5.
//   rabbit.hide(); // White Rabbit hides!
//   console.log(Rabbit)

// the "EXNTEND" keyword






//OVERRIDING A METHOD

// Usually, however, we don’t want to totally replace a parent method, but rather to build on top of it to tweak or extend its functionality. We do something in our method, but call the parent method before/after it or in the process.

// Classes provide "super" keyword for that.

//     super.method(...) to call a parent method.
//     super(...) to call a parent constructor (inside our constructor only).

// class Animal {

//     constructor(name) {
//       this.speed = 0;
//       this.name = name;
//     }
  
//     run(speed) {
//       this.speed = speed;
//       alert(`${this.name} runs with speed ${this.speed}.`);
//     }
  
//     stop() {
//       this.speed = 0;
//       alert(`${this.name} stands still.`);
//     }
  
//   }
  
//   class Rabbit extends Animal {
//     hide() {
//       alert(`${this.name} hides!`);
//     }
  
//     stop() {
//       super.stop(); // call parent stop
//       this.hide(); // and then hide
//     }
//   }
  
//   let rabbit = new Rabbit("White Rabbit");
  
//   rabbit.run(5); // White Rabbit runs with speed 5.
//   rabbit.stop(); // White Rabbit stands still. White Rabbit hides!






// arrow func has no super
//OVERRIDING A METHOD



// OVERRIDING CONSTRUCTORT

// i f rabbit extends  animal and rabbit has no constructor it is generated like this
// class Rabbit extends Animal {
//     // generated for extending classes without own constructors
//     constructor(...args) {
//       super(...args);
//     }
//   }



// ow let’s add a custom constructor to Rabbit. It will specify the earLength in addition to name:


// class Animal {
//     constructor(name) {
//       this.speed = 0;
//       this.name = name;
//     }
//     // ...
//   }
  
//   class Rabbit extends Animal {
  //Constructors in inheriting classes must call super(...), and do it before using this.
//     constructor(name, earLength) {
//       this.speed = 0;
//       this.name = name;
//       this.earLength = earLength;
//     }
  
//     // ...
//   }
  
//   // Doesn't work!
//   let rabbit = new Rabbit("White Rabbit", 10);  we get an error





//WHY


// In JavaScript, there’s a distinction between a constructor function of an inheriting class (so-called “derived constructor”) and other functions. A derived constructor has a special internal property [[ConstructorKind]]:"derived". That’s a special internal label.
// That label affects its behavior with new.
    // When a regular function is executed with new, it creates an empty object and assigns it to this.
    // But when a derived constructor runs, it doesn’t do this. It expects the parent constructor to do this job.

// OVERRIDING CONSTRUCTORT



//// CLASS INHERITANCE








//STATIC PROPERTIES AND METHODS
// class User {
//     static name = "amine" ;  //static poperty
//     static staticMethod() { //static method
//       alert("!");
//     }
//   }
//   User.staticMethod(); // !/
//   console.log(User.name) // "amine"


//   //inhereitance of em

//STATIC PROPERTIES AND METHODS














//PRIVET AND PTOTECTED PROPERTIES AND METHODS
// class User {
//     _name = "amine" ;
// }
// let one = new User()
// console.log(name)
//PRIVET AND PTOTECTED PROPERTIES AND METHODS




// add one more method to it (can do more)
// class PowerArray extends Array {
//   isEmpty() {
//     return this.length === 0;
//   }
// }

// let arr = new PowerArray(1, 2, 5, 10, 50);
// console.log(arr);  //array
// console.log(arr.isEmpty()); //false











//CLASS CHECKING INSTANCE OF

//The instanceof operator allows to check whether an object belongs to a certain class. 
// It also takes inheritance into account.

//EX
// class Rabbit {}
// let rabbit = new Rabbit();

// // is it an object of Rabbit class?
// alert( rabbit instanceof Rabbit ); // true
//CLASS CHECKING INSTANCE OF












//MIXINS
// a mixin is a class containing methods that can be used by other classes without a need to inherit from it.
// let sayHiMixin = {
//   sayHi() {
//     alert(`Hello ${this.name}`);
//   },
//   sayBye() {
//     alert(`Bye ${this.name}`);
//   }
// };

// // usage:
// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }

// // copy the methods
// Object.assign(User.prototype, sayHiMixin);

// // now User can say hi
// new User("Dude").sayHi(); // Hello Dude!
// In other words, a mixin provides methods that implement a certain behavior, but we do not use it alone, we use it to add the behavior to other classes.


//MIXINS