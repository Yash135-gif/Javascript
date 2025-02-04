// let Aoo=[{},{},{},{}]
// let array=[2,3,5,6,2,4]
// array.forEach((e)=>{
// console.log(e*2)
// console.log(typeof(e*2))
// }
// )

   

// let data=[
//     {
//         name:"yash1",
//         age:21,
//         city:"Bhopal"
//     },
//    {
//     name:"yash2",
//     age:21,
//     city:"Indore"
//    },
//    {
//     name:"yash3",
//     age:21,
//     city:"Hydrabad"
//    }
// ]
  
// let show=document.querySelector("#container")

// data.map((e)=>{
//     show.innerHTML+=
    
//     `<h1>${e.name}  </h1>
//      <h1> ${e.age}  </h1>
//     `
// })

let students=[
    {
        name:"yash1",
        age:21,
        city:"Bhopal",
        hobby:"reading"
    },
    {
        name:"yash2",
        age:22,
        city:"Indore",
        hobby:"tennis"
    },
    {
        name:"yash3",
        age:23,
        city:"Hydrabad",
        hobby:"swimming"
    },
    {
        name:"yash4",
        age:24,
        city:"Pune",
        hobby:"writting"

    }
]

   let show=document.querySelector(".container")
   show.innerHTML=`  
   <thead>
    <tr> 

    <td> Name </td>  
    <td> Age </td>
    <td> City </td>
    <td> Hobby </td>

    </tr> 
    </thead>`
    


   students.map((e)=>{
    show.innerHTML+=
   
    `  <tr>
   <td> ${e.name} </td>
    <td> ${e.age}  </td>
    <td> ${e.city} </td>
    <td> ${e.hobby} </td>

     </tr>

    `
    
   })



    








