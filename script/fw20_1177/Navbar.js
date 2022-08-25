function Navbar () {
    return `
    

    <div id="navbar">
    <div id="left">
        <img src="https://play-lh.googleusercontent.com/MhvfJAsoEvsESxp9AQg3KOwWyhRRAB1HJWlLCWmLnDucDC6bG81XsmwyVD1zbde1UZM" alt="">
        MyNetdiary</div>



    <div id="middle">
        <ul>
            <li><a href="#">Features</a>    
                <!-- this # is need to be there -->
            <ul>
                <li><a href="#">iPhone & iPad app</a></li>
                <li><a href="#">Android app</a></li>
                <li><a href="#">User Reviews</a></li>
                <li><a href="#">MyNetDiary vs MyFitnessPal</a></li>

            </ul>
            </li>
            <li><a href="#">Diets<i class='fa fa-dot'></i></a>
                <ul>
                <li><a href="#"> Calorie Counting</a></li>
                <li><a href="#"> Low-Carb</a></li>
                <li><a href="#"> Keto</a></li>
                <li><a href="#"> High-Protein</a></li>
                <li><a href="#">  Low-Fat</a></li>
                <li><a href="#">   Mediterranean</a></li>
                <li><a href="#">    Vegetarian</a></li>
                <li><a href="#">    Vegan</a></li>
    
                </ul>
            </li>
            <li><a href="#">Library</a>
                <ul>
                <li><a href="#">Weight Loss Blog</a></li>
                <li><a href="#">Diet Library</a></li>
                <li><a href="#">Dietitian team</a></li>
    
                </ul>
            </li>
            <li><a href="#">Food</a>
                <ul>
                <li><a href="#">Food Search</a></li>
                <li><a href="#">Database Licensing & API</a></li>
    
                </ul>
            </li>
            <li><a href="#">Business</a>
                <ul>
                <li><a href="#">Find Healthcare Professional</a></li>
                <li><a href="#">For Healthcare Professionals</a></li>
                <li><a href="#">For Trainers and Clubs</a></li>
                <li><a href="#">MyNetDiary vs MyFitnessPal</a></li>
                <li><a href="#">Food Database Licensing</a></li>
    
                </ul>
            </li>
        </ul>
    </div>







    <div id="right">
        <button id="signup">Signup</button>
        <button id="signin"> signin</button>
    </div>
</div>



    `
}



export default Navbar