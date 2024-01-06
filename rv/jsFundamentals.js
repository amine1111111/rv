// 1 The nullish coalescing operator //

// let a;
// return the first fedined value
// console.log(a ?? 911) //911

// 1//




//2 loop : while , for//

//while//

// let  i = 0 ;
// while(i < 10){
    //     console.log(i)
    //     i++
    // }
    // u can remove {}
    
    // while (i<10) console.log(i) && i++ ;

//while//


//do while//

// let x = 0;
// do{
//     console.log(`x is ${x}`)
//     x++
// }
// while(x < 10)

//do while//




//for//

// for (begin; condition; step) {
  // ... loop body ...
//   }


// for(let i = 0; i < 3 ; i++){
//     console.log(i)
// }

//for//



//breaking the loop//

// for(let i = 0 ;i < 3 ; i++){
//     console.log(i)  // 0 , 1
//     if(i == 1) break ;
// }


// for(let i = 0 ;i < 3 ; i++){
//     console.log(i)  //   1, 2
//     if(i == 0) continue ;
// }

// 

//breaking the loop//





// Labels for break/continue //

//Sometimes we need to break out from multiple nested loops at once.

// labelName: for (...) {
//     ...
//   }



// EX / 
// outer: for (let i = 0; i < 3; i++) {

//     for (let j = 0; j < 3; j++) {
  
//       let input = prompt(`Value at coords (${i},${j})`, '');
  
//       // if an empty string or canceled, then break out of both loops
//       if (!input) break outer; // (*)
  
//       // do something with the value...
//     }
//   }
  
//   alert('Done!');


// // Labels for break/continue //


//2//


















//3 switch statement//
// let x ;
// switch(x) {
//     case 0:  // if (x === 'value1')
//     console.log('a')
//     break ;
    
//     case 1: 
//     case 911: 
//     console.log('b')
//     break ;
    
//     default:
//         console.log('vvv')
//       break ;
//   }
//3//



//4functions                Function Declaration://

// function saySomthing (a =  "npm") {
//   console.log(`${a}`)
// }
// saySomthing()





// function sum(a, b){
// return  a + b
// }

// console.log(sum(1, 1))




//4//












//5 FUNCTION EXPRESSION//

// let a =  _ => console.log("a")

//CALLBACK FUNCTION/


// function ask(question, yes, no) {
  //   if (confirm(question)) showOk()
//   else no();
// }

// function showOk() {
  //   alert( "You agreed." );
// }

// function showCancel() {
  //   alert( "You canceled the execution." );
  // }
  
  // ask("Do you agree?", showOk, showCancel);


  //CALLBACK FUNCTION/










  //F DECLARATION vs F expression

  // h() //ERROR
  // let h = _ => alert("hi")
  // h() // "hi"

  //F DECLARATION vs F expression
  //5//




//6 ARROW FUNCTION //

//6 //