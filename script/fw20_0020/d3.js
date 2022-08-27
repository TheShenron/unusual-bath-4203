console.log("fw20_0020...Signin page")


document.querySelector("input[type='email']").addEventListener("focus" , FormMagic)

function FormMagic () {
    console.log(this.id + " spna")
    // let x = document.querySelector(`#${this.id} + span`)
    // console.log(x)
}

//not completd yet working....