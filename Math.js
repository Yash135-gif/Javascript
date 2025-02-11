// let roll=()=>{

//     let ri=Math.floor(Math.random()*6+1)


// if(ri==1){
//     console.log("one")

//     let show=document.querySelector("#show")
//     show.innerHTML="one"
// }
// else if(ri==2){
//        let show=document.querySelector("#show")
//     show.innerHTML="two"
// }

// else if(ri==3){
//      let show=document.querySelector("#show")
//     show.innerHTML="three"
// }
// else if(ri==4){
//       let show=document.querySelector("#show")
//     show.innerHTML="four"
// }
// else if(ri==5){
//        let show=document.querySelector("#show")
//     show.innerHTML="five"
// }
// else if(ri==6){
//       let show=document.querySelector("#show")
//     show.innerHTML="six"
// }
// }

//  console.log(Math.PI);

// console.log(Math.floor(Math.random()*90000+10000))

let dice=()=>{
    let roll=Math.floor(Math.random()*6)
    let show1=document.querySelector("#one-container")
    let show2=document.querySelector("#two-container")
    let show3=document.querySelector("#three-container")
    let show4=document.querySelector("#four-container")
    let show5=document.querySelector("#five-container")
    let show6=document.querySelector("#six-container")

    
    if(roll==1){
           
         show1.style.opacity="1"
        show2.style.opacity="0"
        show3.style.opacity="0"
        show4.style.opacity="0"
        show5.style.opacity="0"
        show6.style.opacity="0"
    

    }
    else if(roll==2){
         show1.style.opacity="0"
         show3.style.opacity="0"
         show4.style.opacity="0"
         show5.style.opacity="0"
         show6.style.opacity="0"
         show2.style.opacity="1"
          
    }


    else if(roll==3){
        show1.style.opacity="0"
        show3.style.opacity="1"
        show4.style.opacity="0"
        show5.style.opacity="0"
        show6.style.opacity="0"
        show2.style.opacity="0"
    }

    else if(roll==4){
        show1.style.opacity="0"
        show3.style.opacity="0"
        show4.style.opacity="1"
        show5.style.opacity="0"
        show6.style.opacity="0"
        show2.style.opacity="0"
    }

    else if(roll==5){
        show1.style.opacity="0"
        show3.style.opacity="0"
        show4.style.opacity="0"
        show5.style.opacity="1"
        show6.style.opacity="0"
        show2.style.opacity="0"
    }

    else if(roll==6){
        show1.style.opacity="0"
        show3.style.opacity="0"
        show4.style.opacity="0"
        show5.style.opacity="0"
        show6.style.opacity="1"
        show2.style.opacity="0"
    }
  
}



