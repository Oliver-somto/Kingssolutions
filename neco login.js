const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    
    const pin = form.pin.value
    
    const authenticated =authentication(pin)
    
    if(authenticated){
        window.location.href ="NECO answer.html"
    }else{
        alert("Invalid pin")
    }
})

//function for checking pin

function authentication(pin){
    if(pin==="123456"){
        return true
    }else{return false
        
    }
    
}