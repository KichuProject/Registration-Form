const form=document.querySelector('#form')
const username=document.querySelector('#username')
const email=document.querySelector('#email')
const password=document.querySelector('#password')
const cpassword=document.querySelector('#cpassword')

form.addEventListener('submit',(e)=>{
    if(!validateinputs()){
        e.preventDefault()
    }
})
function validateinputs(){
    const usernameval=username.value.trim()
    const emailval=email.value.trim()
    const passwordval=password.value.trim()
    const cpasswordval=cpassword.value.trim()
    let success=true

    if(usernameval===''){
        success=false
        seterror(username,'Username is required')
    }
    else
        setsuccess(username)

    if(emailval===''){
        success=false
        seterror(email,'Email is required')
    }
    else if(!validateemail(email)){
        success=false
        seterror(email,"Please enter a valid email")
    }
    else{
        setsuccess(email)
    }
    if(passwordval===''){
        success=false
        seterror(password,'Password is required')
    }
    else if(passwordval.length<8){
        success=false
        seterror(password,'Password must be atleast 8 characters')
    }
    else{
        setsuccess(password)
    }
    if(cpasswordval===''){
        success=false
        seterror(cpassword,'Confirm password is required')
    }
    else if(cpasswordval!==passwordval){
        success=false
        seterror(cpassword,'Password does not match')
    }
    else{
        setsuccess(cpassword)
    }
    return success
}
function seterror(element,msg){
    const inputgrp=element.parentElement
    const errorelement=inputgrp.querySelector('.error')
    errorelement.innerText=msg
    inputgrp.classList.add('error')
    inputgrp.classList.remove('success')
}
function setsuccess(element){
    const inputgrp=element.parentElement
    const errorelement=inputgrp.querySelector('.error')
    errorelement.innerText=""
    inputgrp.classList.add('success')
    inputgrp.classList.remove('error')
}
const validateemail=(email)=>{
    return String(email)
    .toLowerCase()
    .match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
}