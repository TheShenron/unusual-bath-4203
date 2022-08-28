console.log("Working...")

import Navbar from "./fw20_1177/Navbar.js"

document.querySelector("#Nav").innerHTML = Navbar()



import Footer from "./fw20_1177/Footer.js"

document.querySelector("#real_footer").innerHTML = Footer()





document.querySelector("#nav_data").classList.add("magin")


document.querySelector(".hamburger").addEventListener("click" , ()=>{
    console.log("asdfasdf")
    document.querySelector("#navbar").classList.toggle("move")
    document.querySelector("#nav_data").classList.toggle("magin")

    
})




let lis = document.querySelectorAll("#nav_data > div>ul>li ")
console.log(lis)

lis.forEach((el) =>{
    console.log(el.children)
    el.children[0].addEventListener("click" , ()=>{
        el.children[1].classList.toggle("Height");
    })

})