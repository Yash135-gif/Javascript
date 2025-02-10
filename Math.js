let roll=()=>{

    let ri=Math.floor(Math.random()*6+1)


if(ri==1){
    console.log("one")

    let show=document.querySelector("#show")
    show.innerHTML="one"
}
else if(ri==2){
       let show=document.querySelector("#show")
    show.innerHTML="two"
}

else if(ri==3){
     let show=document.querySelector("#show")
    show.innerHTML="three"
}
else if(ri==4){
      let show=document.querySelector("#show")
    show.innerHTML="four"
}
else if(ri==5){
       let show=document.querySelector("#show")
    show.innerHTML="five"
}
else if(ri==6){
      let show=document.querySelector("#show")
    show.innerHTML="six"
}
}


