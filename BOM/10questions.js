//    -----------------------------------------  Question 1 -----------------------------------------------
 
//  let age=prompt("enter your age")
//  age>=18? alert("you can vote"):alert("you can't vote")
   
//   --------------------------------------------- Question 2 ------------------------------------------------

// let course=confirm("have you completed the course")
// if(course==true){
//     let certificate=confirm("do you have the certificate")
//     if(certificate==true){
//         alert("Completed")
//     }
//     else{
//         alert("Not Completed")
//     }
// }
// else{
//     alert("Not Completed")
// }

//   ----------------------------------------------- Question 3 -------------------------------------------------

//  let price=parseInt(prompt("enter the price of item"))
//  let dis=confirm("do you have the discout coupen")
//  if(dis==true){
//     alert(price*0.9)
//  }
//  else{
//   alert(price)
//  }
   
    //   ----------------------------------------------- Question 4 -------------------------------------------------

// let marks=prompt("enter your marks")
// if(marks>33){
//     alert("you are pass")
// }
// else{
//     alert("you are fail")
// }
  
   //   ----------------------------------------------- Question 5 -------------------------------------------------

//   let number=prompt("enter the number")
//   if(number%2==0){
//     alert("even number")
//   }
//   else{
//     alert("odd number")
//   }
   
  //   ----------------------------------------------- Question  6-------------------------------------------------

//   let askDelete=confirm("are you sure to delete")
//   if(askDelete==true){
//     alert("Items Deleted")
//   }
//   else{
//     alert("Cancelled")
//   }

   //   ----------------------------------------------- Question 7 -------------------------------------------------

//   let tive=prompt("enter the number")
//   if(tive>0){
//     alert("given number is positive")
//   }
//   else if(tive==0){
//     alert("given number is Zero")
//   }
//   else{
//     alert("given number is negative")
//   }

  //   ----------------------------------------------- Question 8 -------------------------------------------------

// let i=1
//  while(i<=10){
//     console.log(i)
//     i++
//  }

  //   ----------------------------------------------- Question 9 -------------------------------------------------

//   let input
//   do{
//    input=prompt("enter the value bigger than 10")
//   }while(input<=10)

      //  ----------------------------------------------- Question 10 -------------------------------------------------

//   let day=parseInt(prompt('enter the day of the week'))

//   switch (day){

//    case 1:
//       alert("Sunday")
//       break;

//    case 2:
//       alert("Monday")
//       break;
//     case 3:
//       alert("Tuesday")
//       break;
//    case 4:
//       alert("Wednesday")
//       break;
//    case 5:
//       alert("Thursday")
//       break;
//    case 6:
//       alert("Friday")
//       break;
//    case 7:
//       alert("Saturday")
//       break;

//    default:
//    alert("Invalid day")

//   }
   
  //  Guessing Game

 function play(){
  let number=parseInt(prompt("enter any number between 1 and 20"))
   if(number==10){
    alert("congo,You won the game")
   }
   else if(number<10){
    alert("Too low")
   }
   else if(number>10){
    alert("Too high")
   }
 }

 function play1(){
  let number
  number=parseInt(prompt("enter any number between 1 and 20"))
  
 }