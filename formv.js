let letsgo=()=>{
    let errname=document.querySelector("#errname")
    let erremail=document.querySelector("#erremail")
    let errnumber=document.querySelector("#errnumber")
    let errpassword=document.querySelector("#errpassword")
    let errcpassword=document.querySelector("#errcpassword")


    let name=document.querySelector("#name").value
    let email=document.querySelector("#email").value
    let number=document.querySelector("#number").value
    let password=document.querySelector("#password").value
    let cpassword=document.querySelector("#cpassword").value
  
    if(name=="") {
        errname.innerHTML="please fill the name"
        return false
    }
    else if(email=="") {
        erremail.innerHTML="please fill the email"
        return false
    }
    else if(number=="") {
        errnumber.innerHTML="please fill your number"
        return false

    }
    else if(password=="") {
        errpassword.innerHTML="please enter the password"
        return false
    }
    else if(cpassword=="") {
        errcpassword.innerHTML="please confirm the password"
        return false
    }
    else if(!(isNaN(name))){
       errname.innerHTML="please enter valid name"
        return false
    }

    else if(!(email.includes("@") && email.includes(".com"))){
        errname.innerHTML=""
        erremail.innerHTML="enter valid email"
        return false
    }

    else if(isNaN(number)){
        errname.innerHTML=""
        erremail.innerHTML=""
        errnumber.innerHTML="please enter the valid number"
        return false
    }

 
    else if(number.length!=10){
        errnumber.innerHTML="please enter 10 digit number"
        errpassword.innerHTML=""
        return false
    }


    else if((!(password.match(/[1234567890]/))) &&
    !(password.match(/[a-z]/))
       && !(password.match(/[A-Z]/))
       && !(password.match(/[!@#$%^&*()]/))
    )  
   {
     errpassword.innerHTML="enter the strong password"
     return false

   }
   else if(password!=cpassword){
        
        errcpassword.innerHTML="Password and Confirm password should be the same"
        return false
    }

      
      

}