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
        erremail.innerHTML="please fill the name"
        return false
    }
    else if(number=="") {
        errnumber.innerHTML="please fill the name"
        return false
    }
    else if(password=="") {
        errpassword.innerHTML="please fill the name"
        return false
    }
    else if(cpassword=="") {
        errcpassword.innerHTML="please fill the name"
        return false
    }

    


}