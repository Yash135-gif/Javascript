
let okk=()=>{
       let username=document.querySelector("#username").value
       let userage=document.querySelector("#userage").value

    localStorage.setItem("name",username)
    localStorage.setItem("age",userage)
   location.reload()
}

let display=document.querySelector("#show1")
display.innerHTML=localStorage.getItem("name")

let display2=document.querySelector("#show2")
display2.innerHTML=localStorage.getItem("age")



let logout=()=>{

    localStorage.removeItem("name")
    localStorage.removeItem("age")
    location.reload()                                                                            
                                                        // location.reload() Automatic page refersh karna ka liya 
}

  // ------------------------------------------------------------------------------


  // let fun=()=>{
  
    
  // let username=document.querySelector("#username").value
  // let userage=document.querySelector("#userage").value
  // let show=document.querySelector("#show")
  // let show1=document.querySelector("#show2")
  

  // show.innerHTML=username
  // show1.innerHTML=userage
  // }



  






