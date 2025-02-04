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

let arr=[
    {
        name1:"yash",
        age1:20,
        class:10
    },
    {
        name2:"yash2",
        age2:21,
        class:11
    },
    {
        name3:"yash3",
        age3:22,
        class:12
    },
   {
      name4:"yash4",
      age4:23,
      class:13
   }

]


    // ------------------------------ Map ,filter, for Each --------------------------------

    let a1=[4,7,9,2,5,7,6]

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

let students=[
    {
        name:"Akash",
        age:21
    },
    {
        name:"Adarsh",
        age:17
    },
    {
        name:"Amir",
        age:18
    },
    {
        name:"Raman",
        age:23
    },
    {
        name:"Nidhi",
        age:16
    },
]

let ans=students.filter((e)=>
{
     
      return e.age>=18
     
} 
).map((e)=>{
    return e.name
}).filter((e)=>{
    return e.includes("A")
})

console.log(ans)














