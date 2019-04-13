import React from 'react';
import '../custom.css'

export default class NavBar extends React.Component {
   render(){
     return(
<nav class="navbar navbar-default white navbar-fixed dark no-background bootsnav">
    <div class="container">      
        {/* <!-- Start Header Navigation --> */}
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                <i class="fa fa-bars"></i>
            </button>
            <a class="navbar-brand" href="/">
                <img src="images/brand/sploot.png" width="150px" class="" alt=""/>
            </a>
        </div>

        <div class="collapse navbar-collapse" id="navbar-menu">
            <ul class="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                <li>
                  <a>
                    <a class="btn btn-primary reportbtn">Report an Animal</a>
                    
                  </a>
                </li>
                <li><a href="/">Home</a></li>   
                <li><a href="/requests">Rescue</a></li>                    
                <li><a href="/adoptions">Adopt</a></li>  
                {/* Sploot Dropdown Menu */}
                <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">Sploot!</a>
                <ul class="dropdown-menu">
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Shop</a></li>
                  <li><a href="#">Forum</a></li>
                </ul>
                
                </li>
                
                <li><a href="/adoptions">Contact</a></li>   
            </ul>
        </div>
      </div>
</nav>







     )
   }
 
}