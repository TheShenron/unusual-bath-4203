console.log("fw20_0020...Signin page")


document.querySelector("input[type='email']").addEventListener("focus" , FormMagic)
document.querySelector("input[type='password']").addEventListener("focus" , FormMagic)

function FormMagic () {

    let x = document.querySelector(`#${this.id} + span`)
    x.style.transform = "translateX(13px) translateY(-10px)"
    x.style.fontSize = "15px"
    
}


document.querySelector("input[type='email']").addEventListener("focusout" , FormRemoveMagic)
document.querySelector("input[type='password']").addEventListener("focusout" , FormRemoveMagic)

function FormRemoveMagic () {

    let x = document.querySelector(`#${this.id} + span`)
    if(this.value == ""){
        x.style.transform = "translateX(10px) translateY(15px)"
        x.style.fontSize = "18px"
    }

}


document.querySelector("#SignIn").addEventListener("click" , SignIn)

function SignIn () {
    console.log("ASFD")
    let email = document.querySelector("#LOG").value

    let password = document.querySelector("#PAS").value

    if(email!= "" && password != ""){
        alert("Sign in Successfully")
    }else{
        alert("Fill all the fields")
    }
}