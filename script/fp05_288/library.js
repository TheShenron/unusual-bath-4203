

let carb_diet = () => {
    let top_header = document.getElementById("top_header");
    console.log(top_header, "Hi");
    let top_body = document.getElementsByClassName("top_body");
    console.log(top_body);
    console.log(top_body[0], "Hiiii")
    console.log(top_body[0].children)
    top_body[0].classList[0] = "Planning_Weight";
    top_body[0].classList.className = "Planning_Weight";
    top_body[0].classList.value = "Planning_Weight";
    console.log(top_body, "after")
    let planning = document.getElementsByClassName("Planning_Weight");
    console.log(planning[0], "afff")
    top_header.innerText = "Getting Started";
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");

    let image1 = document.createElement('img');
    image1.src = "https://s3.amazonaws.com/img.mynetdiary.com/blog/low-carb-diet.jpg";
    let head1 = document.createElement("h3")
    head1.innerText = "Starting Low-Carb Diet:5 Steps For Success"
    let p1 = document.createElement("p");
    p1.innerText = "_____";
    let p1a = document.createElement("p");
    p1a.innerText = "Whether you are starting a low-carb diet for weight loss or blood sugar lowering, MyNetDiary is here to help. Follow these five steps to maximize your success. ";

    div1.append(image1, head1, p1, p1a);

    let image2 = document.createElement('img');
    image2.src = "https://s3.amazonaws.com/img.mynetdiary.com/blog/low-carb-staples.jpeg";
    let head2 = document.createElement("h3");
    head2.innerText = "Ten Stamples to turn your pantry into  a healthy source for a low-carb lifecycle";
    let p2 = document.createElement("p");
    p2.innerText = "_____";
    let p2a = document.createElement("p");
    p2a.innerText = "You won't regret putting these tasty stupples in your stapping cart";

    div2.append(image2, head2, p2, p2a);

    let image3 = document.createElement('img');
    image3.src = "https://s3.amazonaws.com/img.mynetdiary.com/blog/low-carb-food-grade.jpg";
    let head3 = document.createElement("h3");
    head3.innerText = "Low Corbon Food Grade";
    let p3 = document.createElement("p");
    p3.innerText = "_____";
    let p3a = document.createElement("p");
    p3a.innerText = "Need help finding healthy low-corbon foods? MyNetDiary's low carb-food will help you to plan and evaluate your low-carb diet";

    div3.append(image3, head3, p3, p3a)
    planning[0].append(div1, div2, div3);
   

}

let calorie = () => {
    location.reload()
}
let dietlibrary = document.getElementById("diet_library");

let count = 0;

let diet = () => {

    let first = document.getElementById("first");
    count++;
    if (count % 2 != 0) {
        dietlibrary.innerHTML = null;
        dietlibrary.append(first);
    } else {
        location.reload();
        
    }

}