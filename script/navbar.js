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
    });
    });
