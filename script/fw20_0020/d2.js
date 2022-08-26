console.log("Fw20_0020 Day2")



let x =document.querySelectorAll("input[type='number']")

x.forEach((el)=>{
    el.addEventListener("focus" , Magic)
})

function Magic () {
    console.log(this.id + " span")

    document.querySelector(`#${this.id} + span`).classList.add("n")
}


x.forEach((el)=>{
    el.addEventListener("focusout" , MagicOut)
})

function MagicOut () {
    console.log("Magic Ot")
    let D = event.target.value
    console.log(D)
    if(D==""){
        document.querySelector(`#${this.id} + span`).classList.remove("n")
    }
   
}




let CurrentUnitSystem = true
document.querySelector("#switch").addEventListener("click" , ()=>{
    CurrentUnitSystem = !CurrentUnitSystem
    let Arr1 = ["kg" , "kg" , "(lbs,feet)" , "½ kg/week" , "¾ kg/week" , "1 kg/week"]
    let Arr2 = ["lb" , " lb" , "(kg,cm)" , "l lb/week" , "l½ lb/week" , "2 lb/week"]

    let D = document.querySelectorAll(".C")

    D.forEach((el , ind)=>{
        if(el.classList.contains("R")){
            el.classList.remove("R")
            el.innerText = Arr1[ind]
        }else{
            el.classList.add("R")
            el.innerText = Arr2[ind]
        }
    })

    NumberUnitChange()

})


function NumberUnitChange () {
    let i1 = document.querySelector("#initial_weight")
    let i2 = document.querySelector("#final_weight")
    let E = document.querySelector("#UC")
    let EARR = E.innerText.trim().split(" ")

    if(CurrentUnitSystem){

        if(i1.value != ""){
            i1.value = Math.ceil(parseInt(i1.value) / 2.2)
        }

        if(i2.value != ""){
            i2.value = Math.ceil(parseInt(i2.value) / 2.2)
        }

        

        EARR[0] =  Math.ceil(parseInt(EARR[0]) / 2.2)
        EARR[1] = "kg"
        console.log(EARR)
        E.innerText = EARR.join(" ")
        

      

        console.log("KG")
    }else{
        if(i1.value != ""){
            i1.value = (parseInt(i1.value) * 2.2).toFixed(2)
        }

        if(i2.value != ""){
            i2.value = (parseInt(i2.value) * 2.2).toFixed(2)
        }


        EARR[0] =  (parseInt(EARR[0]) * 2.2).toFixed(2)
        EARR[1] = "lb"
        console.log(EARR)
        E.innerText = EARR.join(" ")
     

        console.log("LBS")
    }



}







let initial_weight = 0;
let final_weight = 0
let week = .5

let Radio = document.querySelectorAll("input[name='weeks']")

Radio.forEach((el)=>{
    el.addEventListener("change" , ()=>{
        week = Number(el.value)
        console.log(week)
        HowWeeks()
    })
})



x.forEach((el) =>{
    el.addEventListener("input" , ()=>{
        let D = event.target.value
        if(el.id == "initial_weight"){
            initial_weight = parseInt(D)
        }else{
            final_weight = parseInt(D)
        } 
        HowWeeks()

    })
})


function HowWeeks () {
    let X = document.querySelectorAll(".GRL")
        for(let a = 0 ; a < X.length ; a++){
            if(initial_weight < final_weight){
                X[a].innerText = "Gain"
            }else{
                X[a].innerText = "Lose"
            }
        }



        let AA
        if(initial_weight < final_weight){
            AA = "Gain"
        }else{
            AA = "Lose"
        }
    

        let DaysReq = Math.abs(initial_weight - final_weight) *  (7/week)
        if(initial_weight != 0 && final_weight != 0){
            console.log(DaysReq , "RD")

            document.querySelector("#ReqDays").innerHTML = `
        
            <span>
                <i class="fa fa-check" aria-hidden="true"></i>
                <span>${AA} <span id="UC"> ${Math.abs(initial_weight - final_weight)} kg </span>  in ${parseInt(DaysReq)} Days</span>
            </span>

        `
        }
        
        let as = document.querySelector("#initial_weight").value
        let ab = document.querySelector("#final_weight").value


        if(initial_weight == 0 || as == "" || final_weight == 0 || ab == ""){
            document.querySelector("#ReqDays").innerHTML = ""
        }

}





