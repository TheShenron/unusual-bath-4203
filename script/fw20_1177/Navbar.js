function Navbar () {
    return `
    <div id="navbar">

    <div id="left">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeLGOGMtwu9Ax9JCPw32gsPA1luTLO7ESNZ6_3phpV&s"
            alt=""><a href="index.html"></a>
    </div>



    <div id="middle">
        <ul>
            <li><a href="#">Features</a>
                <!-- this # is need to be there -->
                <ul>
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i>iPhone & iPad app</a></li>
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i>Android app</a></li>
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i>User Reviews</a></li>
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i>MyNetDiary vs MyFitnessPal</a>
                    </li>

                </ul>
            </li>
            <i class="fa fa-square" aria-hidden="true"></i>
            <li><a href="#">Diets<i class='fa fa-dot'></i></a>
                <ul>
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i>Calorie Counting</a></li>
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i> Low-Carb</a></li>
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i> Keto</a></li>
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i> High-Protein</a></li>
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i> Low-Fat</a></li>
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i> Mediterranean</a></li>
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i> Vegetarian</a></li>
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i> Vegan</a></li>

                </ul>
            </li>
            <i class="fa fa-square" aria-hidden="true"></i>
            <li><a href="#">Library</a>
                <ul>
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i>Weight Loss Blog</a></li>
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i>Diet Library</a></li>
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i>Dietitian team</a></li>

                </ul>
            </li>
            <i class="fa fa-square" aria-hidden="true"></i>
            <li><a href="#">Food</a>
                <ul>
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i>Food Search</a></li>
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i>Database Licensing & API</a></li>

                </ul>
            </li>
            <i class="fa fa-square" aria-hidden="true"></i>
            <li><a href="#">Business</a>
                <ul>
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i>Find Healthcare Professional</a>
                    </li>
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i>For Healthcare Professionals</a>
                    </li>
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i>For Trainers and Clubs</a></li>
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i>MyNetDiary vs MyFitnessPal</a>
                    </li>
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i>Food Database Licensing</a></li>

                </ul>
            </li>
        </ul>
    </div>




    <div id="right">
        <button id="signup"> <a href="signup.html">SIGN UP</a></button>
        <button id="signin"><a href="signin.html">SIGN IN</a></button>
    </div>


    <div class="hamburger magin">
        <i class="fa fa-bars" aria-hidden="true"></i>

    </div>

</div>


<div id="nav_data">

    <div>
        <button><a href="signin.html">SIGN IN</a></button>
        <button><a href="signup.html">SIGN UP</a></button>

    </div>

    <div>
        <ul>
            <li><a href="#">Features</a>
                <!-- this # is need to be there -->
                <ul class="Height">
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i>iPhone & iPad app</a></li>
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i>Android app</a></li>
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i>User Reviews</a></li>
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i>MyNetDiary vs MyFitnessPal</a>
                    </li>

                </ul>
            </li>
            <li><a href="#">Diets<i class='fa fa-dot'></i></a>
                <ul class="Height">
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i>Calorie Counting</a></li>
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i> Low-Carb</a></li>
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i> Keto</a></li>
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i> High-Protein</a></li>
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i> Low-Fat</a></li>
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i> Mediterranean</a></li>
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i> Vegetarian</a></li>
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i> Vegan</a></li>

                </ul>
            </li>
          
            <li><a href="#">Library</a>
                <ul class="Height">
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i>Weight Loss Blog</a></li>
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i>Diet Library</a></li>
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i>Dietitian team</a></li>

                </ul>
            </li>
            
            <li><a href="#">Food</a>
                <ul class="Height">
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i>Food Search</a></li>
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i>Database Licensing & API</a></li>

                </ul>
            </li>
            
            <li><a href="#">Business</a>
                <ul class="Height">
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i>Find Healthcare Professional</a>
                    </li>
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i>For Healthcare Professionals</a>
                    </li>
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i>For Trainers and Clubs</a></li>
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i>MyNetDiary vs MyFitnessPal</a>
                    </li>
                    <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i>Food Database Licensing</a></li>

                </ul>
            </li>
        </ul>
    </div>


</div>
    `
}



export default Navbar