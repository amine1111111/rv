// export function h(){
//     console.log("helllooooo")
// }

// export  let a = 911 ;

// export class  User {
//     constructor (name) {
//         this.name = name
//     }
// }




//  export let ps = "angela white" ;

// //  export {ps as r} ;
// //  export default ps  ;


// export { ps as default}       //the same


// export default "julia ann" ;
 //it doesn't have a name ...call it however u want ....import knows what to get
// remove default here and get an error





// export default class User {
//     constructor (name, age){
//         this.name = name,
//         this.age = age
//     }
// }










export function hi() {
    console.log(`Hello`);
  }
  
export function bye() {
    console.log(`Bye`);
}

//Or, if say.js has the default export:
export default function() {
    console.log("Module loaded (export default)!");
}  