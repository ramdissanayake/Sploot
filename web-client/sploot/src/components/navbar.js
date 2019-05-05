import React from 'react';
import '../custom.css'

import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
export default class NavBar extends React.Component {
   render(){
     return(
<nav class="navbar navbar-default black navbar-fixed  no-background bootsnav">
    <div class="container">      
        {/* <!-- Start Header Navigation --> */}
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                <i style={{color:'black'}}class="fa fa-bars"></i>
            </button>
            <a class="navbar-brand" href="/">
                <h2>Sploot!</h2>
                {/* <h5 style={{display:"inline"}}>Animal Rescue</h5> */}
                {/* <img src="images/brand/sploot.png" width="150px" class="" alt=""/> */}
            </a>
        </div>

        <div class="collapse navbar-collapse" id="navbar-menu">
            <ul class="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                {/* <Router> */}
                <li>
                  <a>
                    <Link to="/requests/new"class="btn btn-primary reportbtn">Report an Animal</Link>
                    
                  </a>
                </li>
                <li><Link to="/">Home</Link></li>   
                <li><Link to="/requests">Rescue</Link></li>                    
                <li><Link to="/adoptions">Adopt</Link></li>  
                {/* Sploot Dropdown Menu */}
                <li class="dropdown" data-toggle="dropdown">
                <a class="dropdown-toggle"  href="#">Sploot!</a>
                <ul class="dropdown-menu">
                  <li><Link to="#">Blog</Link></li>
                  <li><Link to="#">Shop</Link></li>
                  <li><Link to="#">Forum</Link></li>
                </ul>
                
                </li>
                
                <li><Link to="/adoptions">Contact</Link></li>  
                {/* </Router>  */}
            </ul>
        </div>
      </div>
</nav>







     )
   }
 
}