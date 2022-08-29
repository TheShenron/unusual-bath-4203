console.log("Working...")

import Navbar from "./fw20_1177/Navbar.js"

// document.querySelector("#Nav").innerHTML = Navbar()



import Footer from "./fw20_1177/Footer.js"

// document.querySelector("#real_footer").innerHTML = Footer()




let isStatus = false
document.querySelector(".hamburger").addEventListener("click", () => {
    if(isStatus == true){
        isStatus = false
        document.querySelector("#pageContent").style.transform = "translateX(0)"

    }else{
        isStatus = true
        document.querySelector("#pageContent").style.transform = "translateX(-300px)"
    }
    
})




let lis = document.querySelectorAll("#nav_data > div>ul>li ")
console.log(lis)

lis.forEach((el) => {
    console.log(el.children)
    el.children[0].addEventListener("click", () => {
        el.children[1].classList.toggle("Height");
    });
});
