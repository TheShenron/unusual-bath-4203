console.log("hiiinanan");
let id;
let database=[
    {
        name:"Idly",
        image:"data:image/jpeg;base64,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",
        location:"Udupi",
        calorie:"200cal",
    },
    {
        name:"Idly Dosa",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL_6IlCPNo4PUX1_i9pA93g-g74UDsi4q2QA&usqp=CAU",
        location:"Chennai",
        calorie:"250cal",
    },
    {
        name:"Idly Vada",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmJJxBjfl0CP6HNkuOTd4N3NIV9Ni1b6FOzA&usqp=CAU",
        location:"Bangalore",
        calorie:"270cal",
    },
    {
        name:"Biryani",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoZBbyTGbk3hGmvB156J0uOuzlxXhZZSihmQ&usqp=CAU",
        location:"Gujarat",
        calorie:"350cal",
    }
]
localStorage.setItem("database",JSON.stringify(database));

let get=()=>{
    let container=document.getElementById("append");
    let inp1=document.getElementById("nosubmit").value;
   let inp=inp1.toLowerCase();
    container.innerHTML=null;
    console.log(inp,"inp")
    let data=JSON.parse(localStorage.getItem("database"));
    console.log(data,"data");
    let count=0;
    
    data.forEach(({name,location,image,calorie})=>{
        console.log("ele",name,location,image,calorie)
        
        let name4=name.toLowerCase();
        if(name4.includes(inp) && inp!==""){
            console.log("yes")
            let div=document.createElement("div");
            let img=document.createElement("img");
            img.src=image;
            let name1=document.createElement("h3");
            let loc=document.createElement("h3");
            let cal=document.createElement("h3");
            name1.innerText=name;
            loc.innerText=location;
            cal.innerText=calorie;
            div.append(img,name1,loc,cal);
            container.append(div);
            count++;
        }else if(inp==""){
            container.innerHTML=null;
        }
        
        
    })
    if(count==0 && inp!=""){
        
            container.innerHTML=null;
            let div1=document.createElement("div");
            let h4=document.createElement("h3");
            h4.innerText="No foods found. Try varying search words";
            container.append(h4);
            
        
    }
}

let deb=(get,delay)=>{
  if(id){
    clearTimeout(id);
  }
  id=setTimeout(function(){
    get()
  },delay)
}



// Api function
let apifun=()=>{
    window.location.href="api.html";
}



