// let name="firstname"

// let user={'first-name':'akash', lastname:'singh', education:12, city:"Bangalore"}
// let user2={firstname:'akash' ,lastname:'singh' ,education:12, city:"Bangalore"}

// let obj={
//     name:"yash",
//     age:20,
//     city:"Bhopal",
//     hobby:["listening","work"],
//     greeting:function(){
//     console.log(`My name is ${this.name}`)
// }
// }
// obj.greeting();

//  function me(){
//     console.log("this is a function")
// }
// me();


// x=10
// console.log(x)

//    Array of objects ---------------------------------

// let arr=[
//     {
//         name1:"yash",
//         age1:20,
//         class:10
//     },
//     {
//         name2:"yash2",
//         age2:21,
//         class:11
//     },
//     {
//         name3:"yash3",
//         age3:22,
//         class:12
//     },
//    {
//       name4:"yash4",
//       age4:23,
//       class:13
//    }

// ]


    // ------------------------------ Map ,filter, for Each --------------------------------

    // let a1=[4,7,9,2,5,7,6]

    //    Map 


    // let ans=a1.map((e)=>{
    //     return e*2
    // }
    // )


//    let a1=[2,3,4,6,5,7,5]
//    let ans=a1.map((e)=> e*2)

//   console.log(ans)

//    filter 

//    let ans2=a1.filter((e)=>
// {
//      return e>5
// }
// )

  
//   let ans2=a1.filter((e)=>{
//      return e%2==0
//   }
// )

// console.log(ans2)

//   for Each 

//  a1.forEach((e)=>{
//    console.log(e*2)
//  }
// )

  
//   let students=[
//     {
//         name:"shaurya",
//         class:9,
//         fav:"science"
//     },

//     {
//         name:"priya",
//         class:10,
//         fav:"Maths"
//     },

//     {
//         name:"jadoo",
//         class:9,
//         fav:"Hindi"
//     },

//     {
//         name:"Megha",
//         class:10,
//         fav:"English"
//     }
//   ]

//    let show=document.querySelector(".container")
    
//    students.map((e)=>{
        
//       show.innerHTML+=` 
//         <div>
//         <h1> ${e.name} </h1>
//         <h3> ${e.fav} </h3>
//         <h2> ${e.class} </h2>
//         </div>
//       `
//    })

   

// const colors=["yellow", "green","black","white", "orange"]

//  colors.forEach((e)=>{
//    console.log(e)
// })


// let store=colors.map((e)=>{
//     return e
// })
// console.log(store)


// let months=["january","feburary","march","april","may"]
// let ok=months.filter((e,index)=>{
//     return index>=3
// })

// console.log(ok)

// let students=[
//     {
//         name:"Akash",
//         age:21
//     },
//     {
//         name:"Adarsh",
//         age:17
//     },
//     {
//         name:"Amir",
//         age:18
//     },
//     {
//         name:"Raman",
//         age:23
//     },
//     {
//         name:"Nidhi",
//         age:16
//     },
// ]

// let ans=students.filter((e)=>
// {
     
//       return e.age>=18
     
// } 
// ).map((e)=>{
//     return e.name
// }).filter((e)=>{
//     return e.includes("A")
// })

// console.log(ans)

// let sArr=[1,1,2,1,1,1]
// sArr.reduce((a,current,index)=>{
//     console.log(a)
//     return 
// },)

// let okk=()=>{

//     let uname=document.querySelector("#uname").value
//     let uemail=document.querySelector("#uemail").value
//     let unumber=document.querySelector("#unumber").value
//     let upassword=document.querySelector("#upassword").value
//     let ucpassword=document.querySelector("#ucpassword").value

//     let uename=document.querySelector("#uename")
//     let ueemail=document.querySelector("#ueemail")
//     let uenumber=document.querySelector("#uenumber")
//     let uepassword=document.querySelector("#uepassword")
//     let uecpassword=document.querySelector("#uecpassword")

//      if(uname==""){
//         uename.innerHTML="please fill the name"
//         return false
        
//      }
//      else if(uemail==""){
//         ueemail.innerHTML="please fill the email"
//         return false
//      }
//      else if(unumber==""){
//         uenumber.innerHTML="please fill your number"
//         return false
//      }
//      else if(upassword==""){
//         uepassword.innerHTML="please fill the password"
//         return false
//      }
//      else if(ucpassword==""){
//         uecpassword.innerHTML="please confirm the password"
//         return false
//      }

// }

//    let peoples=[
//     {
//         name:"bhumi",
//         class:11,
//         passion:"singing"
//     },
//     {
//      name:"dhruv",
//      class:12,
//      passion:"Painting"
//     },
//     {
//         name:"ratan",
//         class:11,
//         passion:"coding"
//     },
//     {
//         name:"amir",
//         class:12,
//         passion:"sports"
//     }

//    ]

//    let show=document.querySelector("#container")

//    peoples.map((e)=>{
//    show.innerHTML+=`     
  

//    <tr> 
   
//    <td> ${e.name} </td>
//    <td> ${e.class} </td>
//    <td> ${e.passion} </td>

//    </tr>

//    `
//   } )

// let obj={
//    name:"yash",
//    age:20,
//    bro:"broo"  
// }

// let {name,age,bro} = obj

// console.log(name)

// let tu={
//     name:"yash1",
//     class:11
// }
// let bor={
//     dd:"yash2",
//     cr:12
// }

// let yoo={...tu,...bor}

//   Normal function
 
// function start(){
//    console.log("this is a Normal function");
// }

// Anonymous function 

// let start=function (){
//     console.log("this is an anonymous function")
// }
// start()

//  IIFE function 

//   (
//     function(){
//        console.log("this is an IIEF function");
//     }
//   )()

//   let onc=()=>{


//      let name=document.querySelector("#name").value
//      let email=document.querySelector("#email").value
//      let number=document.querySelector("#number").value
//      let password=document.querySelector("#password").value
//      let cpassword=document.querySelector("#cpassword").value

//      let ename=document.querySelector("#ename")
//      let eemail=document.querySelector("#eemail")
//      let enumber=document.querySelector("#enumber")
//      let epassword=document.querySelector("#epassword")
//      let ecpassword=document.querySelector("#ecpassword")

    
//      if(name==""){
//         ename.innerHTML="please fill your name"
//         return false
//      }
//      else if((!isNaN(name))){
//         ename.innerHTML="enter valid name"
//         return false
//      }

//      else if(email==""){
//         ename.innerHTML=""
//         eemail.innerHTML="please fill the email"
//         return false

//      }

//       else if(!(email.includes("@") && email.includes(".com"))){
           
//         eemail.innerHTML="please enter valid email"
//         return false
//       }

//      else if(number==""){
//         eemail.innerHTML=""
//         enumber.innerHTML="please enter the number"
//         return false
         
//      }

//      else if(isNaN(number)){
//         enumber.innerHTML="please enter valid number"
//          return false
//      }
//      else if(number.length!=10){
//         enumber.innerHTML="please enter 10 digit number"
//         return false
//      }

//      else if(password==""){
//         enumber.innerHTML=""
//         epassword.innerHTML="please enter the password "
//         return false

//      }

//     //  else if(!(password.match("/[1234567890]/")     
//     //      && password.match("/[a-z]/") 
//     //     && password.match("/[A-Z]/")
//     //     && password.match("/[@$%^&*()!]/"))){
//     //            eemail.innerHTML=""
//     //         epassword.innerHTML="Make the password strong"
//     //         return false
//     //      }

//      else if(cpassword==""){
//         enumber.innerHTML=""
//         ecpassword.innerHTML="please confirm your password"
//         return false
//      }

//     else if(password!=cpassword){
//         enumber.innerHTML=""
//         ecpassword.innerHTML="password and confirm password should be same"
//         return false
//     }

//   }
  
























